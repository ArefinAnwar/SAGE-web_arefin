"use client";
import GlobeVisualization from "@/components/ui/globeMain";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EpilepsyAroundTheWorld() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:", entry.isIntersecting); // Debugging log
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 } // Ensure section is fully visible
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
  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col overflow-x-hidden w-full min-h-screen items-center justify-center"
    >
      <AnimatePresence>
        {isInView && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-2xl px-5 md:text-6xl top-0 mt-6 md:mt-20 font-bold text-center text-emerald-300 z-40"
              style={{
                textShadow: "4px 0px 1px #ffffff",
              }}
            >
              Epilepsy Around The World
            </motion.h1>
            {/* <p className="absolute text-lg top-0 md:text-2xl mt-4 md:mt-20 text-slate-300 italic">
              Visualize the epilepsy problem
              </p> */}
            <div className="flex flex-col-reverse md:flex-row w-11/12 h-5/6 items-center justify-center mt-4 md:mt-4">
              <div className="flex flex-col mb-24 md:mb-0 md:flex-col w-[95%] md:w-[60%] h-auto -mt-8 z-50 md:mt-0 items-center justify-center">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-emerald-400 text-xl md:text-3xl font-semibold text-center"
                >
                  &quot;
                  <span className="text-white">
                    Epilepsy{" "}
                    <motion.div
                      className="relative text-white"
                      style={{ display: "inline-block" }}
                    >
                      Ranks the 4th
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-emerald-400"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          delay: 2.5,
                          duration: 1.3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>{" "}
                    most appearing neurological diesease
                  </span>
                  &quot;
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="text-emerald-400 text-lg md:text-2xl font-semibold text-center mt-6 "
                >
                  &quot;
                  <span className="text-white">
                    Up to 70% of epilepsy cases can be managed with proper
                    medication, but many regions face a treatment gap exceeding
                    75%
                  </span>
                  &quot;
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 1 }}
                  className="italic text-white mt-6"
                >
                  with top countries being:
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 5, duration: 1 }}
                  className="text-2xl text-white mt-3 font-medium"
                >
                  <span className="text-emerald-400 "> 1. Nigeria</span> (37.0
                  per 1,000 people){" "}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 6, duration: 1 }}
                  className="text-2xl text-white mt-3 font-medium"
                >
                  <span className="text-emerald-400"> 2. Ethiopia</span> (29.5
                  per 1,000 people)
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 7, duration: 1 }}
                  className="text-2xl text-white mt-3 font-medium"
                >
                  <span className="text-emerald-400 ">3. Congo</span> (15.0 per
                  1,000 people)
                </motion.h1>
              </div>

              <GlobeVisualization />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
