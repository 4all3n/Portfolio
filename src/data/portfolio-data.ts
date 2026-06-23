import {
  LayoutGrid,
  ServerCog,
  Database,
  Sparkles,
  Workflow,
  Code2,
  Mail,
  TimerReset,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import type {
  NavLink,
  SkillGroup,
  ProjectCard,
  Highlight,
  ContactLink,
} from "@/types/portfolio";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroFacts = [
  "React & Python",
  "AI-Assisted Development",
  "Django & FastAPI",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description:
      "Component-based architectures, responsive layouts, and modern tooling.",
    icon: LayoutGrid,
    items: [
      "React",
      "React Native",
      "Tailwind CSS",
      "Next.js",
      "JavaScript (ES6+)",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs, scalable services, and efficient data processing.",
    icon: ServerCog,
    items: [
      "Python",
      "Java",
      "Node.js",
      "FastAPI",
      "Flask",
      "Django",
      "Spring Boot",
    ],
  },
  {
    title: "Data & Infrastructure",
    description:
      "Database management, visualization, and deployment workflows.",
    icon: Database,
    items: [
      "SQL",
      "MongoDB",
      "Streamlit",
      "Scikit-learn",
      "REST APIs",
      "Git / GitHub",
    ],
  },
  {
    title: "AI Tools & Workflows",
    description:
      "Leveraging local LLMs and AI coding assistants for rapid prototyping.",
    icon: Sparkles,
    items: [
      "Cursor",
      "GitHub Copilot",
      "Claude",
      "Gemini",
      "Ollama (Local LLMs)",
    ],
  },
];

export const projectCards: ProjectCard[] = [
  {
    title: "Average_Weeb",
    category: "Full-Stack Media Tracking Platform",
    description:
      "A component-based React frontend and robust backend system that manages media states with dynamic REST APIs.",
    impact:
      "Demonstrated adaptability by executing a complete, structured project reset for cleaner architecture.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs"],
    repo: "https://github.com/4all3n/Average_Weeb.git",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
    showLive: false,
  },
  {
    title: "Mindful Momentum",
    category: "Multimodal Full-Stack System",
    description:
      "An end-to-end Python backend API and an interactive Streamlit dashboard to process a 457-day continuous biometric dataset.",
    impact:
      "Utilized local LLMs to implement a secure, offline-first execution environment with high ML pattern analysis accuracy.",
    stack: ["Python", "FastAPI", "React Native", "Streamlit", "Ollama"],
    repo: "https://github.com/4all3n/Main_Project",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80",
    showLive: false,
  },
  {
    title: "Xactitude 2k25",
    category: "Official National Fest Website",
    description:
      "The official digital platform for a national-level technical fest, ensuring a highly responsive and engaging user experience.",
    impact:
      "Architected and rapidly prototyped responsive layouts from scratch, and deployed a seamless continuous delivery pipeline.",
    stack: ["React", "JavaScript", "CSS", "Vercel"],
    repo: "https://github.com/4all3n/xactitude2k25",
    live: "https://xactitude2k25.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    showLive: true,
  },
 {
    title: "Xactitude 2025 Invitation Game",
    category: "Interactive Gamified Invitation",
    description:
      "A fully responsive 2D runner game built as a digital invitation for a national-level IT fest, featuring dynamic canvas scaling, custom physics, and a premium glassmorphic UI.",
    impact:
      "Engineered dynamic canvas coordinate scaling and refined bounding-box collisions to deliver a highly responsive, cross-device gaming experience.",
    stack: ["HTML5 Canvas", "JavaScript", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/4all3n/invite_game",
    live: "https://invite-game.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    showLive: true,
  },
  {
    title: "mini_Drive",
    category: "MVC-Driven Cloud Storage System",
    description:
      "A multi-component desktop cloud drive enabling file management, featuring an integrated Python microservice for automated Naive Bayes file categorization.",
    impact:
      "Architected a robust full-stack system bridging a JavaFX frontend, a Spring Boot REST backend, and a FastAPI machine learning service.",
    stack: ["JavaFX", "Spring Boot", "FastAPI", "MySQL"],
    repo: "https://github.com/4all3n/mini_Drive",
    live: "https://github.com/4all3n/mini_Drive",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80",
    showLive: false,
  },
{
    title: "SpendWise",
    category: "Native Android Application",
    description:
      "A modern expense tracking application built with Jetpack Compose, featuring secure authentication, comprehensive budget management, and dynamic Material Design 3 theming.",
    impact:
      "Engineered a scalable native mobile architecture using Kotlin and Firebase, delivering secure data synchronization and a highly responsive user experience.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "SQLite"],
    repo: "https://github.com/4all3n/SpendWise",
    live: "https://github.com/4all3n/SpendWise",
    image: "https://picsum.photos/seed/spendwise/1600/900",
    showLive: false,
  }
];

export const highlights: Highlight[] = [
  {
    title: "AI-Accelerated Workflows",
    description:
      "Proficient in leveraging AI tools to rapidly prototype, write, and debug code.",
    icon: Sparkles,
  },
  {
    title: "Full-Stack Adaptability",
    description:
      "Experienced in architecting robust frontends and scalable backend APIs.",
    icon: Workflow,
  },
  {
    title: "Problem Solving Mindset",
    description:
      "Deep willingness to learn and adapt to fast-paced technical environments.",
    icon: Code2,
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: "github.com/4all3n",
    href: "https://github.com/4all3n",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/harsh-pratap-singh-4all3n",
    href: "https://www.linkedin.com/in/harsh-pratap-singh-4all3n/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    value: "harsh.devmail@gmail.com",
    href: "mailto:harsh.devmail@gmail.com",
    icon: Mail,
  },
];

export const workflowSteps = [
  {
    icon: TimerReset,
    title: "Discover",
    text: "Understand the product, audience, and constraints before writing code.",
  },
  {
    icon: Workflow,
    title: "Plan",
    text: "Shape the architecture, content, and component structure for a fast build.",
  },
  {
    icon: Code2,
    title: "Build",
    text: "Implement with responsiveness, motion, and maintainable abstractions.",
  },
  {
    icon: ShieldCheck,
    title: "Ship",
    text: "Validate, polish, and deploy with a performance and quality check.",
  },
];

export const contactFormEndpoint = "https://formspree.io/f/xdarkkrb";
