"use client";

import React from "react";
import Image from "next/image";

interface YGNfts {
  icon: string;
  title: string;
}

interface Props {
  nfts: YGNfts[];
  rewardSol: number;
  rewardYGata: number;
  revenue: number;
}

const YieldCrocsRewardCard = ({
  nfts,
  rewardSol,
  rewardYGata,
  revenue,
}: Props) => {
  return (
    <div className="flex items-center gap-4 justify-between p-2 pr-[12px] rounded-[1rem] bg-black border-[1px] border-white border-opacity-10 flex-wrap">
      <div className="flex items-center w-fit gap-2 flex-wrap">
        <div className="flex items-center">
          {nfts.map((nft, i) => {
            if (i === 0) {
              return (
                <div
                  key={i}
                  className="z-10 flex items-center justify-center border-4 border-dgray rounded-full overflow-hidden"
                >
                  <Image
                    width={48}
                    height={48}
                    loading="lazy"
                    src={nft.icon}
                    alt=""
                  />
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className="flex items-center ml-[-24px] justify-center border-4 border-dgray rounded-full overflow-hidden"
                >
                  <Image
                    width={48}
                    height={48}
                    loading="lazy"
                    src={nft.icon}
                    alt=""
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="flex gap-2 sm:gap-4 flex-wrap">
          {nfts.map((nft, i) => {
            if (i > 0) {
              return <h4 key={i}>& {nft.title}</h4>;
            } else {
              return <h4 key={i}>{nft.title}</h4>;
            }
          })}
        </div>
      </div>

      <div className="flex justify-between w-fit gap-4 sm:gap-8 items-center flex-wrap">
        <div className="flex gap-1 flex-col xl:items-end justify-center">
          <p className="font-bold text-purple">Epoch Reward</p>
          <div className="flex gap-2">
            <div className="flex items-end gap-2 flex-wrap">
              <h3>{rewardSol}</h3>
              <p className="text-gray">SOL</p>
            </div>
            +
            <div className="flex items-end gap-2 flex-wrap">
              <h3>{rewardYGata}</h3>
              <p className="text-gray">yGata</p>
            </div>
          </div>
        </div>

        <div className="flex gap-1 flex-col xl:items-end justify-center">
          <p className="font-bold text-purple">Staking Revenue</p>
          <div className="flex items-end gap-2 flex-wrap">
            <h3>{revenue}</h3>
            <p className="text-gray">%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldCrocsRewardCard;
