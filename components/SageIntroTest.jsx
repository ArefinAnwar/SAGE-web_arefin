"use client";
import React, { useRef } from "react";
import NeuralNetworkAnimation from "./NN";
import { cn } from "@/lib/utils";
import Meteors from "@/components/ui/meteors";
import ShineBorder from "@/components/ui/shine-border";
import BoxReveal from "@/components/ui/box-reveal";
import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradual-spacing";

const SageIntroTest = () => {
  const boxRefs = useRef([]); // For the flowchart boxes

  return (
    <div className="min-h-screen items-center justify-center flex flex-col w-full relative py-10 overflow-hidden">
      <div className="text-center mb-4 md:mb-16">
        <h1
          className="text-4xl md:text-6xl font-bold text-emerald-300"
          style={{
            textShadow: "4px 0px 1px #ffffff",
          }}
        >
          What is SAGE?
        </h1>
        <p className="text-lg md:text-2xl mt-2 md:mt-4 text-slate-300 italic">
          Predict seizures ahead of time to preserve moments
        </p>
      </div>
      {/* <Meteors number={100} /> */}
      <Particles
        className="absolute inset-0"
        quantity={50} // Number of particles
        speed={1} // Controls the speed of the particles
        direction="random" // Movement direction (e.g., 'up', 'down', 'random')
        velocity={2} // Particle velocity
        motion // Enables continuous motion
        refresh
      />
      <Particles
        className="absolute inset-0"
        quantity={200} // Number of particles
        speed={5} // Controls the speed of the particles
        direction="random" // Movement direction (e.g., 'up', 'down', 'random')
        velocity={5} // Particle velocity
        motion // Enables continuous motion
        refresh
      />
      <Particles
        className="absolute inset-0"
        quantity={50} // Number of particles
        speed={1} // Controls the speed of the particles
        direction="random" // Movement direction (e.g., 'up', 'down', 'random')
        velocity={2} // Particle velocity
        motion // Enables continuous motion
        refresh
      />
      {/* Flowchart Section */}
      <div className="max-h-4/6  grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 w-full mb-16 md:w-5/6 justify-center items-center px-4">
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
            className={cn(
              "bg-white bg-opacity-[7%] drop-shadow-2xl border-teal-500 border-2 text-white p-3 py-6 shadow-lg text-center "
              // "bg-emerald-600 bg-gradient-to-l from-teal-500 to-slate-500 drop-shadow-2xl border-teal-500 border-4 text-white p-3 rounded-lg shadow-lg text-center"
            )}
            ref={(el) => (boxRefs.current[index] = el)}
          >
            <h2 className="text-xl font-bold ">
              <GradualSpacing className="text-xl font-bold" text={title} />
            </h2>

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
        ))}
      </div>
    </div>
  );
};

export default SageIntroTest;