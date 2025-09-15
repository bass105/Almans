import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema,
  insertNewsArticleSchema,
  insertStudentRegistrationSchema,
  insertAlumniSchema,
  insertAcademicEventSchema,
  insertUserSchema
} from "@shared/schema";
import { z } from "zod";
import bcrypt from "bcrypt";

declare module 'express-session' {
  export interface SessionData {
    userId: string;
  }
}

// Authentication middleware
const requireAuth = (req: any, res: any, next: any) => {
  if (req.session?.userId) {
    next();
  } else {
    res.status(401).json({ success: false, message: "Authentication required" });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth endpoints
  app.post("/api/auth/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(validatedData.username);
      
      if (existingUser) {
        return res.status(400).json({ 
          success: false, 
          message: "Username sudah digunakan" 
        });
      }
      
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);
      const user = await storage.createUser({
        ...validatedData,
        password: hashedPassword
      });
      
      res.json({ 
        success: true, 
        message: "User berhasil dibuat",
        user: { id: user.id, username: user.username, role: user.role }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await storage.getUserByUsername(username);
      
      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ 
          success: false, 
          message: "Username atau password salah" 
        });
      }
      
      req.session!.userId = user.id;
      res.json({ 
        success: true, 
        message: "Login berhasil",
        user: { id: user.id, username: user.username, role: user.role }
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Terjadi kesalahan internal server" 
      });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session?.destroy(() => {
      res.json({ success: true, message: "Logout berhasil" });
    });
  });

  app.get("/api/auth/me", requireAuth, async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ success: false, message: "Session tidak valid" });
      }
      
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: "User tidak ditemukan" });
      }
      res.json({ 
        success: true, 
        user: { id: user.id, username: user.username, role: user.role }
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Terjadi kesalahan internal server" 
      });
    }
  });

  // Enhanced validation schema for contact form - matches frontend validation
  const contactFormSchema = insertContactMessageSchema.extend({
    name: z.string().trim().min(2, 'Nama wajib diisi (minimal 2 karakter)'),
    email: z.string().trim().email('Format email tidak valid'),
    subject: z.string().trim().min(3, 'Subjek wajib diisi (minimal 3 karakter)'),
    message: z.string().trim().min(10, 'Pesan terlalu singkat (minimal 10 karakter)'),
  });

  // Contact endpoints
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.json({ 
        success: true, 
        message: "Pesan berhasil dikirim",
        id: message.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.get("/api/contact-messages", requireAuth, async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil data pesan" 
      });
    }
  });

  app.put("/api/contact-messages/:id/status", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await storage.updateContactMessageStatus(id, status);
      res.json({ success: true, message: "Status berhasil diupdate" });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengupdate status pesan" 
      });
    }
  });

  // News endpoints
  app.get("/api/news", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : undefined;
      const articles = await storage.getNewsArticles(published);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil berita" 
      });
    }
  });

  app.get("/api/news/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const article = await storage.getNewsArticle(id);
      if (!article) {
        return res.status(404).json({ success: false, message: "Berita tidak ditemukan" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil berita" 
      });
    }
  });

  app.post("/api/news", requireAuth, async (req, res) => {
    try {
      const validatedData = insertNewsArticleSchema.parse(req.body);
      const article = await storage.createNewsArticle(validatedData);
      res.json({ 
        success: true, 
        message: "Berita berhasil dibuat",
        article
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.put("/api/news/:id", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertNewsArticleSchema.partial().parse(req.body);
      const article = await storage.updateNewsArticle(id, validatedData);
      res.json({ 
        success: true, 
        message: "Berita berhasil diupdate",
        article
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.delete("/api/news/:id", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteNewsArticle(id);
      res.json({ success: true, message: "Berita berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal menghapus berita" 
      });
    }
  });

  // Student registration endpoints
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertStudentRegistrationSchema.parse(req.body);
      const registration = await storage.createStudentRegistration(validatedData);
      res.json({ 
        success: true, 
        message: "Pendaftaran berhasil dikirim",
        registration
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.get("/api/registrations", requireAuth, async (req, res) => {
    try {
      const registrations = await storage.getStudentRegistrations();
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil data pendaftaran" 
      });
    }
  });

  app.get("/api/registrations/:id", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const registration = await storage.getStudentRegistration(id);
      if (!registration) {
        return res.status(404).json({ success: false, message: "Pendaftaran tidak ditemukan" });
      }
      res.json(registration);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil data pendaftaran" 
      });
    }
  });

  app.put("/api/registrations/:id/status", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      await storage.updateStudentRegistrationStatus(id, status, notes);
      res.json({ success: true, message: "Status pendaftaran berhasil diupdate" });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengupdate status pendaftaran" 
      });
    }
  });

  // Alumni endpoints
  app.get("/api/alumni", async (req, res) => {
    try {
      const approved = req.query.approved === 'true' ? true : undefined;
      const featured = req.query.featured === 'true' ? true : undefined;
      const alumni = await storage.getAlumni(approved, featured);
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil data alumni" 
      });
    }
  });

  app.get("/api/alumni/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const alumni = await storage.getAlumniById(id);
      if (!alumni) {
        return res.status(404).json({ success: false, message: "Alumni tidak ditemukan" });
      }
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil data alumni" 
      });
    }
  });

  app.post("/api/alumni", async (req, res) => {
    try {
      const validatedData = insertAlumniSchema.parse(req.body);
      const alumni = await storage.createAlumni(validatedData);
      res.json({ 
        success: true, 
        message: "Data alumni berhasil dikirim untuk review",
        alumni
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.put("/api/alumni/:id", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertAlumniSchema.partial().parse(req.body);
      const alumni = await storage.updateAlumni(id, validatedData);
      res.json({ 
        success: true, 
        message: "Data alumni berhasil diupdate",
        alumni
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.put("/api/alumni/:id/status", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { approved, featured } = req.body;
      await storage.updateAlumniStatus(id, approved, featured);
      res.json({ success: true, message: "Status alumni berhasil diupdate" });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengupdate status alumni" 
      });
    }
  });

  // Academic events endpoints
  app.get("/api/events", async (req, res) => {
    try {
      const isPublic = req.query.public === 'true' ? true : undefined;
      const events = await storage.getAcademicEvents(isPublic);
      res.json(events);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil data kalender akademik" 
      });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const event = await storage.getAcademicEvent(id);
      if (!event) {
        return res.status(404).json({ success: false, message: "Event tidak ditemukan" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal mengambil data event" 
      });
    }
  });

  app.post("/api/events", requireAuth, async (req, res) => {
    try {
      const validatedData = insertAcademicEventSchema.parse(req.body);
      const event = await storage.createAcademicEvent(validatedData);
      res.json({ 
        success: true, 
        message: "Event berhasil dibuat",
        event
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.put("/api/events/:id", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertAcademicEventSchema.partial().parse(req.body);
      const event = await storage.updateAcademicEvent(id, validatedData);
      res.json({ 
        success: true, 
        message: "Event berhasil diupdate",
        event
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Data tidak valid", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Terjadi kesalahan internal server" 
        });
      }
    }
  });

  app.delete("/api/events/:id", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteAcademicEvent(id);
      res.json({ success: true, message: "Event berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Gagal menghapus event" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}