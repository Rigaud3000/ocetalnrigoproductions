import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertChatMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import Stripe from "stripe";

// Check if Stripe secret key is present
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('Missing STRIPE_SECRET_KEY environment variable');
}

// Initialize Stripe with the secret key if it exists
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Here you would implement email sending functionality with nodeMailer
      // For now, we'll just return success
      
      res.status(201).json({
        success: true,
        message: "Your message has been received. We'll get back to you shortly!",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation failed",
          errors: validationError.message
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "An error occurred while processing your request"
        });
      }
    }
  });

  // API endpoint for AI assistant
  app.post("/api/ask", async (req: Request, res: Response) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== "string") {
        return res.status(400).json({
          success: false,
          message: "Message is required and must be a string"
        });
      }
      
      let aiResponse;
      
      // Use Hugging Face API if the key is available
      if (process.env.HUGGINGFACE_API_KEY) {
        try {
          aiResponse = await callHuggingFaceAPI(message);
        } catch (error) {
          console.error("Error calling Hugging Face API:", error);
          // Fallback to rule-based responses if API call fails
          aiResponse = generateAIResponse(message);
        }
      } else {
        // If API key is not available, use rule-based responses
        aiResponse = generateAIResponse(message);
      }
      
      // Store the chat message
      const chatMessage = await storage.createChatMessage({
        user_message: message,
        ai_response: aiResponse
      });
      
      res.status(200).json({
        success: true,
        data: {
          id: chatMessage.id,
          response: aiResponse
        }
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // Stripe payment route for one-time payments
  app.post("/api/create-payment-intent", async (req: Request, res: Response) => {
    try {
      if (!stripe) {
        return res.status(500).json({ 
          success: false, 
          message: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment." 
        });
      }

      const { amount } = req.body;
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
      });
      
      res.json({ 
        clientSecret: paymentIntent.client_secret,
        success: true
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false,
        message: "Error creating payment intent: " + error.message 
      });
    }
  });

  // If a paid subscription is required, use the endpoint below
  app.post('/api/get-or-create-subscription', async (req: Request, res: Response) => {
    try {
      if (!stripe) {
        return res.status(500).json({ 
          success: false, 
          message: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment." 
        });
      }

      if (!req.user || !req.isAuthenticated) {
        return res.status(401).json({
          success: false,
          message: "Authentication required"
        });
      }

      // This is just a placeholder since we don't have auth setup yet
      // In a real app, you'd get the user from the session
      const userId = 1;
      let user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }

      if (user.stripeSubscriptionId) {
        const subscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId);

        res.json({
          success: true,
          subscriptionId: subscription.id,
          clientSecret: subscription.latest_invoice?.payment_intent?.client_secret,
        });

        return;
      }
      
      // Create a new customer and subscription
      const customer = await stripe.customers.create({
        email: user.email || 'customer@example.com',
        name: user.username,
      });

      user = await storage.updateStripeCustomerId!(userId, customer.id);

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{
          // In a real app, you'd get this from env vars or the database
          price: 'price_1234567890',
        }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });

      await storage.updateUserStripeInfo!(userId, {
        customerId: customer.id, 
        subscriptionId: subscription.id
      });
  
      res.json({
        success: true,
        subscriptionId: subscription.id,
        clientSecret: subscription.latest_invoice?.payment_intent?.client_secret,
      });
    } catch (error: any) {
      return res.status(400).json({ 
        success: false,
        message: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Function to call Hugging Face API
async function callHuggingFaceAPI(message: string): Promise<string> {
  if (!process.env.HUGGINGFACE_API_KEY) {
    throw new Error("HUGGINGFACE_API_KEY is not defined");
  }

  const API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-base";
  
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`
      },
      body: JSON.stringify({
        inputs: `Answer this business question for Octela + Rigo business agency: ${message}`,
        parameters: {
          max_length: 200,
          temperature: 0.7
        }
      })
    });
    
    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    return result[0].generated_text || generateAIResponse(message);
  } catch (error) {
    console.error("Error calling Hugging Face API:", error);
    return generateAIResponse(message);
  }
}

// Simple AI response generator function for demonstration
// In a real implementation, this would be replaced by a call to the Hugging Face API
function generateAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  // Business-related keyword matching
  if (message.includes("flyer") || message.includes("design")) {
    return "Our flyer design services provide professional, eye-catching materials that help your business stand out. We use premium design elements and focus on conversion-oriented layouts. Would you like to know more about our design process or pricing?";
  }
  
  if (message.includes("website") || message.includes("web")) {
    return "Our website development team creates beautiful, responsive websites optimized for both user experience and conversion. We focus on fast loading times and mobile-friendly designs. Would you like to discuss your specific website needs?";
  }
  
  if (message.includes("consult") || message.includes("business") || message.includes("strategy")) {
    return "Our business consulting services are tailored to help you scale effectively. We analyze your current operations and market position to develop actionable growth strategies. Would you like to schedule a free initial consultation?";
  }
  
  if (message.includes("recruit") || message.includes("hire") || message.includes("agents")) {
    return "Our recruiting services help you find qualified cold-callers and customer service representatives quickly. We handle screening and initial interviews to save you time. Can I provide more details about our recruiting process?";
  }
  
  if (message.includes("job") || message.includes("resume") || message.includes("application")) {
    return "Our job application assistance helps you craft compelling resumes and apply effectively to positions. We focus on highlighting your strengths and matching you with suitable opportunities. Would you like more information about this service?";
  }
  
  if (message.includes("grant") || message.includes("funding")) {
    return "Our grant filing services help businesses and nonprofits secure funding. We identify opportunities, prepare applications, and manage the submission process. Would you like to explore if your organization qualifies for grant funding?";
  }
  
  if (message.includes("price") || message.includes("cost") || message.includes("rates")) {
    return "Our pricing varies based on project scope and requirements. We offer competitive rates and flexible packages to accommodate different budgets. Would you like to receive a customized quote for a specific service?";
  }
  
  if (message.includes("contact") || message.includes("speak") || message.includes("talk")) {
    return "You can reach our team by email at octelanrigo@gmail.com, by phone at 786 495 5615, or through our contact form on the website. When would be a convenient time for a call or consultation?";
  }
  
  // Default response for other queries
  return "Thank you for your message. As your AI assistant, I can provide information about Octela + Rigo's services including flyer design, website development, business consulting, recruiting, job application help, and grant filing. How can I assist you specifically today?";
}
