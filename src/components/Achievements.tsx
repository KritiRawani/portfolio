"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, FolderGit2, Cpu, Sparkles, Award, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import { STATS } from "@/data/portfolioData";

function CounterItem({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1500;
    const stepTime = 30;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-indigo-400" />;
      case "FolderGit2":
        return <FolderGit2 className="w-6 h-6 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/10 relative group overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {getIcon(stat.icon)}
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
          Metric #{index + 1}
        </span>
      </div>

      <div className="flex items-baseline space-x-1">
        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-gradient-primary">
          {stat.suffix}
        </span>
      </div>

      <h4 className="text-base font-bold text-slate-200 mt-2">
        {stat.label}
      </h4>

      <p className="text-xs text-slate-400 mt-1 font-mono">
        {stat.sublabel}
      </p>

      {/* Subtle bottom highlight bar */}
      <div className="w-full h-1 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-transparent rounded-full mt-4 group-hover:from-indigo-500 group-hover:via-cyan-400 transition-all duration-500" />
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Glow Ambience */}
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600/15 top-1/3 right-10" />

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
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>NUMBERS & METRICS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Key Highlights & <span className="text-gradient-primary">Milestones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Quantifiable engineering outcomes across production full-stack systems, real-time voice architectures, and high-volume data pipelines.
          </motion.p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <CounterItem key={index} stat={stat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
