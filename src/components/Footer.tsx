"use client";

import React, { useState, useEffect } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/BrandIcons";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";
import { useSound } from "@/context/SoundContext";

export default function Footer() {
  const [time, setTime] = useState("");
  const { playClick, playPop } = useSound();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Bangalore IST time
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playPop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden">
      {/* Ambience line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Left Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 text-xs">
                  KR
                </div>
              </div>
              <span className="text-base font-bold text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full Stack Developer & AI Engineer specializing in FastAPI, React, Node.js, and low-latency voice AI systems.
            </p>
            {time && (
              <div className="flex items-center space-x-2 text-[11px] font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Bangalore, India: {time} (IST)</span>
              </div>
            )}
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
            <a href="#about" onClick={() => playClick()} className="hover:text-white transition-colors">About</a>
            <a href="#experience" onClick={() => playClick()} className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" onClick={() => playClick()} className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" onClick={() => playClick()} className="hover:text-white transition-colors">Projects</a>
            <a href="#ai-demo" onClick={() => playClick()} className="hover:text-white transition-colors">AI Demo</a>
            <a href="#contact" onClick={() => playClick()} className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-3">
            <div className="flex items-center space-x-2.5">
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
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300 border border-white/5 transition-colors"
                    aria-label={link.name}
                  >
                    {getIcon()}
                  </a>
                );
              })}

              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 hover:text-white border border-indigo-500/30 transition-colors ml-1"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              © {new Date().getFullYear()} Kriti Rawani • All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
