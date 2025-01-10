"use client";

import React from "react";
import Marquee from "@/components/ui/marquee";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Abdul Karim",
    username: "Farmer",
    body: "My daughter has epilepsy, and Sage gave us peace of mind. Now we can prepare before her seizures. It’s a blessing.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Fatema Begum",
    username: "Housewife",
    body: "Before using Sage, we were always scared of my son falling during seizures. The cap saved him twice already!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Rafiqul Islam ",
    username: "Shopkeeper",
    body: "Affordable and easy to use. The prediction system is very accurate. It’s like having a warning bell for seizures.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Shirin Akter",
    username: "Primary School Teacher",
    body: "A student in my class has epilepsy. Sage helps us keep him safe at school. Everyone feels more confident now.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Nur Hossain",
    username: "Day Laborer",
    body: "I never thought a device like this would be available in our village. It’s helping my wife live without constant fear.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Rahima Khatun",
    username: "Tailor",
    body: "Sage is simple but powerful. The alerts are timely, and the safety mechanism is really helpful.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Jalal Uddin ",
    username: "Rickshaw Puller",
    body: "I saved money for my daughter’s treatment, but this device saved her life. Thank you, Sage!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Shah Alam",
    username: "Small Business Owner",
    body: "I heard about Sage on TV and bought it for my niece. It's the best thing we could give her for her health",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 bg-black bg-opacity-30 pb-20 text-white border-slate-300 border-2">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const CustomerReview = () => {
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
  return (
    <div
      ref={sectionRef}
      className="relative flex h-full md:min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl"
    >
      <AnimatedGridPattern
        numSquares={30}
        duration={3}
        repeatDelay={1}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-20",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent",
          "after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-white after:to-transparent after:mix-blend-overlay"
        )}
      />
      {isInView && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl mb-3 font-bold text-center text-emerald-300 z-30"
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
            People about SAGE
          </motion.h1>
          <p className="text-lg px-2 text-center md:text-lg mt-6 md:mt-0 mb-6  text-slate-300 italic">
            Reviews from the 8 people who willngly partiicpated in testing phase
          </p>

          <Marquee pauseOnHover className="[--duration:20s] z-40">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] z-40">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </>
      )}
    </div>
  );
};

export default CustomerReview;
