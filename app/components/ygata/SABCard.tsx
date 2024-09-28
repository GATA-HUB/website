"client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchTokenPrice } from "@/actions/fetchTokenPrice";
import TextLoader from "../textLoader";

interface Props {
  icon: string;
  network: string;
  quantity: string;
  dynamicPrice: string;
  symbol: string;
}

const SABCard = ({ icon, network, quantity, dynamicPrice, symbol }: Props) => {
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
    <div className="w-full flex items-center justify-between pr-3 sm:pr-6 pl-3 py-3 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
      <div className="flex items-center gap-2 md:gap-4 w-1/3">
        <div className="min-w-8 min-h-8 flex items-center justfiy-center">
          <Image src={icon} width={32} height={32} quality={100} alt="" />
        </div>
        <h4 className="capitalize">{network}</h4>
      </div>
      <div className="flex flex-col items-end">
        <p>Quantity</p>
        <h4>{quantity}</h4>
      </div>

      <div className="flex flex-col items-end">
        <p>Dynamic Price</p>
        {loading ? <TextLoader /> : <h4>${currentPrice}</h4>}
      </div>

      <div className="flex flex-col items-end">
        <p>USD value</p>
        {loading ? <TextLoader /> : <h4>${currentPrice}</h4>}
      </div>
    </div>
  );
};

export default SABCard;
