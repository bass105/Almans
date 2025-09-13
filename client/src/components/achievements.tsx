import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Globe, Star, GraduationCap, Atom, Languages, Users, Palette, Mic, User } from "lucide-react";

const achievementStats = [
  {
    icon: Trophy,
    value: "120+",
    label: "Total Prestasi",
    color: "primary"
  },
  {
    icon: Medal,
    value: "45+",
    label: "Tingkat Nasional",
    color: "accent"
  },
  {
    icon: Globe,
    value: "12+",
    label: "Internasional",
    color: "primary"
  },
  {
    icon: Star,
    value: "98%",
    label: "Tingkat Kelulusan",
    color: "accent"
  }
];

const academicAchievements = [
  {
    icon: GraduationCap,
    title: "Olimpiade Sains Nasional",
    description: "Juara 1 Matematika - Ahmad Fauzi (2023)",
    color: "primary"
  },
  {
    icon: Atom,
    title: "Kompetisi Fisika",
    description: "Juara 2 Tingkat Provinsi - Siti Nurhaliza (2023)",
    color: "accent"
  },
  {
    icon: Languages,
    title: "English Debate",
    description: "Best Speaker - Muhammad Ridho (2023)",
    color: "primary"
  }
];

const nonAcademicAchievements = [
  {
    icon: Users,
    title: "Atletik Nasional",
    description: "Juara 3 Lari 1500m - Fatimah Azzahra (2023)",
    color: "accent"
  },
  {
    icon: Palette,
    title: "Seni Kaligrafi",
    description: "Juara 1 Tingkat Nasional - Umar Faruq (2023)",
    color: "primary"
  },
  {
    icon: Mic,
    title: "Qiraat Internasional",
    description: "Juara 2 Asia Tenggara - Abdullah Zain (2023)",
    color: "accent"
  }
];

const alumniSuccess = [
  {
    name: "Dr. Ahmad Syahid",
    graduation: "Lulusan 2010",
    achievement: "Dokter Spesialis di RSUI, Peneliti Vaksin COVID-19",
    color: "primary"
  },
  {
    name: "Siti Maryam, S.E., M.M.",
    graduation: "Lulusan 2008",
    achievement: "CEO Startup Fintech Syariah terbesar di Indonesia",
    color: "accent"
  },
  {
    name: "Prof. Ustad Muhammad",
    graduation: "Lulusan 2005",
    achievement: "Dekan Fakultas Syariah UIN Jakarta, Penulis 15 Buku",
    color: "primary"
  }
];

export default function Achievements() {
  return (
    <section id="prestasi" className="py-20 bg-card/30 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Prestasi</span> & Pencapaian
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kebanggaan kami atas pencapaian siswa-siswi dalam berbagai bidang akademik, non-akademik, dan kompetisi tingkat nasional maupun internasional.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievementStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`achievement-stat-${index}`}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow ${stat.color === 'primary' ? 'vibrant-btn' : 'bg-gradient-to-br from-accent to-primary'}`}>
                  <IconComponent className={`w-8 h-8 text-primary-foreground`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Achievements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Academic Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-primary/20 card-hover" data-testid="academic-achievements">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Prestasi Akademik</h3>
                <div className="space-y-6">
                  {academicAchievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                        data-testid={`academic-achievement-${index}`}
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${achievement.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                          <IconComponent className={`w-6 h-6 ${achievement.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <p className="text-muted-foreground text-sm">{achievement.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Non-Academic Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-border" data-testid="non-academic-achievements">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Prestasi Non-Akademik</h3>
                <div className="space-y-6">
                  {nonAcademicAchievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                        data-testid={`non-academic-achievement-${index}`}
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${achievement.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                          <IconComponent className={`w-6 h-6 ${achievement.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <p className="text-muted-foreground text-sm">{achievement.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Alumni Success */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card border-border" data-testid="alumni-success">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="gradient-text">Kisah Sukses</span> Alumni
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Para alumni yang telah berkontribusi nyata di berbagai bidang dengan tetap menjunjung tinggi nilai-nilai Islam.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumniSuccess.map((alumni, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 border border-border rounded-2xl card-hover"
                    data-testid={`alumni-${index}`}
                  >
                    <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${alumni.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                      <User className={`w-8 h-8 ${alumni.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{alumni.name}</h4>
                    <p className={`text-sm mb-2 ${alumni.color === 'primary' ? 'text-primary' : 'text-accent'}`}>{alumni.graduation}</p>
                    <p className="text-muted-foreground text-sm">{alumni.achievement}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
