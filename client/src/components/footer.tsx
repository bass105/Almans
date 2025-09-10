import { Building2, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil Sekolah" },
  { href: "#akademik", label: "Program Akademik" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#kontak", label: "Kontak" }
];

const socialLinks = [
  { icon: "fab fa-facebook", href: "#", color: "primary" },
  { icon: "fab fa-instagram", href: "#", color: "accent" },
  { icon: "fab fa-youtube", href: "#", color: "primary" },
  { icon: "fab fa-whatsapp", href: "#", color: "accent" }
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="text-primary-foreground w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">AL-MANSHURIYAH</div>
                <div className="text-sm text-muted-foreground">Madrasah Aliyah</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-4">
              Membangun generasi Islami yang unggul dalam ilmu pengetahuan, teknologi, dan akhlaq mulia untuk masa depan yang gemilang.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-muted-foreground transition-colors duration-300 hover:scale-110 transform ${
                    social.color === 'primary' ? 'hover:text-primary' : 'hover:text-accent'
                  }`}
                  data-testid={`footer-social-${index}`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontak</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                (021) 1234-5678
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-2" />
                info@almanshuriyah.sch.id
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mr-2 mt-1" />
                <span>Jl. Pendidikan Raya No. 123<br />Jakarta Selatan 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Madrasah Aliyah AL-MANSHURIYAH. Semua hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
