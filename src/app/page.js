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
              Meet the Team
            </Link>
            <Link
              href="#faq-section"
              className="py-2 lg:py-0 cursor-pointer"
              onClick={toggleNavbar}
            >
              FAQ
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
      <nav className="invisible md:visible border-[1px] fixed top-3 text-white bg-slate-800/90 flex w-[45%] rounded-md inset-x-0 mx-auto items-center justify-center py-3 px-2  flex-row z-50" >
        <Link
          href="#sage-intro"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-500 hover:scale-110"
        >
          Intro
        </Link>
        <Link
          href="#why-sage"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-500 hover:scale-110"
        >
          Why SAGE
        </Link>
        <Link
          href="#customer-review"
          className="px-2  cursor-pointer hover:text-emerald-400 ease-in duration-500 hover:scale-110"
        >
          Customer Review
        </Link>
        <Link
          href="#meet-the-team"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-500 hover:scale-110"
        >
          Meet the Team
        </Link>
        <Link
          href="#faq-section"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-500 hover:scale-110"
        >
          FAQ
        </Link>
        <Link
          href="/login"
          className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-500 hover:scale-110"
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
      {/* <div className="md:visible invisible mx-auto w-fit fixed inset-x-0 bottom-3 z-50">
        <DockDemo />
      </div> */}

      <div id='#home' className="h-screen dsnap-start z-30 dmd:snap-section dmd:snap-start md:snap-always">
        <HeroSection />

      </div>

      <div id="sage-intro" className="min-h-screen dsnap-start overflow-y-scroll scrollbar-hide dmd:snap-section mdd:snap-start md:snap-always">
        <SageIntroTest />
      </div>

      <div id="why-sage" className="min-h-screen dsnap-start  mdd:snap-section mdd:snap-start mdd:snap-always">
        <WhySage />
      </div>
      {/* <div className="min-h-screen overflow-y-scroll dsnap-start scrollbar-hide mdd:snap-section mdd:snap-start mdd:snap-always">
        <SageByNumbers />
      </div> */}
      <div className="min-h-screen scrollbar-hide overflow-y-scroll  dsnap-start dmd:snap-section mdd:snap-start mdd:snap-always">
        <EpilepsyAroundTheWorld />
      </div>
      <div id="customer-review" className="min-h-screen dsnap-start scrollbar-hide dmd:snap-section mdd:snap-start mdd:snap-always">
        <CustomerReview />
      </div>
      <div id="meet-the-team" className="min-h-screen  overflow-y-scroll dsnap-start scrollbar-hide md:snap-sectiodn mdd:snap-start mdd:snap-always">
        <MeetTheTeam />
      </div>
      <div id="faq-section" className="min-h-screen dsnap-start mdd:snap-section mdd:snap-start mdd:snap-always">
        <FAQSection />
      </div>

    </div>
  );
}

