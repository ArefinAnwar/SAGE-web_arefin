import { cn } from "@/lib/utils";

const AnimatedShinyText = ({ children, className, shimmerWidth = 100 }) => {
  return (
    <p
      style={{
        "--shiny-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "mx-auto max-w-md text-white ",
        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shine gradient
        "bg-gradient-to-r from-black via-white/80 via-50% to-black  ",
        className
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;