"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function RagaExplorationPage() {
  const audioRefs = useRef({});

  const ragas = [
    {
      id: 1,
      name: "Raga Bhairav",
      mood: "Calm & Spiritual",
      time: "Morning",
      audio: "/sounds/bhairav.mp3",
    },
    {
      id: 2,
      name: "Raga Yaman",
      mood: "Peaceful & Romantic",
      time: "Evening",
      audio: "/sounds/yaman.mp3",
    },
    {
      id: 3,
      name: "Raga Darbari",
      mood: "Majesty & Grandeur",
      time: "Night",
      audio: "/sounds/darbari.mp3",
    },
  ];

  const playAudio = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setTimeout(() => audio.pause(), 5000);
    }
  };

  // Safe SSR fallbacks
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  return (
    <div
      className="min-h-screen flex items-center justify-between px-10 text-white relative"
      style={{
        backgroundImage: "url('/images/logo.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a004f]/85 to-[#1b0033]/85 backdrop-blur-sm"></div>

      {/* Floating Musical Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const icons = ["🎵", "🎶", "🎼", "🎷", "🎻", "🎹"];
          const icon = icons[Math.floor(Math.random() * icons.length)];

          return (
            <motion.div
              key={i}
              className="absolute text-white/30 text-3xl"
              initial={{
                x: Math.random() * screenWidth,
                y: screenHeight + 50,
                rotate: 0,
              }}
              animate={{
                y: -50,
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 12 + 8,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              {icon}
            </motion.div>
          );
        })}
      </div>

      {/* Left Section */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-ragaGold to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
          Journey Through Ragas
        </h1>

        <p className="text-lg text-gray-300">
          Feel the emotion, science, and spirit of Indian classical music.
        </p>

        {/* Floating Icons Left Side */}
        <div className="absolute inset-y-0 left-0 w-1/4 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const icons = ["🎵", "🎶", "🎼", "🎷", "🎻", "🎹"];
            const icon = icons[Math.floor(Math.random() * icons.length)];

            return (
              <motion.div
                key={i}
                className="absolute text-white/30 text-3xl"
                initial={{
                  x: Math.random() * 100,
                  y: Math.random() * screenHeight,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  y: -100,
                  rotate: 360,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${Math.random() * 80}px`,
                }}
              >
                {icon}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right Section – Raga Cards */}
      <div className="relative z-10 flex flex-col space-y-6 w-full max-w-md">
        {ragas.map((raga) => (
          <motion.div
            key={raga.id}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white/15 border border-white/10 backdrop-blur-md shadow-lg transition duration-300 text-left h-40 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-1 text-pink-100">
                {raga.name}
              </h2>
              <p className="text-gray-200 italic text-sm">{raga.mood}</p>
              <p className="text-xs text-gray-300">Best time: {raga.time}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => playAudio(raga.id)}
                className="px-3 py-1.5 rounded-lg bg-pink-400/30 hover:bg-pink-400/50 text-white text-xs font-medium transition"
              >
                🎧 Listen
              </button>
              <button
                className="px-3 py-1.5 rounded-lg bg-blue-400/30 hover:bg-blue-400/50 text-white text-xs font-medium transition"
                onClick={() =>
                  alert(`Visualizing ${raga.name}... (Coming soon 🎵)`)
                }
              >
                ✨ Visualize
              </button>
            </div>

            <audio
              ref={(el) => (audioRefs.current[raga.id] = el)}
              src={raga.audio}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
