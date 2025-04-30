import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  service: {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    path: string;
  };
}

export default function ServiceCard({ service }: ServiceProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden border border-[#2563eb] transition duration-300 h-full"
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={service.imageSrc} 
          alt={service.title} 
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link href={service.path}>
          <span className="inline-block text-[#e52630] font-medium hover:underline flex items-center cursor-pointer">
            Learn More <ArrowRight className="ml-1" size={16} />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
