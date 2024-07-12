"use client";

import React, { useState } from "react";
import ValidatorCard from "../components/infrastructure/ValidatorCard";
// import Relayer from "../components/infrastructure/Relayer";
import Image from "next/image";
import ValData from "../../public/data/validators.json";
import relayData from "../../public/data/relays.json";
import Template from "../template";
import RelayerAnim from "../components/infrastructure/RelayerAnim";

interface Validator {
  icon: string;
  title: string;
  tokens: string;
  symbol: string;
  commission: string;
  status?: string;
  stake?: string;
  autoCompound?: string;
  stat: string;
  active: boolean;
}

interface Relay {
  icon: string;
}

interface IBC {
  monthly: string;
  weekly: string;
  daily: string;
}

interface Relayers {
  validators: Relay[];
  title: string;
  ibc: IBC;
}

const Infrastructure = () => {
  const initialNFTs: Validator[] = ValData;

  const initialRelayers: Relayers[] = relayData;

  const [vals, setVals] = useState<Validator[]>(initialNFTs);
  const [tab, setTab] = useState("active");
  const [relayerPeriod, setRelayerPeriod] = useState("monthly");

  const handleRelayerTransections = (period: string) => {
    setRelayerPeriod(period);
  };

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
      {/* <div className="absolute z-[-1] top-[800px] right-0">
        <img src="/bg-waves.png" alt="" loading="lazy" />
      </div> */}
      <div className="w-full px-4">
        <>
          <Image
            alt=""
            priority={true}
            width={1888}
            height={522}
            src="/common-header.png"
          />
        </>
      </div>
      <div className="w-full mt-[-48px] sm:mt-[-80px] lg:mt-[-104px] xl:mt-[-128px] 2xl:mt-[-256px] max-w-[1920px] flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        <div className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1>Decentralized Infrastructure & Services</h1>
          </div>
        </div>

        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[16px] items-center max-w-[1024px] text-center">
            <Image
              width={222}
              height={32}
              loading="lazy"
              alt=""
              src="/title-decor.svg"
            />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
              <h2>GATA HUB</h2>
              <h2 className="text-red">Validators</h2>
            </div>
            <p>
              GATA HUB runs its validation operations across multiple Cosmos
              chains and aims to validate more chains across Cosmos ecosystem
              and beyond. Currently GATA HUB is validating on following chains
            </p>
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
                      tokens={val.tokens}
                      symbol={val.symbol}
                      commission={val.commission}
                      status={val.status}
                      stake={val.stake}
                      autoCompound={val.autoCompound}
                      stat={val.stat}
                      heartBeat={heartBeat}
                    />
                  </Template>
                );
              }
            })}
          </div>
        </div>

        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          {/* Relayer title */}
          <div className="flex flex-col gap-6 sm:flex-row items-center sm:justify-between w-full">
            <div className="flex sm:flex-col md:flex-row gap-4 sm:gap-1 md:gap-6 md:items-center">
              <h2>GATA HUB</h2>
              <h2 className="text-red">IBC Relayer</h2>
            </div>

            {/* Relayer tab */}
            <div className="flex flex-col items-center sm:items-end md:flex-row gap-2 sm:gap-4 md:gap-6 md:items-center">
              <p className="uppercase font-semibold text-[16px]">
                ibc transfers
              </p>
              <div className="flex gap-[8px] justify-center items-center p-[8px] bg-black border-2 border-white border-opacity-10 rounded-full">
                <div
                  className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-[24px] py-[8px] rounded-full border-1 border-opacity-10 bg-dgray bg-${
                    relayerPeriod === "daily" ? "purple" : "dgray"
                  } hover:bg-purple border-2 border-white border-opacity-10`}
                  onClick={() => handleRelayerTransections("daily")}
                >
                  <p
                    className={`transition-all duration-300 ease-in-out uppercase font-bold group-hover:text-dgray text-[16px] text-white text-${
                      relayerPeriod === "monthly" ? "dgray" : "white"
                    }`}
                  >
                    24H
                  </p>
                </div>

                <div
                  className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-[24px] py-[8px] rounded-full border-1 border-opacity-10 bg-dgray bg-${
                    relayerPeriod === "weekly" ? "purple" : "dgray"
                  } hover:bg-purple border-2 border-white border-opacity-10`}
                  onClick={() => handleRelayerTransections("weekly")}
                >
                  <p
                    className={`transition-all duration-300 ease-in-out uppercase font-bold group-hover:text-dgray text-[16px] text-white text-${
                      relayerPeriod === "monthly" ? "dgray" : "white"
                    }`}
                  >
                    7D
                  </p>
                </div>

                <div
                  className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-[24px] py-[8px] rounded-full border-1 border-opacity-10 bg-dgray bg-${
                    relayerPeriod === "monthly" ? "purple" : "dgray"
                  } hover:bg-purple border-2 border-white border-opacity-10`}
                  onClick={() => handleRelayerTransections("monthly")}
                >
                  <p
                    className={`transition-all duration-300 ease-in-out uppercase font-bold  group-hover:text-dgray text-[16px] text-white text-${
                      relayerPeriod === "monthly" ? "dgray" : "white"
                    }`}
                  >
                    30D
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Available Relayers */}
          {/* <div className="flex flex-wrap w-full gap-[160px] justify-center sm:justify-start items-center sm:ml-14">
            {initialRelayers.map((relay, i) => {
              return (
                <Relayer
                  key={i}
                  validators={relay.validators}
                  title={relay.title}
                  ibc={relay.ibc}
                  period={relayerPeriod}
                />
              );
            })}
          </div> */}

          <div className="w-full flex flex-col items-start flex-wrap gap-4">
            <div className="w-fit flex flex-col gap-4">
              <RelayerAnim />
              <div className="flex flex-col w-full">
                {initialRelayers.map((relay, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center w-full">
                      <div
                        className={`${
                          relayerPeriod === "daily" ? "flex" : "hidden"
                        } gap-2`}
                      >
                        <p>IBC transactions: </p>
                        <p className="font-bold">{relay.ibc.daily}</p>
                      </div>
                      <div
                        className={`${
                          relayerPeriod === "weekly" ? "flex" : "hidden"
                        } gap-2`}
                      >
                        <p>IBC transactions: </p>
                        <p className="font-bold">{relay.ibc.weekly}</p>
                      </div>
                      <div
                        className={`${
                          relayerPeriod === "monthly" ? "flex" : "hidden"
                        } gap-2`}
                      >
                        <p>IBC transactions: </p>
                        <p className="font-bold">{relay.ibc.monthly}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
