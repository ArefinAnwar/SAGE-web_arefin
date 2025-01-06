"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Particles from "@/components/ui/particles";
import { motion, AnimatePresence } from "framer-motion";

const SageIntroTest = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      ref={sectionRef}
      className="md:min-h-screen  items-center justify-center flex flex-col w-full relative py-10 overflow-hidden"
    >
      <Particles
        className="absolute inset-0"
        quantity={isMobile ? 30 : 200}
        speed={2}
        direction="random"
        velocity={2}
        motion
        refresh={false}
      />

      {isInView && (
        <>
          <div className="text-center mb-4 md:mt-5">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-emerald-300"
              style={{
                textShadow: "4px 0px 1px #ffffff",
              }}
            >
              What is SAGE?
            </motion.h1>
            <p className="text-lg md:text-lg mt-2 md:mt-4 text-slate-300 italic">
              Predict seizures ahead of time to preserve moments
            </p>
          </div>

          <div className="max-h-4/6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 w-full mb-16 md:w-5/6 justify-center items-center px-4">
            {[
              "Data Collection",
              "Brainwave Detection",
              "AI Analysis",
              "Seizure Prediction",
              "Notification Delivery",
              "Alert System",
            ].map((title, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={index}
                transition={{
                  duration: 0.3,
                  delay: isMobile ? index * 1 : index + 2,
                }}
                className={cn(
                  "bg-white bg-opacity-[7%] border-teal-500 border-2 text-white p-3 py-6 shadow-lg text-center transform-gpu"
                )}
              >
                <h2 className="text-xl font-semibold">
                  <div className="relative inline-block">
                    {title}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: isMobile ? index + 2 : index + 2,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-400 origin-left transform-gpu"
                    />
                  </div>
                </h2>

                <p className="mt-2">
                  {title === "Data Collection" &&
                    "Gather brainwave data from patients in real-time for analysis."}
                  {title === "Brainwave Detection" &&
                    "Advanced sensors capture real-time brainwave patterns seamlessly."}
                  {title === "AI Analysis" &&
                    "Cutting-edge AI deciphers patterns to identify potential seizures."}
                  {title === "Seizure Prediction" &&
                    "Predicts seizures 10–15 minutes ahead, providing critical time."}
                  {title === "Notification Delivery" &&
                    "Alerts caregivers and patients via app notifications instantly."}
                  {title === "Alert System" &&
                    "Notifies the patient's caregivers about potential seizures."}
                </p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SageIntroTest;
