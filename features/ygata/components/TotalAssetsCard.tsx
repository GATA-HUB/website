"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextLoader from "../../common/components/TextLoader";
import { fetchTokenPriceV2 } from "@/api/fetchTokenPriceV2";

interface Props {
  icon?: string;
  tokenName: string;
  quantity: number;
  symbol: string;
  totalCategoryValue: number; // The total value (staked or liquid) to calculate percentage against
  setUSDValue?: (value: number) => void; // Callback to report this card's value to parent
  lg?: boolean;
  price?: number;
}

const TotalAssetsCard = ({
  icon,
  tokenName,
  quantity,
  symbol,
  totalCategoryValue,
  setUSDValue,
  lg,
  price,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [usdValue, setLocalUsdValue] = useState(0);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const updatedTokens = await fetchTokenPriceV2(symbol);

      if (updatedTokens) {
        const parsedPrice = Number(updatedTokens);
        setCurrentPrice(parsedPrice);

        const calculatedValue = lg
          ? parsedPrice * quantity
          : (parsedPrice * quantity) / 1000000;

        setLocalUsdValue(calculatedValue);

        if (setUSDValue) {
          setUSDValue(calculatedValue);
        }
      } else {
        setCurrentPrice(0);
        setLocalUsdValue(0);
        if (setUSDValue) {
          setUSDValue(0);
        }
      }

      setLoading(false);
    };

    if (symbol) {
      fetchPrices();
    }
  }, [symbol, quantity]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatPercentage = (value: number, total: number) => {
    if (total === 0) return "0.00%";
    return new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value / total);
  };

  return (
    <div className="group relative w-full flex gap-4 items-center xsm:p-4 pl-4 bg-black border-[1px] border-dgray overflow-hidden">
      <div className="absolute bg-dgray left-0 right-0 w-full h-0 group-hover:h-full transition-all ease-out duration-300" />
      <div className="z-10 flex items-center gap-2 md:gap-4 w-1/4 min-w-[90px]">
        {icon && (
          <div className="min-w-8 min-h-8 flex items-center justify-center">
            <Image src={icon} width={32} height={32} quality={100} alt="" />
          </div>
        )}
        <h6 className="capitalize font-bold">{tokenName}</h6>
      </div>
      <div className="z-10 w-full flex flex-row xsm:flex-col gap-2">
        <div className=" w-full grid grid-cols-1 gap-2 items-center">
          <div className="flex flex-col gap-1">
            {/* <p>USD Value</p> */}
            {loading ? (
              <TextLoader />
            ) : (
              <h6 className="text-gray">
                {price
                  ? formatCurrency(price * quantity)
                  : formatCurrency(usdValue)}
              </h6>
            )}
          </div>
          {/* Empty columns to match grid layout if needed, or adjust grid */}
          <div className="col-span-3"></div>
        </div>
        <div className="relative xsm:w-full w-1/4 min-w-[104px] flex flex-col xsm:flex-row xsm:justify-between gap-1 px-4 py-4 xsm:py-1 overflow-hidden">
          {/* <p className="z-[1]">Percentage</p> */}
          {loading ? (
            <TextLoader />
          ) : (
            <h6 className="z-[1]">
              {price
                ? formatPercentage(price * quantity, totalCategoryValue)
                : formatPercentage(usdValue, totalCategoryValue)}
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalAssetsCard;
