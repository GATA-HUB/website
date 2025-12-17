"use client";

import React, { useEffect, useRef, useState } from "react";
import { SecondaryButton } from "../../common/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import ExternalLinkIcon from "@/features/common/components/ExternalLinkIcon";
import PrimaryButton from "@/features/common/components/Buttons/PrimaryButton";

interface Props {
  image: string;
  name: string;
  desc?: string;
  collection: string;
  href: string;
  details: string;
  rewardsUrl?: string;
}

const NftCard = ({
  image,
  name,
  desc,
  collection,
  href,
  details,
  rewardsUrl,
}: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [descHeight, setDescHeight] = useState(30);
  const [loadMore, setLoadMore] = useState(false);

  console.log(`Rewards from ${name} NFT card :${rewardsUrl}`);

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      if (height > 36) {
        console.log(`${name}: ${height}`);
        setLoadMore(true);
      } else {
        console.log(`it's a false`);
        setLoadMore(false);
      }
    }
  }, []);

  const handleDesc = (e: any) => {
    e.stopPropagation();
    if (ref.current) {
      const height = ref.current.offsetHeight;
      if (descHeight === 30) {
        setDescHeight(height);
      } else {
        setDescHeight(30);
      }
    }
  };

  return (
    <motion.div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
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
      <div className="relative flex flex-col h-full justify-between">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-center overflow-hidden">
            <div className="relative flex w-full aspect-square items-center justify-center overflow-hidden">
              <div className="absolute z-10 top-2 right-2 flex w-[fit-content] gap-2 items-center border-[1px] border-white/10 rounded-full bg-black/10 backdrop-blur-[8px] pl-[8px] pr-[16px] py-[4px]">
                <Image
                  width={16}
                  height={16}
                  src="/images/common/nft-collection-icon.svg"
                  loading="lazy"
                  alt=""
                />
                <p className="w-full text-white">{collection}</p>
              </div>
              {image ? (
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="NFT image"
                  src={image}
                />
              ) : (
                <div className="w-[384px] h-[390px] bg-lgray"></div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[12px] w-full p-3 lg:p-4">
            <div
              className={`flex items-center ${
                details ? "justify-between" : "justify-start"
              } w-full gap-4`}
            >
              <h4>{name}</h4>
              {details && (
                <div
                  onClick={() => window.open(details, "_blank")}
                  className="w-4 h-4 items-center justify-center"
                >
                  <ExternalLinkIcon size={16} />
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <motion.div
                style={{
                  width: "100%",
                  height: "32px",
                  overflow: "hidden",
                }}
                animate={{
                  height: `${descHeight}px`,
                }}
              >
                <p ref={ref} className="text-gray">
                  {desc}
                </p>
              </motion.div>
              {loadMore ? (
                <p
                  onClick={handleDesc}
                  className="text-purple cursor-pointer z-10 hover:text-white transition-all ease-out duration-300"
                >
                  {descHeight > 32 ? "Load less" : "Load more"}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="z-10 px-4 pb-4 w-full gap-2 flex flex-col">
          <PrimaryButton text="Collect" href={href} width="full" />
          {rewardsUrl ? (
            <SecondaryButton
              href={rewardsUrl}
              width="full"
              disabled={!rewardsUrl}
            >
              Rewards
            </SecondaryButton>
          ) : null}
        </div>
      </div>
      <div className="z-[-1] absolute top-12 left-0 right-0 aspect-square blur-[32px]">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="NFT image"
          src={image}
        />
      </div>
    </motion.div>
  );
};

export default NftCard;
