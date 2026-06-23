import type { LucideIcon } from "lucide-react";

export type ThemeMode = "dark" | "light";
export type AccentMode = "aurora" | "mono" | "sunset";

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export type ProjectCard = {
  title: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  repo: string;
  live: string;
  image: string;
  showLive?: boolean;
};

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type NavLink = {
  label: string;
  href: string;
};
