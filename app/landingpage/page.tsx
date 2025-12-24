"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ValidatorCard from "../../features/infrastructure/components/ValidatorCard";
import ValData from "../../features/landing-page/data/validators_home.json";
import teamData from "../../features/landing-page/data/team.json";
import ValLogosAnim from "../../features/landing-page/components/ValLogosAnim";
import { fetchValDelegation } from "@/api/fetchValDelegation";
import { fetchTokenPriceV2 } from "@/api/fetchTokenPriceV2";
import LargeTextLoader from "../../features/common/components/LargeTextLoader";
import MemberCard from "../../features/landing-page/components/MemberCard";
import HeroCatBgAnimation from "../../features/landing-page/components/HeroCatBgAnimation";
import {
  Discord,
  Gitbook,
  Github,
  LinkTree,
  Medium,
  Roadmap,
  Twitter,
} from "../../features/common/components/SocialMediaButtons";
import { Validator, Team } from "../../types";
import GridDistortion from "@/features/landing-page/components/GridDistortion";
import Aurora from "@/features/ygata/components/Aurora";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SecondaryButton from "@/features/common/components/Buttons/SecondaryButton";

const LandingPage = () => {
  const lottieStackedRef = useRef<any>(null);
  const lottieValidatorRef = useRef<any>(null);
  const lottieEpochRef = useRef<any>(null);
  const lottieAtomRef = useRef<any>(null);
  const initialVals: Validator[] = ValData;
  const initialTeam: Team[] = teamData;

  const [delegation, setDelegation] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [activeValidators, setActiveValidators] = useState(20);

  const fetchPrices = async (symbol: string) => {
    const updatedTokens = await fetchTokenPriceV2(symbol);
    return updatedTokens || 0;
  };

  const fetchDelegation = async (
    addr: string,
    network: string,
    tokens: number
  ) => {
    if (addr) {
      const updateDelegation = await fetchValDelegation(network, addr);
      return updateDelegation || tokens;
    }
    return tokens;
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const results = await Promise.all(
        initialVals.map(async (val) => {
          const tokenPrice = await fetchPrices(val.symbol);
          const tokenDelegation = await fetchDelegation(
            val.addr,
            val.network,
            val.tokens
          );

          return tokenPrice * tokenDelegation * 2;
        })
      );

      const totalSum = results.reduce((acc, curr) => acc + curr, 0);
      const formattedPrice = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(totalSum);

      // Log all results
      setDelegation(formattedPrice);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   let count = 0;
  //   initialVals.map((val) => {
  //     if (val.active) {
  //       count++;
  //     }
  //   });

  //   setActiveValidators(count);
  // }, []);

  return (
    <div className="z-10 flex flex-col w-full items-center overflow-x-hidden">
      {/* Header */}
      <div className="relative flex w-full px-4 justify-end items-center h-[80vh]">
        <div className="w-full h-full flex justify-end items-center">
          <div className="w-full h-full flex justify-center xl:justify-end">
            <div className="w-[800px] xsm:h-[60vh] md:h-[800px] relative h-full flex flex-col justify-center items-center">
              <div className="absolute w-[3180px] aspect-[16/9] flex items-center justify-center z-0 pointer-events-auto">
                <GridDistortion
                  imageSrc="/images/headers/headercatbg.png"
                  grid={30}
                  mouse={0.1}
                  strength={0.15}
                  relaxation={0.8}
                  className="custom-class"
                />
                {/* <Image
                  width={3180}
                  height={1777}
                  alt=""
                  src="/images/headers/headercatbg.png"
                  loading="lazy"
                /> */}
              </div>
              <HeroCatBgAnimation />
              <div className="z-10 h-full absolute flex items-center md:items-end justify-center px-16 sm:px-32 pointer-events-none">
                <div className="relative flex w-fit h-fit sm:mb-[-40px]">
                  <Image
                    src="/images/headers/gataCat.png"
                    alt="GATA main"
                    width={512}
                    height={664}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full xsm:mt-[-128px] sm:mt-[-80px] lg:mt-[-104px] xl:mt-[-128px] 2xl:mt-[-400px] flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        {/* Hero Section */}
        <section className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8">
          {/* Title text section */}
          <div className="z-10 flex flex-col">
            {/* Heading 01 */}
            <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12 overflow-hidden h-16 lg:h-20 xl:h-24 2xl:h-[72px]">
              <h1 className="h-fit">GATA</h1>
              <div className="hidden md:flex flex-col animate-text-slide h-fit w-fit">
                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-purple">NFT</h1>
                  <h1>DAO</h1>
                </div>

                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-yellow">Yield</h1>
                  <h1>DAO</h1>
                </div>

                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-red">Public</h1>
                  <h1>Infra</h1>
                </div>

                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-green">Reward</h1>
                  <h1></h1>
                </div>

                <div
                  className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12"
                  aria-hidden="true"
                >
                  <h1 className="text-purple">NFT</h1>
                  <h1>DAO</h1>
                </div>
              </div>
            </div>

            {/* mobile heading */}
            <div className="flex md:hidden overflow-hidden h-12">
              <div className="flex flex-col animate-text-slide h-fit w-fit">
                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-purple">NFT</h1>
                  <h1>DAO</h1>
                </div>

                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-yellow">Yield</h1>
                  <h1>DAO</h1>
                </div>

                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-red">Public</h1>
                  <h1>Infra</h1>
                </div>

                <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12">
                  <h1 className="text-green">Reward</h1>
                  <h1></h1>
                </div>

                <div
                  className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12"
                  aria-hidden="true"
                >
                  <h1 className="text-purple">NFT</h1>
                  <h1>DAO</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-8 lg:gap-12 flex-wrap">
            <Twitter />
            <Discord />
            <Medium />
            <Gitbook />
            <LinkTree />
            <Github />
            <Roadmap />
          </div>

          {/* <SecondaryButton disabled={true}>yGATA Token Stream</SecondaryButton> */}
        </section>

        {/* Gata Breif */}
        <section className="z-10 mx-8 lg:mx-16 3xl:mx-40 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div
            onMouseEnter={() => lottieAtomRef.current?.play()}
            onMouseLeave={() => lottieAtomRef.current?.stop()}
            className="relative w-full h-full flex flex-col gap-[8px] p-4 xl:p-6 rounded-[8px] border-[1px] border-white border-opacity-10 bg-black overflow-hidden"
          >
            <div className="z-10 w-12 h-12 flex justify-center items-center">
              <DotLottieReact
                src="/icons/home/atom.lottie"
                autoplay={false}
                loop={false}
                width={48}
                height={48}
                dotLottieRefCallback={(instance) => {
                  lottieAtomRef.current = instance;
                }}
              />
            </div>
            <div className="z-[1] flex gap-2 flex-wrap items-center">
              <h2 className="text-[20px] xl:text-[24px] font-bold text-white">
                301K
              </h2>
              <h5 className="text-white/50">USD</h5>
            </div>
            <p className="z-[1] text-white">Rewards Distributed</p>

            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
              <Aurora
                colorStops={["#7B5AFF", "#FF4874", "#DA48FF"]}
                blend={5}
                amplitude={1}
                speed={0.5}
              />
            </div>
            {/* <Image
              fill
              objectFit="cover"
              objectPosition="center"
              src="/images/bgs/ygata/gradientBgSmall.jpg"
              quality={100}
              alt=""
            /> */}
          </div>

          <div
            onMouseEnter={() => lottieEpochRef.current?.play()}
            onMouseLeave={() => lottieEpochRef.current?.stop()}
            className="w-full h-full flex flex-col gap-[8px] p-4 xl:p-6 rounded-[8px] border-[1px] border-white border-opacity-10 bg-black/10 backdrop-blur-[4px]"
          >
            <div className="w-12 h-12 flex justify-center items-center">
              <DotLottieReact
                src="/icons/home/epoch.lottie"
                autoplay={false}
                loop={false}
                width={48}
                height={48}
                dotLottieRefCallback={(instance) => {
                  lottieEpochRef.current = instance;
                }}
              />
            </div>
            <h2 className=" text-[20px] xl:text-[24px] font-bold">40</h2>
            <p>Reward Months</p>
          </div>

          {/* <div className="w-full h-full flex flex-col gap-[16px] p-4 xl:p-6 sm:col-span-4 lg:col-span-1 xl:col-span-3 rounded-[16px] border-[1px] border-white border-opacity-10 bg-black">
            <div className="w-[1 h--10sm:w012msm:h212mflex2justify-center items-center">
              <Image
                width={48}
                height={48}
                alt="icons"
                src="/images/common/supply.svg"
              />
            </div>
            <h2 className="text-[40px] xl:text-[64px] font-bold">1727</h2>
            <p>GATA Circulating Supply</p>
          </div> */}

          <div
            onMouseEnter={() => lottieValidatorRef.current?.play()}
            onMouseLeave={() => lottieValidatorRef.current?.stop()}
            className="w-full h-full flex flex-col gap-[8px] p-4 xl:p-6 rounded-[8px] border-[1px] border-white border-opacity-10 bg-black/10 backdrop-blur-[4px]"
          >
            <div className="w-12 h-12 flex justify-center items-center">
              <DotLottieReact
                src="/icons/home/validator.lottie"
                autoplay={false}
                loop={false}
                width={48}
                height={48}
                dotLottieRefCallback={(instance) => {
                  lottieValidatorRef.current = instance;
                }}
              />
            </div>
            <h2 className="text-[20px] xl:text-[24px] font-bold">
              {activeValidators}
            </h2>
            <p>Network Supported</p>
          </div>

          {/* <div className="w-full h-full flex flex-col gap-[16px] p-4 xl:p-6 sm:col-span-3 lg:col-span-1 xl:col-span-2 rounded-[16px] border-[1px] border-white border-opacity-10 bg-black">
            <div className="w-[1 h--10sm:w012msm:h212mflex2justify-center items-center">
              <Image
                width={48}
                height={48}
                alt="icons"
                src="/images/common/relay.svg"
              />
            </div>
            <h2 className="text-[40px] xl:text-[64px] font-bold">571k+</h2>
            <p>IBC relayer transactions</p>
          </div> */}

          <div
            onMouseEnter={() => lottieStackedRef.current?.play()}
            onMouseLeave={() => lottieStackedRef.current?.stop()}
            className="w-full h-full flex flex-col gap-[8px] p-4 xl:p-6 rounded-[8px] border-[1px] border-white border-opacity-10 bg-black/10 backdrop-blur-[4px]"
          >
            <div className="w-12 h-12 flex justify-center items-center">
              <DotLottieReact
                src="/icons/home/stacked.lottie"
                autoplay={false}
                loop={false}
                width={48}
                height={48}
                dotLottieRefCallback={(instance) => {
                  lottieStackedRef.current = instance;
                }}
              />
            </div>
            <div className="flex gap-2 items-center flex-wrap">
              {isLoading ? (
                <LargeTextLoader />
              ) : (
                <h2 className="text-[20px] xl:text-[24px] font-bold">
                  {delegation}
                </h2>
              )}
              <h5 className="text-white/50">USD</h5>
            </div>
            <p>Assets Staked</p>
          </div>
        </section>

        {/* validator section */}
        <section className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[16px] items-center max-w-[1024px] text-center">
            <Image
              width={222}
              height={32}
              alt="title-decor"
              src="/images/common/title-decor.svg"
            />
            <div className="flex gap-8">
              {/* <h2>GATA HUB</h2> */}
              <h2 className="text-white font-bold font-space">Validators</h2>
            </div>
            {/* <p>
              Trust us to safeguard your assets and deliver excellence in
              staking
            </p> */}
          </div>

          {/* validators */}
          <div className="grid w-full grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4 gap-4">
            {initialVals.map((val, i) => {
              let heartBeat = 4;
              const randomDecimal = Math.random();
              const randomNumber = randomDecimal * i + 4;
              heartBeat = randomNumber;
              if (i < 4) {
                return (
                  <ValidatorCard
                    key={i}
                    icon={val.icon}
                    network={val.network}
                    title={val.title}
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
                );
              }
              return;
            })}
          </div>
          <Link href={"/infrastructure/validators"}>
            <span>
              <SecondaryButton text="View all validators"></SecondaryButton>
            </span>
          </Link>
        </section>

        {/* Partners & Colloborators */}
        <section className="ml-8 lg:ml-16 3xl:ml-40 flex flex-col md:flex-row justify-between items-center gap-[64px]">
          <div className="flex flex-col gap-[16px] md:w-[512px]">
            <div className="flex flex-col">
              <h2 className="text-gray">
                Partners &{" "}
                <span className="text-white font-space font-bold">
                  Collaborators
                </span>
              </h2>
            </div>
            <p className="text-gray">
              Over the past two years, GATA HUB has forged meaningful
              partnerships and collaborations with many projects. Together,
              we're driving innovation, fostering growth, and creating lasting
              impact in the blockchain ecosystem.
            </p>
          </div>

          {/* Val Logo Animations */}
          <ValLogosAnim />
        </section>

        {/* Team section */}
        <section className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[16px] items-center">
            <Image
              width={222}
              height={32}
              loading="lazy"
              alt=""
              src="/images/common/title-decor.svg"
            />
            <div className="flex gap-[16px] items-center">
              <h2 className="text-white font-bold font-space">Team</h2>
            </div>
          </div>

          <div className="flex w-full relative overflow-hidden">
            <div className="flex w-full flex-wrap gap-x-0 gap-y-16 sm:gap-x-8 lg:gap-x-16 lg:gap-y-16 justify-center">
              {initialTeam.map((member, i) => {
                return (
                  <MemberCard
                    key={i}
                    image={member.image}
                    name={member.name}
                    title={member.title}
                    desc={member.desc}
                    twitter={member.twitter}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
