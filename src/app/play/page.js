"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
    {
        title: "Research Phase",
        description: "We started SAGE as a research paper to explore innovative approaches for epilepsy seizure prediction.",
    },
    {
        title: "Ideation & Scope Expansion",
        description: "Realizing its potential to address real-world challenges, we expanded the scope beyond academia.",
    },
    {
        title: "Hardware Development",
        description: "Designed a portable, low-cost EEG cap using the 10-20 electrode placement system.",
    },
    {
        title: "Software Development",
        description: "Developed an AI-powered software using LSTM models for real-time seizure prediction.",
    },
    {
        title: "Testing & Calibration",
        description: "Conducted extensive tests on simulated and real EEG datasets.",
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
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Adjust scroll transforms to make only one item visible at a time
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);  // More responsive opacity change
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.5, 0.5]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <motion.div
            ref={ref}
            className="relative mb-20 group pl-4 pr-12"
            style={{ opacity }}
        >
            <motion.div
                style={{ y }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20
                   transition-shadow hover:shadow-lg hover:shadow-emerald-500/10"
            >
                <h3 className="text-xl font-bold text-emerald-500 mb-2">{data.title}</h3>
                <p className="text-gray-400">{data.description}</p>
            </motion.div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <motion.div
                    style={{ scale, rotate }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500
                     flex items-center justify-center group-hover:shadow-lg 
                     group-hover:shadow-emerald-500/20 transition-shadow"
                >
                    <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function JourneyOfSage() {
    const { scrollYProgress } = useScroll();
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

    return (
        <div className="flex flex-col">
        <div className="bg-gray-900 flex flex-col min-h-screen py-20">
            <motion.h1
                style={{ y: titleY, opacity: titleOpacity }}
                className="text-4xl font-bold text-center text-emerald-500 mb-20 sticky top-10"
            >
                Journey of SAGE
            </motion.h1>
            <div className="max-w-2xl mx-auto px-4">
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} data={item} index={index} />
                ))}
            </div>
        </div></div>
    );
}
