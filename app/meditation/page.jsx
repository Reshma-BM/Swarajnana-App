"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  Heart,
  Wind,
  Clock,
  Zap,
} from "lucide-react";

export default function MeditationPage() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [breathPhase, setBreathPhase] = useState("inhale");
  const timerRef = useRef(null);
  const breathRef = useRef(null);

  const meditations = [
    {
      id: 1,
      name: "Yaman Serenity",
      raga: "Yaman",
      duration: 10,
      description:
        "A peaceful evening meditation using the devotional Raga Yaman to calm the mind and open the heart chakra.",
      color: "#FFD700",
      benefits: ["Reduces anxiety", "Promotes peace", "Enhances devotion"],
      frequency: 261.63,
      chakra: "Heart Chakra",
      breathPattern: { inhale: 4, hold: 4, exhale: 4 },
    },
    {
      id: 2,
      name: "Bhairav Dawn",
      raga: "Bhairav",
      duration: 15,
      description:
        "A grounding morning meditation with Raga Bhairav to strengthen your foundation and build inner resilience.",
      color: "#FF6B6B",
      benefits: ["Increases focus", "Builds strength", "Enhances clarity"],
      frequency: 293.66,
      chakra: "Root Chakra",
      breathPattern: { inhale: 5, hold: 5, exhale: 5 },
    },
    {
      id: 3,
      name: "Malkauns Introspection",
      raga: "Malkauns",
      duration: 20,
      description:
        "A deep meditative journey with Raga Malkauns for profound introspection and spiritual awakening.",
      color: "#4ECDC4",
      benefits: ["Enhances intuition", "Promotes insight", "Deepens awareness"],
      frequency: 329.63,
      chakra: "Third Eye Chakra",
      breathPattern: { inhale: 6, hold: 6, exhale: 6 },
    },
    {
      id: 4,
      name: "Darbari Majesty",
      raga: "Darbari",
      duration: 25,
      description:
        "A majestic night meditation with Raga Darbari to connect with your inner wisdom and divine presence.",
      color: "#9B59B6",
      benefits: [
        "Enhances wisdom",
        "Promotes connection",
        "Increases presence",
      ],
      frequency: 349.23,
      chakra: "Crown Chakra",
      breathPattern: { inhale: 7, hold: 7, exhale: 7 },
    },
    {
      id: 5,
      name: "Hamsadhwani Joy",
      raga: "Hamsadhwani",
      duration: 12,
      description:
        "An uplifting meditation with Raga Hamsadhwani to elevate your spirit and cultivate inner joy.",
      color: "#FF9500",
      benefits: ["Increases energy", "Promotes joy", "Enhances vitality"],
      frequency: 392.0,
      chakra: "Solar Plexus Chakra",
      breathPattern: { inhale: 4, hold: 4, exhale: 4 },
    },
    {
      id: 6,
      name: "Bageshri Love",
      raga: "Bageshri",
      duration: 18,
      description:
        "A heart-opening meditation with Raga Bageshri to cultivate compassion, love, and emotional healing.",
      color: "#E91E63",
      benefits: ["Enhances love", "Promotes healing", "Increases compassion"],
      frequency: 440.0,
      chakra: "Heart Chakra",
      breathPattern: { inhale: 5, hold: 5, exhale: 5 },
    },
  ];

  useEffect(() => {
    if (isPlaying && selectedSession) {
      timerRef.current = setInterval(() => {
        setSessionTime((prev) => {
          if (prev >= selectedSession.duration * 60) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, selectedSession]);

  useEffect(() => {
    if (isPlaying && selectedSession) {
      const pattern = selectedSession.breathPattern;
      const totalCycle =
        (pattern.inhale + pattern.hold + pattern.exhale) * 1000;
      const elapsed = (sessionTime * 1000) % totalCycle;

      if (elapsed < pattern.inhale * 1000) {
        setBreathPhase("inhale");
      } else if (elapsed < (pattern.inhale + pattern.hold) * 1000) {
        setBreathPhase("hold");
      } else {
        setBreathPhase("exhale");
      }
    }
  }, [sessionTime, isPlaying, selectedSession]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startMeditation = (session) => {
    setSelectedSession(session);
    setSessionTime(0);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const endSession = () => {
    setIsPlaying(false);
    setSessionTime(0);
    setSelectedSession(null);
  };

  const getBreathScale = () => {
    if (!selectedSession) return 1;
    const pattern = selectedSession.breathPattern;
    const totalCycle = (pattern.inhale + pattern.hold + pattern.exhale) * 1000;
    const elapsed = (sessionTime * 1000) % totalCycle;

    if (elapsed < pattern.inhale * 1000) {
      return 1 + (elapsed / (pattern.inhale * 1000)) * 0.5;
    } else if (elapsed < (pattern.inhale + pattern.hold) * 1000) {
      return 1.5;
    } else {
      const exhaleProgress =
        (elapsed - (pattern.inhale + pattern.hold) * 1000) /
        (pattern.exhale * 1000);
      return 1.5 - exhaleProgress * 0.5;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="/"
            className="text-white hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Meditation Mode
          </h1>
        </div>

        {/* Active Session */}
        {selectedSession && isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedSession.name}
              </h2>
              <p className="text-purple-200 mb-8">
                Raga {selectedSession.raga}
              </p>

              {/* Breathing Circle */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ scale: getBreathScale() }}
                  transition={{ duration: 0.1 }}
                  className="relative w-48 h-48 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${selectedSession.color}40, ${selectedSession.color}10)`,
                    border: `3px solid ${selectedSession.color}`,
                  }}
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">
                      {formatTime(sessionTime)}
                    </div>
                    <div className="text-lg font-semibold text-white capitalize">
                      {breathPhase}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Session Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-600/30 rounded-xl p-4">
                  <div className="text-purple-300 text-sm mb-1">Duration</div>
                  <div className="text-white font-semibold">
                    {selectedSession.duration} min
                  </div>
                </div>
                <div className="bg-purple-600/30 rounded-xl p-4">
                  <div className="text-purple-300 text-sm mb-1">Chakra</div>
                  <div className="text-white font-semibold">
                    {selectedSession.chakra}
                  </div>
                </div>
                <div className="bg-purple-600/30 rounded-xl p-4">
                  <div className="text-purple-300 text-sm mb-1">Frequency</div>
                  <div className="text-white font-semibold">
                    {selectedSession.frequency} Hz
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-purple-900/50 rounded-full h-3">
                  <motion.div
                    animate={{
                      width: `${(sessionTime / (selectedSession.duration * 60)) * 100}%`,
                    }}
                    className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
                <div className="text-purple-300 text-sm mt-2">
                  {formatTime(sessionTime)} /{" "}
                  {formatTime(selectedSession.duration * 60)}
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={togglePlayPause}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                  {isPlaying ? "Pause" : "Resume"}
                </button>
                <button
                  onClick={endSession}
                  className="flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  End Session
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Meditation Sessions Grid */}
        {!selectedSession || !isPlaying ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Choose Your Meditation
              </h2>
              <p className="text-purple-200">
                Select a raga-based meditation session to begin your journey of
                inner peace and spiritual awakening.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {meditations.map((meditation, index) => (
                <motion.div
                  key={meditation.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
                  onClick={() => startMeditation(meditation)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-full"
                      style={{ backgroundColor: meditation.color }}
                    ></div>
                    <div className="flex items-center gap-1 text-purple-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{meditation.duration} min</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {meditation.name}
                  </h3>
                  <p className="text-purple-200 text-sm mb-4">
                    {meditation.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-purple-300 text-xs mb-2">Benefits</div>
                    <div className="flex flex-wrap gap-2">
                      {meditation.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-600/30 rounded-full text-white text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-purple-300 text-sm">
                    <Heart className="w-4 h-4" />
                    <span>{meditation.chakra}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : null}

        {/* Meditation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Meditation Guide
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                Getting Started
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Find a quiet, comfortable space where you won't be disturbed
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Sit in a comfortable position with your spine straight
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Use headphones for the best audio experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Set aside dedicated time for your practice</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                Breathing Technique
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Follow the guided breathing pattern shown on screen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Breathe through your nose slowly and deeply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Let your mind follow the raga's melody</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Release any thoughts without judgment</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                Chakra Alignment
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Each raga is tuned to activate specific chakras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Visualize the corresponding color at that chakra point
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Feel the energy flowing through your body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Allow the frequency to resonate within you</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                After Meditation
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Sit quietly for a few moments after the session ends
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Slowly open your eyes and return to awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Journal about your experience and insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Practice regularly for best results</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
