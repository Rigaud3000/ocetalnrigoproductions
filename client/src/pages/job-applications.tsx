import { motion } from "framer-motion";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/shared/ContactForm";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Users, 
  Edit, 
  Search,
  CheckCircle,
  Briefcase
} from "lucide-react";

export default function JobApplications() {
  const services = [
    {
      icon: FileText,
      title: "Resume Optimization",
      description: "Professional resume editing to highlight your strengths and catch employers' attention."
    },
    {
      icon: Edit,
      title: "Cover Letter Writing",
      description: "Compelling cover letters customized for specific positions and companies."
    },
    {
      icon: Search,
      title: "Job Search Strategy",
      description: "Targeted job search plans to find opportunities matching your skills and goals."
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Mock interviews and coaching to help you present yourself confidently."
    },
    {
      icon: CheckCircle,
      title: "Application Submission",
      description: "We handle the entire application process on your behalf, saving you time and effort."
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Professional advice on career paths, skill development, and advancement opportunities."
    }
  ];

  return (
    <>
      <SeoHead
        title="Job Application Assistance | Resume + Submissions"
        description="Let us help you apply, polish your resume, and land that interview."
        keywords={["job application help", "resume help", "apply to jobs", "job submission services"]}
        path="/job-applications"
      />
      
      <PageHero
        title="Job Application Help"
        description="Professional assistance to help you secure your next career opportunity."
        bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
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
                Let Us Help You Land Your Dream Job
              </h2>
              <p className="text-gray-600 mb-6">
                The job application process can be overwhelming and time-consuming. Our professional 
                team takes the stress out of job hunting by handling everything from resume optimization 
                to application submissions.
              </p>
              <p className="text-gray-600 mb-8">
                We work closely with you to understand your career goals, skills, and preferences, 
                then develop a tailored strategy to help you secure interviews and job offers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-black text-white hover:bg-amber-500 transition duration-300">
                    Get Started
                  </Button>
                </Link>
                <Button variant="outline" className="border-black hover:bg-gray-100">
                  Upload Resume
                </Button>
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
                src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Job Application Help" 
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
              Our Job Application Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support to enhance your job search and maximize your chances of success.
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
                Ready to Advance Your Career?
              </h2>
              <p className="text-gray-600">
                Contact us today to discuss how we can help you with your job search and applications.
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
