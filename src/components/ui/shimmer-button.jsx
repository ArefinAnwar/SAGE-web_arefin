import React from "react";

import { cn } from "@/lib/utils";

const ShimmerButton = React.forwardRef((
  {
    shimmerColor = "#fff",
    shimmerSize = "0.1em",
    shimmerDuration = "2s",
    borderRadius = "15px",
    background = "#059669",
    className,
    children,
    ...props
  },
  ref,
) => {
  return (
    (<button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background
        }
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
      ref={ref}
      {...props}>
      {/* spark container */}
      <div
        className={cn(
          "-z-30 blur-[2px]",
          "absolute inset-0 overflow-visible [container-type:size]"
        )}>
        {/* spark */}
        <div
          className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          {/* spark before */}
          <div
            className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}
      {/* Highlight */}
      <div
        className={cn(
          "insert-0 absolute size-full",
          "rounded-2xl px-4 py-1.5 text-sm font-medium ",
          // transition
          "transform-gpu transition-all duration-300 ease-in-out",
          // on hover
          
          // on click
          
        )} />
      {/* backdrop */}
      <div
        className={cn(
          "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
        )} />
    </button>)
  );
});

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
