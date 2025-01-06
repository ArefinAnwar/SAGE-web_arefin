"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JoinTheRevolution() {
  return (
    <div className="flex flex-col w-full h-auto md:h-screen items-center bg-ste-500 overflow-scroll scrollbar-hide md:mb-0 mb-10">
      <motion.h1
        className="mt-8 md:mt-[4.5rem] mb-6 text-4xl mx-auto text-center md:text-6xl font-bold text-emerald-300"
        style={{
          textShadow: "4px 0px 1px #ffffff",
        }}
      >
        Join us in the Revolution
      </motion.h1>
      <div className="flex flex-col md:flex-row md:w-11/12 w-[95%] h-10/12 items-center mt-10 md:px-10">
        <JoinUsCard
          title="As a Hospital"
          description="Partner with us to bring cutting-edge seizure prediction to patients, transforming healthcare with technology"
        />
        <JoinUsCard
          title="As a voluntary organization"
          description="Join hands to make life safer for epilepsy patients—together, we can make a difference"
        />
        <JoinUsCard
          title="As a financial institution"
          description="Empower innovation in healthcare—support SAGE and help us redefine epilepsy management"
        />
        <JoinUsCard
          title="As a health influencer"
          description="Be a voice of change! Advocate for smarter epilepsy care and inspire a healthier tomorrow"
        />
      </div>
    </div>
  );
}

function JoinUsCard({ title, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className="flex flex-col w-full md:w-1/4 px-2 py-4 h-full mx-2"
    >
      <motion.div
        style={{ willChange: "transform, opacity, scale" }}
        className="flex flex-col items-center cursor-pointer justify-center bg-emerald-600 bg-opacity-10 hover:bg-opacity-35 rounded-lg h-28 text-xl py-4 border-2 border-emerald-400"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-center">{title}</h1>
      </motion.div>
      <motion.p
        style={{ willChange: "transform, opacity, scale" }}
        className="text-slate-200 italic text-center text-lg mt-5 px-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {description}
      </motion.p>
    </div>
  );
}
