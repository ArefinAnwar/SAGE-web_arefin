"use client";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { motion, useInView } from "framer-motion";
export default function WhatsToCome() {
  return (
    <div className="flex flex-col min-h-screen w-full  items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="mt-8 md:mt-0 mb-6 text-4xl mx-auto md:text-6xl font-bold text-emerald-300 text-center "
        style={{
          textShadow: "4px 0px 1px #ffffff",
        }}
      >
        Whats to come
      </motion.h1>
      <div className="flex flex-col md:flex-row h-full w-[95%] md:w-11/12 items-center justify-center mt-4 md:mt-6">
        <div className="flex flex-col w-full h-full md:w-1/2">
          <h1 className="text-white text-lg mr-0 md:mr-5 mx-3 md:mx-0">
            Sometimes the seizure may be so strong that the patient may lose his
            control over body. So, we are working on a pneumatic air cushion
            system which will deploy automatically when it detects that the
            patient is falling to protect his brain.
          </h1>
        </div>
        <div className="h-full w-full md:w-1/2">
          <HeroVideoDialog
            className="mt-5 md:mt-0 block"
            animationStyle="from-center"
            // videoSrc={data.videoLink}
            // thumbnailSrc={data.thumbnailSrc}
            // thumbnailAlt={data.title}
          />
        </div>
      </div>
    </div>
  );
}
