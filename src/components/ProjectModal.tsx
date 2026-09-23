"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { Project } from "@/types";
import { useSound } from "@/context/SoundContext";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { playClick } = useSound();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0F172A] border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white line-clamp-1">{project.title}</h3>
            </div>
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Tagline & Metrics */}
            <div>
              <p className="text-base font-medium text-cyan-400 leading-relaxed">
                {project.tagline}
              </p>
              {project.metrics && (
                <div className="mt-2 inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.metrics}</span>
                </div>
              )}
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Architecture & Engineering Deep-Dive
              </h4>
              <div className="space-y-2">
                {project.detailedDescription.map((desc, idx) => (
                  <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/70 border border-white/5 text-xs text-slate-200 flex items-start space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-purple-400" /> System Workflow Pipeline
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {project.architectureHighlights.map((pipe, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/80 border border-indigo-500/20 text-indigo-200 flex items-center space-x-2"
                    >
                      <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{pipe}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Technology Stack Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer CTAs */}
          <div className="px-6 py-4 border-t border-white/10 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="flex items-center space-x-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all shadow-lg shadow-indigo-500/20"
              >
                <span>Live Repository & Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
