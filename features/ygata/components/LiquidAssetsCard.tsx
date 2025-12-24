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
    <div className="group relative w-full flex gap-4 items-center xsm:p-4 pl-4 bg-black border-[1px] border-dgray overflow-hidden">
      <div className="absolute bg-dgray left-0 right-0 w-full h-0 group-hover:h-full transition-all ease-out duration-300"/>
      <div className="z-10 flex items-center gap-2 md:gap-4 w-1/4 min-w-[90px]">
        <div className="min-w-8 min-h-8 flex items-center justify-center">
          <Image src={icon} width={32} height={32} quality={100} alt="" />
        </div>
        <h6 className="capitalize font-bold">{symbol}</h6>
      </div>
      <div className="z-10 w-full flex flex-row xsm:flex-col gap-2">
        <div className=" w-full grid grid-cols-4 gap-2 items-center">
          <div className="flex flex-col gap-1">
            {/* <p>Quantity</p> */}
            <h6 className="text-gray">
              {quantity ? formatNumbers(quantity) : <TextLoader />}
            </h6>
          </div>

          <div className="flex flex-col col-span-2 gap-1 ">
            {/* <p>Reward</p> */}
            <h6 className="text-gray">-</h6>
          </div>

          <div className="flex flex-col gap-1">
            {/* <p>Price</p> */}
            {loading ? <TextLoader /> : <h6 className="text-gray">{currentPrice}</h6>}
          </div>
        </div>
        <div className="relative xsm:w-full w-1/4 min-w-[104px] flex flex-col xsm:flex-row xsm:justify-between gap-1 px-4 py-4 xsm:py-1 overflow-hidden">
          {/* <Image
            fill
            objectFit="cover"
            objectPosition="center"
            src="/images/bgs/ygata/gradientBgSmall.jpg"
            quality={100}
            alt=""
            className="rotate-180"
          /> */}
          {/* <p className="z-[1] text-black">USD value</p> */}
          {loading ? (
            <TextLoader />
          ) : (
            <h6 className="z-[1]">
              {usdValue ? formatNumber(usdValue) : "-"}
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiquidAssetsCard;
