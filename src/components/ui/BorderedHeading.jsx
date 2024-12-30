"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BorderedHeading({ text = "", className = "" }) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="relative mb-2 leading-tight"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={textVariants}
        className={cn(
          "text-5xl md:text-6xl text-center absolute -top-1 -left-1 font-black text-white text-nowrap blur-[1px]",
          className
        )}
        aria-hidden="true"
      >
        {text}
      </motion.h1>
      <motion.h1
        variants={textVariants}
        className={cn(
          "text-5xl md:text-6xl text-center text-nowrap font-black text-teal-500",
          className
        )}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
}