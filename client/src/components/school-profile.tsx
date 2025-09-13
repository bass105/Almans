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

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-border card-hover h-full" data-testid="card-vision">
              <CardContent className="p-8">
                <div className="w-16 h-16 vibrant-btn rounded-2xl flex items-center justify-center mb-6 animate-sparkle">
                  <Eye className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {profileData.vision}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-border card-hover h-full" data-testid="card-mission">
              <CardContent className="p-8">
                <div className="w-16 h-16 vibrant-btn rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow">
                  <Target className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Misi</h3>
                <ul className="text-muted-foreground space-y-2">
                  {profileData.mission.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-primary w-4 h-4 mt-0.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-border card-hover h-full" data-testid="card-values">
              <CardContent className="p-8">
                <div className="w-16 h-16 vibrant-btn rounded-2xl flex items-center justify-center mb-6 animate-sparkle">
                  <Star className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Nilai-Nilai</h3>
                <div className="space-y-3">
                  {profileData.values.map((value, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${index % 2 === 0 ? 'bg-accent' : 'bg-primary'}`}></div>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
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
