"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  startingDate: string;
  endingDate: string;
  reward: number;
  stake: number;
  floorBurn: number;
  href: string;
  circulatingYg: number;
}

function YGMonthlyRewardCard({
  startingDate,
  endingDate,
  reward,
  stake,
  floorBurn,
  href,
  circulatingYg,
}: Props) {
  return (
    <div
      onClick={() => window.open(href, "_blank")}
      className="w-full flex flex-col lg:flex-row lg:items-center gap-4 justify-between px-4 py-4 rounded-[1rem] bg-dgray border-2 border-white border-opacity-10 flex-wrap cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-fit">
        <div className="flex justify-center items-center rounded-full">
          <Image width={40} height={40} src="/star.svg" alt="" loading="lazy" />
        </div>
        <div className="flex gap-4">
          <h4>{startingDate}</h4>
          <h4>- {endingDate}</h4>
        </div>
      </div>

      <div className="flex w-full h-[2px] bg-lgray lg:hidden"></div>

      <div className="flex gap-8 w-full justify-between items-center lg:w-fit">
        <div className="flex flex-col gap-2 lg:items-end justify-center">
          <p className="font-bold text-gray text-purple">Atom Reward</p>
          <div className="flex items-end gap-2 flex-wrap">
            <h3>{reward}</h3>
            <p className="text-gray">Atom</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:items-end justify-center">
          <p className="font-bold text-gray text-purple">Re-Stake</p>
          <div className="flex items-end gap-2 flex-wrap">
            <h3>{stake}</h3>
            <p className="text-gray">Atom</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:items-end justify-center">
          <p className="font-bold text-gray text-purple">Floor Burn</p>
          <div className="flex items-end gap-2 flex-wrap">
            <h3>{floorBurn}</h3>
            <p className="text-gray">Atom</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:items-end justify-center">
          <p className="font-bold text-gray text-purple">Circulating YG</p>
          <div className="flex items-end gap-2 flex-wrap">
            <h3>{circulatingYg}</h3>
            <p className="text-gray">YG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YGMonthlyRewardCard;
