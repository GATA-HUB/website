"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTokenPriceV2 } from "@/actions/fetchTokenPriceV2";
import TextLoader from "../TextLoader";
import { fetchTokenReward } from "@/actions/fetchTokenReward";

interface Props {
  name: string;
  icon: string;
  network: string;
  quantity: number;
  prices: number[];
  setPrice: (newPrice: number) => void;
  symbol: string;
  addr: string;
}

const SABCard = ({
  name,
  icon,
  network,
  quantity,
  symbol,
  setPrice,
  prices,
  addr,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [tokenQuantity, setTokenQuantity] = useState(0);
  const [usdValue, setUsdValue] = useState("0");
  const [reward, setReward] = useState("");
  const [roundedQuantity, setRoundedQuantity] = useState(0);

  // function formatQuantity(quantity: number): {
  //   integerPart: string;
  //   decimalPart: string;
  // } {
  //   const dividedQuantity = quantity / 1000000;

  //   const formattedQuantity = new Intl.NumberFormat("en-US", {
  //     minimumFractionDigits: 6,
  //     maximumFractionDigits: 6,
  //   }).format(dividedQuantity);

  //   const [integerPart, decimalPart] = formattedQuantity.split(".");

  //   return { integerPart, decimalPart };
  // }

  useEffect(() => {
    const dividedQuantity = quantity / 1000000;
    setRoundedQuantity(dividedQuantity);
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
          minimumFractionDigits: 6,
          maximumFractionDigits: 6,
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
    const tokenUsdValue = currentPrice * tokenQuantity;
    const truncatedValue = Math.trunc(tokenUsdValue);
    const formattedQuantity = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    }).format(truncatedValue);
    const [integerPart, decimalPart] = formattedQuantity.split(".");
    setUsdValue(integerPart);
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
    <div className="w-full flex flex-col gap-4 p-3 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
      <div className="flex items-center gap-2 md:gap-4 w-1/4">
        <div className="min-w-10 min-h-10 md:min-w-12 md:min-h-12 flex items-center justfiy-center">
          <Image src={icon} width={48} height={48} quality={100} alt="" />
        </div>
        <h3 className="capitalize">{name}</h3>
      </div>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div className="flex flex-col">
          <p>Quantity</p>
          <h4>
            {formatNumber(roundedQuantity)}
            {/* <span className="text-[12px] font-space text-gray">
            .{formatQuantity(quantity).decimalPart}
          </span> */}
          </h4>
        </div>

        <div className="flex flex-col">
          <p>Price</p>
          {loading ? <TextLoader /> : <h4>${currentPrice}</h4>}
        </div>

        <div className="flex flex-col">
          <p>USD value</p>
          {loading ? (
            <TextLoader />
          ) : (
            <h4>{usdValue ? `$${usdValue}` : "-"}</h4>
          )}
        </div>
      </div>
      <div className="flex flex-col bg-mgray px-3 py-2 rounded-lg">
        <p className="text-white">Reward</p>
        {loading ? (
          <TextLoader />
        ) : (
          <h3 className="text-purple">{reward ? reward : "-"}</h3>
        )}
      </div>
    </div>
  );
};

export default SABCard;
