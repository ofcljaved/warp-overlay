import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Modal({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1, type: "tween" } }}
      transition={{ duration: 0.3, type: "tween", delay: 0.2 }}
      className="absolute inset-0 z-100 will-change-[opacity] grid place-items-center backdrop-blur-xs bg-[rgb(54,0,126,0.2)] overflow-hidden">
      <motion.div
        initial={{ transform: "perspective(1000px) translateY(100px) scaleX(0.4) scaleY(2) rotateX(-5deg) skewY(-1.5deg)" }}
        animate={{ transform: "perspective(1000px) translateY(0px) scaleX(1) scaleY(1) rotateX(0deg) skewY(0deg)" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
        className={cn(
          "p-6 rounded-md max-w-sm grid gap-x-4 gap-y-8 grid-cols-[1fr_auto] justify-items-end relative isolate origin-[50%_100%_0px]",
          "before:absolute before:rounded-2xl before:-inset-5 before:bg-white/5 before:z-[-1] before:backdrop-blur-sm before:border before:border-white/15"
        )}
      >
        <p className="text-balance col-span-full text-xl text-shadow-2xs text-shadow-white">Are you sure you want to do this? You can&apos;t undo this action.</p>
        <button
          className="rounded-full border border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
          onClick={onClick}
        >
          Yes, I&apos;m sure
        </button>
        <button
          className="rounded-full border border-white/20 transition-colors bg-white/5 backdrop-blur-sm text-foreground  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
          onClick={onClick}
        >
          Cancel
        </button>
      </motion.div>
    </motion.div>
  );
}
