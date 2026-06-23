"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { BackgroundGrid } from "@/components/ui/background-grid";
import { IntroAnimation } from "@/components/portfolio/intro-animation";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Workflow } from "@/components/portfolio/workflow";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

import {
  navLinks,
  heroFacts,
  highlights,
  skillGroups,
  projectCards,
  workflowSteps,
  contactLinks,
  contactFormEndpoint,
} from "@/data/portfolio-data";

export function PortfolioSite() {
  const [introVisible, setIntroVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = window.setTimeout(() => setIntroVisible(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#272e33]" />;
  }

  return (
    <main className="portfolio-shell">
      <BackgroundGrid />

      <AnimatePresence>
        {introVisible && <IntroAnimation />}
      </AnimatePresence>

      <Header links={navLinks} />

      <Hero facts={heroFacts} highlights={highlights} />

      <About />

      <Skills skillGroups={skillGroups} />

      <Projects projectCards={projectCards} />

      <Workflow steps={workflowSteps} />

      <Contact contactLinks={contactLinks} formEndpoint={contactFormEndpoint} />

      <Footer />
    </main>
  );
}
