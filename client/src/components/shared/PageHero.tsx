import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage: string;
}

export default function PageHero({ title, description, bgImage }: PageHeroProps) {
  return (
    <section className="relative text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img 
          src={bgImage} 
          alt={`${title} background`} 
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
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight text-black">
            {title}
          </h1>
          <p className="text-lg opacity-90 text-black">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}