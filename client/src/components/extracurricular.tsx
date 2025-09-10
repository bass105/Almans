import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Palette, 
  Mic, 
  BookOpen, 
  Trophy, 
  Heart, 
  Globe, 
  Zap, 
  Music, 
  Camera,
  Lightbulb,
  Laptop,
  TreePine,
  Dumbbell,
  Volleyball,
  Target,
  Compass
} from "lucide-react";

const extracurricularCategories = [
  {
    id: "olahraga",
    title: "Olahraga & Kebugaran",
    icon: Dumbbell,
    color: "primary",
    description: "Mengembangkan kesehatan jasmani dan sportivitas",
    activities: [
      {
        icon: Volleyball,
        name: "Bola Voli",
        description: "Tim putra dan putri dengan prestasi tingkat provinsi",
        schedule: "Senin & Rabu 15:30-17:00"
      },
      {
        icon: Target,
        name: "Panahan",
        description: "Olahraga tradisional yang melatih fokus dan ketenangan",
        schedule: "Selasa & Kamis 15:30-17:00"
      },
      {
        icon: Users,
        name: "Sepak Bola",
        description: "Tim futsal sekolah juara tingkat kecamatan",
        schedule: "Jumat 15:30-17:00"
      },
      {
        icon: Dumbbell,
        name: "Atletik",
        description: "Lari, lompat, dan lempar dengan pelatih profesional",
        schedule: "Sabtu 07:00-09:00"
      }
    ]
  },
  {
    id: "seni",
    title: "Seni & Budaya",
    icon: Palette,
    color: "accent",
    description: "Mengekspresikan kreativitas dan melestarikan budaya",
    activities: [
      {
        icon: Palette,
        name: "Kaligrafi Arab",
        description: "Seni menulis indah Al-Qur'an dan khat Islami",
        schedule: "Senin & Rabu 15:30-17:00"
      },
      {
        icon: Music,
        name: "Qasidah Modern",
        description: "Paduan suara Islami dengan alat musik tradisional",
        schedule: "Selasa & Kamis 15:30-17:00"
      },
      {
        icon: Mic,
        name: "Tilawah & Qiraat",
        description: "Seni baca Al-Qur'an dengan berbagai qiraat",
        schedule: "Rabu & Jumat 15:30-17:00"
      },
      {
        icon: Camera,
        name: "Fotografi",
        description: "Teknik fotografi dan videografi untuk dokumentasi",
        schedule: "Sabtu 13:00-15:00"
      }
    ]
  },
  {
    id: "akademik",
    title: "Pengembangan Akademik",
    icon: BookOpen,
    color: "primary",
    description: "Memperdalam ilmu pengetahuan di luar kurikulum",
    activities: [
      {
        icon: Lightbulb,
        name: "Klub Sains",
        description: "Eksperimen dan penelitian sains terapan",
        schedule: "Senin & Kamis 15:30-17:00"
      },
      {
        icon: Globe,
        name: "English Club",
        description: "Praktik bahasa Inggris dan public speaking",
        schedule: "Selasa & Jumat 15:30-17:00"
      },
      {
        icon: Laptop,
        name: "Klub Robotika",
        description: "Programming dan pembuatan robot sederhana",
        schedule: "Rabu & Sabtu 15:30-17:00"
      },
      {
        icon: BookOpen,
        name: "Jurnalistik",
        description: "Menulis artikel dan mengelola majalah sekolah",
        schedule: "Kamis 15:30-17:00"
      }
    ]
  },
  {
    id: "sosial",
    title: "Kepemimpinan & Sosial",
    icon: Heart,
    color: "accent",
    description: "Membentuk karakter kepemimpinan dan kepedulian sosial",
    activities: [
      {
        icon: Users,
        name: "OSIS",
        description: "Organisasi Siswa Intra Sekolah",
        schedule: "Jumat 13:00-15:00"
      },
      {
        icon: Heart,
        name: "Relawan Sosial",
        description: "Kegiatan bakti sosial dan bantuan masyarakat",
        schedule: "Sabtu 08:00-12:00"
      },
      {
        icon: Compass,
        name: "Pramuka",
        description: "Gerakan kepanduan dengan nilai-nilai Islam",
        schedule: "Sabtu 14:00-16:00"
      },
      {
        icon: TreePine,
        name: "Pecinta Alam",
        description: "Pendakian, camping, dan konservasi lingkungan",
        schedule: "Minggu (sesuai jadwal)"
      }
    ]
  }
];

const achievementHighlights = [
  {
    icon: Trophy,
    title: "120+ Prestasi",
    description: "Total prestasi ekstrakurikuler"
  },
  {
    icon: Users,
    title: "85% Partisipasi",
    description: "Siswa aktif dalam ekskul"
  },
  {
    icon: Zap,
    title: "25+ Kegiatan",
    description: "Pilihan ekstrakurikuler"
  },
  {
    icon: Heart,
    title: "50+ Event",
    description: "Kegiatan tahunan"
  }
];

export default function Extracurricular() {
  return (
    <section id="ekstrakurikuler" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Ekstrakurikuler</span> & Pengembangan Diri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beragam kegiatan ekstrakurikuler untuk mengembangkan bakat, minat, dan karakter siswa sesuai dengan nilai-nilai Islam.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievementHighlights.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`extracurricular-stat-${index}`}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}>
                  <IconComponent className={`w-8 h-8 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>{achievement.title}</div>
                <div className="text-muted-foreground text-sm">{achievement.description}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Extracurricular Categories */}
        <div className="space-y-16">
          {extracurricularCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                data-testid={`category-${category.id}`}
              >
                <Card className="glass-effect border-border">
                  <CardContent className="p-8 lg:p-12">
                    {/* Category Header */}
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 ${category.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                        <CategoryIcon className={`w-8 h-8 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground">{category.title}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>

                    {/* Activities Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.activities.map((activity, activityIndex) => {
                        const ActivityIcon = activity.icon;
                        return (
                          <motion.div
                            key={activityIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: activityIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 border border-border rounded-xl card-hover"
                            data-testid={`activity-${category.id}-${activityIndex}`}
                          >
                            <div className="flex items-start">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${category.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                                <ActivityIcon className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-foreground mb-2">{activity.name}</h4>
                                <p className="text-muted-foreground text-sm mb-3">{activity.description}</p>
                                <div className="flex items-center text-xs">
                                  <i className={`fas fa-clock text-sm mr-2 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}></i>
                                  <span className="text-muted-foreground">{activity.schedule}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-card border-border" data-testid="extracurricular-cta">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Bergabunglah</span> dengan Kami!
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Temukan bakat terpendam Anda dan kembangkan potensi diri melalui berbagai kegiatan ekstrakurikuler yang kami sediakan. Daftarkan diri Anda sekarang!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-contact-extracurricular"
                >
                  Hubungi Kami
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-card text-foreground font-semibold transition-all duration-300"
                  onClick={() => document.querySelector("#galeri")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-view-gallery"
                >
                  Lihat Galeri Kegiatan
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}