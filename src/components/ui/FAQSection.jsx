"use client";
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import { DotPattern } from "@/components/ui/dot-pattern";
import BorderedHeading from "./BorderedHeading";
// import BorderedHeading from "./BorderedHeading";
import Footer from "../../../components/Footer";

export default function FAQSection() {
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
      { threshold: 0.3 } // Ensure section is fully visible
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
  const faqs = [
    {
      question: "What happens if it does not work?",
      answer:
        "Our vision is to make a patients life easy. So, after personal callibration if it doesn't work, we are always wlling to provide 100% refund.",
    },
    {
      question: "How do I make it work?",
      answer:
        "You just have to turn the swicth on and the cap on your head, that's it!",
    },
    {
      question:
        "How much time do I have to wait for getting some techincal help?",
      answer:
        "All technical help requests will be considered under 36 hours by our team!",
    },
    {
      question: "Will it work without Wi-Fi?",
      answer: "Yes, SAGE works completely offline.",
    },
  ];
  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-screen mx-auto flex flex-col py-12 px-4 sm:px-6 lg:px-8 bg-transparent items-center justify-center"
    >
      <DotPattern
        className={
          cn()
          //   "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        }
      />
      <AnimatePresence>
        {isInView && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className=" text-4xl md:text-6xl text-center font-bold text-emerald-300"
              style={{
                textShadow: "4px 0px 1px #ffffff",
              }}
            >
              Frequently Asked Questions
            </motion.h1>
            {/* <BorderedHeading text="Frequently Asked Questions" /> */}
            <div className="flex mb-10"></div>

            <motion.div
              style={{ willChange: "transform, opacity, scale" }}
              className="mt-10 w-11/12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
