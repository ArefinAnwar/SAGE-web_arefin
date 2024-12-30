"use client"

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EEGHeadsetAnimation = () => {
  useEffect(() => {
    // GSAP Animations for sensors, waves, connections, and CPU
    gsap.from('.headset', {
      duration: 2,
      strokeDasharray: 0,
      strokeDashoffset: 1000,
      ease: 'power2.inOut',
    })

    // Sensor Animations
    gsap.from('.sensor', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    })

    // Signal Waves Animations
    gsap.from('.wave', {
      duration: 1.5,
      opacity: 0,
      strokeDasharray: 0,
      stagger: 0.2,
      ease: 'ease.inOut',
      repeat: -1,
      yoyo: true,
    })

    // CPU Animation
    gsap.from('.cpu', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      ease: 'back.out(1.7)',
    })

    // Connection Line Animations
    gsap.from('.connection', {
      duration: 1,
      opacity: 0,
      strokeDasharray: 0,
      stagger: 0.1,
      ease: 'power2.inOut',
    })

    // Data Flow Animation
    gsap.from('.data-circle', {
      duration: 2,
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.3)',
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <svg width="800" height="600" viewBox="0 0 800 600" className="overflow-visible">
        {/* EEG Headset */}
        <path
          d="M100,300 C100,200 200,100 400,100 C600,100 700,200 700,300 
             C700,400 600,500 400,500 C200,500 100,400 100,300 Z"
          className="headset stroke-teal-500 stroke-4"
        />

        {/* EEG Sensors */}
        {[
          { x: 150, y: 150 },
          { x: 300, y: 120 },
          { x: 400, y: 110 },
          { x: 500, y: 120 },
          { x: 650, y: 150 },
          { x: 200, y: 300 },
          { x: 600, y: 300 },
          { x: 150, y: 450 },
          { x: 650, y: 450 },
        ].map((sensor, index) => (
          <circle
            key={`sensor-${index}`}
            cx={sensor.x}
            cy={sensor.y}
            r="12"
            className="sensor fill-teal-500"
          />
        ))}

        {/* Signal Waves */}
        {[
          { x: 150, y: 150 },
          { x: 300, y: 120 },
          { x: 400, y: 110 },
          { x: 500, y: 120 },
          { x: 650, y: 150 },
          { x: 200, y: 300 },
          { x: 600, y: 300 },
          { x: 150, y: 450 },
          { x: 650, y: 450 },
        ].map((sensor, index) => (
          <path
            key={`wave-${index}`}
            d={`M${sensor.x},${sensor.y} Q${sensor.x + 20},${sensor.y - 40} ${sensor.x + 40},${sensor.y} T${sensor.x + 80},${sensor.y}`}
            stroke="#059669"
            strokeWidth="2"
            fill="none"
            className="wave"
          />
        ))}

        {/* Central Processing Unit */}
        <rect
          x="350"
          y="520"
          width="100"
          height="60"
          rx="10"
          fill="#14b8a6"
          className="cpu"
        />

        {/* Connection lines from sensors to CPU */}
        {[
          { x: 150, y: 150 },
          { x: 300, y: 120 },
          { x: 400, y: 110 },
          { x: 500, y: 120 },
          { x: 650, y: 150 },
          { x: 200, y: 300 },
          { x: 600, y: 300 },
          { x: 150, y: 450 },
          { x: 650, y: 450 },
        ].map((sensor, index) => (
          <path
            key={`connection-${index}`}
            d={`M${sensor.x},${sensor.y} Q${(sensor.x + 400) / 2},${(sensor.y + 550) / 2} 400,550`}
            stroke="#14b8a6"
            strokeWidth="1"
            fill="none"
            className="connection"
          />
        ))}

        {/* Data flow animation */}
        {[
          { x: 150, y: 150 },
          { x: 300, y: 120 },
          { x: 400, y: 110 },
          { x: 500, y: 120 },
          { x: 650, y: 150 },
          { x: 200, y: 300 },
          { x: 600, y: 300 },
          { x: 150, y: 450 },
          { x: 650, y: 450 },
        ].map((sensor, index) => (
          <circle
            key={`data-${index}`}
            cx={sensor.x}
            cy={sensor.y}
            r="4"
            fill="#059669"
            className="data-circle"
          />
        ))}
      </svg>
    </div>
  )
}

export default EEGHeadsetAnimation
