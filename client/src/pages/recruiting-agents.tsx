import { motion } from "framer-motion";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/shared/ContactForm";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  UserCheck, 
  Search, 
  Clock, 
  Award,
  Users,
  PhoneCall
} from "lucide-react";

export default function RecruitingAgents() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Pre-screened Talent",
      description: "We thoroughly vet all candidates before presenting them to you."
    },
    {
      icon: Search,
      title: "Targeted Recruiting",
      description: "We find candidates with specific skills suited to your business needs."
    },
    {
      icon: Clock,
      title: "Fast Deployment",
      description: "Get qualified agents ready to work within days, not weeks."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Ongoing performance monitoring to ensure agent effectiveness."
    },
    {
      icon: Users,
      title: "Flexible Scaling",
      description: "Easily scale your team up or down based on business demands."
    },
    {
      icon: PhoneCall,
      title: "Specialized Skills",
      description: "Agents trained in cold-calling, customer service, and sales techniques."
    }
  ];

  return (
    <>
      <SeoHead
        title="Sales + CSR Agent Recruiting | Octela + Rigo"
        description="Need qualified cold-callers or CSR reps? We recruit, screen, and deliver reliable agents fast."
        keywords={["sales agent recruiting", "cold calling agents", "hire virtual reps", "CSR staffing agency"]}
        path="/recruiting-agents"
      />
      
      <PageHero
        title="Agent Recruiting Services"
        description="We find, screen, and deliver top-performing sales and customer service representatives for your business."
        bgImage="https://images.unsplash.com/photo-1557425529-a2a3626b3492?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
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
                Build Your Dream Sales and Support Team
              </h2>
              <p className="text-gray-600 mb-6">
                Finding qualified sales representatives and customer service agents can be time-consuming and challenging. 
                Our recruiting service takes the hassle out of hiring by delivering pre-screened, 
                qualified candidates ready to hit the ground running.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you need cold-callers, inside sales representatives, or customer support agents, 
                we identify candidates with the right skills, experience, and attitude to represent your business effectively.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-black text-white hover:bg-amber-500 transition duration-300">
                    Hire Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-black hover:bg-gray-100">
                    Talk to Our Team
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
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sales Team Recruiting" 
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
              The Octela + Rigo Recruiting Advantage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our specialized recruiting process ensures you get top-quality candidates who can drive results for your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center mb-4">
                  <benefit.icon className="text-amber-500" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
                Ready to Build Your Team?
              </h2>
              <p className="text-gray-600">
                Tell us about your needs, and we'll find the perfect candidates for your business.
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
