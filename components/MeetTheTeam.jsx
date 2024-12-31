"use client";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <div className="flex flex-col scrollbar-hide items-center justify-center min-h-screen w-full mb-16 md:mb-0">
      <h1
        className="mt-8 md:mt-0 text-4xl md:text-6xl font-bold text-emerald-300"
        style={{
          textShadow: "4px 0px 1px #ffffff",
        }}
      >
        Meet the Team
      </h1>
      <div className="flex scrollbar-hide flex-col md:flex-row items-center justify-center w-full mt-0 md:mt-10 md:h-[30rem]">
        <PeopleCard
          Name="Arefin Anwar"
          image="/arefin_informal.png"
          Designation="Chief Operations Lead"
          Description="Pupil of class 11 at St. Joseph Higher Secondary School, Dhaka, Bangladesh"
          Contact="arefinanwar112@gmail.com"
        />
        <PeopleCard
          Name="Misbah Uddin Inan"
          image="/inan_informal.png"
          Designation="Chief Research Lead"
          Description="Pupil of class 11 at Notre Dame College, Dhaka, Bangladesh"
          Contact="misbahinan@gmail.com"
        />
        <PeopleCard
          Name="Abrar Shahid"
          image="/abrar_informal.png"
          Designation="Chief Technical Lead"
          Description="Pupil of class 11 at Notre Dame College, Dhaka, Bangladesh"
          Contact="abrarshahidrahik@gmail.com"
        />
        <PeopleCard
          Name="Rafid Ahmed"
          image="/rafid_informal.png"
          Designation="Chief Business Lead"
          Description="Pupil of class 11 at Academia School, Dhaka, Bangladesh"
          Contact="steinerstein313@gmail.com"
        />
      </div>
    </div>
  );
}

function PeopleCard({ Name, Designation, Description, Contact, image }) {
  return (
    <div className="flex flex-col w-[85%] md:w-[22%] mt-4 md:mt-0 h-[25rem] md:h-[95%] mx-2 justify-center items-center bg-zinc-800 bg-opacity-50 border-2 border-white outline-2 outline-emerald-400">
      <div className="flex border-4 border-emerald-400 flex-row mt-5 w-[50%] md:w-[70%] h-[60%] bg-slate-400 items-center justify-center overflow-hidden">
        <Image
          className="z-40"
          src={image}
          alt={Name}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={3}
          height={3}
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <span className="text-2xl text-emerald-400 font-semibold mt-4">
          {Name}
        </span>
        <span className="text-md mt-2 text-slate-100 italic">
          {Designation}
        </span>
      </div>

      <div className="flex flex-col w-[85%] h-[30%] mt-4">
        <span className="text-white text-sm text-center w-full break-words">
          {Description}
        </span>
        <p className="text-[.7rem] text-center mt-4 text-white break-keep">
          <span className="text-emerald-400">Connect: </span>
          {Contact}
        </p>
      </div>
    </div>
  );
}
