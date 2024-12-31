"use client";
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import BorderedHeading from "./BorderedHeading";
// import BorderedHeading from "./BorderedHeading";
import Footer from "../../../components/Footer";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is ShadCN and MagicUI?",
      answer:
        "ShadCN provides Tailwind CSS-based components, while MagicUI integrates additional interactive features to enhance UI development.",
    },
    {
      question: "How do I install this component?",
      answer:
        "Simply place the Faq component in your project, import it, and include it in your page.",
    },
    {
      question: "Can I customize this FAQ section?",
      answer:
        "Yes, you can customize the questions, answers, and even the styling by modifying the component code.",
    },
    {
      question: "Is this component mobile-friendly?",
      answer:
        "Yes, the component is built with Tailwind CSS, making it responsive and mobile-friendly.",
    },
  ];
  var text = "Frequently Asked Questions";
  return (
    <div className="relative w-full overflow-hidden min-h-screen mx-auto flex flex-col py-12 px-4 sm:px-6 lg:px-8 bg-transparent items-center justify-center">
      <h1 className=" text-4xl md:text-6xl text-center font-bold text-emerald-300" style={{
          textShadow: "4px 0px 1px #ffffff",
        }}>
        Frequently Asked Questions
      </h1>
      {/* <BorderedHeading text="Frequently Asked Questions" /> */}
      <div className="flex mb-10"></div>
      <DotPattern
        className={cn(
        //   "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <motion.div
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
      <Footer/>
    </div>
  );
}
