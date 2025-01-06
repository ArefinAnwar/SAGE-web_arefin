"use client";
import Image from "next/image";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GridPattern from "@/components/ui/grid-pattern";

export default function MeetTheTeam() {
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
      className="flex relative flex-col scrollbar-hide items-center justify-center min-h-screen w-full mb-8 md:pb-5"
    >
      <GridPattern
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[130%]  z-20",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent",
          "after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-white after:to-transparent after:mix-blend-overlay"
        )}
      />
      {isInView && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 md:mt-10 text-4xl md:text-6xl font-bold text-emerald-300"
            style={{
              textShadow: "4px 0px 1px #ffffff",
            }}
          >
            Meet the Team
          </motion.h1>

          <div className="flex scrollbar-hide flex-col md:flex-row items-center justify-center w-full mt-0 md:mt-4  md:h-[30rem]">
            <PeopleCard
              Name="Arefin Anwar"
              image="/arefin_informal.jpg"
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
        </>
      )}
    </div>
  );
}

function PeopleCard({ Name, Designation, Description, Contact, image }) {
  return (
    <motion.div
      style={{ willChange: "transform, opacity, scale" }}
      initial={{ opacity: 0, y: -30, x: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col w-[85%] md:w-[22%] mt-4 md:mt-0 h-[25rem] md:h-[95%] mx-2 justify-center items-center bg-zinc-800 bg-opacity-50 border-2 border-white outline-2 outline-emerald-400 transform-gpu"
    >
      <motion.div
        style={{ willChange: "transform, opacity, scale" }}
        className="flex border-4 border-emerald-400 flex-row mt-5 w-[50%] md:w-[70%] h-[60%] bg-zinc-800 bg-opacity-50 items-center justify-center overflow-hidden transform-gpu"
      >
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
            className="relative transform-gpu"
            style={{
              display: "inline-block",
              willChange: "transform, opacity, scale",
            }}
          >
            {Designation}
            <motion.div
              style={{ willChange: "transform, opacity, scale" }}
              className="absolute bottom-0 left-0 h-[2px] bg-emerald-400 transform-gpu"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: 2.3,
                duration: 1.5,
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
