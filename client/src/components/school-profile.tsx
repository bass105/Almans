import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Star, Check } from "lucide-react";

const profileData = {
  vision: "Menjadi madrasah unggul yang menghasilkan lulusan beriman, bertakwa, berakhlaq mulia, dan berprestasi dalam ilmu pengetahuan dan teknologi.",
  mission: [
    "Menyelenggarakan pendidikan Islam yang berkualitas",
    "Mengembangkan potensi siswa secara optimal",
    "Membentuk karakter Islami yang kuat"
  ],
  values: ["Integritas", "Inovasi", "Keunggulan", "Kekeluargaan"],
  history: [
    {
      year: "1995",
      title: "Pendirian Madrasah",
      description: "Madrasah Aliyah AL-MANSHURIYAH didirikan dengan 50 siswa pertama dan 8 guru pendiri."
    },
    {
      year: "2005",
      title: "Akreditasi A",
      description: "Memperoleh akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah."
    },
    {
      year: "2015",
      title: "Modernisasi Fasilitas",
      description: "Pembangunan laboratorium komputer, sains, dan perpustakaan digital modern."
    },
    {
      year: "2023",
      title: "Era Digital",
      description: "Implementasi sistem pembelajaran digital dan smart classroom di seluruh kelas."
    }
  ]
};

export default function SchoolProfile() {
  return (
    <section id="profil" className="py-24 lg:py-32 bg-card/50 relative overflow-hidden">
      {/* Cyberpunk background effects */}
      <div className="cyberpunk-neon-grid"></div>
      <div className="cyberpunk-lines"></div>
      <div className="neon-moving-circles"></div>
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Profil</span> Sekolah
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Madrasah Aliyah AL-MANSHURIYAH berdiri sejak 1995 dengan komitmen menciptakan lingkungan pendidikan Islam yang modern dan berkualitas.
          </p>
        </motion.div>

        {/* Enhanced Vision, Mission & Values Section with Perfect Symmetry */}
        <div className="space-y-16 mb-20">
          {/* Vision & Mission Row */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-border card-hover h-full group relative overflow-hidden" data-testid="card-vision">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 vibrant-btn rounded-3xl flex items-center justify-center animate-sparkle group-hover:scale-110 transition-transform duration-300">
                      <Eye className="text-primary-foreground w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold gradient-text">Visi</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {profileData.vision}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-border card-hover h-full group relative overflow-hidden" data-testid="card-mission">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 vibrant-btn rounded-3xl flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                      <Target className="text-primary-foreground w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold gradient-text">Misi</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-2"></div>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-4">
                    {profileData.mission.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start group/item"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-primary/30 transition-colors duration-300">
                          <Check className="text-primary w-4 h-4" />
                        </div>
                        <span className="text-lg leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values Section - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-border card-hover mx-auto max-w-4xl group relative overflow-hidden" data-testid="card-values">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-10">
                  <div className="w-24 h-24 vibrant-btn rounded-full flex items-center justify-center mx-auto mb-6 animate-sparkle group-hover:scale-110 transition-transform duration-300">
                    <Star className="text-primary-foreground w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-bold gradient-text mb-4">Nilai-Nilai Kami</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {profileData.values.map((value, index) => (
                    <motion.div 
                      key={index} 
                      className="group/value relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover/value:scale-105">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover/value:from-primary/30 group-hover/value:to-accent/30 transition-all duration-300">
                          <Star className="text-primary w-6 h-6" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">{value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* History Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-primary/20 card-hover" data-testid="card-history">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className="gradient-text">Sejarah</span> Perjalanan
              </h3>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
                
                <div className="space-y-12">
                  {profileData.history.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start"
                      data-testid={`timeline-item-${item.year}`}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold relative z-10 animate-pulse-glow ${index % 2 === 0 ? 'vibrant-btn' : 'bg-gradient-to-br from-accent to-primary text-primary-foreground'}`}>
                        {item.year}
                      </div>
                      <div className="ml-8 flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
