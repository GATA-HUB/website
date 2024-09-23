"use client";

import React, { useState } from "react";
import Image from "next/image";
import SnapshotsData from "../../../public/data/snapshots.json";
import relayData from "../../../public/data/relays.json";
import Template from "../../template";
import RelayerAnim from "../../components/infrastructure/RelayerAnim";
import SnapshotCard from "@/app/components/infrastructure/SnapshotCard";

interface Snapshot {
  icon: string;
  title: string;
  link1: string;
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

const snapshot = () => {
  const initialNFTs: Snapshot[] = SnapshotsData;

  const initialRelayers: Relayers[] = relayData;

  const [snapshots, setSnapshots] = useState<Snapshot[]>(initialNFTs);
  const [relayerPeriod, setRelayerPeriod] = useState("monthly");

  const handleRelayerTransections = (period: string) => {
    setRelayerPeriod(period);
  };

  return (
    <div className="z-10 flex flex-col w-full items-center">
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/snapshotBg.jpg"
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
        {/* <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[8px] items-center max-w-[1024px] text-center">
            <Image
              width={222}
              height={32}
              loading="lazy"
              alt=""
              src="/title-decor.svg"
            />
            <div className="flex gap-8">
              <h2 className="text-red">Snapshots</h2>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4 gap-2 sm:gap-2">
            {snapshots.map((snapshot, i) => {
              let heartBeat = 4;
              const randomDecimal = Math.random();
              const randomNumber = randomDecimal * i + 4;
              heartBeat = randomNumber;
              return (
                <Template key={i}>
                  <SnapshotCard
                    icon={snapshot.icon}
                    title={snapshot.title}
                    link1={snapshot.link1}
                  />
                </Template>
              );
            })}
          </div>
        </div> */}

        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          {/* Relayer title */}
          <div className="flex flex-col gap-6 sm:flex-row items-center sm:justify-between w-full">
            <div className="flex sm:flex-col md:flex-row gap-4 sm:gap-1 md:gap-6 md:items-center">
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

export default snapshot;
