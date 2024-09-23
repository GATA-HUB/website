import React from "react";
import Image from "next/image";

interface Props {
  icon: string;
  network: string;
  quantity: string;
  dynamicPrice: string;
  usdValue: string;
}

const SABCard = ({
  icon,
  network,
  quantity,
  dynamicPrice,
  usdValue,
}: Props) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justfiy-center">
          <Image src={icon} width={40} height={40} quality={100} alt="" />
        </div>
        <h3 className="capitalize">{network}</h3>
      </div>

      <div className="flex flex-col items-end">
        <p>Quantity</p>
        <h4>{quantity}</h4>
      </div>

      <div className="flex flex-col items-end">
        <p>Dynamic Price</p>
        <h4>{dynamicPrice}</h4>
      </div>

      <div className="flex flex-col items-end">
        <p>USD value</p>
        <h4>{usdValue}</h4>
      </div>
    </div>
  );
};

export default SABCard;
