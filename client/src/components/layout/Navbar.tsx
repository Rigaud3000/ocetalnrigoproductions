import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logoPath from "/assets/logo.png";

interface NavItem {
  path?: string;
  label: string;
  submenu?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Home" },
  { 
    label: "Services",
    submenu: [
      { path: "/flyers-design", label: "Flyer Design" },
      { path: "/website-development", label: "Website Development" },
      { path: "/business-consulting", label: "Business Consulting" },
      { path: "/grant-filing", label: "Grant Assistance" }
    ]
  },
  {
    label: "Recruiting",
    submenu: [
      { path: "/agents-recruiting", label: "Agents Recruiting" },
      { path: "/job-applications", label: "Job Applications" }
    ]
  },
  { path: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path?: string) => path && location.startsWith(path);

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white transition-all duration-300",
      isScrolled ? "shadow-md" : "shadow-sm"
    )}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src={logoPath} 
            alt="Octela + Rigo Logo" 
            className="h-12 transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.path ? (
                <Link
                  href={item.path}
                  className={cn(
                    "px-3 py-2 font-medium transition-colors",
                    isActive(item.path) ? "text-[#e52630]" : "text-gray-700 hover:text-[#e52630]"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className={cn(
                    "px-3 py-2 font-medium flex items-center gap-1",
                    "text-gray-700 hover:text-[#e52630] transition-colors"
                  )}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown size={16} className="mt-0.5" />
                </button>
              )}

              {item.submenu && (
                <div className={cn(
                  "absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]",
                  "transition-all duration-300 origin-top",
                  activeDropdown === item.label ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path!}
                      className={cn(
                        "block px-4 py-2 text-sm hover:bg-gray-50",
                        isActive(subItem.path) ? "text-[#e52630]" : "text-gray-700"
                      )}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/contact">
            <Button 
              variant="default" 
              className="bg-[#e52630] hover:bg-[#c41f28] text-white shadow-md transition-all"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="mb-2">
                  {item.path ? (
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={cn(
                        "block py-2 px-3 rounded-lg",
                        isActive(item.path) ? "text-[#e52630] bg-red-50" : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="space-y-2">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50"
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={16} className={cn(
                          "transition-transform",
                          activeDropdown === item.label ? "rotate-180" : ""
                        )}/>
                      </button>

                      {activeDropdown === item.label && item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path!}
                          onClick={closeMenu}
                          className={cn(
                            "block py-2 px-5 text-sm rounded-lg",
                            isActive(subItem.path) ? "text-[#e52630] bg-red-50" : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/contact" className="block mt-4">
                <Button 
                  variant="default" 
                  className="w-full bg-[#e52630] hover:bg-[#c41f28] text-white shadow-md"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}