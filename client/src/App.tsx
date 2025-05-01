import { Routes, Route } from "react-router-dom";

// Pages
import Home from "@/pages/home";
import FlyersDesign from "@/pages/flyers-design";
import WebsiteDevelopment from "@/pages/website-development";
import BusinessConsulting from "@/pages/business-consulting";
import AgentsRecruiting from "@/pages/AgentsRecruiting";
import JobApplications from "@/pages/job-applications";
import GrantFiling from "@/pages/grant-filing";
import Contact from "@/pages/contact";
import Checkout from "@/pages/checkout";
import CryptoPayment from "@/pages/crypto-payment";
import ThankYou from "@/pages/ThankYou";
import NotFound from "@/pages/not-found";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AIChatbot from "@/components/shared/AIChatbot";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatProvider } from "@/contexts/chatContext";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flyers-design" element={<FlyersDesign />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/business-consulting" element={<BusinessConsulting />} />
      <Route path="/agents-recruiting" element={<AgentsRecruiting />} />
      <Route path="/job-applications" element={<JobApplications />} />
      <Route path="/grant-filing" element={<GrantFiling />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/crypto-payment" element={<CryptoPayment />} />
      <Route path="/Thankyou" element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <ChatProvider>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          </main>
          <Footer />
          <WhatsAppButton />
          <AIChatbot />
          <Toaster />
        </div>
      </TooltipProvider>
    </ChatProvider>
  );
}

export default App;
