import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import schoolProfileImage from "@assets/generated_images/school_profile_photo.jpg";

export default function HeroSection() {
  const stats = [
    { value: "850+", label: "Siswa Aktif" },
    { value: "65+", label: "Tenaga Pendidik" },
    { value: "120+", label: "Prestasi" },
  ];

  return (
    <section id="beranda" className="min-h-screen hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full animate-float animate-pulse-glow blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-lg animate-float blur-sm" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/40 rounded-full animate-float animate-sparkle blur-sm" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full animate-float blur-sm" style={{ animationDelay: "6s" }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Madrasah Aliyah</span>
                <br />
                <div className="flex items-center gap-6 flex-wrap">
                  <span className="text-foreground">AL-MANSHURIYAH</span>
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden ring-4 ring-primary/30 flex-shrink-0">
                    <img 
                      src={schoolProfileImage} 
                      alt="Profil Madrasah Aliyah AL-MANSHURIYAH"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      data-testid="img-school-profile"
                    />
                  </div>
                </div>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Membangun generasi Islami yang unggul dalam ilmu pengetahuan, teknologi, dan akhlaq mulia untuk masa depan yang gemilang.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="vibrant-btn text-primary-foreground font-bold text-lg px-8 py-4"
                onClick={() => document.querySelector("#profil")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-explore-school"
              >
                Jelajahi Sekolah
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm"
                onClick={() => document.querySelector("#prestasi")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-view-achievements"
              >
                Lihat Prestasi
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden glass-effect card-hover">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Modern Islamic school building with contemporary architecture"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  data-testid="img-school-building"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 vibrant-btn rounded-2xl flex items-center justify-center animate-sparkle">
                <i className="fas fa-graduation-cap text-accent-foreground text-2xl"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
