import { FaWhatsapp } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  const whatsappNumber = "1234567890"; // Replace with actual number

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Chat with us on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
