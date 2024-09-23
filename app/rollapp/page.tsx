import React from "react";
import Image from "next/image";
import { SecondaryButton } from "../components/Button";

const page = () => {
  return (
    <div className="flex flex-col w-full h-[960px] items-center justify-center">
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/rollAppBann.jpg"
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
          <div className="flex flex-col gap-2 lg:w-1/2">
            <h1>GATA HUB's RollApp</h1>
            <p>
              GATA HUB redefines yield farming and sustainable value creation
              for the Dymension community and beyond by building a dynamic yield
              hub in form of a RollApp. A robust suite of dApps empowers users
              and projects alike to create passive income streams via staking,
              pooling and perpetuals for FTs and NFTs. This dynamic yield hub
              provides investors, creators and NFT enthusiasts with
              opportunities to create added value for themselves, their
              stakeholders and peers.
            </p>
            <SecondaryButton href="https://docs.gatahub.zone/welcome-to-gitbook/gatahub/rollapp">
              Learn More
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
