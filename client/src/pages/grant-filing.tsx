import { motion } from "framer-motion";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/shared/ContactForm";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  FileText, 
  CheckCircle, 
  Clock,
  BarChart2,
  Calendar
} from "lucide-react";

export default function GrantFiling() {
  const services = [
    {
      icon: FileText,
      title: "Grant Research",
      description: "We identify suitable grant opportunities aligned with your business or nonprofit goals."
    },
    {
      icon: DollarSign,
      title: "Application Preparation",
      description: "Professional preparation of all required documentation and application materials."
    },
    {
      icon: CheckCircle,
      title: "Submission Management",
      description: "We handle the entire submission process, ensuring all requirements are met."
    },
    {
      icon: Clock,
      title: "Deadline Tracking",
      description: "Careful monitoring of all important dates and submission deadlines."
    },
    {
      icon: BarChart2,
      title: "Budget Development",
      description: "Creation of detailed budgets that align with grant requirements and project goals."
    },
    {
      icon: Calendar,
      title: "Follow-up Support",
      description: "Ongoing assistance with post-submission inquiries and reporting requirements."
    }
  ];

  const grantTypes = [
    "Small Business Innovation Research (SBIR) Grants",
    "Economic Development Grants",
    "Nonprofit Organization Grants",
    "Research and Development Grants",
    "Community Development Grants",
    "Workforce Development Grants",
    "Minority Business Grants",
    "Women-Owned Business Grants",
    "Technology Innovation Grants"
  ];

  return (
    <>
      <SeoHead
        title="Grant Filing Services | Business Funding Support"
        description="We help entrepreneurs and nonprofits file and secure grants. Save time and maximize your chances."
        keywords={["grant filing services", "business grants", "nonprofit grants", "small business funding help"]}
        path="/grant-filing"
      />
      
      <PageHero
        title="Grant Application Filing"
        description="Expert assistance to help you secure funding for your business or nonprofit organization."
        bgImage="https://images.unsplash.com/photo-1565514020179-026b92b4c8b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
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
                Unlock Funding Opportunities for Your Organization
              </h2>
              <p className="text-gray-600 mb-6">
                Navigating the grant application process can be complex and time-consuming. 
                Our expert team helps businesses and nonprofits identify, prepare, and submit 
                grant applications that stand out to funding organizations.
              </p>
              <p className="text-gray-600 mb-8">
                We've helped clients secure millions in grant funding across various industries and sectors. 
                Our approach combines thorough research, compelling writing, and meticulous attention to detail.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-black text-white hover:bg-amber-500 transition duration-300">
                    Apply for a Grant
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-black hover:bg-gray-100">
                    Speak to an Advisor
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
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Grant Filing" 
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
              Our Grant Filing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support throughout the entire grant application process.
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
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Grant Types We Work With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We assist with a wide range of grant opportunities across different sectors.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {grantTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{type}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-gray-50">
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
                Ready to Secure Funding?
              </h2>
              <p className="text-gray-600">
                Contact us today to discuss your funding needs and eligibility for grant opportunities.
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
      
      <CTA />
    </>
  );
}
