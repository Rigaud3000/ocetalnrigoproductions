import { motion } from "framer-motion";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  MessageSquare
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us", 
      details: "octelanrigo@gmail.com",
      link: "mailto:octelanrigo@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(571) 248-1750 / (786) 495-5615",
      link: "tel:+15712481750"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: "(786) 495-5615",
      link: "https://wa.me/17864955615"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business Avenue, Suite 456, New York, NY 10001",
      link: "https://maps.google.com/?q=123+Business+Avenue,+New+York,+NY+10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday-Friday: 9am-6pm EST, Saturday: By appointment",
      link: ""
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Click on our AI Assistant icon on any page",
      link: ""
    }
  ];

  return (
    <>
      <SeoHead
        title="Contact Octela + Rigo | Let's Work Together"
        description="Reach us by email, WhatsApp, or contact form. Fast replies and professional support."
        keywords={["contact business agency", "talk to a consultant", "message a design agency"]}
        path="/contact"
      />
      
      <PageHero
        title="Let's Connect"
        description="Reach out to discuss how we can help your business grow with our premium solutions."
        bgImage="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you have about our services, pricing, or how we can help your business grow. Fill out the form or use one of our contact methods below to start the conversation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center mr-3">
                        {item.icon === FaWhatsapp ? (
                          <FaWhatsapp className="text-amber-500" size={20} />
                        ) : (
                          <item.icon className="text-amber-500" size={20} />
                        )}
                      </div>
                      <h3 className="font-serif font-bold">{item.title}</h3>
                    </div>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-amber-500 transition pl-14"
                        target={item.link.startsWith('http') ? "_blank" : undefined}
                        rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 pl-14">{item.details}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-3/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Find quick answers to common questions about working with us.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold mb-3">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly.</p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-600">Yes, we offer a complimentary 30-minute consultation to discuss your business needs and how our services can help you achieve your goals.</p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-bold mb-3">Can you work with clients internationally?</h3>
              <p className="text-gray-600">Absolutely! We work with clients worldwide and can accommodate different time zones for meetings and communication.</p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif font-bold mb-3">How do I get started with your services?</h3>
              <p className="text-gray-600">Simply fill out our contact form, send us an email, or give us a call. We'll schedule an initial consultation to understand your needs and develop a tailored proposal.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Take the first step toward elevating your business with our premium solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-amber-500 text-black hover:bg-white transition duration-300 shadow-lg"
                >
                  <FaWhatsapp className="mr-2" size={18} /> Start Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1696008055397!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Octela + Rigo Office Location"
                aria-label="Map showing Octela + Rigo office location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
