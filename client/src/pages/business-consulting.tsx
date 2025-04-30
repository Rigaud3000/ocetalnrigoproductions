import { motion } from "framer-motion";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/shared/ContactForm";
import FaqSection from "@/components/shared/FaqSection";
import { businessConsultingFaqs } from "@/data/pageFaqs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  BarChart2, 
  Target, 
  Users,
  PieChart,
  DollarSign
} from "lucide-react";

export default function BusinessConsulting() {
  const services = [
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Develop a clear roadmap for sustainable business growth and expansion."
    },
    {
      icon: BarChart2,
      title: "Market Analysis",
      description: "Gain insights into your market position and identify untapped opportunities."
    },
    {
      icon: Target,
      title: "Operational Efficiency",
      description: "Streamline processes to reduce costs and maximize productivity."
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Build high-performing teams aligned with your business objectives."
    },
    {
      icon: PieChart,
      title: "Financial Planning",
      description: "Create comprehensive financial strategies to optimize profitability."
    },
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description: "Identify and capitalize on new revenue streams to boost your bottom line."
    }
  ];

  return (
    <>
      <SeoHead
        title="Business Consulting Services | Strategy + Execution"
        description="Unlock new opportunities with expert business consulting. We'll help you scale smarter."
        keywords={["small business consulting", "growth strategy consulting", "marketing consultant", "business coaching"]}
        path="/business-consulting"
      />
      
      <PageHero
        title="Strategic Business Consulting"
        description="Expert guidance to help you scale smarter and achieve your business goals."
        bgImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
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
                Transform Your Business with Expert Consulting
              </h2>
              <p className="text-gray-600 mb-6">
                Our business consulting services provide you with strategic guidance and actionable 
                insights to overcome challenges, capitalize on opportunities, and achieve sustainable growth.
              </p>
              <p className="text-gray-600 mb-8">
                We take a holistic approach to understanding your business, identifying key areas for 
                improvement, and developing tailored strategies that align with your vision and goals.
              </p>
              
              <Link href="/contact">
                <Button className="bg-black text-white hover:bg-amber-500 transition duration-300">
                  Book a Free Strategy Call
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business Consulting" 
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
              Our Consulting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive business consulting designed to address your specific challenges and goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center mb-4">
                  <service.icon className="text-amber-500" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
                Get Started with a Free Consultation
              </h2>
              <p className="text-gray-600">
                Schedule a complimentary strategy session to discuss your business goals and challenges.
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
        faqs={businessConsultingFaqs}
      />
      
      <CTA />
    </>
  );
}
