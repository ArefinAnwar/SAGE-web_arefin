"use client";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  // {
  //   quote:
  //     "Ellie Henry's terrifying health scare underscores how epilepsy robs individuals of their independence, leaving them dependent on others for basic daily activities.",
  //   source: "TheSun.co.uk",
  //   link: "https://thesun.co.uk",
  // },
  // {
  //   quote:
  //     "For years, Charlie Rolstone mistook her symptoms for mere overuse of her phone, only to discover they stemmed from a brain disorder that disrupted her life in unimaginable ways.",
  //   source: "NYPost.com",
  //   link: "https://nypost.com",
  // },
];

export default function DarknessWeEnlighten() {
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
  const sentences = [
    "Epliepsy won't be a curse",
    'The patient can actually "afford" epilepsy aid products',
    "Predict seizures 10 minutes before happening freeing the patients of unending worries and anxieties",
    "Give the gift of joy to all epilepsy patients from any geography, from all income ranges.",
    'Make Sage "the brand" for epilepsy care, balancing quality and affordability',
    "Give special discounts to hospitals and influencers to facilitate wide spread usage of the upcoming favourite of all epilepsy patients, SAGE",
    "Give free products to non-profit campaigns. Define our strong stand with social service towards the world epilepsy community",
  ];

  const [displayText, setDisplayText] = useState([""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= sentences.length) return;

    const timer = setTimeout(
      () => {
        if (currentChar < sentences[currentLine].length) {
          setDisplayText((prev) => {
            const newText = [...prev];
            newText[currentLine] = sentences[currentLine].slice(
              0,
              currentChar + 1
            );
            return newText;
          });
          setCurrentChar((prev) => prev + 1);
        } else {
          if (currentLine < sentences.length - 1) {
            setCurrentLine((prev) => prev + 1);
            setCurrentChar(0);
            setDisplayText((prev) => [...prev, ""]);
          }
        }
      },
      currentLine === 0 && currentChar === 0 ? 4500 : 50
    );

    return () => clearTimeout(timer);
  }, [currentChar, currentLine]);

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
        Our Mission
      </motion.h1>
      {isInView && (
        <>
          <div className="flex flex-col md:flex-col h-full w-[95%] md:w-11/12 items-center justify-center mt-4 md:mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemsData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index }}
                  className="p-6 bg-gray-800 rounded-lg shadow-lg border border-emerald-500 hover:border-emerald-300 transform-gpu"
                >
                  <p className=" italic text-gray-300 mb-4 text-sm">
                    <span className="text-emerald-400 text-2xl">&quot;</span>
                    {item.quote}
                    <span className="text-emerald-400 text-2xl">&quot;</span>
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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className=" relative w-full h-1/2 mt-12"
            >
              {/* Tab */}
              <div className="absolute -top-8 left-4 bg-slate-800 text-emerald-400 px-4 py-2 rounded-t-lg border-t border-l border-r border-emerald-400">
                sage@epilepsy-care:~$ goals.sh
              </div>
              {/* Terminal Window */}
              <div className="w-full h-[40rem] md:h-[22rem]  bg-slate-800 rounded-lg p-4 font-mono text-emerald-400 overflow-y-auto flex flex-col border border-emerald-400">
                <div className="text-slate-300 mb-2">
                  Last login: {new Date().toLocaleString()} on ttys000
                </div>
                <div className="flex flex-col  h-full">
                  {displayText.map((line, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 md:min-h-8 h-auto mb-2 space-y-2 text-sm  justify-center"
                      initial={{ opacity: 0, y: 0 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={
                        index == 0
                          ? { duration: 0, delay: 0 }
                          : { duration: 0, delay: 0 }
                      }
                    >
                      <span className="text-white block h-auto md:h-5  mt-2">
                        &gt;
                      </span>
                      <span className="flex-1 h-auto md:h-5">
                        {line}
                        {index === currentLine && showCursor && (
                          <span className="inline-block w-3 h-1 bg-emerald-400 ml-1"></span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
