import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  const whatsappNumber = "1234567890"; // Replace with actual number
  
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Take the next step toward growth with our premium business solutions.
            Contact us today to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#e52630] text-white hover:bg-black hover:text-white transition duration-300 shadow-lg"
              >
                Book a Call
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
                className="border-2 border-[#e52630] text-[#e52630] hover:bg-[#e52630] hover:text-white transition duration-300"
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
