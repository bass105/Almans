import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import schoolLogo from "@assets/generated_images/School_logo_design_2676cd42.png";

const navItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#berita", label: "Berita" },
  { href: "#galeri", label: "Galeri" },
  { href: "#akademik", label: "Akademik" },
  { href: "#guru-staf", label: "Guru & Staf" },
  { href: "#ekstrakurikuler", label: "Ekstrakurikuler" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled && "glass-effect"
      )}
      data-testid="navigation-main"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Centered and Symmetrical */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <img 
                src={schoolLogo} 
                alt="Logo AL-MANSHURIYAH" 
                className="w-full h-full object-contain bg-white/10 backdrop-blur-sm rounded-xl group-hover:scale-105 transition-transform duration-300"
                data-testid="img-school-logo"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-heading-6 gradient-text font-bold tracking-wide">AL-MANSHURIYAH</div>
              <div className="text-caption text-muted-foreground">Madrasah Aliyah</div>
            </div>
          </div>

          {/* Desktop Navigation - Symmetrical Layout */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative text-body-md text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 tracking-wide"
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 hover:w-full rounded-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Button for Desktop */}
          <div className="hidden lg:block">
            <Button
              size="sm"
              className="vibrant-btn text-primary-foreground font-semibold px-6 py-2 rounded-xl hover:scale-105 transition-all duration-300"
              onClick={() => document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-contact-nav"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-accent rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/20">
            <div className="px-4 pt-4 pb-6 space-y-2 glass-effect">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-body-md text-foreground hover:text-primary hover:bg-primary/10 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 tracking-wide"
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-primary/20">
                <Button
                  size="sm"
                  className="w-full vibrant-btn text-primary-foreground font-semibold py-3 rounded-xl"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid="button-contact-mobile"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}