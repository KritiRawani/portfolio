"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, ChevronRight, CheckCircle2, Building2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";
import { useSound } from "@/context/SoundContext";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const { playPop } = useSound();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="glow-blob w-96 h-96 bg-indigo-600/15 top-1/3 left-0" />
      <div className="glow-blob w-96 h-96 bg-cyan-600/15 bottom-1/4 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-4"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAREER PATHWAY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional <span className="text-gradient-primary">Experience & Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            A track record of engineering scalable full-stack platforms, real-time voice AI microservices, and high-precision data workflows.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Animated Timeline Track */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30" />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Center Node Badge (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center z-20 shadow-lg shadow-indigo-500/50">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 animate-pulse" />
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div
                      className={`glass-card rounded-2xl p-6 sm:p-8 border border-white/10 glass-card-hover relative group ${
                        exp.current ? "border-indigo-500/40 shadow-indigo-500/10 shadow-xl" : ""
                      }`}
                    >
                      {/* Current Role Glow Badge */}
                      {exp.current && (
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                          <span>Present Role</span>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center space-x-2 text-slate-300 text-sm font-semibold mt-1">
                            <Building2 className="w-4 h-4 text-indigo-400" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="inline-flex items-center space-x-1 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-mono">
                              <MapPin className="w-3 h-3 text-slate-500" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bullets List */}
                      <ul className="space-y-2.5 my-4 text-sm text-slate-300">
                        {exp.description.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-400/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
