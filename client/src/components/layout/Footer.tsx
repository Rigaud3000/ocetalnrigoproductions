import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/public/assets/logo-with-tagline.png" 
                alt="Octela + Rigo - Built to Elevate. Powered by Vision." 
                className="h-24"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Premium business solutions that help entrepreneurs and companies thrive in today's market.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/flyers-design" className="text-gray-400 hover:text-white transition">
                  Flyer Design
                </Link>
              </li>
              <li>
                <Link href="/website-development" className="text-gray-400 hover:text-white transition">
                  Website Creations
                </Link>
              </li>
              <li>
                <Link href="/business-consulting" className="text-gray-400 hover:text-white transition">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="/recruiting-agents" className="text-gray-400 hover:text-white transition">
                  Agents Recruiting
                </Link>
              </li>
              <li>
                <Link href="/job-applications" className="text-gray-400 hover:text-white transition">
                  Job Application Help
                </Link>
              </li>
              <li>
                <Link href="/grant-filing" className="text-gray-400 hover:text-white transition">
                  Grant Filing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="text-[#e52630] mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">octelanrigo@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-[#e52630] mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">(571) 248-1750 / (786) 495-5615</span>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-[#e52630] mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">WhatsApp: (786) 495-5615</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#e52630] mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  123 Business Avenue, Suite 456<br />New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Octela + Rigo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
