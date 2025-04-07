"use client";

import React, { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "../../common/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  desc?: string;
  collection: string;
  href: string;
  details: string;
}

const NftCard = ({ image, name, desc, collection, href, details }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [descHeight, setDescHeight] = useState(30);
  const [loadMore, setLoadMore] = useState(false);

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
      onClick={() => window.open(details, "_blank")}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        background: "#000",
        border: "solid 1px rgba(255, 255, 255, 0.1)",
        cursor: "pointer",
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
            <h4>{name}</h4>

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
                <p ref={ref}>{desc}</p>
              </motion.div>
              {loadMore ? (
                <p
                  onClick={handleDesc}
                  className="text-purple cursor-pointer z-10 hover:text-white"
                >
                  {descHeight > 32 ? "Load less" : "Load more"}
                </p>
              ) : null}
            </div>
            <div className="flex w-[fit-content] gap-2 items-center border-2 border-white border-opacity-10 rounded-full bg-lgray pl-[8px] pr-[16px] py-[4px]">
              <Image
                width={16}
                height={16}
                src="/images/common/nft-collection-icon.svg"
                loading="lazy"
                alt=""
              />
              <p className="w-full text-white">{collection}</p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4 w-full">
          <PrimaryButton width="full" href={href}>
            Collect
          </PrimaryButton>
        </div>
      </div>
    </motion.div>
  );
};

export default NftCard;
