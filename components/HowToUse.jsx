"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image from "next/image";
import Link from "next/link";
const timelineData = [
  {
    title: "Take the cap and turn on the button inside the cap",
    gifLink:
      "https://res.cloudinary.com/de6unoan5/image/upload/v1736518731/Untitled_design_3_iprm5o.gif",
  },

  {
    title: "After indication light blinks put the cap in your head firmly",
    gifLink:
      "https://res.cloudinary.com/de6unoan5/image/upload/v1736518954/Untitled_design_4_pkfooa.gif",
  },
  // {
  //   title: "Wait for 3 minutes and you are done",
  // },
  {
    title:
      "Wait for the notification from SAGE in your mobile to know about potential seizure",
    gifLink:
      "https://res.cloudinary.com/de6unoan5/image/upload/v1736508704/Untitled_design_2_yw9pn8.gif",
  },
  {
    title: "LIVE ANXIETY FREE",
    isLast: true,
  },
];

const TimelineItem = ({ data, index, triggerNextAnimation, gifLink }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Delay showing the line
      const lineTimer = setTimeout(() => {
        setShowLine(true);
      }, 500); // Matches the initial box animation duration

      // Trigger next box animation after line appears
      const nextBoxTimer = setTimeout(() => {
        if (triggerNextAnimation) {
          triggerNextAnimation();
        }
      }, 1000); // Total delay before triggering next box (500ms + 500ms)

      return () => {
        clearTimeout(lineTimer);
        clearTimeout(nextBoxTimer);
      };
    } else {
      setShowLine(false);
    }
  }, [isInView, triggerNextAnimation]);

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.7 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      ref={itemRef}
      className={cn(
        "w-full md:w-auto relative flex flex-col mb-36 md:mb-20 group pl-2 pr-2 transform-gpu",
        data.isLast ? "mb-6" : "mb-36"
      )}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{ willChange: "transform, opacity, scale" }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="bg-[#172031] items-center backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 transition-shadow hover:shadow-lg flex flex-col md:flex-row">
        <h3 className="text-2xl text-center font-bold text-white mb-2 w-auto  ">
          {index < 3 ? (
            <span className="text-emerald-400">Step - {index + 1}: </span>
          ) : (
            <></>
          )}
          {data.title}
        </h3>
        {/* {data.gifLink && ( */}
        {true && !data.isLast && (
          <Image
            className="z-40 ml-4 md:w-[30%] w-[93%] mt-3 md:mt-0 border-2 border-emerald-400 roudned-xl"
            src={data.gifLink}
            // src="https://res.cloudinary.com/de6unoan5/image/upload/v1736508704/Untitled_design_2_yw9pn8.gif"
            alt={data.title}
            sizes="100vw"
            style={{
              height: "auto",
            }}
            width={3}
            height={3}
            priority
          />
        )}
      </div>

      <motion.div
        className="relative right-0 top-1/2 -translate-y-1/2"
        style={{ willChange: "transform, opacity, scale" }}
        animate={{
          scale: isInView ? 1 : 0.5,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {!data.isLast && (
          <motion.div
            className="absolute top-0 right-1/2 left-1/2 w-[2px] bg-emerald-400"
            initial={{ height: 0 }}
            animate={{
              height: showLine ? 150 : 0,
              origin: "top",
            }}
            transition={{
              duration: 0.5,
            }}
          />
        )}
      </motion.div>

      {/* {data.videoLink && (
        <div className="mt-8 md:mt-5 relative flex">
          <HeroVideoDialog
            className="mt-8 md:mt-5 "
            animationStyle="from-center"
            videoSrc={data.videoLink}
            // thumbnailSrc={data.thumbnailSrc}
            thumbnailSrc="/sage_thubnail.webp"
            thumbnailAlt={data.title}
          />
        </div>
      )} */}
      {data.imageLocation && (
        <>
          <Link
            href="https://docs.google.com/document/d/1_afRrAkfgFP8gl_aUPqJL_6VpLdL_n4ouxPC1z3V6F4/edit?usp=sharing"
            target="_blank"
            className="inset-x-0 mx-auto md:hidden text-center text-white mt-4 hover:underline"
          >
            View extended abstract
          </Link>
          <div className="relative group w-full h-64 mt-2 md:mt-4 rounded-lg border-2 border-emerald-400 overflow-hidden block">
            <Image
              src={data.imageLocation}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 group-hover:opacity-70"
            />
            <Link
              href="https://docs.google.com/document/d/1_afRrAkfgFP8gl_aUPqJL_6VpLdL_n4ouxPC1z3V6F4/edit?usp=sharing"
              target="_blank"
              className="absolute inset-0 flex items-center justify-center bg-transparent text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              View extended abstract
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default function HowToUseSage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerNextAnimation = () => {
    setActiveIndex((prev) => Math.min(prev + 1, timelineData.length - 1));
  };
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
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center min-h-screen py-5 md:py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="mt-8 md:mt-0 mb-6 text-4xl mx-auto md:text-6xl font-bold text-emerald-400"
          style={
            isMobile
              ? { textShadow: "2.5px 1px 1px #fff" }
              : { textShadow: "4px 0px 1px #ffffff" }
          }
        >
          How to use SAGE?
        </motion.h1>
        <div
          className="w-[95%] md:max-w-2xl h-11/12 mx-auto flex flex-col px-4"
          style={{ willChange: "transform, opacity, scale" }}
        >
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              index={index}
              triggerNextAnimation={
                index === activeIndex ? triggerNextAnimation : undefined
              }
            />
          ))}
        </div>
        {/* <h1 className="text-xl text-white text-center mb-3">
          See the demonstration video!
        </h1>
        <div className="mt-8 md:mt-5 relative flex w-[95%] md:max-w-xl flex-col ">
          <HeroVideoDialog
            className="mt-5 md:mt-0 block"
            animationStyle="from-center"
            // videoSrc={data.videoLink}
            thumbnailSrc="/sage_thubnail.webp"
            // thumbnailAlt={data.title}
          />
        </div> */}
      </div>
    </div>
  );
}
