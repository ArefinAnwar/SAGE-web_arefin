"use client";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const problemsData = [
  {
    quote:
      "Tom O'Neill's tragic passing in his sleep highlights the unpredictable nature of epilepsy, leaving families constantly on edge, fearing the next seizure.",
    source: "People.com",
    link: "https://people.com/marathoner-22-dies-in-sleep-tom-oneill-epilepsy-seizure-8768808",
  },
  {
    quote:
      "For Muskaan Gill's brother, the anxiety of never knowing when a seizure might strike is a constant shadow, disrupting even the simplest daily routines.",
    source: "Northeastern.edu",
    link: "https://northeastern.edu",
  },
  {
    quote:
      "Epilepsy patients often grapple with isolation and fear, as the lack of reliable prediction tools leaves them vulnerable to sudden, debilitating episodes.",
    source: "Businesswire.com",
    link: "https://businesswire.com",
  },
  {
    quote:
      "Ellie Henry's terrifying health scare underscores how epilepsy robs individuals of their independence, leaving them dependent on others for basic daily activities.",
    source: "TheSun.co.uk",
    link: "https://thesun.co.uk",
  },
  {
    quote:
      "For years, Charlie Rolstone mistook her symptoms for mere overuse of her phone, only to discover they stemmed from a brain disorder that disrupted her life in unimaginable ways.",
    source: "NYPost.com",
    link: "https://nypost.com",
  },
];
export default function DarknessWeEnlighten() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px" });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col h-full md:min-h-screen w-full  items-center"
    >
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
        Darkness We Enlighten
      </motion.h1>
      {isInView && (
        <>
          <div className="flex flex-col md:flex-row h-full w-[95%] md:w-11/12 items-center justify-center mt-4 md:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemsData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index }}
                  className="p-6 bg-gray-800 rounded-lg shadow-lg border border-emerald-500 hover:border-emerald-300 transform-gpu"
                >
                  <p className=" italic text-gray-300 mb-4">
                    <span className="text-emerald-400 text-2xl">"</span>
                    {item.quote}
                    <span className="text-emerald-400 text-2xl">"</span>
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-medium hover:underline"
                  >
                    Source: {item.source}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
