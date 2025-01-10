import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MobileNavbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        "fixed visible md:invisible top-0 z-50 right-0 w-full bg-gray-900 text-white",
        className
      )}
    >
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
        className={`lg:flex ${
          isOpen ? "block" : "hidden"
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
            Team
          </Link>
          <Link
            href="#faq-section"
            className="py-2 lg:py-0 cursor-pointer"
            onClick={toggleNavbar}
          >
            FAQ
          </Link>
          <Link
            href="/buy"
            className="py-2 lg:py-0 cursor-pointer"
            onClick={toggleNavbar}
          >
            BUY
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
  );
}
