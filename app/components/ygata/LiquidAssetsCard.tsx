"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTokenPrice } from "@/actions/fetchTokenPrice";
import TextLoader from "../textLoader";

interface Props {
  icon: string;
  network: string;
  quantity: string;
  symbol: string;
  usdValue: string;
}

const LiquidAssetsCard = ({
  icon,
  network,
  quantity,
  symbol,
  usdValue,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setcurrentPrice] = useState("0");

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const updatedTokens = await fetchTokenPrice(symbol);
      const roundedPrice =
        updatedTokens !== null ? parseFloat(updatedTokens).toFixed(3) : null;
      if (roundedPrice) {
        setcurrentPrice(roundedPrice);
      } else {
        setcurrentPrice("0");
      }
      setLoading(false);
    };

    fetchPrices();
  }, []);
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
      <div className="w-1/3 flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justfiy-center">
          <Image src={icon} width={40} height={40} quality={100} alt="" />
        </div>
        <h3 className="capitalize">{network}</h3>
      </div>

      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col items-end">
          <p>Quantity</p>
          <h4>{quantity}</h4>
        </div>

        <div className="flex flex-col items-end">
          <p>Price</p>
          {loading ? <TextLoader /> : <h4>{currentPrice}</h4>}
        </div>

        <div className="flex flex-col items-end">
          <p>USD value</p>
          <h4>{usdValue}</h4>
        </div>
      </div>
    </div>
  );
};

export default LiquidAssetsCard;
