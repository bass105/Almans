import { 
  type User, 
  type InsertUser, 
  type ContactMessage, 
  type InsertContactMessage,
  type NewsArticle,
  type InsertNewsArticle,
  type StudentRegistration,
  type InsertStudentRegistration,
  type Alumni,
  type InsertAlumni,
  type AcademicEvent,
  type InsertAcademicEvent,
  users,
  contactMessages,
  newsArticles,
  studentRegistrations,
  alumni,
  academicEvents
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  updateContactMessageStatus(id: string, status: string): Promise<void>;
  
  // News articles
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  getNewsArticles(published?: boolean): Promise<NewsArticle[]>;
  getNewsArticle(id: string): Promise<NewsArticle | undefined>;
  updateNewsArticle(id: string, article: Partial<InsertNewsArticle>): Promise<NewsArticle>;
  deleteNewsArticle(id: string): Promise<void>;
  
  // Student registrations
  createStudentRegistration(registration: InsertStudentRegistration): Promise<StudentRegistration>;
  getStudentRegistrations(): Promise<StudentRegistration[]>;
  getStudentRegistration(id: string): Promise<StudentRegistration | undefined>;
  updateStudentRegistrationStatus(id: string, status: string, notes?: string): Promise<void>;
  
  // Alumni
  createAlumni(alumniData: InsertAlumni): Promise<Alumni>;
  getAlumni(approved?: boolean, featured?: boolean): Promise<Alumni[]>;
  getAlumniById(id: string): Promise<Alumni | undefined>;
  updateAlumni(id: string, alumniData: Partial<InsertAlumni>): Promise<Alumni>;
  updateAlumniStatus(id: string, approved: boolean, featured?: boolean): Promise<void>;
  
  // Academic events
  createAcademicEvent(event: InsertAcademicEvent): Promise<AcademicEvent>;
  getAcademicEvents(isPublic?: boolean): Promise<AcademicEvent[]>;
  getAcademicEvent(id: string): Promise<AcademicEvent | undefined>;
  updateAcademicEvent(id: string, event: Partial<InsertAcademicEvent>): Promise<AcademicEvent>;
  deleteAcademicEvent(id: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values({
        ...insertUser,
        role: insertUser.role || "admin"
      })
      .returning();
    return user;
  }

  // Contact messages
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values({
        ...insertMessage,
        status: "unread"
      })
      .returning();
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    const messages = await db
      .select()
      .from(contactMessages)
      .orderBy(desc(contactMessages.createdAt));
    return messages;
  }

  async updateContactMessageStatus(id: string, status: string): Promise<void> {
    await db
      .update(contactMessages)
      .set({ status })
      .where(eq(contactMessages.id, id));
  }

  // News articles
  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const [newsArticle] = await db
      .insert(newsArticles)
      .values({
        ...article,
        publishedAt: article.published ? new Date() : null
      })
      .returning();
    return newsArticle;
  }

  async getNewsArticles(published?: boolean): Promise<NewsArticle[]> {
    const query = db.select().from(newsArticles);
    
    if (published !== undefined) {
      query.where(eq(newsArticles.published, published));
    }
    
    const articles = await query.orderBy(desc(newsArticles.createdAt));
    return articles;
  }

  async getNewsArticle(id: string): Promise<NewsArticle | undefined> {
    const [article] = await db.select().from(newsArticles).where(eq(newsArticles.id, id));
    return article || undefined;
  }

  async updateNewsArticle(id: string, article: Partial<InsertNewsArticle>): Promise<NewsArticle> {
    const [updatedArticle] = await db
      .update(newsArticles)
      .set({
        ...article,
        updatedAt: new Date(),
        publishedAt: article.published ? new Date() : undefined
      })
      .where(eq(newsArticles.id, id))
      .returning();
    return updatedArticle;
  }

  async deleteNewsArticle(id: string): Promise<void> {
    await db.delete(newsArticles).where(eq(newsArticles.id, id));
  }

  // Student registrations
  async createStudentRegistration(registration: InsertStudentRegistration): Promise<StudentRegistration> {
    const [studentRegistration] = await db
      .insert(studentRegistrations)
      .values(registration)
      .returning();
    return studentRegistration;
  }

  async getStudentRegistrations(): Promise<StudentRegistration[]> {
    const registrations = await db
      .select()
      .from(studentRegistrations)
      .orderBy(desc(studentRegistrations.createdAt));
    return registrations;
  }

  async getStudentRegistration(id: string): Promise<StudentRegistration | undefined> {
    const [registration] = await db
      .select()
      .from(studentRegistrations)
      .where(eq(studentRegistrations.id, id));
    return registration || undefined;
  }

  async updateStudentRegistrationStatus(id: string, status: string, notes?: string): Promise<void> {
    await db
      .update(studentRegistrations)
      .set({ 
        status, 
        notes: notes || undefined,
        updatedAt: new Date()
      })
      .where(eq(studentRegistrations.id, id));
  }

  // Alumni
  async createAlumni(alumniData: InsertAlumni): Promise<Alumni> {
    const [alumniRecord] = await db
      .insert(alumni)
      .values(alumniData)
      .returning();
    return alumniRecord;
  }

  async getAlumni(approved?: boolean, featured?: boolean): Promise<Alumni[]> {
    const baseQuery = db.select().from(alumni);
    
    if (approved !== undefined && featured !== undefined) {
      return await baseQuery
        .where(and(eq(alumni.approved, approved), eq(alumni.featured, featured)))
        .orderBy(desc(alumni.graduationYear));
    } else if (approved !== undefined) {
      return await baseQuery
        .where(eq(alumni.approved, approved))
        .orderBy(desc(alumni.graduationYear));
    } else if (featured !== undefined) {
      return await baseQuery
        .where(eq(alumni.featured, featured))
        .orderBy(desc(alumni.graduationYear));
    } else {
      return await baseQuery.orderBy(desc(alumni.graduationYear));
    }
  }

  async getAlumniById(id: string): Promise<Alumni | undefined> {
    const [alumniRecord] = await db.select().from(alumni).where(eq(alumni.id, id));
    return alumniRecord || undefined;
  }

  async updateAlumni(id: string, alumniData: Partial<InsertAlumni>): Promise<Alumni> {
    const [updatedAlumni] = await db
      .update(alumni)
      .set({
        ...alumniData,
        updatedAt: new Date()
      })
      .where(eq(alumni.id, id))
      .returning();
    return updatedAlumni;
  }

  async updateAlumniStatus(id: string, approved: boolean, featured?: boolean): Promise<void> {
    const updateData: any = { 
      approved, 
      updatedAt: new Date() 
    };
    
    if (featured !== undefined) {
      updateData.featured = featured;
    }
    
    await db
      .update(alumni)
      .set(updateData)
      .where(eq(alumni.id, id));
  }

  // Academic events
  async createAcademicEvent(event: InsertAcademicEvent): Promise<AcademicEvent> {
    const [academicEvent] = await db
      .insert(academicEvents)
      .values(event)
      .returning();
    return academicEvent;
  }

  async getAcademicEvents(isPublic?: boolean): Promise<AcademicEvent[]> {
    const baseQuery = db.select().from(academicEvents);
    
    if (isPublic !== undefined) {
      return await baseQuery
        .where(eq(academicEvents.isPublic, isPublic))
        .orderBy(academicEvents.eventDate);
    } else {
      return await baseQuery.orderBy(academicEvents.eventDate);
    }
  }

  async getAcademicEvent(id: string): Promise<AcademicEvent | undefined> {
    const [event] = await db.select().from(academicEvents).where(eq(academicEvents.id, id));
    return event || undefined;
  }

  async updateAcademicEvent(id: string, event: Partial<InsertAcademicEvent>): Promise<AcademicEvent> {
    const [updatedEvent] = await db
      .update(academicEvents)
      .set({
        ...event,
        updatedAt: new Date()
      })
      .where(eq(academicEvents.id, id))
      .returning();
    return updatedEvent;
  }

  async deleteAcademicEvent(id: string): Promise<void> {
    await db.delete(academicEvents).where(eq(academicEvents.id, id));
  }
}

export const storage = new DatabaseStorage();