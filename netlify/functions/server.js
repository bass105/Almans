import serverless from 'serverless-http';
import express from 'express';

// Create Express app
const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware for Netlify
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running on Netlify Functions' });
});

// News API endpoints (simplified for static deployment)
const mockNews = [
  {
    id: '1',
    title: 'Pelaksanaan Ujian Tengah Semester Ganjil 2024/2025',
    content: 'Ujian tengah semester ganjil akan dilaksanakan mulai tanggal 15-20 Oktober 2024. Semua siswa diharap mempersiapkan diri dengan baik.',
    createdAt: new Date().toISOString(),
    category: 'akademik'
  },
  {
    id: '2', 
    title: 'Lomba Karya Tulis Ilmiah Tingkat Nasional',
    content: 'Selamat kepada tim peneliti AL-MANSHURIYAH yang berhasil meraih juara 2 dalam lomba karya tulis ilmiah tingkat nasional.',
    createdAt: new Date().toISOString(),
    category: 'prestasi'
  },
  {
    id: '3',
    title: 'Pendaftaran Ekstrakurikuler Semester Ganjil',
    content: 'Pendaftaran untuk kegiatan ekstrakurikuler semester ganjil dibuka mulai 1 September 2024. Tersedia berbagai pilihan kegiatan menarik.',
    createdAt: new Date().toISOString(),
    category: 'kegiatan'
  }
];

app.get('/api/news', (req, res) => {
  res.json(mockNews);
});

app.get('/api/news/:id', (req, res) => {
  const news = mockNews.find(n => n.id === req.params.id);
  if (!news) {
    return res.status(404).json({ error: 'News not found' });
  }
  res.json(news);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // In a real app, this would save to database
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Pesan Anda telah dikirim. Terima kasih!' 
  });
});

// Export the serverless function
export const handler = serverless(app);