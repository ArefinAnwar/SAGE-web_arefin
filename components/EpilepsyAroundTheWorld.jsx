"use client";
import GlobeVisualization from "@/components/ui/globeMain";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function EpilepsyAroundTheWorld() {
  return (
    <div className="relative flex flex-col w-full min-h-screen items-center justify-center">
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.6}
        duration={3}
        repeatDelay={1}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[200%]  z-20",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent",
          "after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-white after:to-transparent after:mix-blend-overlay"
        )}
      /> */}
      <h1
        className="text-xl md:text-6xl absolute top-0 mt-6 md:mt-6 font-bold text-center text-emerald-300 z-50"
        style={{
          textShadow: "4px 0px 1px #ffffff",
        }}
      >
        Epilepsy Around The World
      </h1>
      {/* <p className="absolute text-lg top-0 md:text-2xl mt-4 md:mt-20 text-slate-300 italic">
        Visualize the epilepsy problem
      </p> */}
      <div className="flex flex-col-reverse md:flex-row w-11/12 h-5/6 items-center justify-center mt-4 md:mt-4">
        <div className="flex flex-col mb-24 md:mb-0 md:flex-col w-[95%] md:w-[60%] h-auto -mt-8 z-50 md:mt-0 items-center justify-center">
          <h1 className="text-emerald-400 text-3xl font-semibold text-center">
            &quot;
            <span className="text-white">
              Epilepsy Ranks the 4th most appearing neurological diesease
            </span>
            &quot;
          </h1>
          <h1 className="text-emerald-400 text-2xl font-semibold text-center mt-6 ">
            &quot;
            <span className="text-white">
              Up to 70% of epilepsy cases can be managed with proper medication,
              but many regions face a treatment gap exceeding 75%
            </span>
            &quot;
          </h1>
          <h1 className="italic text-white mt-6">with top countries being:</h1>
          <h1 className="text-2xl text-white mt-3 gap-4 font-medium">
            <span className="text-emerald-400 "> 1. Nigeria</span> (37.0 per
            1,000 people) <br />{" "}
            <span className="text-emerald-400"> 2. Ethiopia</span> (29.5 per
            1,000 people) <br />
            <span className="text-emerald-400 ">3. Congo</span> (15.0 per 1,000
            people)
          </h1>
        </div>

        <GlobeVisualization />
      </div>
    </div>
  );
}
