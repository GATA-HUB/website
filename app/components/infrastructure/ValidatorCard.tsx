"use client";

import React, { useEffect, useState } from "react";
import { fetchTokenPriceV2 } from "../../../actions/fetchTokenPriceV2";
import { PrimaryButton, SecondaryButton } from "../Button";
import { motion } from "framer-motion";
import Image from "next/image";
import TextLoader from "../TextLoader";
import { fetchValDelegation } from "@/actions/fetchValDelegation";

interface Props {
  icon: string;
  title: string;
  network: string;
  tokens: string;
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

  const handlePriceFormat = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(price);
    return formattedPrice;
  };

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
        console.log("delegation of ", network, ":", updateDelegation);
      }
      setLoading(false);
    };

    fetchDelegation();
  }, []);

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
  }, []);

  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     setLoading(true);
  //     const updatedTokens = await fetchTokenPriceV2(symbol);
  //     console.log(symbol, ":", updatedTokens);
  //     const roundedPrice =
  //       updatedTokens !== null ? parseFloat(updatedTokens).toFixed(10) : null;
  //     if (roundedPrice) {
  //       setCurrentPrice(roundedPrice);
  //     } else {
  //       setCurrentPrice("0");
  //     }
  //     setLoading(false);
  //   };

  //   fetchPrices();
  // }, []);

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
            <div className="flex justify-center items-center w-fit">
              <Image width={64} height={64} alt="" priority={true} src={icon} />
            </div>
            <h4>{title}</h4>
          </div>

          <div className="flex gap-4 justify-between items-center flex-wrap">
            <div className="flex flex-col gap-1">
              {loading ? (
                <TextLoader />
              ) : (
                <div className="flex gap-1">
                  <p className="font-bold text-purple">
                    {delegation !== 0 ? handlePriceFormat(delegation) : tokens}
                  </p>
                  {tokens === "ICS Chain" ? null : (
                    <p className="font-bold text-purple">{symbol}</p>
                  )}
                </div>
              )}

              {loading ? <TextLoader /> : <p>${currentPrice}</p>}
            </div>
            <div className="flex h-fit gap-2 px-[8px] py-[4px] items-center rounded-full bg-lgray border-2 border-white border-opacity-10">
              <Image width={16} height={16} alt="" src="/apr.svg" />
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
                  <PrimaryButton width={stake ? "" : "full"} href={status}>
                    status
                  </PrimaryButton>
                </div>
                <div
                  className={`flex ${
                    status ? "flex" : "hidden"
                  } sm:hidden w-"full"`}
                >
                  <PrimaryButton width="full" href={status}>
                    status
                  </PrimaryButton>
                </div>
              </>
            ) : null}
            {stake ? (
              <div className="w-full">
                <PrimaryButton width="full" href={stake}>
                  Stake Now
                </PrimaryButton>
              </div>
            ) : null}
          </div>
          {autoCompound ? (
            <SecondaryButton width="full">Auto Compound</SecondaryButton>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorCard;
