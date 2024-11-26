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

  function formatQuantity(quantity: number): {
    integerPart: string;
    decimalPart: string;
  } {
    const dividedQuantity = quantity / 1000000;

    const formattedQuantity = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    }).format(dividedQuantity);

    const [integerPart, decimalPart] = formattedQuantity.split(".");

    return { integerPart, decimalPart };
  }

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
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
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

  return (
    <div className="w-full flex items-center justify-between pr-3 sm:pr-6 pl-3 py-3 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
      <div className="flex items-center gap-2 md:gap-4 w-1/4">
        <div className="min-w-8 min-h-8 flex items-center justfiy-center">
          <Image src={icon} width={32} height={32} quality={100} alt="" />
        </div>
        <h4 className="capitalize">{name}</h4>
      </div>
      <div className=" w-full grid grid-cols-4 gap-2">
        <div className="flex flex-col items-end">
          <p>Quantity</p>
          <h4>
            {formatQuantity(quantity).integerPart}
            {/* <span className="text-[12px] font-space text-gray">
            .{formatQuantity(quantity).decimalPart}
          </span> */}
          </h4>
        </div>

        <div className="flex flex-col items-end">
          <p>Reward</p>
          {loading ? <TextLoader /> : <h4>{reward ? reward : "-"}</h4>}
        </div>

        <div className="flex flex-col items-end">
          <p>Price</p>
          {loading ? <TextLoader /> : <h4>${currentPrice}</h4>}
        </div>

        <div className="flex flex-col items-end">
          <p>USD value</p>
          {loading ? (
            <TextLoader />
          ) : (
            <h4>{usdValue ? `$${usdValue}` : "-"}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default SABCard;
