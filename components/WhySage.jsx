"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

export default function WhySage() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
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
      { threshold: 0.1 } // Trigger when 30% of the section is visible
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
      question: "How will it revolutionize epilepsy treatment?",
      answer:
        "SAGE brings a groundbreaking shift in epilepsy care by predicting seizures before they happen—a life-changing capability under $250! With an incredible 94% accuracy through custom calibration, SAGE empowers patients and families with advance alerts, enabling timely safety measures and potentially saving lives. By pairing cutting-edge AI with real-time EEG monitoring, it bridges the gap between prevention and treatment, even for those in low-income conditions.",
    },
    {
      question: "Why should someone use SAGE?",
      answer:
        "SAGE is more than just a device—it’s peace of mind in a headband. Whether you’re a patient or a caregiver, SAGE keeps you prepared for the unexpected, offering: Seizure alerts in advance to stay safe. Family notifications with real-time location for quick support. Accurate insights for doctors, enabling better treatment plans. With its sleek design and affordable price, SAGE makes advanced seizure prediction accessible to everyone!",
    },
    {
      question: "What role does SAGE play in advancing medical research?",
      answer:
        "SAGE collects detailed EEG data during and between seizures, offering valuable insights for medical professionals. This data can help researchers understand epilepsy better, refine treatment plans, and contribute to advancements in neurology. It’s not just a product; it’s a tool for innovation in epilepsy care.",
    },
    {
      question: "Why should they choose your product for the first time? ",
      answer: "SAGE offers something no other device can—a chance",
    },
  ];
  const faqs2 = [
    {
      question: "How does SAGE aid epilepsy care in low-income areas?",
      answer:
        "With 80% of epilepsy patients living in low-income conditions, traditional seizure monitoring devices are unaffordable. SAGE, priced under $250, brings advanced technology to underserved areas. Its affordability and portability mean more patients worldwide can access life-saving seizure prediction and better treatment outcomes.",
    },
    {
      question: "What societal benefits does SAGE create?",
      answer:
        "Epilepsy often leads to stigma and discrimination, limiting patients’ opportunities. By providing a proactive solution, SAGE reduces the social and emotional impact of the condition. It enables patients to lead more productive lives, participate in their communities, and break free from the isolation epilepsy often causes.",
    },
    {
      question: "How does SAGE align with global healthcare goals?",
      answer:
        "SAGE supports WHO’s goal to reduce the epilepsy treatment gap by making advanced care affordable and accessible. Its predictive capabilities reduce emergency visits and hospitalizations, easing the burden on healthcare systems and improving overall quality of care.",
    },
    {
      question: "What future advancements can SAGE enable?",
      answer:
        "SAGE is just the beginning. With continual AI updates, it could predict seizure triggers, monitor other neurological conditions, or even integrate into smart home systems to automate safety protocols. The possibilities for expanding its impact are limitless.",
    },
  ];

  return (
    <div
      style={{ willChange: "transform, opacity" }}
      ref={sectionRef}
      className="flex relative  scrollbar-hide overflow-x-hidden overflow-hidden flex-col min-h-screen items-center  pb-16 w-full"
    >
      <h1 className="text-slate-800 text[10rem] md:text-[50rem] absolute right-5 rotate-12  top-0">
        ?
      </h1>
      <h1 className="text-slate-800 text[1rem] md:text-[10rem] absolute left-5 top-32  font-extralight">
        O
      </h1>
      <h1 className="text-slate-800 text[1rem] md:text-[10rem] absolute left-44 top-96 rotate-12 font-extralight">
        #
      </h1>
      {isInView && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" text-4xl md:text-6xl  mt-6 md:mt-20 font-bold text-center text-emerald-400"
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
            Why SAGE?
          </motion.h1>

          <p className=" top-0 mt-4  italic text-sm px-2 md:text-lg text-slate-200 text-center">
            How about a patient living happily without disruptions from sudden
            seizures with a utopian device? That's SAGE!
          </p>
          <div className=" mt-4  md:mt-16  scrollbar-hide top-32 md:bottom-0  flex-col md:flex-row flex w-[95%] h-[120%] items-center justify-center z-50">
            <div className="flex scrollbar-hide flex-col w-[95%] md:mr-4 md:w-1/2 h-full overflow-y-scroll justify-center z-50">
              <motion.div
                style={{ willChange: "transform, opacity, scale" }}
                className=" w-full transform-gpu"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Accordion type="single" collapsible className="space-y-4 ">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-md">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-slate-200">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
            <div className="flex flex-col  mb-10 md:mb-0 w-[95%] scrollbar-hide md:w-1/2 h-[115%] overflow-y-scroll md:h-full justify-center z-50">
              <motion.div
                style={{ willChange: "transform, opacity, scale" }}
                className="w-full transform-gpu"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs2.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-md">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-slate-200">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
