"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 left-6 z-50 w-[62px] h-[32px] rounded-full p-[3px] transition-colors duration-500 focus:outline-none"
      style={{
        background: dark
          ? "linear-gradient(135deg, hsl(240 6% 20%), hsl(240 6% 14%))"
          : "linear-gradient(135deg, hsl(210 80% 80%), hsl(210 60% 70%))",
        boxShadow: dark
          ? "0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
      }}
      title={dark ? "Ljust tema" : "Mörkt tema"}
    >
      <motion.div
        className="w-[26px] h-[26px] rounded-full flex items-center justify-center"
        animate={{
          x: dark ? 0 : 30,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          background: dark
            ? "linear-gradient(145deg, hsl(240 6% 30%), hsl(240 6% 22%))"
            : "linear-gradient(145deg, #fff, #f0f0f0)",
          boxShadow: dark
            ? "0 2px 6px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.08)"
            : "0 2px 6px rgba(0,0,0,0.15), 0 0 0 0.5px rgba(0,0,0,0.04)",
        }}
      >
        {dark ? (
          <Moon className="w-[13px] h-[13px] text-white/50" />
        ) : (
          <Sun className="w-[13px] h-[13px] text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
