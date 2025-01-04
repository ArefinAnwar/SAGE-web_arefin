"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <div className=" flex flex-col md:flex-row w-full h-auto py-4  md:py-0 md:h-28 bg-slate-800/70 items-center justify-center">
      {/* <span className="text-white">© SAGE 2024-2025</span> */}
      <div className="h-full w-11/12 md:w-1/6">
        <h1 className="text-white text-xl py-4">
          the <br /> outlier <br /> project
        </h1>
      </div>
      <div className="flex flex-row w-11/12  justify-center items-center md:w-auto">
        <div className="text-xs h-full w-11/12 md:w-auto md:ml-40 m-4 md:mr-8 gap-2 flex flex-col justify-center text-white">
          <Link className="hover:underline" href="#sage-intro">
            What is SAGE?
          </Link>
          <Link className="hover:underline" href="#why-sage">
            Why SAGE?
          </Link>
          <Link className="hover:underline" href="/buy">
            Get SAGE
          </Link>
          <Link className="hover:underline" href="#EpilepsyAroundTheWorld">
            Epilepsy Worldwide
          </Link>
        </div>
        <div className="h-full text-xs flex w-11/12  md:w-auto gap-2 flex-col justify-center text-white">
          <Link className="hover:underline" href="#faq-section">
            FAQ
          </Link>
          <Link className="hover:underline" href="#journey-of-sage">
            Our Journey
          </Link>
          <Link className="hover:underline" href="#meet-the-team">
            Meet the team
          </Link>
        </div>
      </div>
    </div>
  );
}
