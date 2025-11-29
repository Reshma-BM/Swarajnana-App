"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function CarnaticMastersPage() {
  const masters = [
    {
      id: 4,
      name: "Purandara Dasa",
      era: "1494-1564",
      title: "Father of Carnatic Music",
      description:
        "Purandara Dasa is revered as the father of Carnatic music and a saint-musician of the Bhakti movement. He revolutionized the teaching of music by creating a systematic method of learning and composed thousands of devotional songs. His pedagogical approach laid the foundation for Carnatic music education.",
      highlights: [
        "Created the foundation for Carnatic music education",
        "Composed 4,75,000+ devotional songs (padas)",
        "Pioneered sargam learning (note-solmization)",
        "Saint and philosopher of profound wisdom",
      ],
      image:
        "/images/Purandaradasa.jpg",
      legacy:
        "Every Carnatic music student learns through his systematic approach. His compositions are foundational to the entire tradition.",
    },
    {
      id: 1,
      name: "Tyagaraja",
      era: "1767-1847",
      title: "Saint Composer & Musical Reformer",
      description:
        "Tyagaraja is one of the Trinity of Carnatic music and is revered as one of the greatest composers in Indian classical music. He composed over 24,000 kritis (devotional songs) and revolutionized Carnatic music through his devotional approach and innovative compositions. His works deeply influenced the development of modern Carnatic music.",
      highlights: [
        "Composed over 24,000 kritis",
        "Pioneer of bhakti (devotion) in Carnatic music",
        "Patronized by Raja of Thanjavur",
        "Created the Pancharatna Kritis (5 gems)",
      ],
      image:
        "https://raw.createusercontent.com/cb999173-5aa8-4ad4-a751-7ee2a0a27219/",
      legacy:
        "Annually celebrates Tyagaraja Aradhana (a festival honoring his memory) where thousands gather to perform his compositions.",
    },
    {
      id: 2,
      name: "Muthuswami Dikshitar",
      era: "1776-1835",
      title: "Master Composer & Scholar",
      description:
        "Dikshitar was a musical genius and the second member of the Trinity of Carnatic music. He brought Sanskrit scholarly tradition to Carnatic music and composed works of extraordinary complexity and beauty. His compositions are known for their technical perfection and spiritual depth.",
      highlights: [
        "Composed 500+ kritis of exceptional complexity",
        "Expert in Sanskrit grammar and philosophy",
        "Traveled to North India for musical training",
        "Master of ragas and musical theory",
      ],
      image:
        "https://raw.createusercontent.com/d0d370b9-c66f-4d22-a813-2ed0b633f461/",
      legacy:
        "His compositions are considered the pinnacle of technical excellence and intellectual depth in Carnatic music.",
    },
    {
      id: 3,
      name: "Syama Sastri",
      era: "1762-1827",
      title: "Devotional Composer & Innovator",
      description:
        "The third member of the Trinity, Syama Sastri was known for his lyrical genius and devotional fervor. He composed in multiple languages and created some of the most emotionally resonant kritis in Carnatic music. His works are celebrated for their melodic beauty and emotional expression.",
      highlights: [
        "Composed around 360 devotional kritis",
        "Wrote in Tamil, Telugu, Sanskrit, and Kannada",
        "Known for emotional depth and lyrical beauty",
        "Pioneer of set pieces for Carnatic concerts",
      ],
      image:
        "https://raw.createusercontent.com/a1d5a736-ad50-483a-9e76-b9f4cdc18f21/",
      legacy:
        "His compositions form the core repertoire of Carnatic vocal concerts and are beloved by singers and audiences alike.",
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
            Karnataka Sangita Pitamahas
          </h1>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Masters of Carnatic Music
          </h2>
          <p className="text-purple-200 text-lg leading-relaxed">
            Karnataka Sangita refers to the classical music of South India,
            commonly known as Carnatic music. These four titans shaped the
            entire tradition and continue to inspire musicians worldwide. Their
            contributions—from composition to pedagogy—form the bedrock of this
            ancient art form.
          </p>
        </motion.div>

        {/* Masters Grid */}
        <div className="space-y-12">
          {masters.map((master, index) => (
            <motion.div
              key={master.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                {/* Image */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full">
                    <img
                      src={master.image}
                      alt={master.name}
                      className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x400?text=" +
                          master.name;
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-600/40 text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {master.era}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-1">
                      {master.name}
                    </h3>
                    <p className="text-xl text-purple-300 font-semibold">
                      {master.title}
                    </p>
                  </div>

                  <p className="text-purple-200 text-base leading-relaxed mb-6">
                    {master.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Contributions
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {master.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-purple-200"
                        >
                          <span className="text-purple-400 mt-1 text-lg">
                            •
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Legacy */}
                  <div className="bg-purple-600/20 rounded-xl p-4 border border-purple-400/30">
                    <p className="text-purple-100 italic">
                      <span className="font-semibold text-white">Legacy:</span>{" "}
                      {master.legacy}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mt-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Their Lasting Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                ✨ On Education
              </h4>
              <p className="text-purple-200">
                Purandara Dasa's systematic pedagogy revolutionized how music is
                taught. Every student learning Carnatic music begins with
                concepts he pioneered, including sargam (solmization) and
                structured curriculum design.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                🎵 On Composition
              </h4>
              <p className="text-purple-200">
                The Trinity expanded the vocabulary of Carnatic music
                exponentially. Their compositions showcase the infinite
                possibilities of ragas, influencing every composer that came
                after them.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                🎼 On Performance
              </h4>
              <p className="text-purple-200">
                They established concert formats, raga interpretation methods,
                and alankara (ornamental) techniques that define how Carnatic
                music is performed today.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                Philosophy
              </h4>
              <p className="text-purple-200">
                Through their devotional compositions, they elevated music from
                entertainment to spiritual practice, making it a vehicle for
                expressing divine connection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
