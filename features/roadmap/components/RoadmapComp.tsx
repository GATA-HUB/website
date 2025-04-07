"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import PhaseContainer from "./PhaseContainer";
import { RoadmapCont } from "@/types";

interface Props {
  title: string;
  desc: string;
  content: RoadmapCont[];
  state: boolean;
  index: number;
}

const RoadmapComp = ({ title, desc, content, state, index }: Props) => {
  const [active, setActive] = useState(state);
  const myRef = useRef<HTMLDivElement | null>(null);

  const handleRoadmap = () => {
    setActive(!active);
  };
  return (
    <div
      ref={myRef}
      className={`relative transition-all duration-300 ease-in-out w-full flex flex-col gap-${
        active ? "2" : "0"
      }`}
    >
      <div className="absolute flex flex-col items-center left-[-24px] top-[28px] sm:top-[32px] lg:top-[40px] lg:left-[-32px] w-4 h-full">
        <>
          <Image
            width={16}
            height={16}
            alt=""
            src="/images/common/large-bullet.svg"
            loading="lazy"
          />
        </>

        {index === 1 ? null : (
          <>
            <motion.div
              style={{
                position: "absolute",
                bottom: "-32px",
                width: "4px",
                height: "100%",
                background: "#171717",
              }}
              animate={{
                background: active ? "#7B5AFF" : "#171717",
              }}
            ></motion.div>
            <motion.div
              style={{ width: "4px", height: "100%", background: "#171717" }}
              animate={{
                background: active ? "#7B5AFF" : "#171717",
              }}
            ></motion.div>
          </>
        )}
      </div>
      <div
        onClick={handleRoadmap}
        className={`relative w-full flex items-center justify-between py-4 pl-4 pr-6 lg:py-6 lg:pl-6 lg:pr-8 bg-dgray border-2 border-white border-opacity-10 rounded-[1rem] overflow-hidden `}
      >
        <motion.div
          style={{
            background:
              "linear-gradient(90deg, rgba(15, 15, 15, 0) 0%, #0F0F0F 50%)",
          }}
          className="absolute right-0 w-1/2 h-24"
        />
        <motion.div
          style={{
            position: "absolute",
            left: "-5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "-10",
          }}
          animate={{
            rotate: active ? -360 : 0,
          }}
          transition={{
            duration: 300,
            repeat: Infinity,
            type: "just",
          }}
        >
          <motion.img
            animate={{ opacity: active ? 1 : 0 }}
            src="/images/common/eclipse-wave.svg"
            alt=""
            loading="lazy"
          />
          <motion.img
            style={{ position: "absolute" }}
            animate={{ opacity: active ? 0 : 1 }}
            src="/images/common/eclipse-wave-b.svg"
            alt=""
            loading="lazy"
          />
        </motion.div>
        <div className="z-10 flex flex-col gap-1 lg-2">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        <motion.div
          style={{
            display: "flex",
            width: "24px",
            height: "24px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "10",
          }}
          animate={{ rotate: active ? 45 : 0 }}
        >
          <span className="absolute w-6 h-1 bg-purple rounded-full" />
          <span className="absolute w-1 h-6 bg-purple rounded-full" />
        </motion.div>
      </div>

      <motion.div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          transition: "all ease-in-our 300",
          height: "0px",
        }}
        animate={{
          height: active ? "fit-content" : "0px",
        }}
        transition={{
          type: "inertia",
        }}
      >
        <div
          className={`${
            active
              ? `opacity-100 transform scale-y-100 origin-top`
              : `opacity-100 transform scale-y-0 origin-top`
          } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 transition-all duration-300 ease-in-out`}
        >
          {content.map((cont, index) => {
            return (
              <PhaseContainer
                key={index}
                index={index}
                subTitle={cont.subTitle}
                points={cont.points}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapComp;
