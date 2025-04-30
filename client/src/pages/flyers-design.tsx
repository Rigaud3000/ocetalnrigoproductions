import { motion } from "framer-motion";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/shared/ContactForm";
import FaqSection from "@/components/shared/FaqSection";
import { flyersDesignFaqs } from "@/data/pageFaqs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function FlyersDesign() {
  const benefits = [
    "Eye-catching professional designs",
    "Quick turnaround times",
    "Custom branding integration",
    "Conversion-focused layouts",
    "High-quality print-ready files",
    "Unlimited revisions until satisfied"
  ];

  const portfolioItems = [
    {
      title: "Corporate Event Flyer",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Product Launch Flyer",
      image: "https://images.unsplash.com/photo-1638613139341-8b999af7ec2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Promotional Sale Flyer",
      image: "https://images.unsplash.com/photo-1635405446897-aa64be1baf05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <>
      <SeoHead
        title="Custom Flyer Design Services | Octela + Rigo"
        description="Eye-catching business flyers designed to convert and elevate your brand. Fast turnaround and premium visuals."
        keywords={["flyer design services", "business flyers", "marketing flyer design", "custom flyer design", "flyer design agency"]}
        path="/flyers-design"
      />

      <PageHero
        title="Professional Business Flyer Design"
        description="Eye-catching designs that convert prospects and elevate your brand identity."
        bgImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />

      {/* Benefits Section */}
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
                Stand Out with Premium Flyer Designs
              </h2>
              <p className="text-gray-600 mb-6">
                In today's competitive market, a professionally designed flyer can make all the difference. 
                Our expert designers create eye-catching, conversion-focused flyers that elevate your brand 
                and deliver your message effectively.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you need promotional materials, event announcements, or product showcases, 
                we deliver premium designs with quick turnaround times to meet your business needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="text-amber-500 mt-1 flex-shrink-0" size={18} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-black text-white hover:bg-amber-500 transition duration-300">
                    Get a Quote
                  </Button>
                </Link>
                <Button variant="outline" className="border-black hover:bg-gray-100">
                  View Examples
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
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Professional flyer design example showing modern layout and branding"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              Our Flyer Design Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out some of our recent flyer designs that have helped businesses increase engagement and drive conversions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={item.image} 
                  alt={`Example of ${item.title}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="p-4 bg-white">
                  <h3 className="font-serif font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                Ready to Create Your Perfect Flyer?
              </h2>
              <p className="text-gray-600">
                Fill out the form below to discuss your project and get a free quote.
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
        faqs={flyersDesignFaqs}
      />

      <CTA />
    </>
  );
}