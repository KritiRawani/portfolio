"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, Check, Copy, Sparkles, MessageSquare, User, AtSign, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/BrandIcons";
import confetti from "canvas-confetti";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";
import { useSound } from "@/context/SoundContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Opportunity",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { playClick, playSuccess, playPop } = useSound();

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission / mailto pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      playSuccess();

      // Confetti burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366F1", "#8B5CF6", "#06B6D4", "#38BDF8"]
        });
      } catch {
        // Confetti fallback
      }

      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "Full-Time Opportunity",
          message: ""
        });
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    playPop();
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambience */}
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600/20 bottom-10 left-10" />
      <div className="glow-blob w-[450px] h-[450px] bg-cyan-600/15 top-1/4 right-10" />

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
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET&apos;S COLLABORATE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Get in Touch & <span className="text-gradient-primary">Build Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Whether you have a role inquiry, AI architecture project, or just want to say hi, my inbox is always open.
          </motion.p>
        </div>

        {/* Main Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Direct Email</span>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {PERSONAL_INFO.email}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Phone & WhatsApp</span>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {PERSONAL_INFO.phone}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Current Base</span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                    {PERSONAL_INFO.location}
                  </h4>
                </div>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Social Profiles & Repositories
              </h5>
              <div className="flex flex-wrap gap-2.5">
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
                      className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      {getIcon()}
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                    <p className="text-sm text-slate-300 max-w-md">
                      Thank you for reaching out. I have received your message and will respond promptly to your email at <span className="text-cyan-300 font-semibold">{formData.email}</span>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-indigo-400" /> Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.name ? "border-rose-500" : "border-white/10 focus:border-indigo-500"
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
                          <AtSign className="w-3.5 h-3.5 text-cyan-400" /> Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.email ? "border-rose-500" : "border-white/10 focus:border-cyan-500"
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject / Purpose */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Discussion Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="Full-Time Opportunity" className="bg-slate-900">Full-Time Engineering Role</option>
                        <option value="AI Voice & FastAPI Project" className="bg-slate-900">AI Voice & FastAPI Microservice Project</option>
                        <option value="Consulting & Architecture" className="bg-slate-900">Technical Consulting / Architecture</option>
                        <option value="General Collaboration" className="bg-slate-900">General Collaboration / Networking</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-indigo-400" /> Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project, team, or opportunity..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                          errors.message ? "border-rose-500" : "border-white/10 focus:border-indigo-500"
                        }`}
                      />
                      {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all shadow-xl shadow-indigo-600/25 flex items-center justify-center space-x-2 interactive group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message to Kriti</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
