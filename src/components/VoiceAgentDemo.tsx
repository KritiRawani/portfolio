"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Volume2, Sparkles, Terminal, Activity, Zap, Play, RotateCcw, Cpu, ShieldAlert, CheckCircle2 } from "lucide-react";
import { useSound } from "@/context/SoundContext";

interface MessageSimulation {
  sender: "user" | "agent";
  text: string;
  latency?: string;
  tokensPerSec?: number;
}

const DEMO_SCENARIOS = [
  {
    title: "FastAPI & WebSocket Streaming",
    userPrompt: "How do you achieve sub-250ms latency in the AI Voice Agent?",
    agentResponse: "We use an asynchronous FastAPI pipeline. Incoming audio is segmented into 100ms chunks over WebSockets, streamed concurrently to OpenAI Whisper for real-time transcription, then fed to GPT-4o with streaming tokens routed directly into Microsoft Azure Neural TTS audio buffers. This eliminates batching latency!"
  },
  {
    title: "AWS Microservices Architecture",
    userPrompt: "How is Kamai-Kharcha deployed for high availability?",
    agentResponse: "The backend runs on AWS EC2 behind an NGINX reverse proxy with automatic SSL renewal. Financial receipts are directly uploaded to AWS S3 using secure signed URLs, while AWS SES handles automated monthly transactional expense digests with 99.9% uptime."
  },
  {
    title: "Frontend State & Performance",
    userPrompt: "How do you optimize React 19 / Next.js 15 render times?",
    agentResponse: "By leveraging React Server Components for zero-bundle data fetching, optimistic UI updates for instantaneous user interactions, selective hydration, and modular Tailwind CSS glassmorphic tokens."
  }
];

export default function VoiceAgentDemo() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const [statusText, setStatusText] = useState("Ready to test live pipeline");
  const [metrics, setMetrics] = useState({ latency: "218ms", tokens: "48 tok/s", vad: "Active" });
  const { playPop, playClick } = useSound();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startSimulation = () => {
    playClick();
    setIsStreaming(true);
    setStreamedText("");
    setStatusText("Ingesting Audio -> Whisper STT Transcription...");

    setTimeout(() => {
      setStatusText("LLM Streaming -> Microsoft Azure Neural TTS Synthesizing...");
      const fullText = DEMO_SCENARIOS[activeScenario].agentResponse;
      let currentIndex = 0;

      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        if (currentIndex < fullText.length) {
          setStreamedText(fullText.substring(0, currentIndex + 2));
          currentIndex += 2;
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsStreaming(false);
          setStatusText("Audio playback complete • Connection Idle");
          playPop();
        }
      }, 25);
    }, 600);
  };

  const resetSimulation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsStreaming(false);
    setStreamedText("");
    setStatusText("Ready to test live pipeline");
  };

  useEffect(() => {
    resetSimulation();
  }, [activeScenario]);

  return (
    <section id="ai-demo" className="py-24 relative overflow-hidden">
      {/* Glow Ambience */}
      <div className="glow-blob w-[500px] h-[500px] bg-cyan-600/15 top-10 left-10" />
      <div className="glow-blob w-[450px] h-[450px] bg-indigo-600/15 bottom-10 right-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
            <span>INTERACTIVE AI LAB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Live AI Voice Agent <span className="text-gradient-cyan">Pipeline Simulator</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Test an interactive prototype of the sub-second conversational voice pipeline designed by Kriti Rawani using FastAPI, Whisper STT, and Azure Neural TTS.
          </motion.p>
        </div>

        {/* Demo Playground Card */}
        <div className="glass-card rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>FastAPI Real-Time WebSocket Engine</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Simulator
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Telemetry: {statusText}
                </p>
              </div>
            </div>

            {/* Scenario Pickers */}
            <div className="flex flex-wrap gap-2">
              {DEMO_SCENARIOS.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScenario(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeScenario === idx
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  Prompt #{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Playground Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Controls & User Voice Bubble */}
            <div className="lg:col-span-6 space-y-6">
              {/* User Question Box */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-slate-400 flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-indigo-400" /> User Audio Ingestion (Whisper STT)
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">
                    {DEMO_SCENARIOS[activeScenario].title}
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">
                  &ldquo;{DEMO_SCENARIOS[activeScenario].userPrompt}&rdquo;
                </p>
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={startSimulation}
                  disabled={isStreaming}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-white transition-all shadow-lg ${
                    isStreaming
                      ? "bg-slate-700 cursor-not-allowed opacity-75"
                      : "bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-cyan-500/20 hover:scale-105"
                  }`}
                >
                  {isStreaming ? (
                    <>
                      <Activity className="w-4 h-4 animate-spin text-cyan-300" />
                      <span>Streaming AI Voice Turn...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Run Live Voice Simulation</span>
                    </>
                  )}
                </button>

                <button
                  onClick={resetSimulation}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                  title="Reset Demo"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Real-Time Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block">E2E Latency</span>
                  <span className="text-xs font-mono font-bold text-cyan-400">{metrics.latency}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block">Throughput</span>
                  <span className="text-xs font-mono font-bold text-indigo-400">{metrics.tokens}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block">VAD Status</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">{metrics.vad}</span>
                </div>
              </div>
            </div>

            {/* Right: Live Audio Waveform & AI Streaming Response */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-indigo-500/30 relative overflow-hidden space-y-4">
                
                {/* Waveform Visualization Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <Volume2 className={`w-4 h-4 ${isStreaming ? "text-cyan-400 animate-pulse" : "text-slate-500"}`} />
                    <span className="text-xs font-mono text-slate-300 font-bold">
                      Neural TTS Streaming Buffer
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
                      <motion.div
                        key={bar}
                        animate={
                          isStreaming
                            ? { height: [4, 20, 8, 24, 6, 16][bar % 6] }
                            : { height: 4 }
                        }
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: bar * 0.07
                        }}
                        className={`w-1 rounded-full ${
                          isStreaming ? "bg-cyan-400" : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* AI Streaming Response Content */}
                <div className="min-h-[140px] font-mono text-xs text-slate-200 leading-relaxed">
                  {streamedText ? (
                    <div className="space-y-2">
                      <p className="text-slate-200">
                        {streamedText}
                        {isStreaming && <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-32 text-slate-500 text-center space-y-2">
                      <Cpu className="w-8 h-8 opacity-40" />
                      <p className="text-xs font-mono">
                        Click &ldquo;Run Live Voice Simulation&rdquo; to initiate streaming WebSocket payload.
                      </p>
                    </div>
                  )}
                </div>

                {/* Pipeline Protocol Badges */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" /> WebSocket Binary Frame
                  </span>
                  <span>•</span>
                  <span className="text-indigo-300">FastAPI AsyncIO</span>
                  <span>•</span>
                  <span className="text-purple-300">Azure TTS 24kHz</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
