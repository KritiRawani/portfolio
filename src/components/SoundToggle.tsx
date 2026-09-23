"use client";

import React from "react";
import { useSound } from "@/context/SoundContext";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const { soundEnabled, toggleSound, playPop } = useSound();

  const handleToggle = () => {
    if (!soundEnabled) {
      toggleSound();
      // will play on next tick
      setTimeout(() => playPop(), 50);
    } else {
      toggleSound();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 group relative ${
        soundEnabled
          ? "border-indigo-500/50 bg-indigo-500/10 text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.25)]"
          : "border-white/10 bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10"
      }`}
      aria-label="Toggle UI Sound Effects"
      title={soundEnabled ? "Mute interactive sounds" : "Enable interactive sounds"}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5 animate-pulse" />
      ) : (
        <VolumeX className="w-5 h-5 opacity-60 group-hover:opacity-100" />
      )}
    </button>
  );
}
