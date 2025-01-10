"use client";
import Image from "next/image";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import GridPattern from "@/components/ui/grid-pattern";
import { useRef, useState, useEffect } from "react";

export default function MeetTheTeam() {
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
      className="flex relative flex-col  items-center justify-center h-full md:h-auto w-full pb-10 md:pb-10"
    >
      <GridPattern className={cn("h-[100%] z-20")} />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 md:mt-10 text-4xl md:text-6xl font-bold text-emerald-400 transform-gpu z-30"
        style={
          isMobile
            ? {
                textShadow: "2.5px 1px 1px #ffffff",
                display: "inline-block",
                willChange: "transform, opacity, scale",
              }
            : {
                textShadow: "4px 0px 1px #ffffff",
                display: "inline-block",
                willChange: "transform, opacity, scale",
              }
        }
      >
        Meet the Team
      </motion.h1>
      <div className="flex scrollbar-hide flex-col md:flex-row items-center justify-center w-full mt-0 md:mt-4 md:h-[30rem]">
        <PeopleCard
          Name="Arefin Anwar"
          image="/arefin_informal.webp"
          Designation="Operations Lead"
          Description="Pupil of class 11 at St. Joseph Higher Secondary School, Dhaka, Bangladesh"
          Contact="arefinanwar112@gmail.com"
        />
        <PeopleCard
          Name="Misbah Uddin Inan"
          image="/inan_informal.jpg"
          Designation="Research & Executive Lead"
          Description="Pupil of class 11 at Notre Dame College, Dhaka, Bangladesh"
          Contact="misbahinan@gmail.com"
        />
        <PeopleCard
          Name="Abrar Shahid"
          image="/abrar_informal.jpg"
          Designation="Technical Lead"
          Description="Pupil of class 11 at Notre Dame College, Dhaka, Bangladesh"
          Contact="abrarshahidrahik@gmail.com"
        />
        <PeopleCard
          Name="Rafid Ahmed"
          image="/rafid_informal.jpg"
          Designation="Finance Lead"
          Description="Pupil of class 11 at Academia School, Dhaka, Bangladesh"
          Contact="steinerstein313@gmail.com"
        />
      </div>
    </div>
  );
}

function PeopleCard({ Name, Designation, Description, Contact, image }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      ref={ref}
      style={{ willChange: "transform, opacity, scale" }}
      initial={{ opacity: 0, y: 0, x: 50, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-[85%] md:w-[22%] mt-4 md:mt-0 h-[25rem] md:h-[95%] mx-2 justify-center items-center bg-zinc-800 bg-opacity-50 border-2 border-white outline-2 outline-emerald-400 transform-gpu z-40"
    >
      <motion.div className="flex border-4 border-emerald-400 flex-row mt-5 w-[50%] md:w-[70%] h-[60%] bg-zinc-800 bg-opacity-50 items-center justify-center overflow-hidden ">
        <Image
          className="z-40"
          src={image}
          alt={Name}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={3}
          height={3}
        />
      </motion.div>
      <div className="flex flex-col w-full items-center justify-center">
        <span className="text-2xl text-emerald-400 font-semibold mt-4">
          {Name}
        </span>
        <span className="text-md mt-2 text-slate-100 italic">
          <motion.div
            className="relative "
            style={{
              display: "inline-block",
              willChange: "transform, opacity, scale",
            }}
          >
            {Designation}
            <motion.div
              style={{ willChange: "transform, opacity, scale" }}
              className="absolute bottom-0 left-0 h-[2px] bg-emerald-400"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{
                delay: 2.3,
                duration: 1,
              }}
            />
          </motion.div>
        </span>
      </div>

      <div className="flex flex-col w-[85%] h-[30%] mt-4">
        <span className="text-white text-sm text-center w-full break-words">
          {Description}
        </span>
        <p className="text-[.7rem] text-center mt-4 text-white break-keep">
          <span className="text-emerald-400">Connect: </span>
          {Contact}
        </p>
      </div>
    </motion.div>
  );
}
