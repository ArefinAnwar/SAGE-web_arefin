"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Particles from "@/components/ui/particles";
import { motion, AnimatePresence, useInView } from "framer-motion";

const SageIntroTest = () => {
  // const sectionRef = useRef(null);
  // const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div
      ref={sectionRef}
      className="md:min-h-screen h-full items-center justify-center flex flex-col w-full relative py-10 md:overflow-hidden pt-10 md:pt-0"
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
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-6xl mt-3 md:mt-0 font-bold text-emerald-300"
              style={
                isMobile
                  ? { textShadow: "2.5px 1px 1px #fff" }
                  : { textShadow: "4px 0px 1px #ffffff" }
              }
            >
              What is SAGE?
            </motion.h1>
            <p className="text-lg md:text-lg mt-2 md:mt-4 text-slate-300 italic">
              A wearable cap to predict seizures before they happen!
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
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                key={index}
                transition={{
                  duration: 0.3,
                  delay: isMobile ? index * 0.5 : index + 1,
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
                    "Put on cap and it will read real-time brain signals"}
                  {title === "Brainwave Detection" &&
                    "Among the brain signals, signals affecting epilepsy will be captured"}
                  {title === "AI Analysis" &&
                    "AI will work magically to find patterns from these signals"}
                  {title === "Seizure Prediction" &&
                    "Based on pattern, the SAGE CAP will predict seizure before 10-15 mins"}
                  {title === "Notification Delivery" &&
                    "Seizure pattern detected, notification sent to patient's phone."}
                  {title === "Alert System" &&
                    "Also, it notify other caregivers of patient given"}
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
