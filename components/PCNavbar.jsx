import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PCNavbar({ className }) {
  return (
    <nav
      className={cn(
        "invisible md:visible border-[0px] fixed top-0 text-white bg-slate-800/r90 bg-slate-900 bg-opacity-80 flex w-[99%]  items-center justify-between py-3 px-02  flex-row z-50",
        className
      )}
    >
      <Image
        className="z-40 border-[0px] ml-8  border-emerald-400 rounded-full mr-1"
        src="/sage_logo_transparent.webp"
        alt="SAGE-cap"
        sizes="100vw"
        width={35}
        height={35}
        priority
      />
      <div className="mr-6">
        <Link
          href="#hero-section"
          className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Home
        </Link>
        |
        <Link
          href="#sage-intro"
          className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Intro
        </Link>
        |
        <Link
          href="#why-sage"
          className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Why
        </Link>
        |
        <Link
          href="#journey-of-sage"
          className="px-3  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Journey
        </Link>
        |
        <Link
          href="#customer-review"
          className="px-3  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Reviews
        </Link>
        |
        <Link
          href="#meet-the-team"
          className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Team
        </Link>
        |
        <Link
          href="#faq-section"
          className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          FAQ
        </Link>
        |
        <Link
          href="/buy"
          className="px-3 break-keep cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          Get it
        </Link>
        |
        <Link
          href="/login"
          className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
