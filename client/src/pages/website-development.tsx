import { motion } from "framer-motion";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/shared/ContactForm";
import FaqSection from "@/components/shared/FaqSection";
import { websiteDevelopmentFaqs } from "@/data/pageFaqs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  SmartphoneIcon, 
  Search, 
  Zap, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

export default function WebsiteDevelopment() {
  const features = [
    {
      icon: Laptop,
      title: "Responsive Design",
      description: "Websites that look perfect on any device - desktop, tablet, or mobile."
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed to keep visitors engaged and improve search rankings."
    },
    {
      icon: Search,
      title: "SEO Friendly",
      description: "Built with search engines in mind to help your business get found online."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description: "We implement the latest security standards to keep your website protected."
    },
    {
      icon: SmartphoneIcon,
      title: "User-Friendly",
      description: "Intuitive navigation and clean design for the best user experience."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "We deliver beautiful websites faster than traditional development agencies."
    }
  ];

  return (
    <>
      <SeoHead
        title="Website Development Services | Octela + Rigo"
        description="Fast, beautiful websites tailored for entrepreneurs and businesses. Fully responsive and optimized for conversion."
        keywords={["website development agency", "business website builder", "small business websites", "affordable web design"]}
        path="/website-development"
      />
      
      <PageHero
        title="Custom Website Development"
        description="Beautiful, responsive websites built to convert visitors and grow your business."
        bgImage="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Websites That Drive Business Growth
              </h2>
              <p className="text-gray-600 mb-6">
                In today's digital world, your website is often the first interaction customers have with your business. 
                We create stunning, functional websites that not only look professional but also convert visitors into customers.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you need a simple business site, a portfolio, or a complex e-commerce platform, 
                our team delivers custom solutions tailored to your specific business goals.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-black text-white hover:bg-amber-500 transition duration-300">
                    Start My Website
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-black hover:bg-gray-100">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Website Development" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              The Octela + Rigo Website Advantage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our websites are built with premium technology, designed for performance, and focused on your business goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center mb-4">
                  <feature.icon className="text-amber-500" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Ready to Build Your Dream Website?
              </h2>
              <p className="text-gray-600">
                Fill out the form below to get started with your website project.
              </p>
            </motion.div>
            
            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <FaqSection 
        title="Frequently Asked Questions"
        faqs={websiteDevelopmentFaqs}
      />
      
      <CTA />
    </>
  );
}
