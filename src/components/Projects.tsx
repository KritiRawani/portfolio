"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  Sparkles,
  ArrowUpRight,
  Mic,
  FileSearch,
  Eye
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";
import { useSound } from "@/context/SoundContext";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const { playClick, playPop } = useSound();

  const categories = ["All", "AI / ML", "Full Stack", "Frontend"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const getProjectVisual = (id: string) => {
    switch (id) {
      case "ai-voice-agent":
        return (
          <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden p-6 border-b border-white/10 group-hover:border-indigo-500/40 transition-colors">
            {/* Animated Waveform Simulation */}
            <div className="flex items-center space-x-1.5 h-16">
              {[40, 70, 95, 30, 85, 100, 60, 90, 45, 80, 65, 95, 35, 75].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.08,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 bg-gradient-to-t from-indigo-500 via-purple-400 to-cyan-400 rounded-full"
                />
              ))}
            </div>

            <div className="mt-3 flex items-center space-x-2 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
              <Mic className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>WebSocket Stream • 220ms Latency</span>
            </div>

            <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
              FastAPI + Whisper + Azure TTS
            </div>
          </div>
        );

      case "kamai-kharcha":
        return (
          <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden p-6 border-b border-white/10 group-hover:border-purple-500/40 transition-colors">
            {/* Expense Chart Simulation */}
            <div className="w-full max-w-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-300">Monthly Budget Tracking</span>
                <span className="text-emerald-400 font-bold">₹1,24,500 (+12%)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden flex">
                <div className="bg-indigo-500 h-full w-[45%]" />
                <div className="bg-purple-500 h-full w-[30%]" />
                <div className="bg-cyan-400 h-full w-[15%]" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1">
                <span>Income: Node/MongoDB</span>
                <span className="text-purple-300">AWS S3 Receipts</span>
              </div>
            </div>

            <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
              React + Express + AWS SES
            </div>
          </div>
        );

      case "skill-eval":
        return (
          <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden p-6 border-b border-white/10 group-hover:border-cyan-500/40 transition-colors">
            {/* Test Eval Widget */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 w-full max-w-xs text-xs space-y-2">
              <div className="flex items-center justify-between font-mono">
                <span className="text-white font-bold">Assessment Module #04</span>
                <span className="text-amber-400 font-bold">09:45 remaining</span>
              </div>
              <div className="p-2 rounded bg-slate-950 text-[11px] text-slate-300 font-mono">
                <code>{`function evaluateAlgo(nodes) {...}`}</code>
              </div>
              <div className="flex justify-between text-[10px] text-cyan-300 font-mono">
                <span>Validation: 100% Passed</span>
                <span className="text-emerald-400">Auto-Synced</span>
              </div>
            </div>

            <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
              Modular Component System
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden p-6 border-b border-white/10 group-hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center space-x-3 text-cyan-400">
              <FileSearch className="w-8 h-8" />
              <div className="text-left font-mono text-xs">
                <p className="text-white font-bold">Semantic Vector Search</p>
                <p className="text-slate-400">Top-k dense chunk retriever</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambience */}
      <div className="glow-blob w-[550px] h-[550px] bg-purple-600/15 top-1/4 left-1/3" />
      <div className="glow-blob w-[450px] h-[450px] bg-cyan-600/15 bottom-10 right-10" />

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
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering <span className="text-gradient-primary">Projects & Systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Explore real-time conversational voice pipelines, full-stack financial architectures, and responsive assessment engines.
          </motion.p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25"
                      : "glass-card hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group glass-card-hover"
              >
                <div>
                  {/* Visual Preview Banner */}
                  {getProjectVisual(project.id)}

                  {/* Content Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-950/60 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="text-[10px] font-mono text-cyan-300">
                          {project.metrics.split("•")[0]}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/40 text-indigo-300">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 gap-2">
                  <button
                    onClick={() => {
                      playPop();
                      setActiveProjectModal(project);
                    }}
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Deep Dive</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick()}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick()}
                    className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-colors"
                    title="Live Demo / Details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Deep-Dive Inspection Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
