"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sparkles, Send } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";
import { useSound } from "@/context/SoundContext";

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "AI Demo", href: "#ai-demo" },
  { name: "Metrics", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { playClick, playPop } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // ScrollSpy logic
      const sections = navLinks.map(l => l.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              playPop();
            }}
            className="flex items-center space-x-2.5 group interactive"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-base">
                  KR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight flex items-center gap-1.5 group-hover:text-indigo-300 transition-colors">
                Kriti Rawani
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </span>
              <span className="text-[11px] font-mono text-cyan-400 -mt-0.5">
                Full Stack & AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/80 to-purple-600/80 shadow-md shadow-indigo-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <SoundToggle />
            <ThemeToggle />

            {/* Resume Button */}
            <button
              onClick={() => {
                playClick();
                onOpenResume();
              }}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 group"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-xl group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center space-x-1.5 px-4 py-2 rounded-[11px] bg-slate-900/90 group-hover:bg-slate-900/60 transition-colors backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>Let&apos;s Connect</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggles */}
          <div className="flex sm:hidden items-center space-x-2">
            <SoundToggle />
            <ThemeToggle />
            <button
              onClick={() => {
                playPop();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden glass-nav border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
