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
      
      {/* Enhanced floating geometric shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full animate-float animate-pulse-glow blur-lg"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-accent/40 to-primary/30 rounded-2xl animate-float blur-lg rotate-45" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-primary/50 to-accent/40 rounded-full animate-float animate-sparkle blur-lg" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bottom-20 right-10 w-[4.5rem] h-[4.5rem] bg-gradient-to-br from-primary to-accent rounded-full animate-float blur-lg" style={{ animationDelay: "6s" }}></div>
      
      {/* Additional floating particles */}
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent/60 rounded-full animate-float opacity-70" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/60 rounded-full animate-float opacity-70" style={{ animationDelay: "3s" }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full animate-float opacity-60" style={{ animationDelay: "5s" }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-8xl font-black leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span 
                  className="gradient-text inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Madrasah Aliyah
                </motion.span>
                <br />
                <div className="flex items-center gap-6 flex-wrap">
                  <span className="text-foreground">AL-MANSHURIYAH</span>
                  <motion.div 
                    className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden ring-4 ring-primary/40 flex-shrink-0 relative group shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Outer glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <img 
                      src={schoolProfileImage} 
                      alt="Profil Madrasah Aliyah AL-MANSHURIYAH"
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110 relative z-10 rounded-2xl"
                      data-testid="img-school-profile"
                    />
                    
                    {/* Inner overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    {/* Sparkle effect */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-accent rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                  </motion.div>
                </div>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-foreground/80 max-w-xl leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Membangun generasi Islami yang unggul dalam ilmu pengetahuan, teknologi, dan akhlaq mulia untuk masa depan yang gemilang.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="relative overflow-hidden vibrant-btn text-primary-foreground font-bold text-xl px-10 py-5 rounded-2xl group"
                  onClick={() => document.querySelector("#profil")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-explore-school"
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Jelajahi Sekolah
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative border-2 border-primary/60 hover:border-primary hover:bg-primary/15 text-foreground font-bold px-10 py-5 text-xl rounded-2xl transition-all duration-300 backdrop-blur-lg group overflow-hidden"
                  onClick={() => document.querySelector("#prestasi")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-view-achievements"
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10">Lihat Prestasi</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundSize: '200% 200%'
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
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
