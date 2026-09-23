"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileDown, Send, Mail, Sparkles, Terminal, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/BrandIcons";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";
import { useSound } from "@/context/SoundContext";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const { playClick, playPop } = useSound();

  // Typing effect
  useEffect(() => {
    const fullText = PERSONAL_INFO.taglines[currentTaglineIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 40 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTaglineIndex, typingSpeed]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600/30 top-10 left-1/4 -translate-x-1/2 animate-pulse-glow" />
      <div className="glow-blob w-[450px] h-[450px] bg-purple-600/25 top-32 right-10" />
      <div className="glow-blob w-[350px] h-[350px] bg-cyan-500/20 bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-card border border-indigo-500/30 mb-6 group cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {PERSONAL_INFO.availability}
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient-primary block sm:inline">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            {/* Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 flex items-center h-10 sm:h-12"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 font-mono flex items-center">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mr-2.5 inline-block" />
                <span>{displayedText}</span>
                <span className="inline-block w-2.5 h-6 sm:h-7 bg-cyan-400 ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto"
            >
              {/* Resume Download / View Button */}
              <button
                onClick={() => {
                  playPop();
                  onOpenResume();
                }}
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 interactive"
              >
                <FileDown className="w-4 h-4" />
                <span>Download / View Resume</span>
              </button>

              {/* Contact Me Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  playClick();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 hover:text-white transition-all duration-300 interactive group"
              >
                <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-10 flex items-center space-x-4"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center space-x-3">
                {SOCIAL_LINKS.map((link) => {
                  const getIcon = () => {
                    switch (link.name) {
                      case "GitHub":
                        return <GithubIcon className="w-4 h-4" />;
                      case "LinkedIn":
                        return <LinkedinIcon className="w-4 h-4" />;
                      case "LeetCode":
                        return <LeetcodeIcon className="w-4 h-4" />;
                      default:
                        return <Mail className="w-4 h-4" />;
                    }
                  };
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playClick()}
                      className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all duration-300 interactive shadow-md"
                      aria-label={link.name}
                      title={link.name}
                    >
                      {getIcon()}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual Card & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Holographic Glowing Card Container */}
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-500/20">
                <div className="rounded-[22px] bg-[#0F172A] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
                  
                  {/* Decorative circuit pattern */}
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      engineer@kriti-rawani:~
                    </span>
                  </div>

                  {/* Profile & Code Snapshot */}
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px] shadow-lg flex-shrink-0">
                        <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                          KR
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Kriti Rawani</p>
                        <p className="text-cyan-400 text-xs">Full Stack & AI Engineer</p>
                        <p className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" /> B.Tech CSE (8.1 CGPA)
                        </p>
                      </div>
                    </div>

                    {/* Interactive Code Snippet */}
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/10 text-[12px] space-y-1">
                      <p className="text-purple-400">const <span className="text-cyan-300">developer</span> = &#123;</p>
                      <p className="pl-4 text-slate-300">name: <span className="text-emerald-300">&apos;Kriti Rawani&apos;</span>,</p>
                      <p className="pl-4 text-slate-300">role: <span className="text-emerald-300">&apos;Full-Stack & AI Builder&apos;</span>,</p>
                      <p className="pl-4 text-slate-300">coreStack: [<span className="text-amber-300">&apos;FastAPI&apos;</span>, <span className="text-amber-300">&apos;React&apos;</span>, <span className="text-amber-300">&apos;Node.js&apos;</span>, <span className="text-amber-300">&apos;AWS&apos;</span>],</p>
                      <p className="pl-4 text-slate-300">aiFocus: [<span className="text-amber-300">&apos;Whisper STT&apos;</span>, <span className="text-amber-300">&apos;TTS&apos;</span>, <span className="text-amber-300">&apos;RAG&apos;</span>],</p>
                      <p className="pl-4 text-slate-300">passion: <span className="text-emerald-300">&apos;High-Performance Low-Latency Systems&apos;</span></p>
                      <p className="text-purple-400">&#125;;</p>
                    </div>

                    {/* Quick Live Indicators */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center space-x-2">
                        <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                        <span>FastAPI & Python</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>LLM & Voice STT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-card border border-indigo-400/30 shadow-xl shadow-indigo-500/20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
                <span className="text-xs font-bold text-white">WebSocket Streaming</span>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-card border border-purple-400/30 shadow-xl shadow-purple-500/20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#8B5CF6]" />
                <span className="text-xs font-bold text-white">AWS Cloud & Next.js 15</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
