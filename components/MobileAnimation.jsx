"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MobileSignalAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    // Animate phone outline
    gsap.fromTo(
      svg.querySelector("#phone-outline"),
      { strokeDasharray: 1600, strokeDashoffset: 1600 },
      { strokeDashoffset: 0, duration: 2, ease: "easeInOut" }
    );

    // Animate screen opacity
    gsap.fromTo(
      svg.querySelector("#screen"),
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2 }
    );

    // Animate home button scale
    gsap.fromTo(
      svg.querySelector("#home-button"),
      { scale: 0 },
      { scale: 1, duration: 0.5, delay: 2.5, transformOrigin: "center" }
    );

    // Animate incoming signal path
    gsap.fromTo(
      svg.querySelector("#incoming-signal"),
      { strokeDasharray: 400, strokeDashoffset: 400 },
      {
        strokeDashoffset: 0,
        duration: 1.5,
        delay: 3,
        repeat: -1,
        repeatDelay: 2,
        ease: "power1.inOut",
      }
    );

    // Animate processing circle
    gsap.fromTo(
      svg.querySelector("#processing-circle"),
      { scale: 0, rotate: 0 },
      {
        scale: 1,
        rotate: 360,
        duration: 2,
        delay: 4.5,
        repeat: -1,
        repeatDelay: 1,
        transformOrigin: "center",
      }
    );

    // Animate outgoing signal path
    gsap.fromTo(
      svg.querySelector("#outgoing-signal"),
      { strokeDasharray: 400, strokeDashoffset: 400 },
      {
        strokeDashoffset: 0,
        duration: 1.5,
        delay: 6,
        repeat: -1,
        repeatDelay: 2,
        ease: "power1.inOut",
      }
    );

    // Animate signal dots
    const incomingDots = svg.querySelectorAll(".incoming-dot");
    const outgoingDots = svg.querySelectorAll(".outgoing-dot");

    gsap.fromTo(
      incomingDots,
      { scale: 0, x: -50 },
      {
        scale: 1,
        x: 50,
        duration: 1.5,
        delay: (i) => 3 + i * 0.5,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
      }
    );

    gsap.fromTo(
      outgoingDots,
      { scale: 0, x: -50 },
      {
        scale: 1,
        x: 50,
        duration: 1.5,
        delay: (i) => 6 + i * 0.5,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <svg
        ref={svgRef}
        width="800"
        height="600"
        viewBox="0 0 800 600"
        className="overflow-visible"
      >
        {/* Mobile Phone Outline */}
        <rect
          id="phone-outline"
          x="250"
          y="100"
          width="300"
          height="400"
          rx="20"
          fill="none"
          stroke="#14b8a6" // Teal-500
          strokeWidth="4"
        />

        {/* Screen */}
        <rect
          id="screen"
          x="270"
          y="140"
          width="260"
          height="320"
          rx="10"
          fill="#0f172a" // Darker background for screen
        />

        {/* Home Button */}
        <circle
          id="home-button"
          cx="400"
          cy="480"
          r="15"
          fill="none"
          stroke="#14b8a6" // Teal-500
          strokeWidth="2"
        />

        {/* Incoming Signal */}
        <path
          id="incoming-signal"
          d="M50,300 Q150,300 250,300"
          stroke="#059669" // Emerald-600
          strokeWidth="3"
          fill="none"
        />

        {/* Processing Animation */}
        <circle
          id="processing-circle"
          cx="400"
          cy="300"
          r="30"
          fill="none"
          stroke="#14b8a6" // Teal-500
          strokeWidth="3"
        />

        {/* Outgoing Signal */}
        <path
          id="outgoing-signal"
          d="M550,300 Q650,300 750,300"
          stroke="#059669" // Emerald-600
          strokeWidth="3"
          fill="none"
        />

        {/* Signal Dots */}
        {[1, 2, 3].map((_, index) => (
          <React.Fragment key={index}>
            {/* Incoming Dots */}
            <circle
              className="incoming-dot"
              cx={100 + index * 50}
              cy="300"
              r="5"
              fill="#059669" // Emerald-600
            />
            {/* Outgoing Dots */}
            <circle
              className="outgoing-dot"
              cx={600 + index * 50}
              cy="300"
              r="5"
              fill="#059669" // Emerald-600
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default MobileSignalAnimation;
