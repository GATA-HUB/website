"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ValData from "../../../features/infrastructure/data/validators.json";
import Template from "../../template";
import ValidatorCard from "@/features/infrastructure/components/ValidatorCard";
import { NFTCollection, Validator } from "@/types";
import Tab from "@/features/common/components/Tab";

const validators = () => {
  const initialNFTs: Validator[] = ValData;

  const [vals, setVals] = useState<Validator[]>(initialNFTs);
  const [tab, setTab] = useState<number>(0);
  const collectionTads: string[] = ["active", "decommissioned"];

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
  };

  useEffect(() => {
    const selectedCollection = collectionTads[tab];

    let updatedVals: Validator[];

    if (selectedCollection === "all") {
      updatedVals = vals.map((val) => ({ ...val, active: true }));
    } else {
      updatedVals = vals.map((val) =>
        val.stat != selectedCollection
          ? { ...val, active: false }
          : { ...val, active: true }
      );
    }

    setVals(updatedVals);
  }, [tab]);

  return (
    <div className="z-10 flex flex-col w-full items-center">
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/images/headers/valBg.jpg"
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
              src="/images/common/title-decor.svg"
            />
            <div className="flex gap-8">
              <h2 className="text-red">Validators</h2>
            </div>
          </div>
          {/* tab section */}
          <Tab setCurrentTab={setTab} tabs={collectionTads} currentTab={tab} />

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
