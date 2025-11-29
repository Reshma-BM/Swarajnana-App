"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Volume2 } from "lucide-react";

export default function InstrumentsPage() {
  const [hoveredInstrument, setHoveredInstrument] = useState(null);
  const audioContextRef = useRef(null);
  const oscillatorsRef = useRef({});

  const instruments = [
    // {
    //   id: "sitar",
    //   name: "Sitar",
    //   description: "Plucked string instrument with a bright, metallic sound",
    //   color: "from-amber-500 to-orange-600",
    //   icon: "🎸",
    //   playSound: () => playSitar(),
    // },
   
    {
      id: "bansuri",
      name: "Bansuri (Flute)",
      description: "Bamboo flute with a soft, ethereal wind sound",
      color: "from-green-500 to-emerald-600",
      icon: "🪈",
      playSound: () => playBansuri(),
    },
    {
      id: "tabla",
      name: "Tabla",
      description: "Percussion drums with distinctive rhythmic sounds",
      color: "from-yellow-500 to-amber-600",
      icon: "🥁",
      playSound: () => playTabla(),
    },
    {
      id: "sarangi",
      name: "Sarangi",
      description: "Bowed string instrument with expressive, violin-like tones",
      color: "from-purple-500 to-violet-600",
      icon: "🎻",
      playSound: () => playSarangi(),
    },
    {
      id: "veena",
      name: "Veena",
      description: "Ancient string instrument with warm, resonant sound",
      color: "from-indigo-500 to-blue-600",
      icon: "🎼",
      playSound: () => playVeena(),
    },
    {
      id: "harmonium",
      name: "Harmonium",
      description: "Keyboard instrument with sustained melodic notes",
      color: "from-pink-500 to-rose-600",
      icon: "🎹",
      playSound: () => playHarmonium(),
    },
    {
      id: "mridangam",
      name: "Mridangam",
      description: "Double-sided drum with rich, complex percussion",
      color: "from-orange-500 to-red-600",
      icon: "🥯",
      playSound: () => playMridangam(),
    },
    
    //   id: "shehnai",
    //   name: "Shehnai",
    //   description: "Double-reed wind instrument with bright, piercing tone",
    //   color: "from-cyan-500 to-blue-600",
    //   icon: "🎺",
    //   playSound: () => playShehnai(),
    // },
    //  {
    //   id: "sarod",
    //   name: "Sarod",
    //   description: "String instrument with a warm, mellow tone",
    //   color: "from-red-500 to-rose-600",
    //   icon: "🎵",
    //   playSound: () => playSarod(),
    // },
    // {
    //   id: "tanpura",
    //   name: "Tanpura",
    //   description: "Drone instrument providing continuous background support",
    //   color: "from-violet-500 to-purple-600",
    //   icon: "🎤",
    //   playSound: () => playTanpura(),
    // },
  ];

  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext || window.webkitAudioContext
      )();
    }
    return audioContextRef.current;
  };
    const playAudio = (fileName) => {
  const audio = new Audio(`/sounds/${fileName}`);
  audio.volume = 0.8;
  audio.play().catch((err) => console.warn("Playback error:", err));

  // Stop after 5 seconds
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; // rewind for next hover
  }, 3000);
};

 
  const playSarod = () => {
    const ctx = initAudioContext();
    const now = ctx.currentTime;

    // Sarod: warm mellow tone with longer sustain
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(392, now);
    osc.frequency.exponentialRampToValueAtTime(196, now + 0.5);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.02, now + 5);

    osc.start(now);
    osc.stop(now + 5);
  };

 const playBansuri = () => playAudio("flute.mp3");

 const playTabla = () => playAudio("tabla.mp3");

  const playSarangi = () => playAudio("sarangi.mp3");

  const playVeena = () => playAudio("veena.mp3");

  const playHarmonium = () => playAudio("harmonium.mp3");
  
  const playMridangam = () => playAudio("mridangam.mp3");

 // const playShehnai = () => playAudio("shehnai.mp3");

  // const playTanpura = () => {
  //   const ctx = initAudioContext();
  //   const now = ctx.currentTime;

  //   // Tanpura: continuous drone with slight harmonic complexity
  //   const osc1 = ctx.createOscillator();
  //   const osc2 = ctx.createOscillator();
  //   const gain1 = ctx.createGain();
  //   const gain2 = ctx.createGain();

  //   osc1.connect(gain1);
  //   osc2.connect(gain2);
  //   gain1.connect(ctx.destination);
  //   gain2.connect(ctx.destination);

  //   osc1.type = "sine";
  //   osc2.type = "sine";

  //   osc1.frequency.setValueAtTime(220, now);
  //   osc2.frequency.setValueAtTime(329.63, now);

  //   gain1.gain.setValueAtTime(0.2, now);
  //   gain2.gain.setValueAtTime(0.15, now);
  //   gain1.gain.exponentialRampToValueAtTime(0.02, now + 5);
  //   gain2.gain.exponentialRampToValueAtTime(0.01, now + 5);

  //   osc1.start(now);
  //   osc2.start(now);
  //   osc1.stop(now + 5);
  //   osc2.stop(now + 5);
  // };

  const handleHover = (instrument) => {
    setHoveredInstrument(instrument.id);
    setTimeout(() => {
      instrument.playSound();
    }, 50);
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
            Classical Instruments
          </h1>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Explore the Sounds of Indian Classical Music
          </h2>
          <p className="text-purple-200">
            Hover over each instrument to hear its authentic sound. Experience
            the unique tones and characteristics that have shaped Indian
            classical music for centuries.
          </p>
        </motion.div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => handleHover(instrument)}
              onMouseLeave={() => setHoveredInstrument(null)}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300 border-2 ${
                  hoveredInstrument === instrument.id
                    ? "border-white/50"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${instrument.color} flex items-center justify-center mb-4 mx-auto text-4xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {instrument.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {instrument.name}
                </h3>

                <p className="text-purple-200 text-sm text-center mb-4">
                  {instrument.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-purple-300 text-sm">
                  <Volume2
                    className={`w-4 h-4 ${hoveredInstrument === instrument.id ? "animate-pulse" : ""}`}
                  />
                  <span>Hover to hear</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instruments Information
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            About Indian Classical Instruments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                String Instruments (Taar Vadya)
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Sitar</strong> - Plucked, with sympathetic strings
                    creating complex harmonics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Sarod</strong> - Fretless, producing smooth, mellow
                    tones
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Veena</strong> - Ancient, with deep resonant
                    qualities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Sarangi</strong> - Bowed, with the most expressive
                    human-like voice
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Tanpura</strong> - Drone instrument providing
                    harmonic foundation
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                Wind & Percussion (Sushan & Avanadh)
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Bansuri</strong> - Bamboo flute, soft and meditative
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Shehnai</strong> - Double-reed wind, bright and
                    festive
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Tabla</strong> - Hand drums providing rhythmic
                    foundation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Mridangam</strong> - Double-headed drum with rich
                    tones
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    <strong>Harmonium</strong> - Keyboard providing harmonic
                    support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div> */}

        {/* Playing Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            How to Experience These Instruments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Traditional Ensemble
              </h4>
              <p className="text-purple-200 text-sm">
                In a traditional Indian classical music performance, you'll
                typically hear a lead instrument (like sitar or sarod),
                accompanied by tabla for rhythm and tanpura for the harmonic
                drone.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Regional Differences
              </h4>
              <p className="text-purple-200 text-sm">
                Hindustani music (North India) uses instruments like sitar and
                tabla, while Carnatic music (South India) emphasizes veena and
                mridangam with different performance styles.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Sound Characteristics
              </h4>
              <p className="text-purple-200 text-sm">
                Each instrument has unique harmonic overtones and decay
                patterns. String instruments produce sustained, expressive tones
                while percussion provides rhythmic structure and emotional
                punctuation.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Learning & Practice
              </h4>
              <p className="text-purple-200 text-sm">
                Learning classical Indian instruments requires years of
                dedication. Each instrument demands unique techniques to produce
                the characteristic ragas and emotional expressions that define
                this ancient art form.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
