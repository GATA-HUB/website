"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTokenPriceV2 } from "@/actions/fetchTokenPriceV2";
import TextLoader from "../TextLoader";
import { fetchTokenReward } from "@/actions/fetchTokenReward";

interface Props {
  icon: string;
  network: string;
  quantity: number;
  prices: number[];
  setPrice: (newPrice: number) => void;
  setQuantity: (newQuantity: number) => void;
  symbol: string;
  addr: string;
}

const SABCard = ({
  icon,
  network,
  quantity,
  symbol,
  setPrice,
  setQuantity,
  prices,
  addr,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [tokenQuantity, setTokenQuantity] = useState(0);
  const [usdValue, setUsdValue] = useState("0");
  const [reward, setReward] = useState("");
  const [roundedQuantity, setRoundedQuantity] = useState(0);

  useEffect(() => {
    const dividedQuantity = quantity / 1000000;
    setRoundedQuantity(dividedQuantity);
    setQuantity(dividedQuantity);
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const updatedTokens = await fetchTokenPriceV2(symbol);
      const roundedPrice =
        updatedTokens !== null ? parseFloat(updatedTokens).toFixed(3) : null;
      if (roundedPrice) {
        setTokenQuantity(quantity / 1000000);
        setCurrentPrice(Number(roundedPrice));
        setPrice(currentPrice);
      } else {
        setCurrentPrice(0);
      }
      setLoading(false);
    };

    fetchPrices();
  }, []);

  useEffect(() => {
    const fetchReward = async () => {
      setLoading(true);
      const totalReward = await fetchTokenReward(network, addr);
      if (totalReward) {
        const formattedReward = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 5,
          maximumFractionDigits: 5,
        }).format(totalReward);

        setReward(formattedReward);
      } else {
        setReward("");
      }
      setLoading(false);
    };

    fetchReward();
  }, []);

  useEffect(() => {
    if (tokenQuantity) {
      const tokenUsdValue = currentPrice * tokenQuantity;
      const truncatedValue = Math.trunc(tokenUsdValue);
      setPrice(truncatedValue);
      const formattedQuantity = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
      }).format(truncatedValue);
      const [integerPart, decimalPart] = formattedQuantity.split(".");
      setUsdValue(integerPart);
    }
  }, [currentPrice]);

  const formatNumber = (num: number): string => {
    if (num > 1_000_000_000) {
      // Format numbers greater than 1 billion
      return (
        (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 2) + "B"
      );
    } else if (num > 1_000_000) {
      // Format numbers greater than 1 million
      return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 2) + "M";
    } else if (num > 1_000) {
      // Format numbers greater than 1 thousand
      return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 2) + "K";
    } else {
      // Format numbers below 1 thousand with commas
      return new Intl.NumberFormat("en-US").format(num);
    }
  };

  return (
    <div className="w-full flex gap-4 p-2 pl-4 rounded-2xl items-center bg-dgray border-[1px] border-white border-opacity-10">
      <div className="flex items-center gap-2 md:gap-4 w-1/4 min-w-[90px]">
        <div className="min-w-8 min-h-8 flex items-center justify-center">
          <Image src={icon} width={32} height={32} quality={100} alt="" />
        </div>
        <h4 className="capitalize">{symbol}</h4>
      </div>
      <div className="w-full flex flex-row xsm:flex-col gap-2">
        <div className=" w-full grid grid-cols-4 gap-2 items-center">
          <div className="flex flex-col">
            <p>Quantity</p>
            <h4>
              {formatNumber(roundedQuantity)}
              {/* <span className="text-[12px] font-space text-gray">
            .{formatQuantity(quantity).decimalPart}
          </span> */}
            </h4>
          </div>

          <div className="flex flex-col col-span-2">
            <p>Reward</p>
            {loading ? <TextLoader /> : <h4>{reward ? reward : "-"}</h4>}
          </div>

          <div className="flex flex-col">
            <p>Price</p>
            {loading ? <TextLoader /> : <h4>${currentPrice}</h4>}
          </div>
        </div>
        <div className="xsm:w-full w-1/4 min-w-[104px] flex flex-col xsm:flex-row xsm:justify-between bg-mgray px-3 py-2 xsm:py-1 rounded-lg">
          <p className="text-white">USD value</p>
          {loading ? (
            <TextLoader />
          ) : (
            <h4 className="text-purple">{usdValue ? `$${usdValue}` : "-"}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default SABCard;
