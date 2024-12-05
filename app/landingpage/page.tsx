"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "../components/Button";
import ValidatorCard from "../components/infrastructure/ValidatorCard";
import ValData from "../../public/data/validators.json";
import teamData from "../../public/data/team.json";
import dynamic from "next/dynamic";
import ValLogosAnim from "../components/landing-page/ValLogosAnim";
import { motion } from "framer-motion";

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

interface Team {
  image: string;
  name: string;
  title: string;
  desc: string;
  twitter: string;
}

const LandingPage = () => {
  const initialVals: Validator[] = ValData;
  const intialTeam: Team[] = teamData;

  const MemberCard = dynamic(
    () => import("../components/landing-page/MemberCard"),
    {
      ssr: false,
    }
  );

  return (
    <div className="z-10 flex flex-col w-full items-center overflow-x-hidden">
      {/* Header */}
      <div className="z-[-1] relative flex w-full px-4 justify-end items-center h-[80vh]">
        <div className="z-[-1] w-full h-full flex justify-end items-center">
          <div className="w-full h-full flex justify-center xl:justify-end">
            <div className="w-[800px] xsm:h-[60vh] md:h-[800px] relative h-full flex flex-col justify-center items-center">
              <div className="absolute w-[3180px] flex items-center justify-center">
                <img alt="" src="/headercatbg.png" loading="lazy" />
              </div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-[70%] h-[70%] border-4 border-red rounded-full"></div>
                <div className="absolute w-[60%] h-[60%] border-2 border-red rounded-full"></div>
                <div className="absolute w-[80%] h-[80%] border-[1px] border-red rounded-full"></div>
                <div className="absolute w-[90%] flex justify-between items-center overflow-hidden">
                  <div className="absolute w-1/2 h-[1px] bg-red"></div>
                  <div className="absolute w-1/2 h-[4px] bg-red right-0"></div>
                  <motion.div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      background: "#FF4874",
                      borderRadius: "4px",
                    }}
                    animate={{
                      x: 380 - 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 4.4,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <motion.div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      right: 0,
                      background: "#FF4874",
                      borderRadius: "4px",
                    }}
                    animate={{
                      x: -380 + 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 3,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <div className="z-10 w-8 h-8 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-dgray border-2 border-red">
                    <img
                      src="/validator_chains/omni.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="z-10 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full bg-dgray border-2 border-red">
                    <img
                      src="/validator_chains/stars.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="absolute w-[110%] flex justify-between items-center rotate-[30deg] overflow-hidden">
                  <div className="absolute w-1/2 h-[4px] bg-red"></div>
                  <div className="absolute w-1/2 h-[2px] bg-red right-0"></div>
                  <motion.div
                    style={{
                      width: "12px",
                      height: "12px",
                      position: "absolute",
                      background: "#FF4874",
                      borderRadius: "6px",
                    }}
                    animate={{
                      x: 380 - 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 1,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <motion.div
                    style={{
                      width: "12px",
                      height: "12px",
                      position: "absolute",
                      right: 0,
                      background: "#FF4874",
                      borderRadius: "6px",
                    }}
                    animate={{
                      x: -380 + 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 4,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <div className="z-10 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
                    <img
                      src="/validator_chains/cosmos.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
                    <img
                      src="/validator_chains/osmosis.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="absolute h-[80%] flex flex-col justify-between items-center rotate-[-30deg] overflow-hidden">
                  <div className="absolute h-1/2 w-[2px] bg-red"></div>
                  <div className="absolute h-1/2 w-[4px] bg-red bottom-0"></div>
                  <motion.div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      background: "#FF4874",
                      borderRadius: "4px",
                    }}
                    animate={{
                      y: 380 - 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 4,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <motion.div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      bottom: 0,
                      background: "#FF4874",
                      borderRadius: "4px",
                    }}
                    animate={{
                      y: -380 + 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 2,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <div className="z-10 w-8 h-8 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[30deg] p-2">
                    <img
                      src="/validator_chains/akt.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[30deg]">
                    <img
                      src="/validator_chains/archway.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="absolute h-[90%] flex flex-col justify-between items-center overflow-hidden">
                  <div className="absolute h-1/2 w-[4px] bg-red"></div>
                  <div className="absolute h-1/2 w-[1px] bg-red bottom-0"></div>
                  <motion.div
                    style={{
                      width: "16px",
                      height: "16px",
                      position: "absolute",
                      background: "#FF4874",
                      borderRadius: "8px",
                    }}
                    animate={{
                      y: 380 - 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 4.4,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <motion.div
                    style={{
                      width: "12px",
                      height: "12px",
                      position: "absolute",
                      bottom: 0,
                      background: "#FF4874",
                      borderRadius: "6px",
                    }}
                    animate={{
                      y: -380 + 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 3,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <div className="z-10 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full bg-dgray border-2 border-red">
                    <img
                      src="/validator_chains/evmos.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red">
                    <img
                      src="/validator_chains/junologo.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="absolute h-[80%] flex flex-col justify-between items-center rotate-[30deg] overflow-hidden">
                  <div className="absolute h-1/2 w-[2px] bg-red"></div>
                  <div className="absolute h-1/2 w-[3px] bg-red bottom-0"></div>
                  <motion.div
                    style={{
                      width: "10px",
                      height: "10px",
                      position: "absolute",
                      background: "#FF4874",
                      borderRadius: "8px",
                    }}
                    animate={{
                      y: 380 - 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 4.4,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <motion.div
                    style={{
                      width: "10px",
                      height: "10px",
                      position: "absolute",
                      bottom: 0,
                      background: "#FF4874",
                      borderRadius: "8px",
                    }}
                    animate={{
                      y: -380 + 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 3,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <div className="z-10 w-10 h-10 sm:w-14 sm:h-14 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
                    <img
                      src="/validator_chains/stride.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="z-10 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-30deg]">
                    <img
                      src="/validator_chains/sei.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="absolute w-[105%] flex justify-between items-center rotate-[150deg] overflow-hidden">
                  <div className="absolute w-1/2 h-[1px] bg-red"></div>
                  <div className="absolute w-1/2 h-[4px] bg-red right-0"></div>
                  <motion.div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      background: "#FF4874",
                      borderRadius: "4px",
                    }}
                    animate={{
                      x: 380 - 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 4.4,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <motion.div
                    style={{
                      width: "8px",
                      height: "8px",
                      position: "absolute",
                      right: 0,
                      background: "#FF4874",
                      borderRadius: "4px",
                    }}
                    animate={{
                      x: -380 + 8,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatDelay: 3,
                      repeatType: "mirror",
                    }}
                  ></motion.div>
                  <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-150deg]">
                    <img
                      src="/validator_chains/teri.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="z-10 w-16 h-16 overflow-hidden rounded-full bg-dgray border-2 border-red rotate-[-150deg]">
                    <img
                      src="/validator_chains/passage.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="z-10 h-full absolute flex items-center md:items-end justify-center px-16 sm:px-32 ">
                <div className="flex w-fit h-fit sm:mb-[-40px]">
                  <Image
                    src="/gataCat.png"
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
          <div className="flex flex-col">
            {/* Heading 01 */}
            <div className="flex gap-4 md:gap-6 lg:gap-8 2xl:gap-12 overflow-hidden h-16 lg:h-20 xl:h-24 2xl:h-[116px]">
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
          <div className="flex gap-8 lg:gap-12">
            <a
              href="https://twitter.com/GataHubZone"
              target="_blank"
              className="group flex justify-center items-center w-6 h-6 lg:w-[32px] lg:h-[32px] cursor-pointer"
            >
              <svg
                className="transition-all duration-300 ease-in-out fill-current text-white group-hover:text-purple"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.26765 4L13.1475 17.2102L3.20526 27.9507H5.44285L14.1472 18.5473L21.1801 27.9507H28.7947L18.359 13.9974L27.6132 4H25.3756L17.3593 12.6604L10.8823 4H3.26765ZM6.55819 5.64821H10.0564L25.5037 26.3023H22.0055L6.55819 5.64821Z" />
              </svg>
            </a>

            <a
              href="https://discord.gg/4MCrtaCetp"
              target="_blank"
              className="group flex justify-center items-center w-6 h-6 lg:w-[32px] lg:h-[32px] cursor-pointer"
            >
              <svg
                className="transition-all duration-300 ease-in-out fill-current text-white group-hover:text-purple"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M27.5652 7.05059C24.7962 4.88383 20.4158 4.51654 20.2283 4.50333C19.9375 4.47955 19.6603 4.63809 19.5408 4.89968C19.5299 4.91554 19.4348 5.12957 19.3288 5.46251C21.1603 5.76374 23.4103 6.36885 25.4457 7.59756C25.7717 7.7931 25.8723 8.21059 25.6712 8.52768C25.538 8.73643 25.3125 8.85005 25.0788 8.85005C24.9538 8.85005 24.8261 8.8157 24.712 8.747C21.212 6.63573 16.8424 6.53004 16 6.53004C15.1576 6.53004 10.7853 6.63573 7.28804 8.747C6.96196 8.94518 6.53261 8.84741 6.33152 8.53032C6.12772 8.21059 6.22826 7.79574 6.55435 7.59756C8.58967 6.37149 10.8397 5.76374 12.6712 5.46515C12.5652 5.12957 12.4701 4.91818 12.462 4.89968C12.3397 4.63809 12.0652 4.47426 11.7717 4.50333C11.5842 4.51654 7.2038 4.88383 4.39674 7.07965C2.93207 8.3982 0 16.1034 0 22.7648C0 22.8838 0.0326087 22.9974 0.0923916 23.1004C2.11413 26.5567 7.63315 27.4604 8.8913 27.5C8.89674 27.5 8.90489 27.5 8.91304 27.5C9.13587 27.5 9.34511 27.3969 9.47554 27.2225L10.7473 25.5209C7.31522 24.6594 5.5625 23.1956 5.46196 23.1084C5.17391 22.8626 5.14674 22.4346 5.40217 22.1545C5.65489 21.8744 6.09511 21.8479 6.38315 22.0937C6.42391 22.1307 9.65217 24.7942 16 24.7942C22.3587 24.7942 25.587 22.1201 25.6196 22.0937C25.9076 21.8506 26.3451 21.8744 26.6005 22.1571C26.8533 22.4372 26.8261 22.8626 26.538 23.1084C26.4375 23.1956 24.6848 24.6594 21.2527 25.5209L22.5245 27.2225C22.6549 27.3969 22.8641 27.5 23.087 27.5C23.0951 27.5 23.1033 27.5 23.1087 27.5C24.3668 27.4604 29.8859 26.5567 31.9076 23.1004C31.9674 22.9974 32 22.8838 32 22.7648C32 16.1034 29.0679 8.3982 27.5652 7.05059ZM11.4783 20.059C10.1332 20.059 9.04348 18.8488 9.04348 17.3532C9.04348 15.8577 10.1332 14.6474 11.4783 14.6474C12.8234 14.6474 13.913 15.8577 13.913 17.3532C13.913 18.8488 12.8234 20.059 11.4783 20.059ZM20.5217 20.059C19.1766 20.059 18.087 18.8488 18.087 17.3532C18.087 15.8577 19.1766 14.6474 20.5217 14.6474C21.8668 14.6474 22.9565 15.8577 22.9565 17.3532C22.9565 18.8488 21.8668 20.059 20.5217 20.059Z" />
              </svg>
            </a>

            <a
              href="https://medium.com/gatadao"
              target="_blank"
              className="group flex justify-center items-center w-6 h-6 lg:w-[32px] lg:h-[32px] cursor-pointer"
            >
              <svg
                className="transition-all duration-300 ease-in-out fill-current text-white group-hover:text-purple"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.04345 7C6.645 7 4.34473 7.94821 2.64876 9.63603C0.95279 11.3239 0 13.613 0 16C0 18.387 0.95279 20.6761 2.64876 22.364C4.34473 24.0518 6.645 25 9.04345 25C11.442 25 13.7422 24.0518 15.4382 22.364C17.1342 20.6761 18.0869 18.387 18.0869 16C18.0869 13.613 17.1342 11.3239 15.4382 9.63603C13.7422 7.94821 11.442 7 9.04345 7Z" />
                <path d="M23.3044 7.69232C20.807 7.69232 18.7826 11.4121 18.7826 16C18.7826 16.8605 18.8536 17.6899 18.9857 18.4701C19.1617 19.5107 19.4463 20.4633 19.815 21.2844C19.9993 21.6949 20.2045 22.0722 20.4278 22.4108C20.8745 23.0878 21.3934 23.6105 21.9597 23.9346C22.3847 24.1768 22.8362 24.3077 23.3044 24.3077C23.7725 24.3077 24.224 24.1768 24.649 23.9346C25.2153 23.6105 25.7343 23.0878 26.1809 22.4108C26.4042 22.0722 26.6094 21.6949 26.7938 21.2844C27.1624 20.464 27.447 19.5107 27.623 18.4701C27.7552 17.6899 27.8261 16.8605 27.8261 16C27.8261 11.4121 25.8017 7.69232 23.3044 7.69232Z" />
                <path d="M30.2609 8.3846C30.0807 8.3846 29.9068 8.50439 29.744 8.72733C29.6348 8.87546 29.5305 9.06932 29.4324 9.30402C29.383 9.42102 29.335 9.54837 29.2891 9.68547C29.1965 9.95894 29.1103 10.2711 29.0317 10.6152C28.8744 11.3041 28.7471 12.1252 28.6588 13.0363C28.615 13.4918 28.5809 13.9701 28.5572 14.4659C28.5336 14.9608 28.5218 15.4745 28.5218 16C28.5218 16.5255 28.5336 17.0392 28.5572 17.5348C28.5802 18.0305 28.6143 18.5089 28.6588 18.9645C28.7471 19.8755 28.8744 20.6959 29.0317 21.3855C29.0903 21.6426 29.1532 21.8813 29.2197 22.0994C29.2424 22.1737 29.2655 22.2457 29.2891 22.3152C29.335 22.4523 29.383 22.5797 29.4324 22.6967C29.5311 22.9314 29.6355 23.1252 29.744 23.2734C29.9068 23.4956 30.0807 23.6154 30.2609 23.6154C31.2216 23.6154 32 20.2057 32 16C32 11.7943 31.2216 8.3846 30.2609 8.3846Z" />
              </svg>
            </a>

            <a
              href="https://gatadao.gitbook.io/welcome-to-gitbook/"
              target="_blank"
              className="group flex justify-center items-center w-6 h-6 lg:w-[32px] lg:h-[32px] cursor-pointer"
            >
              <svg
                className="transition-all duration-300 ease-in-out fill-current text-white group-hover:text-purple"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.4027 23.6933C14.5258 23.6935 14.6476 23.7179 14.7613 23.7652C14.8749 23.8124 14.9782 23.8816 15.0651 23.9688C15.152 24.056 15.2209 24.1594 15.2678 24.2732C15.3148 24.387 15.3388 24.5089 15.3387 24.632C15.3385 24.7551 15.3141 24.8769 15.2668 24.9906C15.2195 25.1042 15.1504 25.2075 15.0632 25.2944C14.976 25.3813 14.8726 25.4502 14.7588 25.4971C14.645 25.5441 14.5231 25.5682 14.4 25.568C14.1514 25.5676 13.9131 25.4685 13.7376 25.2925C13.5621 25.1165 13.4637 24.8779 13.464 24.6293C13.4644 24.3807 13.5635 24.1424 13.7395 23.9669C13.9155 23.7914 14.1541 23.693 14.4027 23.6933ZM29.1013 17.8973C28.9782 17.8972 28.8564 17.8729 28.7427 17.8257C28.629 17.7785 28.5257 17.7094 28.4387 17.6223C28.3518 17.5352 28.2828 17.4318 28.2358 17.3181C28.1887 17.2043 28.1646 17.0824 28.1647 16.9593C28.1648 16.8362 28.1891 16.7144 28.2363 16.6007C28.2835 16.487 28.3526 16.3837 28.4397 16.2967C28.5268 16.2097 28.6302 16.1408 28.7439 16.0937C28.8577 16.0467 28.9796 16.0226 29.1027 16.0227C29.3513 16.0228 29.5896 16.1218 29.7653 16.2977C29.9409 16.4736 30.0395 16.7121 30.0393 16.9607C30.0392 17.2092 29.9402 17.4476 29.7643 17.6233C29.5884 17.7989 29.3499 17.8975 29.1013 17.8973ZM29.1013 14.0626C28.3328 14.0634 27.5959 14.369 27.0525 14.9124C26.509 15.4559 26.2034 16.1928 26.2027 16.9613C26.2027 17.272 26.2547 17.5813 26.356 17.8827L16.7813 22.98C16.5159 22.5945 16.1606 22.2793 15.7462 22.0617C15.3318 21.8441 14.8707 21.7304 14.4027 21.7306C13.2973 21.7306 12.2907 22.364 11.8027 23.352L3.20134 18.816C2.29201 18.3387 1.61201 16.8427 1.68401 15.48C1.72134 14.7693 1.96667 14.2173 2.34134 14.004C2.57867 13.8707 2.86401 13.8813 3.16801 14.04L3.22401 14.0707C5.50401 15.2707 12.9627 19.2 13.2773 19.3453C13.7613 19.5707 14.0307 19.6613 14.8573 19.2693L30.276 11.2506C30.5027 11.1653 30.7667 10.948 30.7667 10.6187C30.7667 10.1627 30.2947 9.98265 30.2933 9.98265C29.416 9.56265 28.068 8.93198 26.7533 8.31598C23.9427 6.99998 20.7573 5.50932 19.3587 4.77598C18.1507 4.14398 17.1787 4.67732 17.0053 4.78398L16.6693 4.95065C10.3733 8.06398 1.94667 12.2373 1.46667 12.5293C0.609339 13.052 0.0773393 14.0933 0.00800601 15.3853C-0.0986606 17.4347 0.945339 19.572 2.44001 20.3547L11.536 25.0453C11.6362 25.7343 11.981 26.3643 12.5073 26.8202C13.0336 27.276 13.7064 27.5272 14.4027 27.528C15.1631 27.5267 15.8927 27.227 16.4345 26.6935C16.9763 26.1599 17.2871 25.435 17.3 24.6747L27.3187 19.244C27.8253 19.6413 28.456 19.8587 29.1013 19.8587C29.8699 19.8579 30.6068 19.5523 31.1502 19.0089C31.6937 18.4654 31.9993 17.7285 32 16.96C31.9993 16.1914 31.6937 15.4545 31.1502 14.9111C30.6068 14.3676 29.8699 14.062 29.1013 14.0613" />
              </svg>
            </a>

            <a
              href="https://linktr.ee/gatahub"
              target="_blank"
              className="group flex justify-center items-center w-6 h-6 lg:w-[32px] lg:h-[32px] cursor-pointer"
            >
              <svg
                className="transition-all duration-300 ease-in-out fill-current text-white group-hover:text-purple"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_53)">
                  <path d="M13.6997 21.5489H18.3281V32H13.6997V21.5489ZM3 10.8367H10.8756L5.27682 5.49919L8.37481 2.31411L13.7123 7.80087V0H18.3405V7.80087L23.6779 2.32661L26.7735 5.49919L21.1773 10.8243L29.0504 10.8242V15.2285H21.1323L26.7661 20.7029L23.6779 23.8134L16.0264 16.1244L8.37481 23.8134L5.27682 20.7154L10.9128 15.241H3V10.8367Z" />
                </g>
                <defs>
                  <clipPath id="clip0_4_53">
                    <rect
                      width="26.0504"
                      height="32"
                      transform="translate(3)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href="https://github.com/GATA-HUB/"
              target="_blank"
              className="group flex justify-center items-center w-6 h-6 lg:w-[32px] lg:h-[32px] cursor-pointer"
            >
              <svg
                className="transition-all duration-300 ease-in-out fill-current text-white group-hover:text-purple"
                height="32"
                viewBox="0 0 24 24"
                version="1.1"
                width="32"
                fill="none"
              >
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
            </a>
          </div>

          <SecondaryButton disabled={true}>yGATA Token Stream</SecondaryButton>
        </section>

        {/* Gata Breif */}
        <section className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 grid grid-cols-2 sm:grid-cols-12 lg:grid-cols-4 xl:grid-cols-8 gap-2 items-center">
          <div className="w-full h-full flex flex-col gap-[16px] p-4 xl:p-6 col-span-2 sm:col-span-5 lg:col-span-1 xl:col-span-3 rounded-[16px] border-2 border-white border-opacity-10 bg-dgray">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
              <Image width={64} height={64} alt="icons" src="/atome.svg" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <h2 className="text-green text-[40px] xl:text-[64px] font-bold leading-[40px]">
                162K
              </h2>
              <h3 className="text-green">USD</h3>
            </div>
            <p>Rewards Distributed</p>
          </div>

          <div className="w-full h-full flex flex-col gap-[16px] p-4 xl:p-6 sm:col-span-3 lg:col-span-1 xl:col-span-2 rounded-[16px] border-2 border-white border-opacity-10 bg-dgray">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
              <Image width={64} height={64} alt="icons" src="/epoch.svg" />
            </div>
            <h2 className="text-red text-[40px] xl:text-[64px] font-bold">
              54
            </h2>
            <p>Epoch Distributed</p>
          </div>

          <div className="w-full h-full flex flex-col gap-[16px] p-4 xl:p-6 sm:col-span-4 lg:col-span-1 xl:col-span-3 rounded-[16px] border-2 border-white border-opacity-10 bg-dgray">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
              <Image width={64} height={64} alt="icons" src="/supply.svg" />
            </div>
            <h2 className="text-yellow text-[40px] xl:text-[64px] font-bold">
              1727
            </h2>
            <p>GATA Circulating Supply</p>
          </div>

          <div className="w-full h-full flex flex-col gap-[16px] p-4 xl:p-6 sm:col-span-3 lg:col-span-1 xl:col-span-2 rounded-[16px] border-2 border-white border-opacity-10 bg-dgray">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
              <Image width={64} height={64} alt="icons" src="/validator.svg" />
            </div>
            <h2 className="text-lpurple text-[40px] xl:text-[64px] font-bold">
              11
            </h2>
            <p>Active Validator</p>
          </div>

          <div className="w-full h-full flex flex-col gap-[16px] p-4 xl:p-6 sm:col-span-3 lg:col-span-1 xl:col-span-2 rounded-[16px] border-2 border-white border-opacity-10 bg-dgray">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
              <Image width={64} height={64} alt="icons" src="/relay.svg" />
            </div>
            <h2 className="text-yellow text-[40px] xl:text-[64px] font-bold">
              193k+
            </h2>
            <p>IBC relayer transactions</p>
          </div>

          <div className="w-full h-full flex flex-col col-span-2 sm:col-span-6 lg:col-span-3 xl:col-span-4 gap-[16px] p-4 xl:p-6 rounded-[16px] border-2 border-white border-opacity-10 bg-dgray">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
              <Image width={64} height={64} alt="icons" src="/staked.svg" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <h2 className="text-purple text-[40px] xl:text-[64px] font-bold leading-[40px]">
                4,619,556
              </h2>
              <h3 className="text-purple">USD</h3>
            </div>
            <p>Assets Staked</p>
          </div>
        </section>

        {/* validator section */}
        <section className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[16px] items-center max-w-[1024px] text-center">
            <Image
              width={222}
              height={32}
              alt="title-decor"
              src="/title-decor.svg"
            />
            <div className="flex gap-8">
              {/* <h2>GATA HUB</h2> */}
              <h2 className="text-red">Validators</h2>
            </div>
            {/* <p>
              Trust us to safeguard your assets and deliver excellence in
              staking
            </p> */}
          </div>

          {/* validators */}
          <div className="grid w-full grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4 gap-2">
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
                );
              }
              return;
            })}
          </div>
          <Link href={"/infrastructure/validators"}>
            <span>
              <SecondaryButton>View all validators</SecondaryButton>
            </span>
          </Link>
        </section>

        {/* Partners & Colloborators */}
        <section className="ml-4 sm:ml-8 lg:ml-32 3xl:ml-80 flex flex-col md:flex-row justify-between items-center gap-[64px]">
          <div className="flex flex-col gap-[16px] md:w-[512px]">
            <div className="flex flex-col">
              <h2>Partners &</h2>
              <h2 className="text-lpurple">Collaborators</h2>
            </div>
            <p>
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
        <section className="flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[16px] items-center">
            <Image
              width={222}
              height={32}
              loading="lazy"
              alt=""
              src="/title-decor.svg"
            />
            <div className="flex gap-[16px] items-center">
              {/* <h2>GATA</h2> */}
              <h2 className="text-green">Team</h2>
            </div>
          </div>

          <div className="flex w-full relative overflow-hidden">
            {/* <div className="z-10 absolute left-0 h-full w-[64px] bg-gradient-to-r from-black to-transparent"></div> */}

            <div className="flex w-full flex-wrap gap-16 justify-center">
              {intialTeam.map((member, i) => {
                //   if (i < intialTeam.length - 3) {
                //     return (
                //       <MemberCard
                //         key={i}
                //         image={member.image}
                //         name={member.name}
                //         title={member.title}
                //         desc={member.desc}
                //         twitter={member.twitter}
                //       />
                //     );
                //   }
                // })}
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
              {/* Duplicate for animation */}

              {/* <div aria-hidden="true" className="flex mr-[64px] w-[180px] ">
                <div className="flex">
                  {intialTeam.map((member, i) => {
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
              </div> */}
            </div>
            {/* <div className="absolute right-0 h-full w-[64px] bg-gradient-to-r from-transparent to-black"></div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
