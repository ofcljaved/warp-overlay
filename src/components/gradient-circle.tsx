import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

export function GradientCircle({ className }: React.ComponentProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.9, scale: [0.9, 1, 0.7, 1] }}
      transition={{
        opacity: { duration: 0.4, delay: 0.2, type: "tween" },
        scale: { duration: 5, ease: "easeInOut", delay: 0.1, repeat: Infinity },
      }}
      className={cn(
        "absolute rounded-full blur-[100px] aspect-square will-change-transform w-[70vmax] bg-[rgb(54,0,126,0.9)]",
        className
      )}
    />
  );

}
