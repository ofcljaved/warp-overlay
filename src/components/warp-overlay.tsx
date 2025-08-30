import { BackgroundScale } from "@/components/background-scale";
import { GradientCircle } from "@/components/gradient-circle";
import { motion } from "motion/react";

export function WarpOverlay({ onClick }: { onClick: () => void }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
      onClick={onClick}
      className="absolute inset-0 z-10 will-change-[opacity] grid place-items-center backdrop-blur-xs bg-[rgb(246,63,42,0.2)] overflow-hidden">
      <BackgroundScale />
      <GradientCircle className="-top-[30vmax] -left-[30vmax]" />
      <GradientCircle className="-bottom-[30vmax] -right-[30vmax]" />
    </motion.div>
  );
}
