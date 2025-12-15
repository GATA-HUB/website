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
    <div className="group relative w-full flex gap-4 items-center xsm:p-4 pl-4 bg-black border-[1px] border-dgray overflow-hidden">
      <div className="absolute bg-dgray left-0 right-0 w-full h-0 group-hover:h-full transition-all ease-out duration-300" />
      <div className="z-10 flex items-center gap-2 md:gap-4 w-1/4 min-w-[90px]">
        <div className="min-w-8 min-h-8 flex items-center justify-center">
          <Image src={icon} width={32} height={32} quality={100} alt="" />
        </div>
        <h6 className="capitalize font-bold">{network}</h6>
      </div>
      <div className="z-10 w-full flex flex-row xsm:flex-col gap-2">
        <div className=" w-full grid grid-cols-2 gap-2 items-center">
          <div className="flex flex-col gap-1">
            {/* <p>Quantity</p> */}
            <h6 className="text-gray">{quantity ? quantity : "-"}</h6>
          </div>

          <div className="flex flex-col gap-1">
            {/* <p>Floor Price</p> */}
            <h6 className="text-gray">{usdValue ? `$${usdValue}` : "-"}</h6>
          </div>
        </div>
        <div className="relative xsm:w-full w-1/4 min-w-[104px] flex flex-col xsm:flex-row xsm:justify-between gap-1 px-4 py-4 xsm:py-1 overflow-hidden">
          {/* <p className="z-[1]">USD value</p> */}
          <h6 className="z-[1]">{totalValue ? `$${totalValue}` : "-"}</h6>
        </div>
      </div>
    </div>
  );
};

export default NFTValueCard;
