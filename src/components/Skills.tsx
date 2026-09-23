"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Globe,
  FileCode,
  Palette,
  Terminal,
  Zap,
  Server,
  Layers,
  Workflow,
  Radio,
  ShieldCheck,
  Coffee,
  Bot,
  Mic,
  Volume2,
  Sparkles,
  Network,
  Database,
  Table,
  Boxes,
  Cloud,
  HardDrive,
  Send,
  Container,
  GitBranch,
  FileCheck,
  FileText,
  Search,
  CheckCircle,
  Cpu
} from "lucide-react";
import { SKILLS } from "@/data/portfolioData";
import { useSound } from "@/context/SoundContext";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Atom: Globe,
  Globe: Globe,
  FileCode: FileCode,
  Palette: Palette,
  Code: Code,
  Layout: Layers,
  Terminal: Terminal,
  Zap: Zap,
  Server: Server,
  Layers: Layers,
  Workflow: Workflow,
  Radio: Radio,
  ShieldCheck: ShieldCheck,
  Coffee: Coffee,
  Bot: Bot,
  Mic: Mic,
  Volume2: Volume2,
  Sparkles: Sparkles,
  Network: Network,
  Database: Database,
  Table: Table,
  Boxes: Boxes,
  Cloud: Cloud,
  HardDrive: HardDrive,
  Send: Send,
  Container: Container,
  GitBranch: GitBranch,
  FileCheck: FileCheck,
  FileText: FileText
};

const categories = ["All", "Frontend", "Backend", "AI/ML", "Database", "Cloud & DevOps"] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { playClick } = useSound();

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600/15 top-10 right-1/4" />
      <div className="glow-blob w-[400px] h-[400px] bg-purple-600/15 bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-primary">Technology Matrix</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Comprehensive stack spanning modern web ecosystems, low-latency microservices, real-time AI architectures, and cloud deployments.
          </motion.p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-card border border-white/10 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClick();
                    setActiveCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., FastAPI, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-card border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Code;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 relative group"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-cyan-300 group-hover:bg-indigo-500/20 group-hover:border-cyan-400/40 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-xs font-mono font-bold text-indigo-400">
                          {skill.level}%
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Highlights Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 rounded-2xl glass-card border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full-Stack & AI Pipeline Integration</h4>
              <p className="text-xs text-slate-300">
                Seamless flow between React frontends, high-concurrency FastAPI backends, and low-latency LLM/voice engines.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 font-mono text-xs text-cyan-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Production Ready Architecture</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
