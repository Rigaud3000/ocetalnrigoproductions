import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const whatsappNumber = "1234567890"; // Replace with actual number
  
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="Luxury office backdrop" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-black">
            Elevate Your Business with Premium Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            We help entrepreneurs and businesses thrive through bold design, expert recruiting, 
            professional websites, and grant support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-white hover:text-[#e52630] transition duration-300 shadow-lg">
                Contact Us
              </Button>
            </Link>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#e52630] transition duration-300"
              >
                <FaWhatsapp className="mr-2" size={16} /> WhatsApp Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
