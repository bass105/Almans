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
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={schoolLogo} 
                alt="Logo AL-MANSHURIYAH" 
                className="w-full h-full object-contain bg-white/10 backdrop-blur-sm rounded-lg"
                data-testid="img-school-logo"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg gradient-text">AL-MANSHURIYAH</div>
              <div className="text-xs text-muted-foreground">Madrasah Aliyah</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105 px-2 py-1 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
