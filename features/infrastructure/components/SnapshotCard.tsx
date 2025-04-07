"use client";

import React, { useEffect, useState } from "react";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../features/common/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  link1: string;
}

const SnapshotCard = ({ icon, title, link1 }: Props) => {
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
        borderRadius: "16px",
        background: "#0F0F0F",
        border: "solid 2px rgba(255, 255, 255, 0.1)",
        cursor: "pointer",
        zIndex: 0,
        overflow: "hidden",
      }}
      whileHover={{
        scale: 1.06,
        zIndex: 1,
      }}
    >
      {/* card elements */}
      <div className="z-10 flex flex-col p-3 sm:p-4 gap-2 sm:gap-4 flex-wrap w-full h-full justify-between">
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-[12px] sm:items-center">
            <div className="flex justify-center items-center w-fit">
              <Image width={64} height={64} alt="" priority={true} src={icon} />
            </div>
            <h4>{title}</h4>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4">
          <PrimaryButton width="full" href={link1}>
            Link 1
          </PrimaryButton>
        </div>
      </div>
    </motion.div>
  );
};

export default SnapshotCard;
