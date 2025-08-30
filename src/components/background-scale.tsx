import { motion } from "motion/react";

export function BackgroundScale() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0, backgroundColor: "rgb(197,165,240)", }}
      animate={{ opacity: 0.2, scale: 10, backgroundColor: "rgb(54,0,126)", }}
      exit={{ opacity: 1, scale: 0, backgroundColor: "rgb(197,165,240)", }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute w-[100px] top-full aspect-square rounded-full will-change-transform blur-lg origin-[50%_100%_0px]"
    />
  );
}
