'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Login() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'], // Days of the week
        datasets: [
            {
                label: 'Seizure Stages',
                data: [2, 3, 5, 2, 4, 4, 3, 6, 3, 5], // Dummy seizure stage data
                borderColor: '#34d399', // Emerald 400
                backgroundColor: 'rgba(100, 116, 139, 0.5)', // Slate 600 with opacity
                pointBackgroundColor: '#34d399',
                tension: 0.4, // Smooth curve
                fill: true, // Fill below the line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff', // White text for legend
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days',
                    color: '#ffffff',
                },
                ticks: {
                    color: '#cbd5e1', // Light gray ticks
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Seizure Stage',
                    color: '#ffffff',
                },
                ticks: {
                    color: '#cbd5e1', // Light gray ticks
                },
            },
        },
    };

    const handleLogin = () => {
        const validUserId = 'admin';
        const validPassword = '123';

        if (userId === validUserId && password === validPassword) {
            setMessage('Login successful! Welcome to the user portal.');
            setUserLoggedIn(true)
            // Add redirection logic here if needed
        } else {
            setMessage('Invalid User ID or Password. Please try again.');
        }
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);


    return (
        <div className="flex flex-col w-screen bg-slate-900 h-screen items-center justify-center overflow-hidden">
            <nav className="fixed visible md:invisible top-0 z-50 right-0 w-full bg-gray-900 text-white">
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
                        } bg-gray-800 z-50 lg:bg-transparent`}
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
            <nav className="invisible md:visible border-[1px] fixed top-3 text-white bg-slate-800/90 flex w-[50%] rounded-md inset-x-0 mx-auto items-center justify-center py-2 px-2  flex-row z-50" >
                <Image
                    className="z-40 border-[0px] border-emerald-400 rounded-full mr-1"
                    src="/sage_logo_transparent.webp"
                    alt="SAGE-cap"
                    sizes="100vw"
                    width={35}
                    height={35}
                    priority
                />
                <Link
                    href="./#hero-section"
                    className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    Home
                </Link>
                |
                <Link
                    href="./#sage-intro"
                    className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    Intro
                </Link>
                |
                <Link
                    href="./#why-sage"
                    className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    Why
                </Link>
                |
                <Link
                    href="./#journey-of-sage"
                    className="px-2  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    Journey
                </Link>
                |
                <Link
                    href="./#customer-review"
                    className="px-2  cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    Reviews
                </Link>

                |
                <Link
                    href="./#meet-the-team"
                    className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    Team
                </Link>
                |
                <Link
                    href="./#faq-section"
                    className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    FAQ
                </Link>
                |
                <Link
                    href="/buy"
                    className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    Get it
                </Link>
                |
                <Link
                    href="/login"
                    className="px-2 cursor-pointer hover:text-emerald-400 ease-in duration-300 hover:scale-110"
                >
                    LOGIN
                </Link>
            </nav>
            {userLoggedIn && (
                <div className='flex flex-col w-full h-[90%] items-center justify-center mt-6 md:mt-10'>
                    <h1 className='text-5xl text-emerald-400 underline'>Arefin, Your Data!</h1>
                    <div className='flex flex-row w-11/12 h-[90%]  items-center justify-center mt-7'>
                        <div className='flex flex-col h-full w-2/3 mr-5  '>
                            <div className='flex flex-row w-full h-1/2  mb-5'>
                                <div className='flex flex-col w-1/2 mr-5 bg-slate-700 bg-opacity-60 rounded-lg items-center justify-center'>
                                    <h1 className='text-white text-xl text-center px-4'>You had <span className='text-emerald-500'>23</span> seizures in the last 30 days</h1>
                                </div>
                                <div className='flex flex-col w-1/2 '>
                                    <div className='flex flex-col h-1/2 mb-5 w-full bg-slate-700 rounded-lg bg-opacity-60 items-center justify-center'>
                                        <h1 className='text-xl text-white text-center px-4'><span className='text-emerald-400'>Last model calibration: </span>11 December, 2024</h1>
                                    </div>
                                    <div className='flex flex-col h-1/2 w-full bg-slate-700 bg-opacity-60 rounded-lg items-center justify-center'>
                                        <h1 className='text-xl text-white text-center px-4'><span className='text-emerald-400'>Last seizure: </span>27 December 1400 hours (GMT +6)</h1>
                                    </div>
                                </div>
                            </div>


                            {/* <div className='flex flex-row w-full h-1/2 bg-slate-700 bg-opacity-60 rounded-lg items-center justify-center'>
                                Graph
                            </div> */}
                            <div className="flex flex-row w-full h-1/2 bg-slate-700 bg-opacity-60 rounded-lg items-center justify-center">
                                <div className="w-full h-full p-4">
                                    <Line data={data} options={options} />
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col h-full w-1/3 bg-slate-700 bg-opacity-60 rounded-lg p-6 text-white text-2xl'>
                            <h1 className='border-emerald-400 border-2 bg-opacity-50 p-3 rounded-lg mb-4'>SAGE used in last 7 days: 72 hours</h1>
                            <h1 className='border-emerald-400 border-2 bg-opacity-50 p-3 rounded-lg'>Total time of seizure in last 7 days: 1 hour</h1>
                            <h1 className='text-lg mt-20'><span className='text-emerald-400'>USER ID: </span>vbs_162vgs</h1>
                            <h1 className='text-lg'><span className='text-emerald-400'>Country: </span>Bangladesh</h1>
                            <h1 className='text-lg'><span className='text-emerald-400'>Emergency contact number: </span>+8801537298344</h1>
                        </div>

                    </div>

                </div>
            )}

            {!userLoggedIn && (
                <div className="flex flex-col w-[90%] md:w-[30%] h-5/6 bg-slate-700 bg-opacity-45 rounded-lg items-center justify-center border-2 border-slate-400  mt-6 md:mt-10">

                    <h1 className="text-white text-3xl mb-16">Login to user portal</h1>
                    <input
                        className="text-xl rounded-lg px-5 py-3 mb-3 bg-slate-400 bg-opacity-50 w-10/12"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <input
                        className="text-xl rounded-lg px-5 py-3 bg-slate-400 bg-opacity-50 w-10/12"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="w-56 h-16 px-5 py-3 bg-emerald-500 text-2xl rounded-lg mt-10 text-white font-semibold"
                        onClick={handleLogin}
                    >
                        LOGIN
                    </button>
                    <p className='text-white text-center px-2 mt-4'><span className='text-emerald-400'>Note:{" "}</span>You need to have a SAGE Cap to login!</p>
                </div>)}
        </div>
    );
}
