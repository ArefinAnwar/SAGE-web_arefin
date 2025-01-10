"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image from "next/image";
import Link from "next/link";

const timelineData = [
  {
    title: "Idea Generation Phase",
    description:
      "We were doing a colab with a private hospital in Dhaka, where we noticed a patient's epileptic seizure all of a sudden. This sparked a curiosity among us. The present doctors told about the uncertainity of epileptic seizures and the mental state of these patients. We felt from the bottom of hour heart that as youth we should do something.",
    imageLocation: "/hospital_pic.webp",
  },
  {
    title: "Research Phase",
    description:
      "We started SAGE as a research paper to explore innovative approaches for epilepsy seizure prediction. Realizing its potential to address real-world challenges, we expanded the scope beyond academia. We took the inititive to gift the worldwide epeilepsy community with a magical device.",
    imageLocation: "/research_paper.webp",
  },

  {
    title: "Hardware Development",
    description:
      "Designed a portable, low-cost EEG cap using the 4 electrode placement system.",
    videoLink: "https://www.youtube.com/embed/uF-QtMmfezY",
    thumbnailSrc:
      "https://i9.ytimg.com/vi/sLCPz3NDtK4/mqdefault.jpg?sqp=CJyt8LsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFMgWyhlMA8=&rs=AOn4CLAQyLoArax6KSxUali_ITY497ePTg",
  },
  {
    title: "Software Development",
    description:
      "We developed an AI-powered software using LSTM models for real-time seizure prediction. LSTM model along with proximal policy optimization, temporal fusion transformer showed satisfying results. 960 hours of EEG data was used on A100 GPU to train.",
  },
  {
    title: "Testing & Calibration",
    description:
      "Conducted tests on 8 people low-income-background people. We then got all useful feedbacks and applied them into our product. ",
    videoLink: "https://www.youtube.com/embed/CHmXOEgNLaM",
    thumbnailSrc:
      "https://i9.ytimg.com/vi/sykhHvuB-Fw/mqdefault.jpg?sqp=CMiv8LsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXihOMA8=&rs=AOn4CLByb88lFV03dyL7RNOmPnPdoIXTLQ",
  },
  {
    title: "SAGE Launch",
    description: "Finally, SAGE emerged as a revolutionary wearable device.",
    videoLink: "https://www.youtube.com/embed/eaVbmLrPmN4",
    thumbnailSrc:
      "https://i9.ytimg.com/vi/-YJh8KfjKIM/mqdefault.jpg?sqp=CMiv8LsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGC0gXihyMA8=&rs=AOn4CLCvmWMsVdguYDzn1mPOs7Qx7DdjmQ",
  },
  {
    title: "Expansion of SAGE",
    description:
      "Our vision is to make SAGE the ultimate brand for epilepsy care. From mild relaxant drinks to high tech device like earbuds, we want to make the epilepsy care affordable and easy. SAGE is not only a brand but a hope for entire epilepsy community!",
    // videoLink: "https://www.youtube.com/embed/-YJh8KfjKIM",
    // humbnailSrc:
    // "https://i9.ytimg.com/vi/-YJh8KfjKIM/mqdefault.jpg?sqp=CMiv8LsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGC0gXihyMA8=&rs=AOn4CLCvmWMsVdguYDzn1mPOs7Qx7DdjmQ",
  },
];

const TimelineItem = ({ data, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.7 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      ref={itemRef}
      className="w-full md:w-auto relative flex flex-col mb-72 md:mb-60 group pl-2 pr-12 transform-gpu"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{ willChange: "transform, opacity, scale" }}
      transition={{
        duration: 0.5,
      }}
    >
      <div
        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20
                   transition-shadow hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col"
      >
        <h3 className="text-xl font-bold text-emerald-500 mb-2">
          {data.title}
        </h3>
        <p className="text-gray-400">{data.description}</p>
      </div>

      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        style={{ willChange: "transform, opacity, scale" }}
        animate={{
          scale: isInView ? 1 : 0.5,
          rotate: isInView ? 360 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div
          className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500
                     flex items-center justify-center group-hover:shadow-lg 
                     group-hover:shadow-emerald-500/20 transition-shadow"
        >
          <span className="text-white mr-1">{index + 1}</span>
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
      {data.videoLink && (
        <HeroVideoDialog
          className="mt-8 md:mt-5 block"
          animationStyle="from-center"
          videoSrc={data.videoLink}
          // thumbnailSrc={data.thumbnailSrc}
          thumbnailSrc="/sage_thubnail.webp"
          thumbnailAlt={data.title}
        />
      )}
      {data.imageLocation && (
        <>
          <Link
            href="https://docs.google.com/document/d/1_afRrAkfgFP8gl_aUPqJL_6VpLdL_n4ouxPC1z3V6F4/edit?usp=sharing" // Replace with your desired URL
            target="_blank"
            className="inset-x-0 mx-auto md:hidden text-center text-white mt-4 hover:underline "
          >
            View extended abstract
          </Link>
          <div className="relative group w-full h-64 mt-2 md:mt-4 rounded-lg border-2 border-emerald-400 overflow-hidden block">
            <Image
              src={data.imageLocation} // Replace with your image path
              alt={data.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 group-hover:opacity-50"
            />
            <Link
              href="https://docs.google.com/document/d/1_afRrAkfgFP8gl_aUPqJL_6VpLdL_n4ouxPC1z3V6F4/edit?usp=sharing" // Replace with your desired URL
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

export default function JourneyOfSage() {
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
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center min-h-screen py-5 md:py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="mt-8 md:mt-0 mb-6 text-4xl mx-auto md:text-6xl font-bold text-emerald-300"
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
          Journey of SAGE
        </motion.h1>
        <div
          className="w-[95%]  md:max-w-2xl h-11/12 mx-auto flex flex-col px-4"
          style={{ willChange: "transform, opacity, scale" }}
        >
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
