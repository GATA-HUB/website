"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  endpoints: Array<string>;
}

const EndpointsCard = ({ icon, title, endpoints }: Props) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const copyToClipboard = async (textToCopy: string, index: number) => {
    if (textToCopy != "Decommissioned") {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopiedIndex(index);
        setTimeout(() => {
          setCopiedIndex(null);
        }, 1500);
      } catch (error) {
        console.error("Failed to copy: ", error);
      }
    }
  };

  return (
    <motion.div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        background: "#000",
        border: "solid 1px rgba(255, 255, 255, 0.1)",
        zIndex: 0,
        overflow: "hidden",
      }}
      whileHover={{
        scale: 1.06,
        zIndex: 1,
      }}
    >
      {/* card elements */}
      <div className="z-10 flex flex-col p-3 sm:p-4 gap-2 sm:gap-4 w-full h-full justify-between">
        <div className="flex gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-[12px] sm:items-center">
            <div className="flex justify-center items-center w-12 h-12">
              <Image width={64} height={64} alt="" priority={true} src={icon} />
            </div>
            <h4>{title}</h4>
          </div>
        </div>
        <div className="flex flex-col h-full">
          {endpoints.map((endpoint, i) => {
            return (
              <div
                key={i}
                className="group/icon flex items-center justify-between w-full bg-black hover:bg-dgray border border-white/0 hover:border-white/10 pl-4 pr-2 py-2 rounded gap-2 transition-all ease-out duration-300"
              >
                <div className="flex w-6 h-6 items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray stroke-gray group-hover/icon:fill-white group-hover/icon:stroke-white transition-all duration-300 ease-in-out"
                  >
                    <rect x="4" y="4" width="4" height="4" rx="2" fill="" />
                    <rect x="4" y="16" width="4" height="4" rx="2" fill="" />
                    <rect x="16" y="10" width="4" height="4" rx="2" fill="" />
                    <path
                      d="M19 12H15.5C13.8431 12 12.5 10.6569 12.5 9C12.5 7.34315 11.1569 6 9.5 6H6"
                      stroke=""
                    />
                    <path
                      d="M6 18L9.50002 18C11.1569 18 12.5 16.6568 12.5 15C12.5 13.3432 13.8432 12 15.5 12H19"
                      stroke=""
                    />
                  </svg>
                </div>
                {copiedIndex === i ? (
                  <p className="text-white">Copied to clipboard!</p>
                ) : (
                  <p className="w-full overflow-hidden">{endpoint}</p>
                )}
                {endpoint != "Decommissioned" && (
                  <div
                    onClick={() => copyToClipboard(endpoint, i)}
                    className="group flex items-center justify-center w-6 h-6 cursor-pointer"
                  >
                    <svg
                      className="fill-[#333333] stroke-[#333333] group-hover:fill-[#7B5AFF] group-hover:stroke-[#7B5AFF] transition-all duration-300 ease-in-out"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="15"
                        height="15"
                        rx="2"
                        fill="none"
                      />
                      <rect
                        x="6.5"
                        y="6.5"
                        width="14"
                        height="14"
                        rx="1.5"
                        stroke="none"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default EndpointsCard;
