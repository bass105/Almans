# Overview

This is a full-stack web application for Madrasah Aliyah AL-MANSHURIYAH, an Islamic high school website. The application features a modern, responsive design showcasing the school's profile, academic programs, achievements, and contact information. Built with React and TypeScript on the frontend and Express.js on the backend, it includes a contact form system for prospective students and parents to reach out to the school.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Extensive use of Radix UI components via shadcn/ui for accessibility and consistency
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: tsx for TypeScript execution during development
- **Production Build**: esbuild for efficient bundling
- **API Design**: RESTful endpoints with proper error handling and validation

## Data Layer
- **Database**: PostgreSQL using Neon serverless database
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema updates
- **Validation**: Zod for runtime type checking and API validation
- **Storage**: Currently uses in-memory storage for development, designed to easily switch to database persistence

## Authentication & Session Management
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password fields
- **Security**: Prepared for authentication implementation with secure session handling

## Development & Deployment
- **Development**: Hot reload with Vite middleware integration
- **Environment**: Development and production configurations with proper error handling
- **Static Assets**: Served through Express with Vite integration for development
- **Build Process**: Separate client and server builds with optimized output

## Contact System
- **Form Handling**: Contact form with validation for name, email, subject, and message
- **Data Persistence**: Contact messages stored with timestamps and unique IDs
- **API Endpoints**: RESTful endpoints for submitting and retrieving contact messages
- **Error Handling**: Comprehensive validation and error responses

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI and Styling
- **@radix-ui/**: Complete set of accessible UI primitives (dialogs, forms, navigation, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for creating type-safe component variants
- **framer-motion**: Animation library for smooth transitions and interactions

## Development Tools
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific error handling
- **@replit/vite-plugin-cartographer**: Replit development tools integration

## Form and Data Handling
- **@hookform/resolvers**: React Hook Form integration with validation libraries
- **@tanstack/react-query**: Server state management and data fetching
- **react-hook-form**: Form state management and validation
- **zod**: Schema validation for TypeScript

## Utilities
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing for React