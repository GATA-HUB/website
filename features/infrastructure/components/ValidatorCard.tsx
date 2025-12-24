"use client";

import React, { useEffect, useState } from "react";
import { fetchTokenPriceV2 } from "../../../api/fetchTokenPriceV2";
import { motion } from "framer-motion";
import Image from "next/image";
import TextLoader from "../../common/components/TextLoader";
import { fetchValDelegation } from "@/api/fetchValDelegation";
import { formatPrice } from "@/actions/formatPrice";
import PrimaryButton from "@/features/common/components/Buttons/PrimaryButton";
import SecondaryButton from "@/features/common/components/Buttons/SecondaryButton";

interface Props {
  icon: string;
  title: string;
  network: string;
  tokens: number;
  symbol: string;
  commission: string;
  status?: string;
  stake?: string;
  autoCompound?: string;
  stat: string;
  addr: string;
  heartBeat: number;
}

const ValidatorCard = ({
  icon,
  title,
  network,
  tokens,
  symbol,
  commission,
  status,
  stake,
  autoCompound,
  stat,
  addr,
  heartBeat,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("0");
  const [delegation, setDelegation] = useState(0);

  useEffect(() => {
    const fetchDelegation = async () => {
      setLoading(true);
      if (addr) {
        const updateDelegation = await fetchValDelegation(network, addr);
        if (updateDelegation) {
          setDelegation(updateDelegation);
        } else {
          setDelegation(0);
        }
      }
      setLoading(false);
    };

    fetchDelegation();
  }, [addr, network]);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const updatedTokens = await fetchTokenPriceV2(symbol);
      const roundedPrice =
        updatedTokens !== null ? parseFloat(updatedTokens).toFixed(10) : null;
      if (roundedPrice) {
        setCurrentPrice(roundedPrice);
      } else {
        setCurrentPrice("0");
      }
      setLoading(false);
    };

    fetchPrices();
  }, [symbol]);

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
        background: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
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
      {/* pulse animation */}
      <div className="z-[0] absolute flex justify-center items-center h-[128px]">
        <svg
          width="417"
          height="120"
          viewBox="0 0 417 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{
              strokeDasharray: "600px 600px",
              strokeDashoffset: "600px",
            }}
            animate={{ strokeDashoffset: "-600px" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: heartBeat,
              type: "tween",
            }}
            d="M0 60H251.836C253.6 60 255.157 58.8434 255.666 57.1536L270.857 6.7163C272 2.92107 277.374 2.92108 278.517 6.71631L310.614 113.284C311.757 117.079 317.131 117.079 318.274 113.284L333.466 62.8464C333.975 61.1566 335.531 60 337.296 60H417"
            stroke="#7B5AFF"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* card elements */}
      <div className="z-10 flex flex-col p-3 sm:p-4 gap-2 sm:gap-4 flex-wrap w-full h-full justify-between">
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-[12px] sm:items-center">
            <div className="flex w-12 h-12 justify-center items-center ">
              <Image width={64} height={64} alt="" priority={true} src={icon} />
            </div>
            <h4>{title}</h4>
          </div>

          <div className="flex gap-4 justify-between items-center flex-wrap">
            <div className="flex flex-col gap-2">
              {loading ? (
                <TextLoader />
              ) : (
                <div className="flex gap-1">
                  <p className="font-bold text-white">
                    {delegation !== 0
                      ? formatPrice(delegation)
                      : formatPrice(tokens)}
                  </p>
                  {/* {tokens === "ICS Chain" ? null : (
                    <p className="font-bold text-purple">{symbol}</p>
                  )} */}
                </div>
              )}

              {loading ? (
                <TextLoader />
              ) : (
                <p className="text-gray">
                  ${currentPrice !== "NaN" ? currentPrice : 0}
                </p>
              )}
            </div>
            <div className="flex h-fit gap-2 pl-[8px] pr-[12px] py-[4px] items-center rounded-full bg-black/10 backdrop-blur-xl border-[1px] border-white/10">
              <Image
                width={16}
                height={16}
                alt=""
                src="/images/common/apr.svg"
              />
              <p className="text-[14px] text-white">
                {commission
                  ? `${commission} commission`
                  : stat === "experimental"
                  ? "Experimental"
                  : "Decommissioned"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 w-full">
            {status ? (
              <>
                <div className={`hidden sm:flex w-${stake ? "fit" : "full"}`}>
                  <SecondaryButton
                    text="status"
                    width={stake ? "" : "full"}
                    href={status}
                  ></SecondaryButton>
                </div>
                <div
                  className={`flex ${
                    status ? "flex" : "hidden"
                  } sm:hidden w-"full"`}
                >
                  <SecondaryButton
                    text="status"
                    width="full"
                    href={status}
                  ></SecondaryButton>
                </div>
              </>
            ) : null}
            {stake ? (
              <div className="w-full">
                <PrimaryButton
                  text="StakeNow"
                  width="full"
                  href={stake}
                ></PrimaryButton>
              </div>
            ) : null}
          </div>
          {autoCompound ? (
            <SecondaryButton
              text="Auto Compound"
              width="full"
            ></SecondaryButton>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorCard;
