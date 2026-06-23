# Harsh Pratap Singh | Portfolio

A professional, modular, and high-performance portfolio website built with **Next.js**, **React**, **TypeScript**, and **Framer Motion**. Optimized for fast load times and clean user experience.

## 🚀 Live Demo
Visit the official fest site built for [Xactitude 2k25](https://xactitude2k25.vercel.app/).

---

## 🎨 Tech Stack & Design System

- **Framework**: Next.js 16 (Turbopack) using the App Router
- **Language**: TypeScript (Type-safe codebase)
- **Styling**: Tailwind CSS & Vanilla CSS custom utilities
- **Theme**: **Everforest Dark** color palette for a professional, low-strain developer aesthetic
- **Animations**: Framer Motion for bouncy entrance transitions and keyframe animations for floating interactive orbs
- **Forms**: Integrated with **Formspree** for background email delivery, with a native client-side `mailto` failover handler

---

## ✨ Features

- **Interactive Mock Editor**: Displays code snippets simulating IDE execution directly on the hero page.
- **Modular Component Architecture**: Decoupled, reusable sections structured in the `src/components/portfolio` directory.
- **Custom Project Prop Control**: Seamlessly hides/shows the live demo button per project card (`showLive` Boolean setting).
- **Responsive Layout**: Designed for mobile, tablet, and desktop views with a smooth responsive navigation bar.
- **Interactive Micro-animations**: Lift offsets (+hover scale), kicker element bounces, and background drift animations.

---

## 📂 Project Structure

```
├── public/                 # Static assets (logos, images, etc.)
└── src/
    ├── app/                # Next.js App Router entrypoints
    │   ├── globals.css     # Core theme variables, keyframes & animations
    │   ├── layout.tsx      # Font setup (Space Grotesk + Inter) & Metadata
    │   └── page.tsx        # Shell route entrypoint rendering PortfolioSite
    ├── components/
    │   ├── portfolio/      # Modular page sections
    │   │   ├── about.tsx
    │   │   ├── contact.tsx
    │   │   ├── footer.tsx
    │   │   ├── header.tsx
    │   │   ├── hero.tsx
    │   │   ├── intro-animation.tsx
    │   │   ├── mock-editor.tsx
    │   │   ├── projects.tsx
    │   │   └── skills.tsx
    │   │   └── workflow.tsx
    │   ├── ui/             # Core visual elements
    │   │   ├── background-grid.tsx
    │   │   ├── icons.tsx
    │   │   └── section-heading.tsx
    │   └── portfolio-site.tsx # Top-level client-side component assembly
    ├── data/
    │   └── portfolio-data.ts  # Central config file containing texts, links, and cards
    └── types/
        └── portfolio.ts    # TypeScript interface declarations
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build for Production
```bash
npm run build
```

---

## 📝 Configuration & Customization

All copy, projects, skills, and links can be easily customized in **`src/data/portfolio-data.ts`**:

- **Update Projects**: Add cards in `projectCards` array and set `showLive: true/false` to show or hide the Live Demo button.
- **Contact Form**: Update the form recipient by changing the `contactFormEndpoint` variable to your Formspree form ID URL.
