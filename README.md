# Next-Gen Learning Dashboard

A high-fidelity "Student Dashboard" prototype that fetches live data from Supabase, built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- **Dark Mode Only**: Deep background tones with glowing gradients and grain textures.
- **Bento Grid Layout**: Responsive grid that adapts to Mobile, Tablet, and Desktop.
- **Server Components (RSC)**: Secure, direct-to-database data fetching using `@supabase/ssr`.
- **High-Performance Animations**: Hardware-accelerated, 0-layout-shift animations using Framer Motion spring physics.
- **Micro-interactions**: Active state navigation snapping, hover elevation, and progress bar loading.
- **Graceful Loading**: Suspense-powered pulsing skeleton loaders.

## Tech Stack
- Framework: Next.js (App Router)
- Database: Supabase PostgreSQL
- Styling: Tailwind CSS v4
- Animations: Framer Motion
- Icons: Lucide React

## Setup & Running Locally

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Supabase Setup**
   - Create a free Supabase project.
   - Run the following SQL to create the table and insert mock data:
     ```sql
     CREATE TABLE courses (
       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
       title TEXT NOT NULL,
       progress INTEGER NOT NULL,
       icon_name TEXT NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );

     INSERT INTO courses (title, progress, icon_name) VALUES
     ('Advanced React Patterns', 75, 'Code'),
     ('UI/UX Design Fundamentals', 40, 'Paintbrush'),
     ('PostgreSQL Mastery', 90, 'Database'),
     ('Framer Motion Animations', 20, 'Wand2');
     ```

3. **Environment Variables**
   Copy `.env.example` to `.env.local` and add your Supabase credentials.
   ```bash
   cp .env.example .env.local
   ```
   Provide your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

4. **Run the Dev Server**
   ```bash
   npm run dev
   ```

## Architectural Choices

### Server vs. Client Components
To ensure maximum performance and secure data access, this application uses a strict separation of concerns:
- **Server Components (`CourseList.tsx`)**: The data fetching logic lives entirely on the server. We use `@supabase/ssr` to query the database. This means zero database logic is shipped to the client, preventing bundle bloat and protecting credentials.
- **Client Components (`CourseTile.tsx`, `BentoTile.tsx`, `Sidebar.tsx`)**: Components that require interactivity, state, or animations (Framer Motion) are marked with `'use client'`. They receive raw data as props from their Server Component parents.

### Layout & Animations
- **Zero Layout Shifts**: The Bento Grid relies on CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`). Framer motion is configured to only animate `transform` (like `translateY` and `scale`) and `opacity`. This ensures the browser only composites layers and does not trigger expensive layout repaints.
- **Staggered Entry**: Using Framer Motion's `custom` prop to pass delay indexes dynamically to children, producing a buttery smooth waterfall reveal effect.
- **Micro-interactions**: The Sidebar uses Framer Motion's `layoutId` to seamlessly transition the active background highlight between navigation items.

### Challenges
- **Next.js 15 & Tailwind v4**: Migrating to Tailwind v4 meant utilizing the new `@import "tailwindcss";` methodology and `@theme` directives instead of `tailwind.config.js`. This is cleaner but requires adaptation for custom variables like the background grain texture.
- **Hydration & Animations**: Ensuring Framer Motion's initial states aligned perfectly with Server-Side rendered HTML to avoid hydration mismatches, especially for the progress bar animations.
