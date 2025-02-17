'use client'
import ShimmerButton from "@/components/ui/shimmer-button";
import Head from "next/head";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import SparklesText from "@/components/ui/sparkles-text";
import { useState, useEffect, useRef } from "react";
import Image from "next/image"
import Link from "next/link";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from 'framer-motion'
import PCNavbar from "../../../components/PCNavbar";
import MobileNavbar from "../../../components/MobileNavbar";

export default function BuySage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        country: "",
        phone: "",
        email: "",
    });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOrder = async () => {
        const { name, location, country, phone, email } = formData;
        if (!name || !location || !country || !phone || !email) {
            setError("Please fill out all fields.");
            return;
        }
        setError("");
        const serviceID = "service_nbea4py";
        const templateID = "template_kbk5u6n";
        const publicKey = "3Y39hLUIpBUe7ECOq";
        // Simulate sending email (Replace this with your actual backend/email API)
        try {
            emailjs
                .send(serviceID, templateID, formData, publicKey)
                .then(
                    (result) => {
                        alert("Your order has been received. We will contact you within 24 hours.");
                        setShowModal(false); // Close modal
                    },
                    (error) => {
                        console.log("EmailJS Error:", error);
                        alert("An error occurred while submitting your order. Please try again later.");
                    }
                );
            console.log(formData)
            setSuccessMessage(
                "Your order has been received, and we will contact you within 24 hours."
            );
            setTimeout(() => {
                setModalOpen(false);
                setSuccessMessage("");
                setFormData({
                    name: "",
                    location: "",
                    country: "",
                    phone: "",
                    email: "",
                });
            }, 3000);
        } catch (err) {
            setError("Failed to send the order. Please try again.");
        }
    };
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedColor2, setSelectedColor2] = useState("black");

    const colorOptions = [
        { name: "Black", colorCode: "black", image: "/sage_cap_black.webp" },
        { name: "Green", colorCode: "green", image: "/sage_cap_green.webp" },
        { name: "Yellow", colorCode: "yellow", image: "/sage_cap_brown.webp" },
        { name: "Gray", colorCode: "gray", image: "/sage_cap_gray.webp" },
        { name: "Purple", colorCode: "purple", image: "/sage_cap_purple.webp" },
        { name: "Blue", colorCode: "blue", image: "/sage_cap_blue.webp" },
    ];
    const colorOptions2 = [
        { name: "Black", colorCode: "black", image: "/sage_cap_black.webp" },
        { name: "Green", colorCode: "green", image: "/sage_cap_green.webp" },
        { name: "Yellow", colorCode: "yellow", image: "/sage_cap_brown.webp" },
        { name: "Gray", colorCode: "gray", image: "/sage_cap_gray.webp" },
        { name: "Purple", colorCode: "purple", image: "/sage_cap_purple.webp" },
        { name: "Blue", colorCode: "blue", image: "/sage_cap_blue.webp" },
    ];

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    const handleColorChange2 = (color) => {
        setSelectedColor2(color);
    };

    const selectedColorOption = colorOptions.find(
        (option) => option.colorCode === selectedColor
    );
    const selectedColorOption2 = colorOptions2.find(
        (option) => option.colorCode === selectedColor2
    );
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleNavbar = () => setIsOpen(!isOpen);
    return (
        <div className="flex flex-col h-fit pb-10 md:pb-0 md:h-screen items-center justify-center overflow-y-scroll bg-slate-900 scroll-smooth">
            <nav className="fixed visible md:invisible top-0 z-50 right-0 w-full bg-slate-900 bg-opacity-80 text-white">
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
                    className={`lg:flex ${isOpen ? "block" : "hidden"
                        } bg-gray-900 bg-opacity-80 z-50 lg:bg-transparent`}
                >
                    <div className="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-4 p-4 lg:p-0">
                        <Link
                            href="./#sage-intro"
                            className="py-2 lg:py-0 cursor-pointer"
                            onClick={toggleNavbar}
                        >
                            Intro
                        </Link>
                        <Link
                            href="./#why-sage"
                            className="py-2 lg:py-0 cursor-pointer"
                            onClick={toggleNavbar}
                        >
                            Why SAGE
                        </Link>
                        <Link
                            href="./#customer-review"
                            className="py-2 lg:py-0 cursor-pointer"
                            onClick={toggleNavbar}
                        >
                            Customer Review
                        </Link>
                        <Link
                            href="./#meet-the-team"
                            className="py-2 lg:py-0 cursor-pointer"
                            onClick={toggleNavbar}
                        >
                            Team
                        </Link>
                        <Link
                            href="./#faq-section"
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
            <nav className="invisible md:visible border-[0px] fixed top-0 text-white bg-slate-900 bg-opacity-80 flex w-[99%]  items-center justify-between py-3 px-2  flex-row z-50" >
                <Image
                    className="z-40 border-[0px] ml-8 border-emerald-400 rounded-full mr-1"
                    src="/sage_logo_transparent.webp"
                    alt="SAGE-cap"
                    sizes="100vw"
                    width={35}
                    height={35}
                    priority
                />
                <div className="mr-6">
                    <Link
                        href="./#hero-section"
                        className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                    >
                        Home
                    </Link>
                    |
                    <Link
                        href="./#sage-intro"
                        className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                    >
                        Intro
                    </Link>
                    |
                    <Link
                        href="./#why-sage"
                        className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                    >
                        Why
                    </Link>
                    |
                    <Link
                        href="./#journey-of-sage"
                        className="px-3  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                    >
                        Journey
                    </Link>
                    |
                    <Link
                        href="./#customer-review"
                        className="px-3  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                    >
                        Reviews
                    </Link>

                    |
                    <Link
                        href="./#meet-the-team"
                        className="px-3 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                    >
                        Team
                    </Link>
                    |
                    <Link
                        href="./#faq-section"
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
            <Head>
                <title>SAGE</title>
            </Head>
            {/* <h1
                className="text-[3rem] px-2  md:text-6xl mt-4 md:mt-16 font-bold text-center text-emerald-300"
                style={{
                    textShadow: "4px 0px 1px #ffffff",
                }}
            >
                What SAGE offers?

            </h1> */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[3rem] md:text-6xl mt-4 md:mt-16 font-bold text-emerald-400 text-center"
                style={
                    isMobile
                        ? { textShadow: "2.5px 1px 1px #fff" }
                        : { textShadow: "4px 0px 1px #ffffff" }
                }
            >
                What SAGE offers?
            </motion.h1>
            <div className="flex flex-col md:flex-row items-center justify-center h-full w-full">
                <div className="flex flex-col  h-auto mt-6 md:mt-0  md:justify-center w-[85%]  md:w-[40%]">
                    <h3 className="text-left text-lg md:text-xl text-white my-2"><span className="text-emerald-300">Portability: </span>Lightweight, wearable headband</h3>
                    <h3 className="text-left text-lg md:text-xl text-white my-2"><span className="text-emerald-300">Affordable Price: </span>Under $250</h3>
                    <h3 className="text-left text-lg md:text-xl text-white my-2"><span className="text-emerald-300">Model Accuracy: </span>94% custom-calibrated precision</h3>
                    <h3 className="text-left text-lg md:text-xl text-white my-2"><span className="text-emerald-300">Proactive Alerts: </span>Advance seizure notifications</h3>
                    <h3 className="text-left text-lg md:text-xl text-white my-2"><span className="text-emerald-300">EEG Analysis: </span>Data for improved medical treatment</h3>
                </div>
                <div className="flex flex-col md:flex-row w-[95%] mt-7 md:mt-0  md:w-[55%] items-center justify-center">
                    {/* <div className="flex flex-col w-[90%] md:w-full  items-center justify-center">
                        <div className="flex flex-col w-full md:w-11/12 h-5/6 bg-zinc-900 bg-opacity-50 border-2 border-emerald-300 rounded-lg p-6 items-center justify-center">

                            <div className='flex items-center justify-center  mb-4 relative h-2/3 w-full'>
                                <DotPattern
                                    className={cn(
                                        "md:[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
                                        "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                                        "z-10"
                                    )}
                                />
                                <Image
                                    className="z-40"
                                    src="/sage-cap.png"
                                    alt="SAGE CAP"
                                    sizes="100vw"
                                    style={{
                                        width: "80%",
                                        height: "auto",
                                    }}
                                    width={3}
                                    height={3}
                                />
                            </div>
                            <div className="flex  flex-col w-full h-full">
                                <h1 className="text-white mb-4 font-medium text-4xl underline decoration-emerald-400">SAGE CAP</h1>
                                <p className="text-slate-200 mb-2 text-sm">A smart, portable Cap to predict seizures before they happen. Lightweight, accurate, and user-friendly, it keeps you prepared and connected.</p>
                                <p className="text-white font-semibold text-2xl md:text-lg">Price: <span className="font-medium text-emerald-300">250$</span></p>

                            </div>
                            <div className="flex flex-col w-full h-auto items-center justify-center">
                                <ShimmerButton onClick={() => setModalOpen(true)} className="font-semibold  bg-white text-white text-3xl px-1 w-full mt-4 py-2">
                                    <span className="text-2xl">BUY NOW</span>
                                </ShimmerButton>
                            </div>

                        </div>
                    </div> */}
                    <div className="flex flex-col w-[90%] md:w-full items-center justify-center">
                        <div className="flex flex-col w-full md:w-11/12 md:h-5/6 bg-zinc-900 bg-opacity-50 border-2 border-emerald-300 rounded-lg p-6 items-center justify-center">
                            {/* Image Section */}
                            <div className="flex items-center justify-center mb-4 relative h-2/3 w-full">
                                <DotPattern
                                    className={cn(
                                        "md:[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
                                        "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                                        "z-10"
                                    )}
                                />
                                <Image
                                    className="z-40"
                                    src={selectedColorOption.image}
                                    alt={`SAGE Cap - ${selectedColorOption.name}`}
                                    sizes="100vw"
                                    style={{
                                        width: "60%",
                                        height: "auto",
                                    }}
                                    width={3}
                                    height={3}
                                />
                            </div>

                            {/* Description Section */}
                            <div className="flex flex-col w-full h-full">
                                <h1 className="text-white mb-4 font-medium text-2xl underline decoration-emerald-400">
                                    SAGE CAP
                                </h1>
                                <p className="text-slate-200 mb-2 text-sm">
                                    A smart, portable Cap to predict seizures before they happen. Lightweight, accurate, and user-friendly, it keeps you prepared and connected.
                                </p>
                                <p className="text-white font-semibold text-2xl md:text-lg">
                                    Price: <span className="font-medium text-emerald-300">250$</span>
                                </p>
                            </div>

                            {/* Color Options */}
                            <div className="flex flex-wrap mt-2 gap-2">
                                {colorOptions.map((option) => (
                                    <button
                                        key={option.colorCode}
                                        className={`w-5 h-5 rounded-full border-2 ${selectedColor === option.colorCode
                                            ? "border-emerald-400"
                                            : "border-gray-400"
                                            }`}
                                        style={{ backgroundColor: option.colorCode }}
                                        onClick={() => handleColorChange(option.colorCode)}
                                        aria-label={`Select ${option.name}`}
                                    />
                                ))}
                            </div>

                            {/* Buy Button */}
                            <div className="flex flex-col w-full h-auto items-center justify-center">
                                <ShimmerButton
                                    onClick={() => setModalOpen(true)}
                                    className="font-semibold bg-white text-white text-3xl px-1 w-full mt-4 py-2"
                                >
                                    <span className="text-2xl">BUY NOW</span>
                                </ShimmerButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 md:mt-0 w-[90%] md:w-full items-center justify-center  ">
                        <div className="flex relative overflow-hidden flex-col w-full md:w-11/12 h-5/6 bg-zinc-900 bg-opacity-50 rounded-lg p-6 items-center justify-center">
                            <BorderBeam size={250} duration={6} borderWidth={3} />
                            <div className='flex items-center justify-center  mb-4 relative h-2/3 w-full'>
                                <DotPattern
                                    className={cn(
                                        "md:[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
                                        "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                                        "z-10"
                                    )}
                                />
                                <Image
                                    className="z-40"
                                    src={selectedColorOption2.image}
                                    alt={`SAGE Cap - ${selectedColorOption2.name}`}
                                    sizes="100vw"
                                    style={{
                                        width: "60%",
                                        height: "auto",
                                    }}
                                    width={3}
                                    height={3}
                                />
                            </div>
                            <div className="flex  flex-col w-full h-full">
                                <h1 className="text-white mb-4 font-medium text-2xl underline decoration-emerald-400">SAGE CAP PRO</h1>
                                <p className="text-slate-200 mb-2 text-sm">Same portable, lightweight, easy cap and notification system as SAGE CAP but with custom fine tuning every 3 months. 24/7 special careline</p>
                                <p className="text-white font-semibold text-2xl md:text-lg">Price: <span className="font-medium text-emerald-300">250$</span> <span className="font-extralight italic">(per month:</span> <span className=" text-emerald-300">2.99$)</span> </p>

                            </div>
                            <div className="flex flex-wrap mt-2 gap-2">
                                {colorOptions2.map((option) => (
                                    <button
                                        key={option.colorCode}
                                        className={`w-5 h-5 rounded-full border-2 ${selectedColor === option.colorCode
                                            ? "border-emerald-400"
                                            : "border-gray-400"
                                            }`}
                                        style={{ backgroundColor: option.colorCode }}
                                        onClick={() => handleColorChange2(option.colorCode)}
                                        aria-label={`Select ${option.name}`}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col w-full h-auto items-center justify-center">
                                <ShimmerButton onClick={() => setModalOpen(true)} className="font-semibold bg-white text-white text-3xl px-1 w-full mt-4 py-2">
                                    <span className="text-2xl">BUY NOW</span>
                                </ShimmerButton>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-slate-50 w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Order SAGE</h2>
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Address"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                        </div>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {successMessage && (
                            <p className="text-green-500 mt-2">{successMessage}</p>
                        )}
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleOrder}
                                className="bg-emerald-500 text-white px-4 py-2 rounded"
                            >
                                Order
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}