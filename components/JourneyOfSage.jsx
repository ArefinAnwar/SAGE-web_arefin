"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Research Phase",
    description:
      "We started SAGE as a research paper to explore innovative approaches for epilepsy seizure prediction.",
  },
  {
    title: "Ideation & Scope Expansion",
    description:
      "Realizing its potential to address real-world challenges, we expanded the scope beyond academia.",
  },
  {
    title: "Hardware Development",
    description:
      "Designed a portable, low-cost EEG cap using the 10-20 electrode placement system.",
  },
  {
    title: "Software Development",
    description:
      "Developed an AI-powered software using LSTM models for real-time seizure prediction.",
  },
  {
    title: "Testing & Calibration",
    description:
      "Conducted extensive tests on simulated and real EEG datasets.",
  },
  {
    title: "Fine-Tuning & Optimization",
    description: "Personalized the system with patient-specific calibrations.",
  },
  {
    title: "SAGE Launch",
    description: "Finally, SAGE emerged as a revolutionary wearable device.",
  },
];

const TimelineItem = ({ data, index }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        setScrollProgress(entry.intersectionRatio);
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 120, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      ref={itemRef}
      className="relative flex flex-col mb-32 group pl-4 pr-12"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8 }}
      style={{
        opacity: scrollProgress,
      }}
    >
      <div
        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20
                   transition-shadow hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col"
      >
        <h3 className="text-xl font-bold text-emerald-500 mb-2">
          {data.title}
        </h3>
        <p className="text-gray-400">{data.description}</p>
      </div>

      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        animate={{
          scale: isVisible ? 1 : 0.5,
          rotate: isVisible ? 360 : 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500
                     flex items-center justify-center group-hover:shadow-lg 
                     group-hover:shadow-emerald-500/20 transition-shadow"
        >
          <span className="text-white mr-1">{index + 1}</span>
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function JourneyOfSage() {
  return (
    <div className="flex flex-col items-center ">
      <div className=" flex flex-col items-center min-h-screen py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 md:mt-0 mb-6 text-4xl mx-auto md:text-6xl font-bold text-emerald-300"
          style={{
            textShadow: "4px 0px 1px #ffffff",
          }}
        >
          Journey of SAGE
        </motion.h1>
        <div className="max-w-2xl h-11/12  mx-auto flex flex-col  px-4">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
