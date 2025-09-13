import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Award, BookOpen, Mail, Phone } from "lucide-react";

const teacherCategories = [
  { id: "all", label: "Semua", icon: Users },
  { id: "kepala", label: "Kepala Sekolah", icon: Award },
  { id: "guru-agama", label: "Guru Agama", icon: BookOpen },
  { id: "guru-umum", label: "Guru Umum", icon: GraduationCap }
];

const teachers = [
  {
    id: 1,
    name: "Drs. H. Ahmad Mahmud, M.Pd.I",
    position: "Kepala Sekolah",
    category: "kepala",
    expertise: ["Manajemen Pendidikan", "Kepemimpinan"],
    education: "S2 Pendidikan Islam - UIN Jakarta",
    experience: "25 tahun",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    email: "kepala@almanshuriyah.sch.id",
    phone: "+62-21-1234-5678",
    achievements: ["Kepala Sekolah Berprestasi Tingkat Provinsi 2022", "Pembina Guru Teladan"]
  },
  {
    id: 2,
    name: "Ustadz Dr. Muhammad Syafii, Lc., M.A",
    position: "Guru Al-Qur'an Hadits",
    category: "guru-agama",
    expertise: ["Tafsir Al-Qur'an", "Ilmu Hadits", "Bahasa Arab"],
    education: "S3 Ilmu Al-Qur'an - Al-Azhar University",
    experience: "20 tahun",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "syafii@almanshuriyah.sch.id",
    phone: "+62-21-1234-5679",
    achievements: ["Juara 1 Lomba Tilawah Nasional", "Penulis Buku Tafsir Tematik"]
  },
  {
    id: 3,
    name: "Ustadzah Siti Khadijah, S.Pd.I, M.Ag",
    position: "Guru Fiqh & Akidah Akhlaq",
    category: "guru-agama",
    expertise: ["Fiqh Kontemporer", "Akidah", "Etika Islam"],
    education: "S2 Pendidikan Agama Islam - UIN Jakarta",
    experience: "15 tahun",
    photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=300&h=300&fit=crop&crop=face",
    email: "khadijah@almanshuriyah.sch.id",
    phone: "+62-21-1234-5680",
    achievements: ["Guru Inspiratif Tingkat Nasional", "Pembina Rohis Teladan"]
  },
  {
    id: 4,
    name: "Drs. Bambang Sutrisno, M.Pd",
    position: "Guru Matematika",
    category: "guru-umum",
    expertise: ["Matematika Lanjut", "Statistika", "Geometri"],
    education: "S2 Pendidikan Matematika - UI",
    experience: "18 tahun",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    email: "bambang@almanshuriyah.sch.id",
    phone: "+62-21-1234-5681",
    achievements: ["Pembina OSN Matematika", "Guru Berprestasi Tingkat Kota"]
  },
  {
    id: 5,
    name: "Dr. Sari Wulandari, M.Si",
    position: "Guru Kimia & Biologi",
    category: "guru-umum",
    expertise: ["Kimia Organik", "Biologi Molekuler", "Penelitian Sains"],
    education: "S3 Kimia - ITB",
    experience: "12 tahun",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    email: "sari@almanshuriyah.sch.id",
    phone: "+62-21-1234-5682",
    achievements: ["Peneliti Terbaik LIPI", "Pembina Klub Sains"]
  },
  {
    id: 6,
    name: "Rizki Pratama, S.Pd, M.Pd",
    position: "Guru Bahasa Inggris",
    category: "guru-umum",
    expertise: ["TOEFL/IELTS Preparation", "English Literature", "Public Speaking"],
    education: "S2 Pendidikan Bahasa Inggris - UNJ",
    experience: "10 tahun",
    photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=face",
    email: "rizki@almanshuriyah.sch.id",
    phone: "+62-21-1234-5683",
    achievements: ["TOEFL Score 650", "Juara 1 English Debate Competition"]
  }
];

export default function TeacherStaff() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTeacher, setSelectedTeacher] = useState<typeof teachers[0] | null>(null);

  const filteredTeachers = selectedCategory === "all" 
    ? teachers 
    : teachers.filter(teacher => teacher.category === selectedCategory);

  return (
    <section id="guru-staf" className="py-24 lg:py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      
      {/* Cyberpunk background effects */}
      <div className="cyberpunk-neon-grid opacity-40"></div>
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
            <span className="gradient-text">Guru</span> & Tenaga Pendidik
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tim pendidik berpengalaman dan berdedikasi yang berkomitmen membimbing siswa-siswi menuju kesuksesan akademik dan spiritual.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {teacherCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'vibrant-btn text-primary-foreground'
                    : 'glass-effect border-primary/20 text-foreground hover:border-primary/40 hover:bg-primary/10'
                }`}
                data-testid={`category-filter-${category.id}`}
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
          {filteredTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-primary/20 card-hover h-full group relative overflow-hidden" data-testid={`teacher-card-${teacher.id}`}>
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-10 relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-44 h-44 rounded-3xl overflow-hidden mx-auto mb-8 ring-4 ring-primary/40 shadow-2xl relative group">
                      {/* Photo glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <img
                        src={teacher.photo}
                        alt={`${teacher.name} - ${teacher.position}`}
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-110 relative z-10 rounded-2xl"
                        data-testid={`teacher-photo-${teacher.id}`}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </div>
                    <h3 className="text-xl font-bold gradient-text mb-4 leading-tight">{teacher.name}</h3>
                    <Badge className="vibrant-btn mb-8 px-4 py-2 text-sm" data-testid={`teacher-position-${teacher.id}`}>
                      {teacher.position}
                    </Badge>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-base font-semibold text-primary mb-3">Keahlian</h4>
                      <div className="flex flex-wrap gap-2">
                        {teacher.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-sm border-accent/40 text-accent px-3 py-1 bg-accent/10">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>{teacher.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        <span>Pengalaman: {teacher.experience}</span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-2 pt-6">
                      <button
                        onClick={() => setSelectedTeacher(teacher)}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-primary/15 to-accent/15 hover:from-primary/25 hover:to-accent/25 text-primary rounded-xl transition-all duration-300 text-sm font-semibold border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-primary/20"
                        data-testid={`view-profile-${teacher.id}`}
                      >
                        Lihat Profil
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Teacher Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Users, value: "65+", label: "Total Pendidik", color: "primary" },
            { icon: GraduationCap, value: "85%", label: "Bergelar S2/S3", color: "accent" },
            { icon: Award, value: "20+", label: "Guru Berprestasi", color: "primary" },
            { icon: BookOpen, value: "15+", label: "Tahun Rata-rata", color: "accent" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`teacher-stat-${index}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-sparkle ${
                  stat.color === 'primary' ? 'vibrant-btn' : 'bg-gradient-to-br from-accent to-primary'
                }`}>
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}