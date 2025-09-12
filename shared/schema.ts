import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("admin"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("unread"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsArticles = pgTable("news_articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  author: text("author").notNull(),
  featured: boolean("featured").default(false),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const studentRegistrations = pgTable("student_registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  address: text("address").notNull(),
  parentName: text("parent_name").notNull(),
  parentPhone: text("parent_phone").notNull(),
  previousSchool: text("previous_school").notNull(),
  program: text("program").notNull(),
  documents: text("documents"),
  status: text("status").notNull().default("pending"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const alumni = pgTable("alumni", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  graduationYear: integer("graduation_year").notNull(),
  program: text("program").notNull(),
  currentJob: text("current_job"),
  company: text("company"),
  achievement: text("achievement"),
  testimonial: text("testimonial"),
  photo: text("photo"),
  email: text("email"),
  linkedIn: text("linkedin"),
  featured: boolean("featured").default(false),
  approved: boolean("approved").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const academicEvents = pgTable("academic_events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  eventDate: timestamp("event_date").notNull(),
  eventTime: text("event_time"),
  location: text("location"),
  category: text("category").notNull(),
  isPublic: boolean("is_public").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  newsArticles: many(newsArticles),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  role: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertNewsArticleSchema = createInsertSchema(newsArticles).pick({
  title: true,
  content: true,
  excerpt: true,
  author: true,
  featured: true,
  published: true,
});

export const insertStudentRegistrationSchema = createInsertSchema(studentRegistrations).pick({
  fullName: true,
  email: true,
  phone: true,
  dateOfBirth: true,
  address: true,
  parentName: true,
  parentPhone: true,
  previousSchool: true,
  program: true,
  documents: true,
});

export const insertAlumniSchema = createInsertSchema(alumni).pick({
  fullName: true,
  graduationYear: true,
  program: true,
  currentJob: true,
  company: true,
  achievement: true,
  testimonial: true,
  photo: true,
  email: true,
  linkedIn: true,
});

export const insertAcademicEventSchema = createInsertSchema(academicEvents).pick({
  title: true,
  description: true,
  eventDate: true,
  eventTime: true,
  location: true,
  category: true,
  isPublic: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertNewsArticle = z.infer<typeof insertNewsArticleSchema>;
export type NewsArticle = typeof newsArticles.$inferSelect;
export type InsertStudentRegistration = z.infer<typeof insertStudentRegistrationSchema>;
export type StudentRegistration = typeof studentRegistrations.$inferSelect;
export type InsertAlumni = z.infer<typeof insertAlumniSchema>;
export type Alumni = typeof alumni.$inferSelect;
export type InsertAcademicEvent = z.infer<typeof insertAcademicEventSchema>;
export type AcademicEvent = typeof academicEvents.$inferSelect;
