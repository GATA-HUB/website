"use client";

import React, { useState } from "react";
import ValidatorCard from "../../components/infrastructure/ValidatorCard";
import Image from "next/image";
import ValData from "../../../public/data/validators.json";
import Template from "../../template";

interface Validator {
  icon: string;
  title: string;
  network: string;
  tokens: number;
  symbol: string;
  commission: string;
  status?: string;
  stake?: string;
  autoCompound?: string;
  stat: string;
  addr: string;
  active: boolean;
}

const validators = () => {
  const initialNFTs: Validator[] = ValData;

  const [vals, setVals] = useState<Validator[]>(initialNFTs);
  const [tab, setTab] = useState("active");
  const [totalStakedAsset, setTotalStakedAsset] = useState(0);

  const handleTab = (ValSet: string) => {
    let updatedVals: Validator[];

    if (ValSet === "all") {
      updatedVals = vals.map((val) => ({ ...val, active: true }));
    } else {
      updatedVals = vals.map((val) =>
        val.stat != ValSet
          ? { ...val, active: false }
          : { ...val, active: true }
      );
    }

    setVals(updatedVals);
    setTab(ValSet);
  };

  return (
    <div className="z-10 flex flex-col w-full items-center">
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/valBg.jpg"
            width={1920}
            height={960}
            quality={100}
            alt=""
          />
        </div>
        <div className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-2 lg:w-1/2">
            <h1>Decentralized Infrastructure & Services</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[8px] items-center max-w-[1024px] text-center">
            <Image
              width={222}
              height={32}
              loading="lazy"
              alt=""
              src="/title-decor.svg"
            />
            <div className="flex gap-8">
              <h2 className="text-red">Validators</h2>
            </div>
          </div>
          {/* tab section */}
          <div className="flex gap-1 sm:gap-1 justify-center items-center p-1 bg-black border-2 border-white border-opacity-10 rounded-full">
            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "active" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleTab("active")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "active" ? "dgray" : "white"
                }`}
              >
                Active
              </p>
            </div>
            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "all" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleTab("all")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "all" ? "dgray" : "white"
                }`}
              >
                All
              </p>
            </div>

            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "experimental" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleTab("experimental")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "experimental" ? "dgray" : "white"
                }`}
              >
                Experimental
              </p>
            </div>

            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "decommissioned" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleTab("decommissioned")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "decommissioned" ? "dgray" : "white"
                }`}
              >
                Decommissioned
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4 gap-2 sm:gap-2">
            {vals.map((val, i) => {
              let heartBeat = 4;
              const randomDecimal = Math.random();
              const randomNumber = randomDecimal * i + 4;
              heartBeat = randomNumber;
              if (val.active) {
                return (
                  <Template key={i}>
                    <ValidatorCard
                      icon={val.icon}
                      title={val.title}
                      network={val.network}
                      tokens={val.tokens}
                      symbol={val.symbol}
                      commission={val.commission}
                      status={val.status}
                      stake={val.stake}
                      autoCompound={val.autoCompound}
                      stat={val.stat}
                      addr={val.addr}
                      heartBeat={heartBeat}
                    />
                  </Template>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default validators;
