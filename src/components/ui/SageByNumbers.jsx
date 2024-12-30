"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NumberTicker from "@/components/ui/number-ticker";
import HyperText from "@/components/ui/hyper-text";
import { MagicCard } from "@/components/ui/magic-card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Meteors from "@/components/ui/meteors";

const epilepsyInfo = [
  "Almost 3 million U.S. adults have epilepsy.",
  "Epilepsy is a chronic noncommunicable disease of the brain that affects people of all ages.",
  "Around 50 million people worldwide have epilepsy, making it one of the most common neurological diseases globally.",
  "Nearly 80% of people with epilepsy live in low- and middle-income countries.",
  "It is estimated that up to 70% of people living with epilepsy could live seizure-free if properly diagnosed and treated.",
  "The risk of premature death in people with epilepsy is up to three times higher than for the general population.",
  "Three-quarters of people with epilepsy living in low-income countries do not get the treatment they need.",
  "In many parts of the world, people with epilepsy and their families suffer from stigma and discrimination.",
  "Epilepsy is a significant factor in disability-adjusted life years, ranking in the top 30 globally.",
];
const epilepsyData = [
  { year: 1990, prevalence: 40 },
  { year: 1995, prevalence: 42 },
  { year: 2000, prevalence: 44 },
  { year: 2005, prevalence: 46 },
  { year: 2010, prevalence: 48 },
  { year: 2015, prevalence: 50 },
  { year: 2020, prevalence: 52 },
  { year: 2024, prevalence: 54 },
];

export default function SageByNumbers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % epilepsyInfo.length);
    }, 4000); // Change info every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className=" relative overflow-hidden w-full min-h-screen flex flex-col items-center justify-center ">
      {/* <Meteors number={40} /> */}
      <h1
        className="text-6xl absolute top-0 mt-4 font-bold text-center text-emerald-300"
        style={{
          textShadow: "4px 0px 1px #ffffff",
        }}
      >
        SAGE by Numbers
      </h1>

      <div className="absolute bottom-10 grid  grid-cols-1 md:grid-cols-2 gap-8 h-11/12  items-center justify-center w-full px-4">
        {/* Info Section */}
        <div className="flex flex-row md:flex-row h-5/6  items-center justify-center ">
          <div className="flex flex-col md:flex-row h-full w-full md:w-1/2 items-center justify-center">
            <AnimatedCircularProgress
              percentage={94}
              text="Model accuracy"
              color="teal"
            />
            <AnimatedCircularProgress
              percentage={80}
              text="living in low-income conditions"
              color="purple"
            />
          </div>

          <div className="flex flex-row md:flex-col h-full w-full md:w-1/2 items-center justify-center">
            <div className="flex flex-1 flex-col bg-transparent bg-opacity-15 rounded-xl  items-center justify-center w-full h-1/2 p-6">
              
              {/* <p className=" text-2xl text-white font-medium ">
                • <HyperText>LSTM with Proximal Policy & TFT used</HyperText>
              </p> */}
            </div>
            <div className="flex flex-1 items-center justify-center  h-1/2">
              {/* <p className="whitespace-pre-wrap text-2xl text-white font-medium tracking-tighter ">
                • <HyperText>LSTM with Proximal Policy & TFT used</HyperText>
              </p> */}
              <MagicCard className="flex flex-1 flex-col bg-slate-200 bg-opacity-15 rounded-xl  items-center justify-center w-full p-6">
                <p className=" text-xl text-left  text-white font-medium">
                  •{" "}
                  <NumberTicker className="text-white text-left" value={960} />+
                  hours of data used
                </p>
                <p className="text-xl text-white">
                  • Epilepsy market to be crossed over 3 billion $ by 2030
                </p>
                <p className="text-xl text-white">
                  • First ever seizure prediction headband within 250$
                </p>
              </MagicCard>
            </div>
          </div>
        </div>
        <div className="flex bg-slate-400 flex-col h-1/2 md:h-5/6 items-center justify-center">
          <div className="h-48 w-full text-center overflow-hidden">
            <AnimatePresence>
              <motion.p
                key={currentIndex}
                className="font-display text-lg md:text-2xl text-white font-medium"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 0.8 }}
              >
                {epilepsyInfo[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="w-full  ">
            <AnimatedLineChart width="100%" height={200}>
              <LineChart data={epilepsyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="prevalence"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </AnimatedLineChart>
          </div>
        </div>

        {/* Progress Bars */}
      </div>
    </div>
  );
}

function AnimatedCircularProgress({ percentage, color, text }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const radius = 100;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <div
      className="relative flex items-center justify-center  flex-1 w-52 h-52"
      ref={ref}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="#e5e7eb" // Background stroke color
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke={color === "teal" ? "#14b8a6" : "#8b5cf6"} // Stroke color based on prop
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={
            inView
              ? {
                  strokeDashoffset:
                    circumference - (percentage / 100) * circumference,
                }
              : { strokeDashoffset: circumference }
          }
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className={`text-${color}-500 font-bold text-lg`}>
          {inView ? `${percentage}%` : "0"}
        </span>
        <span className="text-sm text-slate-200 mt-1">{text}</span>
      </div>
    </div>
  );
}
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-2 text-sm shadow-md">
        <p className="font-bold text-gray-800">Year: {label}</p>
        <p className="text-gray-600">
          Prevalence: {payload[0].value} of the population
        </p>
        <p className="text-gray-500 italic">(Per one thousand)</p>
      </div>
    );
  }

  return null;
};
function AnimatedLineChart() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="w-11/12  bg-white bg-opacity-[10%] max-w-4xl py-6 rounded-xl flex flex-1 items-center justify-center mt-8"
    >
      {/* <MagicCard className="z-10"> */}
        <ResponsiveContainer
          className="items-center z-20 justify-center bg-transparent rounded-xl"
          width="90%"
          height={300}
        >
          <LineChart data={epilepsyData}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis stroke="#fff" dataKey="year" />
            <YAxis stroke="#fff" domain={[35, 60]} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="prevalence"
              stroke="#8884d8"
              strokeWidth={2}
              dot={true}
              isAnimationActive={inView}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      {/* </MagicCard> */}
    </div>
  );
}
