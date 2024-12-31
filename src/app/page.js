"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useRef, useEffect } from 'react';
import HeroSection from "../../components/HeroSection";
import SageIntroTest from "../../components/SageIntroTest";
import CustomerReview from "@/components/ui/CustomerReview";
import SageByNumbers from "@/components/ui/SageByNumbers";
import FAQSection from "@/components/ui/FAQSection";
import { DockDemo } from "@/components/ui/DockUse";
import WhySage from "../../components/WhySage";
import MeetTheTeam from "../../components/MeetTheTeam";
import Footer from "../../components/Footer";

import { cn } from "@/lib/utils";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;
    let startY = 0;
    let currentSection = 0;

    const sections = container.querySelectorAll('.snap-section');

    const scrollToSection = (index) => {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleWheel = (e) => {
      if (isScrolling) return;

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      } else if (e.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isScrolling) return;

      const deltaY = e.touches[0].clientY - startY;

      if (deltaY < -50 && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      } else if (deltaY > 50 && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    };

    container.addEventListener('wheel', handleWheel);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen items-center justify-center overflow-y-scroll bg-slate-900 scroll-smooth"
      style={{ scrollSnapType: 'y mandatory' }}
    >

      <div className="absolute inset-0 ">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full absolute ball-animation-${i}`}
          ></div>
        ))}
      </div>
      {/* <ScrollProgress className="fixed top-0 z-50" /> */}
      <div className="md:visible invisible mx-auto w-fit fixed inset-x-0 bottom-3 z-50">
        <DockDemo />
      </div>
      <div id='#home' className="h-screen  z-30 snap-section snap-start snap-always">
        <HeroSection />

      </div>

      <div id="sage-intro" className="min-h-screen overflow-y-scroll scrollbar-hide snap-section snap-start snap-always">
        <SageIntroTest />
      </div>
      <div id="why-sage" className="min-h-screen overflow-y-scroll scrollbar-hide snap-section snap-start snap-always">
        <WhySage />
      </div>
      {/* <div className="h-screen snap-section snap-start snap-always">
        <SageByNumbers />
      </div> */}
      <div id="customer-review" className="min-h-screen snap-section snap-start snap-always">
        <CustomerReview />
      </div>
      <div id="meet-the-team" className="min-h-screen overflow-y-scroll scrollbar-hide snap-section snap-start snap-always">
        <MeetTheTeam />
      </div>
      <div id="faq-section" className="min-h-screen snap-section snap-start snap-always">
        <FAQSection />
      </div>

    </div>
  );
}

