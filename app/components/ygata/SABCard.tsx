"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTokenPrice } from "@/actions/fetchTokenPrice";
import TextLoader from "../TextLoader";

interface Props {
  icon: string;
  network: string;
  quantity: number;
  prices: number[];
  setPrice: (newPrice: number) => void;
  symbol: string;
}

const SABCard = ({ icon, network, quantity, symbol, setPrice, prices }: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [usdValue, setUsdValue] = useState(0);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const updatedTokens = await fetchTokenPrice(symbol);
      const roundedPrice =
        updatedTokens !== null ? parseFloat(updatedTokens).toFixed(3) : null;
      if (roundedPrice) {
        setCurrentPrice(Number(roundedPrice));
        setUsdValue(currentPrice * quantity);
        setPrice(
          currentPrice
        )
      } else {
        setCurrentPrice(0);
      }
      setLoading(false);
    };

    fetchPrices();
  }, []);

  return (
    <div className="w-full flex items-center justify-between pr-3 sm:pr-6 pl-3 py-3 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
      <div className="flex items-center gap-2 md:gap-4 w-1/3">
        <div className="min-w-8 min-h-8 flex items-center justfiy-center">
          <Image src={icon} width={32} height={32} quality={100} alt="" />
        </div>
        <h4 className="capitalize">{network}</h4>
      </div>
      <div className="flex flex-col items-end">
        <p>Quantity</p>
        <h4>{quantity === 0 ? '-' : quantity}</h4>
      </div>

      <div className="flex flex-col items-end">
        <p>Price</p>
        {loading ? <TextLoader /> : <h4>${currentPrice}</h4>}
      </div>

      <div className="flex flex-col items-end">
        <p>USD value</p>
        {loading ? <TextLoader /> : <h4>{usdValue ? `$${usdValue}` : '-'}</h4>}
      </div>
    </div>
  );
};

export default SABCard;
