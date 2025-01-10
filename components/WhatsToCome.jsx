"use client";
import { useRef, useEffect, useState } from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
export default function WhatsToCome() {
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
      className="flex flex-col min-h-screen w-full  items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        className="mt-8 md:mt-0 mb-6 text-4xl mx-auto md:text-6xl font-bold text-emerald-400 text-center "
        style={
          isMobile
            ? {
                textShadow: "2.5px 1px 1px #ffffff",
              }
            : {
                textShadow: "4px 0px 1px #ffffff",
              }
        }
      >
        What&apos;s to come?
      </motion.h1>
      <div className="flex flex-col md:flex-row h-full w-[95%] md:w-11/12 items-center justify-center mt-4 md:mt-6">
        <div className="flex flex-col w-full h-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white text-lg mr-0 md:mr-5 mx-3 md:mx-0"
          >
            Sometimes the seizure may be{" "}
            <motion.div
              className="relative text-white"
              style={{ display: "inline-block" }}
            >
              so strong
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-emerald-400 transform-gpu"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{
                  delay: 1.5,
                  duration: 1,
                }}
              />
            </motion.div>{" "}
            that the patient may lose his control over body. So, we are working
            on a pneumatic
            <motion.div
              className="relative text-white"
              style={{ display: "inline-block" }}
            >
              air cushion system
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-emerald-400 transform-gpu"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{
                  delay: 3.5,
                  duration: 1,
                }}
              />
            </motion.div>{" "}
            which will deploy automatically, when it detects that patient is
            falling to protect his head.
          </motion.h1>
        </div>
        <div
          initial={{ opacity: 0, y: -60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full w-full md:w-1/2 relative items-center justify-center flex flex-col mt-8 md:mt-0"
        >
          <Image
            className="z-40 md:w-[70%] w-[90%] border-2 border-emerald-400 roudned-xl"
            src="/inflation.gif"
            alt=""
            sizes="100vw"
            style={{
              height: "auto",
            }}
            width={3}
            height={3}
            priority
          />
          <h1 className="text-white text-sm text-center mt-2">
            <span className="text-emerald-400">Credit:</span> Hovding helmets
          </h1>
        </div>
      </div>
    </div>
  );
}
