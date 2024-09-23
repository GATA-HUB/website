"use client";

import React, { useState } from "react";
import Image from "next/image";
import rpcsData from "../../../public/data/endpoints.json";
import Template from "../../template";
import RpcCard from "@/app/components/infrastructure/RpcCard";

interface Rpc {
  icon: string;
  title: string;
  endpoints: Array<string>;
}

const rpcs = () => {
  const initialRpcs: Rpc[] = rpcsData;

  const [rpcs, setRpcs] = useState<Rpc[]>(initialRpcs);

  return (
    <div className="z-10 flex flex-col w-full items-center">
      {/* <div className="absolute z-[-1] top-[800px] right-0">
        <img src="/bg-waves.png" alt="" loading="lazy" />
      </div> */}
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/rpcBg.jpg"
            // layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            width={1920}
            height={960}
            quality={100}
            alt=""
          />
        </div>
        <div className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-2 w-2/3 lg:w-1/2">
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
              <h2 className="text-red">Public Endpoints</h2>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4 gap-2 sm:gap-2">
            {rpcs.map((rpc, i) => {
              return (
                <RpcCard
                  icon={rpc.icon}
                  title={rpc.title}
                  endpoints={rpc.endpoints}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default rpcs;
