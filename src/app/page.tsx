"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen transition-colors duration-500 overflow-x-hidden bg-grid-pattern">
      {/* Dynamic Cursor & Particles */}
      <CustomCursor />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Content Sections */}
      <div className="relative z-10 flex flex-col space-y-8 sm:space-y-12">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <VoiceAgentDemo />
        <Achievements />
        <Contact />
      </div>

      {/* Footer & Floating Controls */}
      <Footer />
      <ScrollToTop />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
