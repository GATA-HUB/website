"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTokenPrice } from "@/actions/fetchTokenPrice";
import TextLoader from "../TextLoader";

interface Props {
  icon: string;
  network: string;
  quantity: number;
  symbol: string;
  prices: number[];
  setPrice: (newPrice: number) => void;
}

const LiquidAssetsCard = ({
  icon,
  network,
  quantity,
  symbol,
  setPrice
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("0");
  const [usdValue, setUsdValue] = useState(0)

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const updatedTokens = await fetchTokenPrice(symbol);
      const roundedPrice =
        updatedTokens !== null ? parseFloat(updatedTokens).toFixed(3) : null;
      const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(updatedTokens)
      if (formattedPrice && roundedPrice) {
        setCurrentPrice(formattedPrice);
        setUsdValue(Number(roundedPrice) * quantity);
        setPrice(usdValue);
      } else {
        setCurrentPrice("0");
      }
      setLoading(false);
    };

    fetchPrices();
  }, []);
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
      <div className="min-w-[40%] flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justfiy-center">
          <Image src={icon} width={40} height={40} quality={100} alt="" />
        </div>
        <h3 className="capitalize">{network}</h3>
      </div>

      <div className="grid grid-cols-5 min-w-[60%]">
        <div className="flex flex-col col-span-1 items-end">
          <p>Quantity</p>
          <h4>{quantity ? quantity : '-'}</h4>
        </div>

        <div className="flex flex-col col-span-3 items-center">
          <div className="min-w-[60%] flex flex-col items-end">
          <p>Price</p>
          {loading ? <TextLoader /> : <h4>{currentPrice}</h4>}

          </div>
        </div>

        <div className="min-w-[52px] flex flex-col text-right col-span-1 items-end ml-4">
          <p >USD value</p>
          <h4>{usdValue ? usdValue : '-'}</h4>
        </div>
      </div>
    </div>
  );
};

export default LiquidAssetsCard;
