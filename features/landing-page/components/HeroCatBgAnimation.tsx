"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroCatBgAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[70%] h-[70%] border-4 border-red rounded-full"></div>
      <div className="absolute w-[60%] h-[60%] border-2 border-red rounded-full"></div>
      <div className="absolute w-[80%] h-[80%] border-[1px] border-red rounded-full"></div>
      <div className="absolute w-[90%] flex justify-between items-center overflow-hidden">
        <div className="absolute w-1/2 h-[1px] bg-red"></div>
        <div className="absolute w-1/2 h-[4px] bg-red right-0"></div>
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            position: "absolute",
            background: "#FF4874",
            borderRadius: "4px",
          }}
          animate={{
            x: 380 - 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4.4,
            repeatType: "mirror",
          }}
        ></motion.div>
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            position: "absolute",
            right: 0,
            background: "#FF4874",
            borderRadius: "4px",
          }}
          animate={{
            x: -380 + 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "mirror",
          }}
        ></motion.div>
        <div className="relative z-10 w-8 h-8 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-dgray border-2 border-red">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/omni.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full bg-dgray border-2 border-red">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/stars.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute w-[110%] flex justify-between items-center rotate-[30deg] overflow-hidden">
        <div className="absolute w-1/2 h-[4px] bg-red"></div>
        <div className="absolute w-1/2 h-[2px] bg-red right-0"></div>
        <motion.div
          style={{
            width: "12px",
            height: "12px",
            position: "absolute",
            background: "#FF4874",
            borderRadius: "6px",
          }}
          animate={{
            x: 380 - 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "mirror",
          }}
        ></motion.div>
        <motion.div
          style={{
            width: "12px",
            height: "12px",
            position: "absolute",
            right: 0,
            background: "#FF4874",
            borderRadius: "6px",
          }}
          animate={{
            x: -380 + 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "mirror",
          }}
        ></motion.div>
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/cosmos.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/osmosis.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute h-[80%] flex flex-col justify-between items-center rotate-[-30deg] overflow-hidden">
        <div className="absolute h-1/2 w-[2px] bg-red"></div>
        <div className="absolute h-1/2 w-[4px] bg-red bottom-0"></div>
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            position: "absolute",
            background: "#FF4874",
            borderRadius: "4px",
          }}
          animate={{
            y: 380 - 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "mirror",
          }}
        ></motion.div>
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            position: "absolute",
            bottom: 0,
            background: "#FF4874",
            borderRadius: "4px",
          }}
          animate={{
            y: -380 + 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 2,
            repeatType: "mirror",
          }}
        ></motion.div>
        <div className="relative flex items-center justify-center z-10 w-8 h-8 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[30deg]">
          <div className="relative z-10 w-6 h-6 sm:w-8 sm:h-8">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/images/validators/akt.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[30deg]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/archway.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute h-[90%] flex flex-col justify-between items-center overflow-hidden">
        <div className="absolute h-1/2 w-[4px] bg-red"></div>
        <div className="absolute h-1/2 w-[1px] bg-red bottom-0"></div>
        <motion.div
          style={{
            width: "16px",
            height: "16px",
            position: "absolute",
            background: "#FF4874",
            borderRadius: "8px",
          }}
          animate={{
            y: 380 - 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4.4,
            repeatType: "mirror",
          }}
        ></motion.div>
        <motion.div
          style={{
            width: "12px",
            height: "12px",
            position: "absolute",
            bottom: 0,
            background: "#FF4874",
            borderRadius: "6px",
          }}
          animate={{
            y: -380 + 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "mirror",
          }}
        ></motion.div>
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full bg-dgray border-2 border-red">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/evmos.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/junologo.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute h-[80%] flex flex-col justify-between items-center rotate-[30deg] overflow-hidden">
        <div className="absolute h-1/2 w-[2px] bg-red"></div>
        <div className="absolute h-1/2 w-[3px] bg-red bottom-0"></div>
        <motion.div
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            background: "#FF4874",
            borderRadius: "8px",
          }}
          animate={{
            y: 380 - 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4.4,
            repeatType: "mirror",
          }}
        ></motion.div>
        <motion.div
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            bottom: 0,
            background: "#FF4874",
            borderRadius: "8px",
          }}
          animate={{
            y: -380 + 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "mirror",
          }}
        ></motion.div>
        <div className="relative z-10 w-10 h-10 sm:w-14 sm:h-14 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/stride.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/sei.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute w-[105%] flex justify-between items-center rotate-[150deg] overflow-hidden">
        <div className="absolute w-1/2 h-[1px] bg-red"></div>
        <div className="absolute w-1/2 h-[4px] bg-red right-0"></div>
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            position: "absolute",
            background: "#FF4874",
            borderRadius: "4px",
          }}
          animate={{
            x: 380 - 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4.4,
            repeatType: "mirror",
          }}
        ></motion.div>
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            position: "absolute",
            right: 0,
            background: "#FF4874",
            borderRadius: "4px",
          }}
          animate={{
            x: -380 + 8,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "mirror",
          }}
        ></motion.div>
        <div className="relative z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-150deg]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/atomone.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative z-10 w-16 h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-150deg]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/validators/passage.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCatBgAnimation;
