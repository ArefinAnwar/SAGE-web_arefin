"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const timelineData = [
  {
    title: "Research Phase",
    description:
      "We started SAGE as a research paper to explore innovative approaches for epilepsy seizure prediction. We started SAGE as a research paper to explore innovative approaches for epilepsy seizure prediction. We started SAGE as a research paper to explore innovative approaches for epilepsy seizure prediction.",
    additionalContent: {
      type: "text",
      content:
        "Our research began with analyzing over 10,000 EEG recordings to identify key patterns. The initial findings showed a 78% correlation between specific brainwave patterns and pre-seizure states.",
      stats: [
        { label: "Research Duration", value: "18 months" },
        { label: "Data Points", value: "10,000+" },
        { label: "Initial Accuracy", value: "78%" },
      ],
    },
  },
  {
    title: "Ideation & Scope Expansion",
    description:
      "Realizing its potential to address real-world challenges, we expanded the scope beyond academia.",
    videoLink: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
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
    description: "Conducted tests on 8 people low-income-background people.",
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
  const isInView = useInView(itemRef, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.7 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      ref={itemRef}
      className="w-full md:w-auto relative flex flex-col mb-72 md:mb-60 group pl-2 pr-12 transform-gpu"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{ willChange: "transform, opacity, scale" }}
      transition={{
        duration: 0.5,
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
        style={{ willChange: "transform, opacity, scale" }}
        animate={{
          scale: isInView ? 1 : 0.5,
          rotate: isInView ? 360 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
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
      {data.videoLink && (
        <HeroVideoDialog
          className="mt-8 md:mt-5 block"
          animationStyle="from-center"
          videoSrc={data.videoLink}
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      )}
    </motion.div>
  );
};

export default function JourneyOfSage() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center min-h-screen py-5 md:py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="mt-8 md:mt-0 mb-6 text-4xl mx-auto md:text-6xl font-bold text-emerald-300"
          style={{
            textShadow: "4px 0px 1px #ffffff",
          }}
        >
          Journey of SAGE
        </motion.h1>
        <div
          className="w-[95%]  md:max-w-2xl h-11/12 mx-auto flex flex-col px-4"
          style={{ willChange: "transform, opacity, scale" }}
        >
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
