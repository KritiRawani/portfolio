"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useSound } from "@/context/SoundContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { playPop } = useSound();

  const handleToggle = () => {
    playPop();
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-slate-300 hover:text-white group relative"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 text-amber-400 transition-all duration-500 transform ${
            theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`w-5 h-5 text-indigo-400 absolute transition-all duration-500 transform ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
