"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Music,
  Brain,
  Zap,
  Heart,
  Lightbulb,
} from "lucide-react";

export default function LearnPage() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 1,
      title: "What is a Raga?",
      icon: <Music className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      content: `A raga is a melodic framework for improvisation in Indian classical music. The word "raga" comes from Sanskrit and means "color" or "emotion." Each raga is a complete system with:

• A specific set of notes (swaras)
• Rules for ascending and descending
• Characteristic phrases (pakad)
• A dominant note (vadi) and secondary note (samvadi)
• A specific time of day or season for performance
• An associated emotion or mood (rasa)

Ragas are not melodies themselves, but rather frameworks within which musicians create infinite variations. A skilled musician can perform a single raga for hours, exploring its emotional depths through improvisation.`,
    },
    {
      id: 2,
      title: "The Seven Notes (Swaras)",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600",
      content: `Indian classical music is built on seven fundamental notes, known as swaras:

1. Sa (Shadja) - The tonic, foundation of all music
2. Re (Rishabh) - The second note, represents growth
3. Ga (Gandhar) - The third note, brings brightness
4. Ma (Madhyam) - The fourth note, the turning point
5. Pa (Pancham) - The fifth note, the perfect consonance
6. Dha (Dhaivat) - The sixth note, brings depth
7. Ni (Nishad) - The seventh note, leads back to Sa

Each swara has a specific frequency and emotional quality. Some notes can be played in two variations (komal/flat and tivra/sharp), creating the 22 microtones (shrutis) of the Indian musical scale.`,
    },
    {
      id: 3,
      title: "Chakras and Sound",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-red-600",
      content: `In Indian philosophy, sound and energy are intimately connected. Each chakra (energy center) in the body resonates with specific frequencies:

• Root Chakra (Muladhara) - Red - Stability and grounding
• Sacral Chakra (Svadhisthana) - Orange - Creativity and flow
• Solar Plexus (Manipura) - Yellow - Power and transformation
• Heart Chakra (Anahata) - Green - Love and compassion
• Throat Chakra (Vishuddha) - Blue - Expression and truth
• Third Eye (Ajna) - Indigo - Intuition and insight
• Crown Chakra (Sahasrara) - Violet - Spiritual connection

Different ragas are tuned to activate and balance these chakras. By listening to or performing specific ragas, we can influence our physical, emotional, and spiritual well-being.`,
    },
    {
      id: 4,
      title: "The Nine Emotions (Rasas)",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
      content: `Indian classical music recognizes nine fundamental emotions or "rasas":

1. Shringara (Love/Romance) - Tenderness and affection
2. Hasya (Laughter/Joy) - Humor and delight
3. Karuna (Compassion/Sorrow) - Pathos and melancholy
4. Raudra (Anger/Fury) - Rage and intensity
5. Vira (Courage/Heroism) - Valor and strength
6. Bhayanaka (Fear/Terror) - Dread and anxiety
7. Bibhatsa (Disgust/Aversion) - Revulsion and contempt
8. Adbhuta (Wonder/Amazement) - Awe and surprise
9. Shanta (Peace/Tranquility) - Serenity and calm

Each raga is designed to evoke one or more of these rasas. The musician's task is to guide the listener through an emotional journey, creating a profound aesthetic experience.`,
    },
    {
      id: 5,
      title: "Frequency and Healing",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      content: `Modern science has validated what ancient Indian musicians knew: sound frequencies have profound effects on our bodies and minds.

Key frequencies in Indian music:
• 174 Hz - Pain relief and cellular repair
• 285 Hz - Tissue repair and regeneration
• 396 Hz - Liberation from fear and guilt
• 432 Hz - Harmony and balance (often called "universal frequency")
• 528 Hz - Transformation and miracles
• 639 Hz - Connection and relationships
• 741 Hz - Intuition and problem-solving
• 852 Hz - Spiritual awakening
• 963 Hz - Divine connection

When ragas are performed at these frequencies, they can:
• Reduce stress and anxiety
• Improve sleep quality
• Enhance cognitive function
• Boost immune system
• Promote emotional healing
• Facilitate spiritual growth`,
    },
    {
      id: 6,
      title: "Raga Performance Structure",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-600",
      content: `A traditional raga performance follows a specific structure:

1. Alap - The slow, meditative introduction where the raga's character is established without rhythm. The musician explores the notes and their relationships.

2. Jor - A gradual increase in tempo while still maintaining the free-flowing nature. The musician begins to establish patterns.

3. Jhala - A fast, rhythmic section with rapid note sequences. The energy builds significantly.

4. Gat - The composition section where a fixed melody is introduced. The musician improvises around this melody.

5. Tabla Interaction - The tabla (drums) enters and engages in rhythmic dialogue with the main instrument.

6. Tihai - A rhythmic phrase repeated three times, leading to a climactic resolution.

This structure allows the musician to take the listener on a complete emotional and spiritual journey, from introduction to climax to resolution.`,
    },
  ];

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
            Educational Content
          </h1>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Learn the Science and Philosophy of Indian Music
          </h2>
          <p className="text-purple-200 leading-relaxed">
            Indian classical music is a profound system that combines
            mathematics, physics, psychology, and spirituality. This educational
            section explores the scientific principles, philosophical
            foundations, and healing properties of ragas and their role in human
            consciousness.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedTopic(topic)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${topic.color} flex items-center justify-center mb-4`}
              >
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {topic.title}
              </h3>
              <p className="text-purple-200 text-sm">
                Click to learn more about this fascinating aspect of Indian
                classical music.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Topic Detail Modal */}
        {selectedTopic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTopic(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedTopic.color} flex items-center justify-center`}
                >
                  {selectedTopic.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedTopic.title}
                  </h2>
                </div>
              </div>

              <div className="text-purple-200 whitespace-pre-line leading-relaxed mb-6">
                {selectedTopic.content}
              </div>

              <button
                onClick={() => setSelectedTopic(null)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Key Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Key Concepts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Vadi and Samvadi
              </h4>
              <p className="text-purple-200 text-sm">
                The vadi is the most important note in a raga (the "king"),
                while the samvadi is the second most important (the "queen").
                These notes define the raga's character and are emphasized
                throughout the performance.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Pakad
              </h4>
              <p className="text-purple-200 text-sm">
                The characteristic phrase or "catch" of a raga. This is the
                distinctive melodic pattern that immediately identifies the raga
                and is the first thing a musician establishes in the alap.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Aaroh and Avaroh
              </h4>
              <p className="text-purple-200 text-sm">
                Aaroh is the ascending scale of a raga, while avaroh is the
                descending scale. These may differ from each other, creating
                unique melodic characteristics.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Rasa</h4>
              <p className="text-purple-200 text-sm">
                The emotional essence or "flavor" of a raga. Each raga is
                designed to evoke specific emotions and create a particular
                aesthetic experience in the listener.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">
                Thaat
              </h4>
              <p className="text-purple-200 text-sm">
                A classification system for ragas based on their scale
                structure. There are 10 main thaats in Hindustani music, each
                containing multiple ragas.
              </p>
            </div>

            <div className="bg-purple-600/20 rounded-xl p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Tala</h4>
              <p className="text-purple-200 text-sm">
                The rhythmic cycle or "beat" in Indian music. Talas provide the
                temporal framework within which ragas are performed, creating a
                dialogue between melody and rhythm.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Further Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Deepen Your Practice
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                Recommended Listening
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li>
                  • Listen to different ragas at their prescribed times of day
                </li>
                <li>• Study performances by master musicians</li>
                <li>
                  • Pay attention to the alap section to understand raga
                  character
                </li>
                <li>• Notice how musicians develop and explore the raga</li>
                <li>• Explore both Hindustani and Carnatic traditions</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-purple-300 mb-3">
                Practice Suggestions
              </h4>
              <ul className="text-purple-200 text-sm space-y-2">
                <li>• Sing or play the notes of a raga slowly</li>
                <li>• Practice the characteristic phrases (pakad)</li>
                <li>• Meditate while listening to raga performances</li>
                <li>• Keep a journal of your emotional responses</li>
                <li>• Explore the connection between ragas and your chakras</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
