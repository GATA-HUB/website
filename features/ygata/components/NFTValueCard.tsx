"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  icon: string;
  network: string;
  quantity: number;
  usdValue: number;
}

const NFTValueCard = ({ icon, network, quantity, usdValue }: Props) => {
  const [totalValue, setTotalValue] = useState<number>(0);
  useEffect(() => {
    setTotalValue(usdValue * quantity);
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 rounded-2xl bg-black border-[1px] border-white border-opacity-10">
      <div className="flex w-1/3 items-center gap-4">
        <div className="w-10 h-10 flex items-center justfiy-center">
          <Image src={icon} width={40} height={40} quality={100} alt="" />
        </div>
        <h3 className="capitalize">{network}</h3>
      </div>

      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col items-end">
          <p>Quantity</p>
          <h4>{quantity ? quantity : "-"}</h4>
        </div>

        <div className="flex flex-col items-end">
          <p>USD value</p>
          <h4>{totalValue ? totalValue : "-"}</h4>
        </div>
      </div>
    </div>
  );
};

export default NFTValueCard;
