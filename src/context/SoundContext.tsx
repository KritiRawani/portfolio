"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playPop: () => void;
  playClick: () => void;
  playSuccess: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("kr_portfolio_sound");
    if (saved === "true") {
      setSoundEnabled(true);
    }
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem("kr_portfolio_sound", String(next));
  };

  const playTone = (freq: number, type: OscillatorType, duration: number, gainValue = 0.05) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainValue, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted before user gesture
    }
  };

  const playPop = () => {
    playTone(520, "sine", 0.08, 0.03);
  };

  const playClick = () => {
    playTone(400, "triangle", 0.05, 0.04);
  };

  const playSuccess = () => {
    if (!soundEnabled) return;
    setTimeout(() => playTone(523.25, "sine", 0.12, 0.05), 0);
    setTimeout(() => playTone(659.25, "sine", 0.12, 0.05), 80);
    setTimeout(() => playTone(783.99, "sine", 0.25, 0.05), 160);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playPop, playClick, playSuccess }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
