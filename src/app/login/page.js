'use client';

import { useState } from 'react';
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

    return (
        <div className="flex flex-col w-screen bg-slate-900 h-screen items-center justify-center overflow-hidden">
            {userLoggedIn && (
                <div className='flex flex-col w-full h-[90%] items-center justify-center'>
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
                <div className="flex flex-col w-[90%] md:w-[30%] h-5/6 bg-slate-700 bg-opacity-45 rounded-lg items-center justify-center border-2 border-slate-400">
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
