"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Check, Copy, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Cpu, Code2 } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS } from "@/data/portfolioData";
import { useSound } from "@/context/SoundContext";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const { playClick, playSuccess } = useSound();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0F172A] light:bg-white border border-white/15 shadow-2xl shadow-indigo-500/10 overflow-hidden z-10"
          >
            {/* Header / Actions Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/30">
                  KR
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Kriti Rawani — Curriculum Vitae</h3>
                  <p className="text-xs text-slate-400">Full Stack Developer & AI Engineer • 2026</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  title="Print / Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Kriti%20Rawani`}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Hire Kriti</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 print:p-0 print:overflow-visible">
              {/* Header Info */}
              <div className="border-b border-white/10 pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                      KRITI RAWANI
                    </h1>
                    <p className="text-base font-semibold text-gradient-primary mt-1">
                      Full-Stack Developer | AI Systems Engineer
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-slate-300">
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{PERSONAL_INFO.phone}</span>
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center space-x-1.5 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{PERSONAL_INFO.email}</span>
                      {copied ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-slate-500" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> Professional Summary
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {PERSONAL_INFO.bio}
                  </p>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <Briefcase className="w-5 h-5 text-indigo-400" /> Experience
                </h3>
                <div className="space-y-6">
                  {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="relative pl-4 border-l-2 border-indigo-500/30">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5">
                        <h4 className="text-base font-bold text-white">
                          {exp.role} <span className="text-indigo-400 font-normal">— {exp.company}</span>
                        </h4>
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-0.5 rounded-full w-fit mt-1 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-300 mt-2">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} className="leading-relaxed">{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <Code2 className="w-5 h-5 text-cyan-400" /> Key Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-white text-sm">{proj.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">{proj.description}</p>
                      </div>
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {proj.techStack.slice(0, 4).map((tech, tIdx) => (
                            <span key={tIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950/50 text-indigo-300 border border-indigo-800/40">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Grid */}
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <Cpu className="w-5 h-5 text-purple-400" /> Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                    <p className="text-xs font-bold text-indigo-400 mb-1.5">Languages</p>
                    <p className="text-xs text-slate-300">Python, JavaScript, TypeScript, Java</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                    <p className="text-xs font-bold text-purple-400 mb-1.5">Frameworks & Backend</p>
                    <p className="text-xs text-slate-300">FastAPI, React.js, Next.js, Node.js, Express.js, REST, WebSockets</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                    <p className="text-xs font-bold text-cyan-400 mb-1.5">AI & NLP</p>
                    <p className="text-xs text-slate-300">LLMs, RAG, OpenAI Whisper STT, Microsoft Azure TTS, LangChain</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                    <p className="text-xs font-bold text-amber-400 mb-1.5">Databases</p>
                    <p className="text-xs text-slate-300">MongoDB, PostgreSQL, SQL, Vector DBs</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                    <p className="text-xs font-bold text-emerald-400 mb-1.5">Cloud & DevOps</p>
                    <p className="text-xs text-slate-300">AWS (EC2, S3, SES), Docker, Git, GitHub Actions</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                    <p className="text-xs font-bold text-rose-400 mb-1.5">Tools & Docs</p>
                    <p className="text-xs text-slate-300">Postman, Swagger, Jira, LaTeX Document Processing</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" /> Education
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{PERSONAL_INFO.education.degree}</h4>
                    <p className="text-xs text-slate-400">{PERSONAL_INFO.education.institution}</p>
                  </div>
                  <div className="text-left sm:text-right mt-1 sm:mt-0">
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      CGPA: {PERSONAL_INFO.education.cgpa}
                    </span>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">{PERSONAL_INFO.education.period}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="px-6 py-4 border-t border-white/10 bg-slate-900/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Ready for full-time & high-impact opportunities
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
