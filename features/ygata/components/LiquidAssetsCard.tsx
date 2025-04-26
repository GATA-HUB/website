"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTokenPriceV2 } from "@/api/fetchTokenPriceV2";
import TextLoader from "../../common/components/TextLoader";

interface Props {
  icon: string;
  network: string;
  quantity: number;
  symbol: string;
  prices: number[];
  setPrice: (newPrice: number) => void;
  setQuantity: (newQuantity: number) => void;
}

const LiquidAssetsCard = ({
  icon,
  network,
  quantity,
  symbol,
  setPrice,
  setQuantity,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("0");
  const [usdValue, setUsdValue] = useState(0);

  useEffect(() => {
    setQuantity(quantity);
  }, []);

  const formatNumber = (number: number) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);

    return formattedPrice;
  };

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const updatedTokens = await fetchTokenPriceV2(symbol);
      const roundedPrice =
        updatedTokens !== null ? parseFloat(updatedTokens).toFixed(3) : null;
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(updatedTokens);
      if (formattedPrice && roundedPrice) {
        setCurrentPrice(formattedPrice);
        setUsdValue(Number(roundedPrice) * quantity);
      } else {
        setCurrentPrice("0");
      }
      setLoading(false);
    };

    fetchPrices();
  }, []);

  useEffect(() => {
    setPrice(usdValue);
  }, [usdValue]);

  const formatNumbers = (num: number): string => {
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
    <div className="w-full flex items-center justify-between pl-3 pr-6 py-3 rounded-xl bg-black border-[1px] border-white border-opacity-10">
      <div className="min-w-[40%] flex items-center gap-4">
        <div className="w-8 h-8 flex items-center justfiy-center">
          <Image src={icon} width={40} height={40} quality={100} alt="" />
        </div>
        <h4 className="capitalize">{network}</h4>
      </div>

      <div className="grid grid-cols-5 min-w-[60%]">
        <div className="flex flex-col col-span-1 items-end">
          <p>Quantity</p>
          <h4>{quantity ? formatNumbers(quantity) : <TextLoader />}</h4>
        </div>

        <div className="flex flex-col col-span-3 items-center">
          <div className="min-w-[60%] flex flex-col items-end">
            <p>Price</p>
            {loading ? <TextLoader /> : <h4>{currentPrice}</h4>}
          </div>
        </div>

        <div className="min-w-[52px] flex flex-col text-right col-span-1 items-end ml-4">
          <p>USD value</p>
          <h4>{usdValue ? formatNumber(usdValue) : <TextLoader />}</h4>
        </div>
      </div>
    </div>
  );
};

export default LiquidAssetsCard;
