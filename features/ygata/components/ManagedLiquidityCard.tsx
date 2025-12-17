"use client";

import React from "react";
import Image from "next/image";
import { formatNumber } from "@/actions/formatNumber";
import Aurora from "./Aurora";

const ManagedLiquidityCard = ({ totalLPValue }: { totalLPValue: number }) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row gap-8 justify-between md:items-center p-8 rounded-xl bg-black overflow-hidden border-[1px] border-white border-opacity-10">
      <div className="z-[1] flex flex-col md:flex-row gap-4 md:items-center">
        <div className=" md:w-12 md:h-12">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.40083 0.996531C8.66011 1.14083 8.82244 1.22199 8.97801 1.32119C11.2574 2.70551 13.5413 4.07405 15.8139 5.46739C15.9506 5.56049 16.1084 5.6181 16.2729 5.63502C16.4374 5.65195 16.6036 5.62766 16.7564 5.56434C20.9417 4.1147 25.4717 3.98797 29.7316 5.20135C29.8809 5.25144 30.0397 5.26691 30.196 5.2466C30.3522 5.22629 30.5018 5.17073 30.6334 5.08411C33.2623 3.49838 35.9016 1.92542 38.5515 0.365244C38.7432 0.252515 38.9393 0.139785 39.1941 0C39.2214 0.149049 39.2395 0.299642 39.2482 0.450919C39.2482 3.75616 39.2482 7.06139 39.2482 10.3711C39.2576 10.4907 39.241 10.611 39.1993 10.7235C39.1576 10.836 39.092 10.9381 39.007 11.0227C37.5257 12.4882 36.0534 13.9672 34.5789 15.4395C34.5331 15.4737 34.4849 15.5046 34.4347 15.5319C31.0843 12.3304 27.0666 10.8221 22.4109 11.2279C19.1233 11.5045 16.027 12.8892 13.6292 15.1554C11.292 17.3112 9.69886 20.1529 9.07921 23.2716C8.45956 26.3903 8.84531 29.6252 10.1809 32.5107C11.5166 35.3962 13.7332 37.7837 16.5119 39.3294C19.2905 40.8751 22.4879 41.4995 25.644 41.1126C33.1089 40.1814 37.4806 34.3668 38.432 29.5713H37.7715C32.7377 29.5713 27.7024 29.5713 22.6657 29.5713C22.2345 29.5797 21.8145 29.4333 21.482 29.1587C21.0314 28.8019 20.6676 28.3475 20.4183 27.8296C20.169 27.3117 20.0405 26.744 20.0427 26.1692C20.0449 25.5945 20.1776 25.0277 20.4308 24.5118C20.6841 23.9958 21.0512 23.5441 21.5045 23.1908C21.8383 22.9173 22.2591 22.7725 22.6905 22.7827C26.636 22.7985 30.5815 22.7827 34.5226 22.7827H45.3446C45.41 23.2742 45.4957 23.7454 45.5363 24.2211C45.905 28.3252 45.1027 32.4496 43.2223 36.1162C41.342 39.7827 38.4607 42.841 34.9126 44.9363C31.1706 47.1838 26.8323 48.2369 22.4763 47.9552C12.8694 47.3984 4.39216 40.3956 2.46223 30.525C1.0283 23.202 2.94696 16.7314 7.99049 11.2144C8.12771 11.0794 8.23574 10.9178 8.30788 10.7394C8.38001 10.5609 8.41472 10.3696 8.40985 10.1772C8.39181 7.359 8.40985 4.54076 8.40985 1.72477L8.40083 0.996531Z"
              fill="white"
            />
          </svg>
        </div>

        <h3 className="font-space text-[28px] lg:text-[32px] text-white">
          Managed Liquidity
        </h3>
      </div>
      <div className="z-[1] flex gap-4">
        <h3 className="text-[32px]">{formatNumber(totalLPValue)}</h3>
        <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-gray">
          USD
        </h3>
      </div>

      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
        <Aurora
          colorStops={["#7B5AFF", "#FF4874", "#DA48FF"]}
          blend={5}
          amplitude={10}
          speed={0.5}
        />
        {/* <Image
          fill
          objectFit="cover"
          objectPosition="center"
          src="/images/bgs/ygata/gradientBgSmall1.jpg"
          quality={100}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default ManagedLiquidityCard;
