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
      
      {/* Cyberpunk background effects */}
      <div className="cyberpunk-neon-grid opacity-60"></div>
      <div className="cyberpunk-lines"></div>
      <div className="neon-moving-circles"></div>
      
      {/* Enhanced floating geometric shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full animate-float animate-pulse-glow blur-lg"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-accent/40 to-primary/30 rounded-2xl animate-float blur-lg rotate-45" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-primary/50 to-accent/40 rounded-full animate-float animate-sparkle blur-lg" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bottom-20 right-10 w-[4.5rem] h-[4.5rem] bg-gradient-to-br from-primary to-accent rounded-full animate-float blur-lg" style={{ animationDelay: "6s" }}></div>
      
      {/* Additional floating particles */}
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent/60 rounded-full animate-float opacity-70" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/60 rounded-full animate-float opacity-70" style={{ animationDelay: "3s" }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full animate-float opacity-60" style={{ animationDelay: "5s" }}></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 pt-24">
        <div className="relative min-h-screen flex items-center">
          {/* Background Image with Symmetrical Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 z-10" />
            <img 
              src={schoolProfileImage} 
              alt="Profil Madrasah Aliyah AL-MANSHURIYAH"
              className="w-full h-full object-cover object-center lg:object-[65%_center]"
              data-testid="img-school-profile"
            />
            {/* Additional overlay for better balance */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/50 z-[5]" />
          </div>

          {/* Content - Symmetrical Layout */}
          <div className="relative z-20 w-full">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left Side - Large Text (3 columns) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="space-y-6">
                  <motion.h1 
                    className="text-display-lg sm:text-display-lg md:text-display-xl lg:text-display-xl xl:text-display-xl leading-none tracking-tighter"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <div className="text-foreground mb-6 font-black">MADRASAH</div>
                    <div className="text-foreground mb-6 font-black">ALIYAH</div>
                    <motion.div 
                      className="gradient-text font-black"
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
                      AL-MANSHURIYAH
                    </motion.div>
                  </motion.h1>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <div className="text-heading-4 font-bold text-primary tracking-wide">Islamic High School</div>
                    <div className="text-body-lg text-muted-foreground italic leading-relaxed max-w-2xl">"Membangun generasi Islami yang unggul dalam ilmu pengetahuan, teknologi, dan akhlaq mulia"</div>
                  </motion.div>
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
                      className="relative overflow-hidden vibrant-btn text-primary-foreground text-heading-6 px-12 py-6 rounded-2xl group"
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
                      className="relative border-2 border-primary/60 hover:border-primary hover:bg-primary/15 text-foreground text-heading-6 px-12 py-6 rounded-2xl transition-all duration-300 backdrop-blur-lg group overflow-hidden"
                      onClick={() => document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" })}
                      data-testid="button-contact-us"
                    >
                      <span className="relative z-10">Hubungi Kami</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Right Side - Stats and Info (2 columns) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-span-2 flex justify-center lg:justify-end"
              >
                <div className="glass-effect rounded-3xl p-8 lg:p-10 backdrop-blur-lg border border-primary/20 shadow-2xl w-full max-w-md">
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-heading-4 font-bold gradient-text mb-3">Profil Sekolah</h3>
                      <p className="text-body-md text-muted-foreground">Sejak 1995</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 text-center">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                          className="space-y-2 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/20 transition-all duration-300"
                          data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className="text-heading-2 font-black gradient-text">{stat.value}</div>
                          <div className="text-body-sm text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}