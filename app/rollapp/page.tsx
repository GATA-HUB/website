import React from "react";
import Image from "next/image";
import { SecondaryButton } from "../components/Button";

const page = () => {
  return (
    <div className="z-10 lg:h-[90vh] relative flex flex-col w-full items-center lg:justify-center">
      <div className="z-[-1] absolute hidden lg:flex right-0">
        <Image
          alt=""
          priority={true}
          width={1888}
          height={522}
          src="/rollAppBann.jpg"
        />
      </div>
      <div className="z-[-1] relative flex lg:hidden">
        <Image
          alt=""
          priority={true}
          width={1888}
          height={522}
          src="/rollAppBannMob.jpg"
        />
      </div>
      <div className="w-full px-4">
        <div className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8 lg:w-1/2 items-center lg:items-start">
          <div className="flex flex-col">
            <h1>GATA HUB's RollApp</h1>
          </div>
          <div className="flex flex-col items-center sm:w-2/3 text-center lg:text-left">
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
          </div>
          <SecondaryButton href="https://docs.gatahub.zone/welcome-to-gitbook/gatahub/rollapp">
            Learn More
          </SecondaryButton>
        </div>
      </div>

      {/* <div className="w-full mt-[-48px] sm:mt-[-80px] lg:mt-[-104px] xl:mt-[-128px] 2xl:mt-[-256px] max-w-[1920px] flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        <section className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[24px] items-center max-w-[1024px] text-center">
            <Image
              alt=""
              width={222}
              height={32}
              src="/title-decor.svg"
              loading="lazy"
            />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
              <h2 className="text-red">RollApp</h2>
              <h2>from GATA HUB</h2>
            </div>
            <div className="w-[1280px] h-[640px] bg-dgray rounded-[16px]">
              <Image
                alt=""
                width={1280}
                height={640}
                src="/rollAppBann.jpg"
                loading="lazy"
              />
            </div>
            
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default page;
