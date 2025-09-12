import { db } from "./db";
import { newsArticles, users } from "@shared/schema";
import bcrypt from "bcrypt";

const sampleNews = [
  {
    title: "Penerimaan Siswa Baru Tahun Ajaran 2024/2025",
    excerpt: "Madrasah Aliyah AL-MANSHURIYAH membuka pendaftaran siswa baru untuk tahun ajaran 2024/2025 dengan berbagai program unggulan.",
    content: `Madrasah Aliyah AL-MANSHURIYAH dengan bangga mengumumkan pembukaan pendaftaran siswa baru untuk tahun ajaran 2024/2025. Kami menawarkan program pendidikan Islam terpadu yang menggabungkan kurikulum nasional dengan nilai-nilai keislaman.

Program yang tersedia:
- Program IPA (Ilmu Pengetahuan Alam)
- Program IPS (Ilmu Pengetahuan Sosial)
- Program Keagamaan

Fasilitas unggulan:
- Laboratorium sains modern
- Perpustakaan digital
- Masjid yang representative
- Lapangan olahraga
- Ruang kelas ber-AC

Pendaftaran dibuka mulai 1 Januari hingga 31 Maret 2024. Untuk informasi lebih lanjut, silakan hubungi kami di (021) 1234-5678 atau kunjungi langsung ke sekolah.`,
    author: "Tim Admisi",
    featured: true,
    published: true
  },
  {
    title: "Prestasi Gemilang Olimpiade Sains Nasional 2024",
    excerpt: "Siswa AL-MANSHURIYAH meraih medali emas dalam Olimpiade Sains Nasional tingkat provinsi untuk kategori Matematika.",
    content: `Alhamdulillah, siswa Madrasah Aliyah AL-MANSHURIYAH kembali mengukir prestasi membanggakan di ajang Olimpiade Sains Nasional (OSN) tingkat provinsi tahun 2024.

Ahmad Fauzi dari kelas XII IPA berhasil meraih medali emas untuk kategori Matematika, sementara Siti Nurhaliza dari kelas XI IPA meraih medali perak untuk kategori Fisika.

Prestasi ini tidak lepas dari pembinaan intensif yang dilakukan oleh para guru pembimbing dan dukungan penuh dari pihak sekolah. Kami berharap prestasi ini dapat memotivasi siswa-siswi lainnya untuk terus berprestasi.

Selamat kepada para pemenang dan semoga dapat melanjutkan ke tingkat nasional!`,
    author: "Kepala Sekolah",
    featured: true,
    published: true
  },
  {
    title: "Workshop Kaligrafi Arab untuk Siswa Kelas X",
    excerpt: "Kegiatan workshop kaligrafi Arab dilaksanakan sebagai bagian dari program pengembangan seni dan budaya Islam di sekolah.",
    content: `Madrasah Aliyah AL-MANSHURIYAH mengadakan workshop kaligrafi Arab untuk seluruh siswa kelas X sebagai bagian dari program pengembangan seni dan budaya Islam.

Workshop ini menghadirkan ustadz Mahmud Syafii, seorang kaligrafer ternama yang telah berpengalaman lebih dari 20 tahun dalam seni kaligrafi Arab. Beliau mengajarkan teknik-teknik dasar penulisan khat dengan berbagai gaya.

Kegiatan ini bertujuan untuk:
- Memperkenalkan seni kaligrafi Arab kepada siswa
- Mengembangkan apresiasi terhadap keindahan tulisan Arab
- Melatih kesabaran dan ketelitian
- Melestarikan budaya Islam

Workshop berlangsung selama 3 hari dan diikuti dengan antusias oleh para siswa.`,
    author: "Pembina Ekstrakurikuler",
    featured: false,
    published: true
  },
  {
    title: "Peringatan Maulid Nabi Muhammad SAW 1445 H",
    excerpt: "Seluruh civitas akademika AL-MANSHURIYAH memperingati Maulid Nabi Muhammad SAW dengan berbagai kegiatan keagamaan.",
    content: `Dalam rangka memperingati Maulid Nabi Muhammad SAW 1445 H, Madrasah Aliyah AL-MANSHURIYAH mengadakan serangkaian kegiatan keagamaan yang meriah dan khidmat.

Rangkaian kegiatan meliputi:
- Ceramah agama oleh KH. Abdullah Mahmud
- Lomba qasidah antar kelas
- Pawai akbar bersama masyarakat
- Pameran sejarah Nabi Muhammad SAW
- Buka bersama dan santunan anak yatim

Kegiatan ini diharapkan dapat meningkatkan kecintaan siswa kepada Rasulullah SAW dan mengamalkan akhlaq mulia dalam kehidupan sehari-hari.

Acara puncak akan dilaksanakan pada hari Jumat, 29 September 2024, di halaman sekolah.`,
    author: "Panitia Maulid",
    featured: false,
    published: true
  },
  {
    title: "Kunjungan Edukatif ke Museum Nasional",
    excerpt: "Siswa kelas XI mengikuti kunjungan edukatif ke Museum Nasional Jakarta untuk mempelajari sejarah dan budaya Indonesia.",
    content: `Sebagai bagian dari program pembelajaran di luar kelas, siswa kelas XI Madrasah Aliyah AL-MANSHURIYAH mengadakan kunjungan edukatif ke Museum Nasional Jakarta.

Kegiatan ini bertujuan untuk:
- Memperluas wawasan siswa tentang sejarah Indonesia
- Mengapresiasi kekayaan budaya bangsa
- Menumbuhkan rasa cinta tanah air
- Pembelajaran langsung di luar kelas

Selama kunjungan, siswa dipandu oleh pemandu museum professional dan didampingi oleh guru-guru. Mereka dapat melihat langsung berbagai artefak bersejarah dan mendengar penjelasan detail tentang peradaban nusantara.

Kegiatan ini mendapat respons positif dari siswa dan akan dijadikan program rutin setiap tahun.`,
    author: "Guru Sejarah",
    featured: false,
    published: true
  },
  {
    title: "Pembukaan Laboratorium Komputer Baru",
    excerpt: "AL-MANSHURIYAH meresmikan laboratorium komputer baru dengan teknologi terkini untuk mendukung pembelajaran digital.",
    content: `Madrasah Aliyah AL-MANSHURIYAH dengan bangga meresmikan laboratorium komputer baru yang dilengkapi dengan teknologi terkini. Fasilitas ini merupakan investasi besar sekolah untuk mendukung pembelajaran di era digital.

Spesifikasi laboratorium:
- 40 unit komputer dengan processor Intel Core i5
- Jaringan internet fiber optic high speed
- Software pembelajaran terbaru
- Proyektor LED untuk presentasi
- AC dan pencahayaan yang optimal

Laboratorium ini akan digunakan untuk:
- Mata pelajaran TIK dan Informatika
- Pelatihan Microsoft Office
- Pembelajaran programming dasar
- Ujian berbasis komputer (CBT)

Dengan fasilitas ini, diharapkan siswa dapat lebih siap menghadapi tantangan teknologi di masa depan.`,
    author: "Wakil Kepala Sekolah",
    featured: true,
    published: true
  }
];

export async function seedDatabase() {
  try {
    console.log("🌱 Starting database seeding...");

    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await db.insert(users).values({
      username: "admin",
      password: hashedPassword,
      role: "admin"
    }).onConflictDoNothing();

    console.log("✅ Admin user created");

    // Insert sample news
    for (const news of sampleNews) {
      await db.insert(newsArticles).values({
        ...news,
        publishedAt: new Date()
      }).onConflictDoNothing();
    }

    console.log("✅ Sample news articles created");
    console.log("🎉 Database seeding completed successfully!");

  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}