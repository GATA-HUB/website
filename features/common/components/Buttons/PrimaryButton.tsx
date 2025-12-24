"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface PrimaryButtonProps {
  text: string;
  href?: string;
  width?: string;
  disabled?: boolean;
}

const PrimaryButton = ({ text, href, width, disabled }: PrimaryButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const letters = text?.split("");
  return (
    <div
      onClick={href ? () => window.open(href, "_blank") : () => null}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-${
        width || "fit"
      } flex px-4 py-1 sm:px-6 sm:py-2 3xl:px-[32px] 3xl:py-[8px] justify-center items-center text-center rounded-[4px] bg-black hover:bg-dgray border-[1px] border-white/10 font-titillium font-semibold uppercase text-white text-[14px] transition-all duration-300 ease-in-out cursor-pointer sm:text-[14px] overflow-hidden`}
    >
      <div className="w-full h-full min-h-[22px] flex gap-1 justify-center">
        {letters?.map((letter, index) => (
          <span
            key={index}
            className="relative inline-block w-[0.75em] h-[1em]"
          >
            {/* Top Letter */}
            <motion.span
              initial={{ y: 10 }}
              animate={{ y: hovered ? "-200%" : "0%" }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="absolute left-0 top-0"
            >
              {letter}
            </motion.span>

            {/* Bottom Letter */}
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: hovered ? "0%" : "200%" }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="absolute left-0 top-0 font-mono"
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PrimaryButton;
