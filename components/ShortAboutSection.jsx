'use cliet';
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function ShortAboutSection() {
  return (
    <div className="flex flex-row z-10 border-5 border-black w-full h-screen px-12">
      <div className="flex flex-row w-1/2 bg-slate-400 ">
        <h1 className=" text-5xl">What is SAGE?</h1>

      </div>
      <div className="flex flex-row w-1/2"></div>
    </div>
  );
}
