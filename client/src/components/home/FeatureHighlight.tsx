import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Zap, Handshake, Target } from "lucide-react";

export default function FeatureHighlight() {
  const features = [
    {
      icon: Check,
      title: "Premium Quality",
      description: "We deliver exceptional results that elevate your brand and business presence in the market."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Our efficient processes ensure you get what you need when you need it, without sacrificing quality."
    },
    {
      icon: Handshake,
      title: "Dedicated Support",
      description: "Our team provides personalized attention and ongoing support throughout your journey with us."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "We measure our success by your success, focusing on delivering real business outcomes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Business Team Meeting" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
              Why Choose Octela + Rigo?
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center text-amber-500">
                      <feature.icon size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Link href="/contact">
              <Button 
                className="mt-8 bg-black text-white hover:bg-amber-500 transition duration-300"
              >
                Book a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
