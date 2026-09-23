"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Cloud, Database, GraduationCap, Globe, CheckCircle2, Sparkles, Terminal, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useSound } from "@/context/SoundContext";

export default function About() {
  const [activePillar, setActivePillar] = useState(0);
  const { playClick } = useSound();

  const pillars = [
    {
      title: "Full Stack Architecture",
      icon: Code2,
      tag: "React 19 • Next.js 15 • Node.js",
      description: "Developing scalable, performant frontend and backend systems with end-to-end type safety, modern component architectures, and responsive glassmorphism UI design.",
      bullets: [
        "Modern React.js and Next.js App Router design",
        "RESTful API architectures & WebSocket real-time feeds",
        "Robust JWT authentication & role-based access control",
        "State management and optimistic UI updates"
      ]
    },
    {
      title: "Real-Time AI & Voice Systems",
      icon: Cpu,
      tag: "FastAPI • Whisper STT • Azure TTS",
      description: "Architecting low-latency AI conversational microservices, neural speech pipelines, and Retrieval-Augmented Generation (RAG) vector engines.",
      bullets: [
        "Bi-directional WebSocket audio streaming for live voice bots",
        "OpenAI Whisper Speech-to-Text integration",
        "Microsoft Azure Neural TTS audio synthesis buffers",
        "LangChain, Vector DB retrieval, and LLM prompt chaining"
      ]
    },
    {
      title: "Cloud & Production DevOps",
      icon: Cloud,
      tag: "AWS EC2 • S3 • SES • Docker",
      description: "Deploying high-reliability services on AWS with Docker containerization, automated email notifications via SES, and secure cloud storage pipelines.",
      bullets: [
        "AWS EC2 instances with high availability and SSL",
        "AWS S3 signed URLs for secure document/media handling",
        "AWS SES integrated transactional email pipelines",
        "Docker containerization for repeatable deployments"
      ]
    },
    {
      title: "Data & Document Engineering",
      icon: Database,
      tag: "MongoDB • SQL • Python • LaTeX",
      description: "High-throughput data parsing, Python automation pipelines, MongoDB aggregation indexing, and automated technical LaTeX document generation.",
      bullets: [
        "High-performance MongoDB aggregation pipelines",
        "Python automation scripts for structured batch data",
        "Automated scientific/technical LaTeX publishing toolchains",
        "Relational SQL schema modeling and indexing"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="glow-blob w-96 h-96 bg-purple-600/20 top-20 right-0" />
      <div className="glow-blob w-96 h-96 bg-indigo-600/15 bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET TO KNOW ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Passionate About Building <span className="text-gradient-primary">Scalable AI & Web Systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            I combine full-stack engineering with real-time AI architectures to create fast, reliable, and delightful digital experiences.
          </motion.p>
        </div>

        {/* Main Grid: Bio + Interactive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Facts & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Bio Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Professional Background</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1 font-mono">Location</span>
                  <span className="font-semibold text-white">{PERSONAL_INFO.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 font-mono">Experience</span>
                  <span className="font-semibold text-cyan-400">1+ Years Industry</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 font-mono">Languages</span>
                  <span className="font-semibold text-white">English, Hindi</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 font-mono">Focus Area</span>
                  <span className="font-semibold text-purple-400">FastAPI & AI Voice</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {PERSONAL_INFO.education.period}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      CGPA {PERSONAL_INFO.education.cgpa}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {PERSONAL_INFO.education.institution}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {PERSONAL_INFO.education.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Pillars / Expertise Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Pillar Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      playClick();
                      setActivePillar(idx);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                        : "glass-card hover:bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                    <span className="text-xs font-bold leading-tight block">
                      {pillar.title.split(" ")[0]} {pillar.title.split(" ")[1] || ""}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card */}
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  {React.createElement(pillars[activePillar].icon, {
                    className: "w-6 h-6 text-indigo-400"
                  })}
                  <h4 className="text-xl font-bold text-white">
                    {pillars[activePillar].title}
                  </h4>
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                  {pillars[activePillar].tag}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {pillars[activePillar].description}
              </p>

              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Key Competencies & Implementations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pillars[activePillar].bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
