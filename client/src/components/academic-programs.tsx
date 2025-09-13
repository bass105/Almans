import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, Globe, BookOpen, Scale, Heart, Building2, Microscope, Laptop, Book, Church, Check } from "lucide-react";

const programs = {
  ipa: {
    icon: FlaskConical,
    title: "Program IPA",
    subtitle: "Ilmu Pengetahuan Alam",
    description: "Fokus pada pengembangan kemampuan analitis dan pemahaman mendalam tentang sains dan teknologi dengan landasan nilai-nilai Islam.",
    subjects: [
      "Matematika Lanjut",
      "Fisika & Kimia", 
      "Biologi & Geografi",
      "Bahasa Inggris"
    ]
  },
  ips: {
    icon: Globe,
    title: "Program IPS",
    subtitle: "Ilmu Pengetahuan Sosial",
    description: "Mengembangkan pemahaman tentang dinamika sosial, ekonomi, dan budaya dalam perspektif Islam untuk mempersiapkan pemimpin masa depan.",
    subjects: [
      "Sejarah & Sosiologi",
      "Ekonomi & Geografi",
      "Bahasa & Sastra",
      "Antropologi"
    ]
  }
};

const islamicSubjects = [
  {
    icon: BookOpen,
    title: "Al-Qur'an Hadits",
    description: "Tilawah dan tafsir"
  },
  {
    icon: Scale,
    title: "Fiqh",
    description: "Hukum Islam"
  },
  {
    icon: Heart,
    title: "Akidah Akhlaq",
    description: "Keimanan dan moral"
  },
  {
    icon: Building2,
    title: "SKI",
    description: "Sejarah Islam"
  }
];

const facilities = [
  {
    icon: Microscope,
    title: "Lab Sains",
    description: "Laboratorium modern dengan peralatan canggih"
  },
  {
    icon: Laptop,
    title: "Lab Komputer",
    description: "Teknologi terdepan untuk pembelajaran digital"
  },
  {
    icon: Book,
    title: "Perpustakaan",
    description: "Koleksi buku digital dan fisik lengkap"
  },
  {
    icon: Church,
    title: "Masjid", 
    description: "Pusat kegiatan spiritual dan ibadah"
  }
];

export default function AcademicPrograms() {
  return (
    <section id="akademik" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      
      {/* Cyberpunk background effects */}
      <div className="cyberpunk-lines opacity-50"></div>
      <div className="neon-pulse-bg"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Program</span> Akademik
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kurikulum terpadu yang menggabungkan pendidikan agama Islam dengan mata pelajaran umum untuk membentuk lulusan yang kompeten dan berakhlaq mulia.
          </p>
        </motion.div>

        {/* Study Programs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {Object.entries(programs).map(([key, program], index) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-primary/20 card-hover h-full" data-testid={`program-${key}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 animate-sparkle ${index === 0 ? 'vibrant-btn' : 'bg-gradient-to-br from-accent to-primary'}`}>
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">{program.title}</h3>
                        <p className="text-muted-foreground">{program.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {program.description}
                    </p>
                    <div className="space-y-3">
                      {program.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="flex items-center">
                          <Check className={`w-4 h-4 mr-3 flex-shrink-0 ${index === 0 ? 'text-primary' : 'text-accent'}`} />
                          <span className="text-muted-foreground">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Islamic Studies Core */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="glass-effect border-primary/20 card-hover" data-testid="islamic-studies">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="gradient-text">Mata Pelajaran</span> Keagamaan
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kurikulum agama yang komprehensif untuk membentuk karakter dan spiritual siswa berdasarkan Al-Qur'an dan As-Sunnah.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {islamicSubjects.map((subject, index) => {
                  const IconComponent = subject.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-6 rounded-xl glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover"
                      data-testid={`islamic-subject-${index}`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}>
                        <IconComponent className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{subject.title}</h4>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Facilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-border card-hover text-center" data-testid={`facility-${index}`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}>
                      <IconComponent className={`w-8 h-8 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h4>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
