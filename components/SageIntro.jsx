"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeuralNetworkAnimation from "./NN";
const SageIntro = () => {
  const lineRefs = useRef([]); // For lines connecting the boxes
  const boxRefs = useRef([]); // For the flowchart boxes
  const graphicRefs = useRef([]); // For side graphics
  const rightGraphicRefs = useRef([]); // For right side graphics
  const animatedShapesRefs = useRef([]);
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations for each box and line
    boxRefs.current.forEach((box, index) => {
      // Box animation
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // Animation starts when the box is in the viewport
          },
        }
      );

      // Line animation (if not the last box)
      const nextLine = lineRefs.current[index];
      if (nextLine) {
        gsap.fromTo(
          nextLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center", // Animates from top to bottom
            duration: 0.5,
            scrollTrigger: {
              trigger: nextLine,
              start: "top 90%", // Animation starts when the line is in the viewport
            },
          }
        );
      }
    });
    animatedShapesRefs.current.forEach((shape, index) => {
      const animationType = index % 2; // Alternate between wavy and zigzag animation

      if (animationType === 0) {
        // Wavy Animation
        gsap.to(shape, {
          motionPath: {
            path: [
              { x: 0, y: 0 },
              { x: 100, y: 40 },
              { x: 200, y: 0 },
              { x: 300, y: -40 },
              { x: 400, y: 0 },
              { x: 500, y: 40 },
              { x: 600, y: 0 },
              { x: 700, y: -40 },
              { x: 800, y: 0 },
            ],
            curviness: 1.25, // Control the curvature for smooth waves
            autoRotate: false, // Don't rotate the shape during animation
          },
          duration: 10 + Math.random() * 3, // Randomize duration
          repeat: -1, // Repeat the animation infinitely
          ease: "power1.inOut",
        });
      } else {
        // Zigzag Animation
        gsap.to(shape, {
          motionPath: {
            path: [
              { x: 0, y: 0 },
              { x: 100, y: 100 },
              { x: 200, y: 0 },
              { x: 300, y: -100 },
              { x: 400, y: 0 },
              { x: 500, y: 100 },
              { x: 600, y: 0 },
              { x: 700, y: -100 },
              { x: 800, y: 0 },
            ],
            curviness: 0, // Create a sharp zigzag pattern
            autoRotate: false, // Don't rotate the shape during animation
          },
          duration: 10 + Math.random() * 3, // Randomize duration
          repeat: -1, // Repeat the animation infinitely
          ease: "power1.inOut",
        });
      }
    });
    // GSAP animations for side graphics
    graphicRefs.current.forEach((graphic, index) => {
      const animationType = index % 4;

      if (animationType === 0) {
        // Bouncing balls
        gsap.to(graphic, {
          y: "+=100", // Moves down
          yoyo: true,
          repeat: -1, // Infinite bounce
          duration: 3 + Math.random(), // Randomized duration
          ease: "sine.inOut",
        });
      } else if (animationType === 1) {
        // Spinning squares
        gsap.to(graphic, {
          rotation: 360,
          repeat: -1,
          duration: 4 + Math.random(),
          ease: "linear",
        });
      } else if (animationType === 2) {
        // Glowing rings
        gsap.fromTo(
          graphic,
          { opacity: 0.4, scale: 0.8 },
          {
            opacity: 1,
            scale: 1.2,
            repeat: -1,
            yoyo: true,
            duration: 2.5,
            ease: "sine.inOut",
          }
        );
      } else {
        // Floating rectangles
        gsap.to(graphic, {
          x: "+=30", // Float right and left
          yoyo: true,
          repeat: -1,
          duration: 3,
          ease: "sine.inOut",
        });
      }
    });

    rightGraphicRefs.current.forEach((graphic, index) => {
      const animationType = index % 4;

      if (animationType === 0) {
        // Rotating hexagons on the right side
        gsap.to(graphic, {
          rotation: 360,
          repeat: -1,
          duration: 6 + Math.random(),
          ease: "linear",
        });
      } else if (animationType === 1) {
        // Bouncing cubes on the right side
        gsap.to(graphic, {
          y: "+=100", // Moves up and down
          yoyo: true,
          repeat: -1, // Infinite bounce
          duration: 2.5 + Math.random(),
          ease: "sine.inOut",
        });
      } else if (animationType === 2) {
        // Glowing orbs on the right side
        gsap.fromTo(
          graphic,
          { opacity: 0.4, scale: 0.8 },
          {
            opacity: 1,
            scale: 1.3,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut",
          }
        );
      } else {
        // Expanding circles on the right side
        gsap.to(graphic, {
          scale: 1.5,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "power1.inOut",
        });
      }
    });

    // GSAP animation for the new graphics (Left + Right Side)
    [...graphicRefs.current, ...rightGraphicRefs.current].forEach((graphic) => {
      gsap.fromTo(
        graphic,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: graphic,
            start: "top 90%", // Animation starts when the graphic is in the viewport
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen  flex flex-col w-full relative py-10 overflow-hidden">
      {/* Hero Section */}
      <div className='flex absolute top-24 -right-20 rotate-90 flex-col w-full  h-full'>
      <NeuralNetworkAnimation layer_num={[2, 4, 4, 4, 4, 2, 1]}/>
      </div>
      
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-emerald-300">What is SAGE?</h1>
        <p className="text-2xl mt-4 text-slate-300 italic">
          Empowering Lives with Predictive Epilepsy Care
        </p>
      </div>

      {/* Flowchart Section */}
      <div className="flex flex-col w-full items-center">
        {[
          "Data Collection",
          "Brainwave Detection",
          "AI Analysis",
          "Seizure Prediction",
          "Notification Delivery",
          "Alert System",
        ].map((title, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-center w-auto"
          >
            {/* Box */}
            <div
              className="bg-emerald-600 bg-gradient-to-l from-teal-500 to-emerald-5 00 drop-shadow-2xl border-teal-500 border-4  text-white p-6 w-[400px] rounded-lg shadow-lg text-center"
              ref={(el) => (boxRefs.current[index] = el)}
            >
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-2">
                {title === "Data Collection" &&
                  "Gather brainwave data from patients in real-time for analysis."}
                {title === "Brainwave Detection" &&
                  "Advanced sensors capture real-time brainwave patterns seamlessly."}
                {title === "AI Analysis" &&
                  "Cutting-edge AI deciphers patterns to identify potential seizures."}
                {title === "Seizure Prediction" &&
                  "Predicts seizures 10–15 minutes ahead, providing critical time."}
                {title === "Notification Delivery" &&
                  "Alerts caregivers and patients via app notifications instantly."}
                {title === "Alert System" &&
                  "Notifies the patient’s caregivers about potential seizures."}
              </p>
            </div>

            {/* Connecting Line */}
            {index < 5 && (
              <div
                className="h-16 w-1 bg-emerald-400 origin-top scale-y-0"
                ref={(el) => (lineRefs.current[index] = el)}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Animated Graphics - Left Side */}
      <div className="absolute top-50 left-0 w-1/4 h-full flex flex-col items-center gap-10">
        {/* Existing and New Graphics */}
        <div
          className="relative -right-24 w-16 h-16 bg-emerald-400 rounded-full opacity-60"
          ref={(el) => (graphicRefs.current[0] = el)}
        ></div>
        <div
          className=" relative -right-24 w-12 h-12 bg-teal-500 rotate-45 opacity-70"
          ref={(el) => (graphicRefs.current[1] = el)}
        ></div>
        <div
          className="w-20 h-20 border-4 border-emerald-500 rounded-full opacity-50"
          ref={(el) => (graphicRefs.current[2] = el)}
        ></div>
        <div
          className="relative -right-44 w-10 h-20 bg-teal-300 opacity-80"
          ref={(el) => (graphicRefs.current[3] = el)}
        ></div>

        {/* Additional Random Shapes */}
        <div
          className="relative right-24 w-8 h-8 bg-emerald-600 rounded-full"
          ref={(el) => (graphicRefs.current[4] = el)}
        ></div>
        <div
          className="relative right-24 w-14 h-14 border-2 border-teal-500 rotate-45"
          ref={(el) => (graphicRefs.current[5] = el)}
        ></div>
        {/* New Creative Graphics */}
        <div
          className="w-12 h-12 relative -right-20 bg-teal-400 rounded-full"
          ref={(el) => (graphicRefs.current[6] = el)}
        ></div>
        <div
          className="w-10 h-10 border-2 border-emerald-500 rotate-30"
          ref={(el) => (graphicRefs.current[7] = el)}
        ></div>
        <div
          className="w-16 h-16 relative right-16 bg-green-400 opacity-60 transform skew-x-12"
          ref={(el) => (graphicRefs.current[8] = el)}
        ></div>
        <div
          className="w-20 h-20 relative -right-52 top-28 bg-blue-500 rounded-full opacity-50 scale-125"
          ref={(el) => (graphicRefs.current[9] = el)}
        ></div>
      </div>

      {/* Animated Graphics - Right Side */}
      
      <div className="absolute top-[1100px] left-20 w-full h-full">
        {/* Animated shapes moving in wavy and zigzag patterns */}
        <div
          className="w-8 h-8 bg-emerald-600 rounded-full"
          ref={(el) => (animatedShapesRefs.current[0] = el)}
        ></div>
        <div
          className="w-10 h-10 bg-teal-500 opacity-80"
          ref={(el) => (animatedShapesRefs.current[1] = el)}
        ></div>
        <div
          className="w-12 h-12 border-2 border-teal-500"
          ref={(el) => (animatedShapesRefs.current[2] = el)}
        ></div>
        <div
          className="w-14 h-14 bg-teal-400 opacity-60"
          ref={(el) => (animatedShapesRefs.current[3] = el)}
        ></div>
        <div
          className="w-16 h-16 bg-emerald-400 opacity-70"
          ref={(el) => (animatedShapesRefs.current[4] = el)}
        ></div>
      </div>
    </div>
  );
};

export default SageIntro;



{/* <div className="absolute top-50 right-20 w-1/4 h-full  flex flex-col items-center gap-14">
        <div
          className="relative w-16 h-16 -right-28 bg-teal-400 opacity-70 transform rotate-45"
          ref={(el) => (rightGraphicRefs.current[0] = el)}
        ></div>
        <div
          className="relative right-28 w-12 h-12 bg-emerald-500 opacity-80"
          ref={(el) => (rightGraphicRefs.current[1] = el)}
        ></div>
        <div
          className=" relative right-28 w-20 h-20 bg-teal-600 rounded-full opacity-40"
          ref={(el) => (rightGraphicRefs.current[2] = el)}
        ></div>
        <div
          className="relative -right-36 w-16 h-16 border-4 border-emerald-400 rounded-full opacity-50"
          ref={(el) => (rightGraphicRefs.current[3] = el)}
        ></div>

        <div
          className="w-8 h-8  bg-teal-500 rounded-full"
          ref={(el) => (rightGraphicRefs.current[4] = el)}
        ></div>
        <div
          className="w-12 h-12 relative -right-20 border-4 border-green-400 opacity-60"
          ref={(el) => (rightGraphicRefs.current[5] = el)}
        ></div>
        <div
          className="w-16 h-16 relative -right-20 bg-emerald-500 opacity-40"
          ref={(el) => (rightGraphicRefs.current[6] = el)}
        ></div>
        <div
          className="w-14 h-14 bg-teal-700 opacity-50"
          ref={(el) => (rightGraphicRefs.current[7] = el)}
        ></div>
        <div
          className="w-20 h-20 bg-emerald-600 rounded-full opacity-50"
          ref={(el) => (rightGraphicRefs.current[8] = el)}
        ></div>
        <div
          className="w-12 h-12 bg-emerald-400 opacity-80"
          ref={(el) => (rightGraphicRefs.current[9] = el)}
        ></div>
      </div> */}