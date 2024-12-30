import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress({
  className
}) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    (<motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-emerald-400 via-slate-400 to-teal-500",
        className
      )}
      style={{
        scaleX,
      }} />)
  );
}
