"use client";

import React from "react";
import Image from "next/image";
import endpointsData from "../../../features/infrastructure/data/endpoints.json";
import EndpointsCard from "@/features/infrastructure/components/EndpointsCard";
import { Endpoints } from "@/types";
import GridDistortion from "@/features/landing-page/components/GridDistortion";

const endpoints = () => {
  const initialEndpoints: Endpoints[] = endpointsData;

  return (
    <div className="z-10 flex flex-col w-full items-center">
      {/* <div className="absolute z-[-1] top-[800px] right-0">
        <img src="/bg-waves.png" alt="" loading="lazy" />
      </div> */}
      <div className="relative flex w-full h-[620px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <div className="z-10 absolute bottom-0 right-0 left-0 w-full h-[128px] bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative w-[1920px] h-[960px] aspect-[16/9] flex items-center justify-center z-0 pointer-events-auto">
            <GridDistortion
              imageSrc="/images/headers/rpcBg.jpg"
              grid={15}
              mouse={0.1}
              strength={0.15}
              relaxation={0.8}
              className="custom-class"
            />
          </div>
          {/* <Image
            style={{
              minWidth: "1920px",
            }}
            src="/images/headers/rpcBg.jpg"
            // width={1920}
            // height={960}
            fill
            objectFit="cover"
            objectPosition="center"
            quality={100}
            alt=""
          /> */}
        </div>
        <div className="max-w-[800px] mx-8 lg:mx-16 3xl:ml-40 3xl:mr-0 flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-2 w-2/3 lg:w-full">
            <h1>Decentralized Infrastructure & Services</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64 mt-24">
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
              <h2 className="text-red">Public Endpoints</h2>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4 gap-2 sm:gap-2">
            {initialEndpoints.map((endpoint, i) => {
              return (
                <EndpointsCard
                  icon={endpoint.icon}
                  title={endpoint.title}
                  endpoints={endpoint.endpoints}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default endpoints;
