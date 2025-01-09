"use client";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Typewriter } from "react-simple-typewriter";
import ShimmerButton from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function HeroSection() {
  return (
    <div className="relative flex md:flex-row justify-center  md:justify-normal flex-col-reverse z-30  w-full h-auto min-h-screen px-4 md:px-12">
      <div className="flex flex-col z-10 w-full -mt-14 md:mt-6  md:w-1/2 ">
        <h1
          className="text-[7rem] md:text-[12rem] text-emerald-300 mt-2 font-bold"
          style={{
            textShadow: "6px 0px 1px #ffffff",
          }}
        >
          SAGE
        </h1>
        <p className="text-3xl md:text-5xl w-full -mt-8 md:mt-0 text-white h-32 ">
          <Typewriter
            words={[
              "Seizure Prediction Made Simple. Made Smart.",
              "Your AI Ally Against Epilepsy.",
              "Prepare. Act. Stay Safe with SAGE.",
              "Redefining Seizure Management for Everyone.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={55}
            deleteSpeed={30}
            delaySpeed={1300}
          />
        </p>
        <div className="flex-col md:flex-row md:mt-5 items-center md:items-center md:justify-between justify-center md:pr-10 flex w-full md:h-16">
          <Link className="w-full md:w-64 cursor-pointer" href="/buy">
            <ShimmerButton className="font-semibold mb-4 md:mb-0 text-white text-xl md:text-3xl   w-full md:w-64 py-2 ">
              <span className="">GET SAGE</span>
            </ShimmerButton>
          </Link>
          <Link href="#sage-intro " className="cursor-pointer w-full md:w-64">
            <button className="bg-[#fff] hover:bg-[#6BBF8B] hover:border-[#186d3e]  duration-300 border-4 font-semibold border-[#6BBF8B] text-[#186d3e] hover:text-white text-xl md:text-3xl px-1 w-full md:w-64 py-2 rounded-2xl hover:border-0 ease-linear">
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>
      <motion.div
        animate={{
          y: ["0%", "-5%", "0%"], // Move up, then down
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8, // Duration of one bounce
          ease: "easeInOut", // Smooth easing
          repeat: Infinity,
          repeatType: "loop", // Continuous looping
        }}
        className="relative flex mb-8   md:mb-0  z-10 flex-col w-full px-4 md:px-0 md:w-1/2  justify-center items-center"
      >
        <DotPattern
          className={cn(
            "md:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "[mask-image:radial-gradient(170px_circle_at_center,white,transparent)]",
            "z-10"
          )}
        />

        <Image
          className="z-40 md:w-[65%] w-[90%]"
          src="/sage_cap_blackk.webp"
          alt="SAGE-cap"
          sizes="100vw"
          style={{
            height: "auto",
          }}
          width={3}
          height={3}
          priority
        />
      </motion.div>
    </div>
  );
}
