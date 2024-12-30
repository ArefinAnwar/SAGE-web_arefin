'use client'
import React, { useEffect, useState } from "react";

const NeuralNetworkAnimation = ({layer_num = [2, 2]}) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const layers = layer_num;
  const nodeRadius = 10;
  const layerSpacing = 200;
  const nodeSpacing = 100;

  // Generate nodes with positions by layer
  const nodes = layers.reduce((acc, nodeCount, layerIndex) => {
    const layerNodes = Array.from({ length: nodeCount }, (_, nodeIndex) => ({
      id: `node-${layerIndex}-${nodeIndex}`,
      x: layerIndex * layerSpacing + 100,
      y: (nodeIndex - (nodeCount - 1) / 2) * nodeSpacing + 400,
      layer: layerIndex,
    }));
    return [...acc, ...layerNodes];
  }, []);

  // Generate sequential connections layer by layer
  const connections = [];
  let animationDelay = 0;
  for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
    const currentLayerNodes = nodes.filter(node => node.layer === layerIndex);
    const nextLayerNodes = nodes.filter(node => node.layer === layerIndex + 1);

    currentLayerNodes.forEach((startNode, startIndex) => {
      nextLayerNodes.forEach((endNode, endIndex) => {
        const length = Math.sqrt(
          Math.pow(endNode.x - startNode.x, 2) + 
          Math.pow(endNode.y - startNode.y, 2)
        );
        
        connections.push({
          id: `connection-${startNode.id}-${endNode.id}`,
          startX: startNode.x,
          startY: startNode.y,
          endX: endNode.x,
          endY: endNode.y,
          length,
          delay: animationDelay,
          duration: 0.5 // Animation duration in seconds
        });
        
        // Increment delay for next connection
        animationDelay += 0.1; // 100ms between each connection
      });
    });
  }

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div className="w-full h-auto z-10 -ml-48 flex flex-col items-center justify-center">
      <svg
        width="1000"
        height="800"
        className="overflow-visible"
      >
        <style>
          {`
            @keyframes drawLine {
              0% {
                stroke-dashoffset: var(--length);
              }
              100% {
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>
        
        {/* Draw connections with sequential animation */}
        {connections.map((connection) => (
          <line
            key={connection.id}
            x1={connection.startX}
            y1={connection.startY}
            x2={connection.endX}
            y2={connection.endY}
            stroke="#14b8a6"
            strokeWidth="2"
            className="opacity-30"
            style={{
              '--length': `${connection.length}px`,
              strokeDasharray: `${connection.length}px`,
              strokeDashoffset: animationStarted ? '0px' : `${connection.length}px`,
              transition: `stroke-dashoffset ${connection.duration}s ease-out`,
              transitionDelay: `${connection.delay}s`,
            }}
          />
        ))}

        {/* Draw nodes with delayed appearance */}
        {nodes.map((node, index) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={nodeRadius}
            fill="#059669"
            className={`transition-all duration-500 ease-out ${
              animationStarted ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            style={{
              transitionDelay: `${(connections.length * 0.1) + (index * 0.1)}s`,
              transformBox: 'fill-box',
              transformOrigin: 'center',
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetworkAnimation;