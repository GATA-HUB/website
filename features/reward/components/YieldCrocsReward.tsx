"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../../../features/common/components/Button";
import YieldCrocsRewardCard from "./YieldCrocsRewardCard";

interface Nfts {
  icon: string;
  title: string;
}

interface Reward {
  nfts: Nfts[];
  rewardSol: number;
  rewardYGata: number;
  revenue: number;
}

interface Props {
  title: string;
  date: string;
  href: string;
  rewards: Reward[];
}

const YieldCrocsReward = ({ title, date, href, rewards }: Props) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          <div className="flex h-fit w-fit gap-[8px] pl-1 pr-3 py-1 items-center rounded-full bg-lgray border-2 border-white border-opacity-10">
            <Image
              width={20}
              height={20}
              alt=""
              src="/images/common/date.svg"
              loading="lazy"
            />
            <p className="text-[14px]">{date}</p>
          </div>
        </div>
        <PrimaryButton href={href}>Learn more</PrimaryButton>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        {rewards.map((reward, i) => {
          return (
            <YieldCrocsRewardCard
              key={i}
              nfts={reward.nfts}
              rewardSol={reward.rewardSol}
              rewardYGata={reward.rewardYGata}
              revenue={reward.revenue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default YieldCrocsReward;
