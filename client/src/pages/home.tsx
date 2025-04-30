import SeoHead from "@/components/shared/SeoHead";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeatureHighlight from "@/components/home/FeatureHighlight";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <SeoHead
        title="Octela + Rigo | Premium Business Solutions"
        description="We help entrepreneurs and businesses thrive through bold design, expert recruiting, professional websites, and grant support."
        keywords={["business growth agency", "flyer design services", "website agency", "business consulting", "customer service recruiting"]}
        path="/"
      />
      
      <Hero />
      <Services />
      <FeatureHighlight />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
