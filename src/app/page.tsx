'use client'

import { WarpOverlay } from "@/components/warp-overlay";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export default function Home() {
  const [mount, setMount] = React.useState(false);


  return (
    <main className="h-full grid relative place-items-center">
      <button
        className="rounded-full border border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
        onClick={() => setMount(true)}
      >
        Warp Now
      </button>
      <AnimatePresence initial={false}>
        {mount && (
          <>
            <WarpOverlay onClick={() => setMount(false)} />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
