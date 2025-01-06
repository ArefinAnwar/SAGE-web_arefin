"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// Use dynamic import for Globe with SSR enabled
const Globe = dynamic(() => import("react-globe.gl"), { ssr: true });

export default function GlobeVisualization() {
  const globeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      // Enable auto-rotation
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1;

      // Disable zoom completely
      globeRef.current.controls().enableZoom = false;
      globeRef.current.controls().mouseButtons.RIGHT = null;
      globeRef.current.controls().touches.TWO = null;
    }

    // Prevent zoom via gesture events
    const preventZoom = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // Add event listeners to prevent zoom
    document.addEventListener("keydown", preventZoom);
    document.addEventListener("wheel", preventZoom, { passive: false });

    return () => {
      document.removeEventListener("keydown", preventZoom);
      document.removeEventListener("wheel", preventZoom);
    };
  }, []);

  const pointsdata = [
    { lat: 20.5937, lng: 78.9629, size: 3.9, color: "red" }, // India
    { lat: 37.0902, lng: -95.7129, size: 9.6, color: "red" }, // United States
    { lat: 35.8617, lng: 104.1954, size: 4.6, color: "red" }, // China
    { lat: -14.235, lng: -51.9253, size: 9.2, color: "red" }, // Brazil
    { lat: 9.082, lng: 8.6753, size: 37.0, color: "red" }, // Nigeria
    { lat: 30.3753, lng: 69.3451, size: 9.9, color: "red" }, // Pakistan
    { lat: -0.7893, lng: 113.9213, size: 8.2, color: "red" }, // Indonesia
    { lat: 61.524, lng: 105.3188, size: 6.0, color: "red" }, // Russia
    { lat: 23.6345, lng: -102.5528, size: 7.0, color: "red" }, // Mexico
    { lat: 36.2048, lng: 138.2529, size: 1.0, color: "red" }, // Japan
    { lat: 9.145, lng: 40.4897, size: 29.5, color: "red" }, // Ethiopia
    { lat: 12.8797, lng: 121.774, size: 7.8, color: "red" }, // Philippines
    { lat: 26.8206, lng: 30.8025, size: 6.9, color: "red" }, // Egypt
    { lat: 14.0583, lng: 108.2772, size: 4.0, color: "red" }, // Vietnam
    { lat: -4.0383, lng: 21.7587, size: 15.0, color: "red" }, // DR Congo
    { lat: 38.9637, lng: 35.2433, size: 5.0, color: "red" }, // Turkey
    { lat: 32.4279, lng: 53.688, size: 5.7, color: "red" }, // Iran
    { lat: 15.87, lng: 100.9925, size: 7.2, color: "red" }, // Thailand
    { lat: 46.6034, lng: 1.8883, size: 5.0, color: "red" }, // France
    { lat: 55.3781, lng: -3.436, size: 5.0, color: "red" }, // United Kingdom
    { lat: 41.8719, lng: 12.5674, size: 5.0, color: "red" }, // Italy
    { lat: -30.5595, lng: 22.9375, size: 7.0, color: "red" }, // South Africa
    { lat: 35.9078, lng: 127.7669, size: 2.0, color: "red" }, // South Korea
    { lat: 40.4637, lng: -3.7492, size: 5.0, color: "red" }, // Spain
    { lat: 48.3794, lng: 31.1656, size: 6.0, color: "red" }, // Ukraine
    { lat: -38.4161, lng: -63.6167, size: 6.0, color: "red" }, // Argentina
    { lat: 12.8628, lng: 30.2176, size: 8.0, color: "red" }, // Sudan
    { lat: 51.9194, lng: 19.1451, size: 5.0, color: "red" }, // Poland
    { lat: 56.1304, lng: -106.3468, size: 4.6, color: "red" }, // Canada
    { lat: -25.2744, lng: 133.7751, size: 4.0, color: "red" }, // Australia
  ];

  return (
    <div
      ref={containerRef}
      className="flex touch-none flex-col items-center justify-center w-auto bg-slate-900 h-auto overflow-hidden"
      style={{
        touchAction: "none",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
      onWheel={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
      onTouchStart={(e) => e.preventDefault()}
      onGestureStart={(e) => e.preventDefault()}
      onGestureChange={(e) => e.preventDefault()}
      onGestureEnd={(e) => e.preventDefault()}
    >
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // Globe texture
        backgroundColor="#0f172a"
        pointsData={pointsdata}
        pointColor={(d) => d.color}
        pointAltitude={(d) => d.size * 0.01} // Marker altitude
        pointRadius={0.1} // Marker size
        width={500}
        height={500}
        controls={(controls) => {
          controls.enableZoom = false;
          controls.minDistance = 200;
          controls.maxDistance = 200;
          controls.enableDamping = true;
          controls.dampingFactor = 0.1;
          controls.enablePan = false;
        }}
      />
    </div>
  );
}
