"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useRef, useEffect, useState } from 'react';
import HeroSection from "../../components/HeroSection";
import SageIntroTest from "../../components/SageIntroTest";
import CustomerReview from "@/components/ui/CustomerReview";
import SageByNumbers from "@/components/ui/SageByNumbers";
import FAQSection from "@/components/ui/FAQSection";
import { DockDemo } from "@/components/ui/DockUse";
import WhySage from "../../components/WhySage";
import MeetTheTeam from "../../components/MeetTheTeam";
import Footer from "../../components/Footer";
import GlobeVisualization from "@/components/ui/globeMain";
import EpilepsyAroundTheWorld from "../../components/EpilepsyAroundTheWorld";
import { motion, AnimatePresence } from "framer-motion";
import JourneyOfSage from "../../components/JourneyOfSage";
import JoinTheRevolution from "../../components/JoinTheRevolution";
import HowToUseSage from "../../components/HowToUse";
import WhatsToCome from "../../components/WhatsToCome";
import DarknessWeEnlighten from "../../components/DarknessWeEnlighten";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div
      ref={containerRef}
      className="relative h-screen items-center justify-center overflow-y-scroll bg-slate-900"
    // style={{ scrollSnapType: 'y mandatory' }}
    >
      <nav className="fixed visible md:invisible top-0 z-50 right-0 w-full bg-gray-900 text-white">
        <div className="absolute top-0 right-0 flex items-center justify-between px-4 py-3">
          <div className="text-lg font-bold"></div>
          {/* Hamburger Icon */}
          <button
            onClick={toggleNavbar}
            className="block lg:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`lg:flex ${isOpen ? "block" : "hidden"
            } bg-gray-800 z-50 lg:bg-transparent`}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-4 p-4 lg:p-0">
            <Link
              href="#sage-intro"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              Intro
            </Link>
            <Link
              href="#why-sage"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              Why SAGE
            </Link>
            <Link
              href="#customer-review"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              Customer Review
            </Link>
            <Link
              href="#meet-the-team"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              Team
            </Link>
            <Link
              href="#faq-section"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              FAQ
            </Link>
            <Link
              href="/buy"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              BUY
            </Link>
            <Link
              href="/login"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
      <nav className="invisible md:visible border-[1px] fixed top-3 text-white bg-slate-800/90 flex w-[50%] rounded-md inset-x-0 mx-auto items-center justify-center py-2 px-2  flex-row z-50" >
        <Image
          className="z-40 border-[3px] border-emerald-400 rounded-full mr-1"
          src="/sage_logo_circle.webp"
          alt="SAGE-cap"
          sizes="100vw"
          width={35}
          height={35}
          priority
        />
        <Link
          href="#hero-section"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Home
        </Link>
        |
        <Link
          href="#sage-intro"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Intro
        </Link>
        |
        <Link
          href="#why-sage"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Why
        </Link>
        |
        <Link
          href="#journey-of-sage"
          className="px-2  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Journey
        </Link>
        |
        <Link
          href="#customer-review"
          className="px-2  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Reviews
        </Link>

        |
        <Link
          href="#meet-the-team"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Team
        </Link>
        |
        <Link
          href="#faq-section"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          FAQ
        </Link>
        |
        <Link
          href="/buy"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Get it
        </Link>
        |
        <Link
          href="/login"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          LOGIN
        </Link>
      </nav>
      <div className="absolute inset-0 ">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full absolute ball-animation-${i}`}
          ></div>
        ))}
      </div>
      {/* <ScrollProgress className="fixed top-0 z-50" /> */}

      <div id='hero-section' className="h-[48rem] md:h-auto md:min-h-screen scrollbar-hide overflow-y-hidden ">
        <HeroSection />
      </div>
      {/* <div id="EpilepsyAroundTheWorld" className="min-h-screen scrollbar-hide overflow-y-scroll  dsnap-start dmd:snap-section mdd:snap-start mdd:snap-always">
        <EpilepsyAroundTheWorld />
      </div> */}
      <div id="sage-intro" className="h-[67rem]  md:h-auto overflow-y-hide scrollbar-hide md:min-h-screen ">
        <SageIntroTest />
      </div>
      <div id="EpilepsyAroundTheWorld" className="h-[67rem] md:h-auto md:min-h-screen scrollbar-hide overflow-y-hide">
        <EpilepsyAroundTheWorld />
      </div>
      <div id="darkness" className="h-[90rem] md:h-auto md:min-h-screen overflow-y-hide scrollbar-hide">
        <DarknessWeEnlighten />
      </div>
      <div id="how-to-use" className="h-[105rem]  md:h-auto overflow-y-hidden scrollbar-hide md:min-h-screen">
        <HowToUseSage />
      </div>
      <div id="why-sage" className="md:min-h-screen md:h-auto h-[57rem] overflow-y-hidden scrollbar-hide">
        <WhySage />
      </div>
      {/* <div className="min-h-screen overflow-y-scroll dsnap-start scrollbar-hide mdd:snap-section mdd:snap-start mdd:snap-always">
        <SageByNumbers />
      </div> */}
      <div id="whats-to-come" className="min-h-screen h-[35rem]  overflow-y-hidden scrollbar-hide">
        <WhatsToCome />
      </div>

      <div id="journey-of-sage" className="min-h-screen overflow-y-hidden scrollbar-hide">
        <JourneyOfSage />
      </div>

      <div id="join-us-section" className="h-[120rem] md:h-auto md:min-h-screen overflow-y-hide scrollbar-hide">
        <JoinTheRevolution />
      </div>
      <div id="customer-review" className="h-[48rem] md:h-auto md:min-h-screen  scrollbar-hide overflow-y-hide ">
        <CustomerReview />
      </div>

      <div id="meet-the-team" className=" h-[120rem] md:h-auto md:min-h-screen overflow-y-hide scrollbar-hide">
        <MeetTheTeam />
      </div>
      <div id="faq-section" className="h-[45rem] md:h-auto md:min-h-screen overflow-y-hide scrollbar-hide">
        <FAQSection />
      </div>
      <Footer />

    </div>
  );
}

