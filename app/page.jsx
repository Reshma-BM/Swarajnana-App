"use client";

import React, { useState, useEffect } from "react";
//import { motion } from "motion/react";
import { motion } from "framer-motion";

import {
  Music,
  Compass,
  BookOpen,
  Wand2,
  BarChart3,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const [currentRaga, setCurrentRaga] = useState(0);

  const featuredRagas = [
    {
      name: "Yaman",
      emotion: "Peace & Devotion",
      time: "Evening",
      color: "#FFD700",
    },
    {
      name: "Bhairav",
      emotion: "Serenity & Strength",
      time: "Morning",
      color: "#FF6B6B",
    },
    {
      name: "Malkauns",
      emotion: "Deep Contemplation",
      time: "Late Night",
      color: "#4ECDC4",
    },
    {
      name: "Darbari",
      emotion: "Majesty & Grandeur",
      time: "Night",
      color: "#9B59B6",
    },
  ];

  const features = [
     {
      icon: <Music className="w-8 h-8" />,
      title: "Classical Instruments",
      description:
        "Explore and hear authentic sounds of Indian classical instruments",
      href: "/instruments",
      color: "from-amber-500 to-yellow-600",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Legends of Indian Classical Music",
      description:
        "Learn about the legendary composers and innovators of Carnatic music",
      href: "/carnatic-masters",
      color: "from-rose-500 to-purple-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Meditation Mode",
      description: "Find inner peace through raga-based meditation",
      href: "/meditation",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "The Science Behind the Ragas",
      description: "Learn the science and philosophy behind ragas",
      href: "/learn",
      color: "from-purple-500 to-pink-600",
    },
   
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Raga Explorer",
      description: "Discover the emotional landscape of Indian classical ragas",
      href: "/raga-explorer",
      color: "from-blue-500 to-purple-600",
    },
      
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Music Visualization",
      description: "See sound waves and frequencies come alive",
      href: "/visualization",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Interactive Maps",
      description: "Explore the geographical origins of ragas",
      href: "/maps",
      color: "from-orange-500 to-red-600",
    },
    
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Music Creation",
      description: "Create your own melodies using raga principles",
      href: "/create",
      color: "from-indigo-500 to-blue-600",
    },
    
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRaga((prev) => (prev + 1) % featuredRagas.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif">
              Swarajnana
             <button
  onClick={() => {
    const audio = new Audio("/sounds/tanpura.mp3");
    audio.play();
    setTimeout(() => audio.pause(), 6000); // stop after 3 seconds
  }}
  className="ml-2 bg-white/10 hover:bg-white/20 text-white text-sm p-1.5 rounded-full shadow-sm transition duration-300"
  title="Play Tanpura Sound"
>
  🔊
</button>


            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto">
              ಸ್ವರಜ್ಞಾನ

            </p>
            <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-3xl mx-auto">
              Discovering Knowledge Through Indian Music
            </p>

            {/* Featured Raga Display */}
            <motion.div
              key={currentRaga}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto mb-12"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4"
                style={{ backgroundColor: featuredRagas[currentRaga].color }}
              ></div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Raga {featuredRagas[currentRaga].name}
              </h3>
              <p className="text-purple-200 mb-1">
                {featuredRagas[currentRaga].emotion}
              </p>
              <p className="text-purple-300 text-sm">
                Best time: {featuredRagas[currentRaga].time}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <a
                href="/raga-explorer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Musical Notes Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/20 text-2xl"
              initial={{
                x:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1000),
                y:
                  (typeof window !== "undefined" ? window.innerHeight : 800) +
                  50,
                rotate: 0,
              }}
              animate={{
                y: -50,
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-center mb-10">
   <div className="text-center mt-2">
     <p className="text-lg font-medium text-pink-200 tracking-wide mb-1">
      Created by :
       Reshma Pratibha W & Rakshitha M
     </p>
   </div>
 </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore the Universe of Sound
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Immerse yourself in the profound wisdom of Indian classical music
            through interactive experiences that blend ancient knowledge with
            modern technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <a href={feature.href} className="block h-full">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-purple-300 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-black/30 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Science of Emotion
            </h2>
            <p className="text-xl text-purple-200 leading-relaxed mb-8">
              Indian classical music is not just art—it's a sophisticated system
              of emotional and spiritual expression. Each raga is a complete
              universe of feeling, designed to evoke specific emotions and
              states of consciousness through precise mathematical relationships
              between notes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  72
                </div>
                <div className="text-purple-200">Melakarta Ragas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">9</div>
                <div className="text-purple-200">Fundamental Emotions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
                <div className="text-purple-200">Possibilities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
