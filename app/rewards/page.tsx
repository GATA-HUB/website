"use client";

import React, { useEffect, useRef, useState } from "react";
// import YGMonthlyRewardCard from "../components/reward/YGMonthlyRewardCard";
import Image from "next/image";
import gataEpochData from "../../features/reward/data/gatarevenue.json";
import ygEpochData from "../../features/reward/data/ygepoch.json";
import ypEpochData from "../../features/reward/data/ypReward.json";
import { motion } from "framer-motion";
import { SecondaryButton } from "../../features/common/components/Button";
import Tab from "../../features/common/components/Tab";
import yieldCrocsEpoch from "../../features/reward/data/yieldCrocsEpoch.json";
import YieldCrocsReward from "@/features/reward/components/YieldCrocsReward";
import YPEpoch from "@/features/reward/components/YPEpoch";
import YieldGorillaReward from "@/features/reward/components/YieldGorillaReward";
import GataRewards from "@/features/reward/components/GataRewards";
import { GataEpoch, YCEpoch, YGEpoch } from "@/types";

const Treasury = () => {
  const initialGataEpoch: GataEpoch[] = gataEpochData;
  const initialYGEpoch: YGEpoch[] = ygEpochData;
  const initialYPEpoch: YGEpoch[] = ypEpochData;
  const initialYeildCrocsEpoch: YCEpoch[] = yieldCrocsEpoch;

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [expanderHeight, setExpanderHeight] = useState(1080);
  const [expanderCont, setExpanderCont] = useState(true);

  const [ypExpanderHeight, setYpExpanderHeight] = useState(1080);
  const [ypExpanderCont, setYpExpanderCont] = useState(true);

  const [loadMore, setLoadMore] = useState(true);

  const [proccessBar, setProccessBar] = useState(10);

  const [currentTab, setCurrentTab] = useState(0);

  const expander = useRef<HTMLDivElement>(null);
  const expanderWrap = useRef<HTMLDivElement>(null);
  const ygRewards = useRef<HTMLDivElement>(null);

  const ypexpander = useRef<HTMLDivElement>(null);
  const ypexpanderWrap = useRef<HTMLDivElement>(null);
  const ypRewards = useRef<HTMLDivElement>(null);

  const calCurrentSlide = (operation: string) => {
    if (sliderRef.current) {
      const totalWidth = sliderRef.current.scrollWidth;
      const containerWidth = sliderRef.current.clientWidth;
      const maxSlides = 100 / Math.round((totalWidth - containerWidth) / 920);

      let tempProcessBar = 10;
      if (operation === "right") {
        if (proccessBar >= 100) {
          tempProcessBar = 100;
        } else {
          tempProcessBar = proccessBar + maxSlides;
        }
      } else {
        if (proccessBar < 20) {
          tempProcessBar = 10;
        } else {
          tempProcessBar = proccessBar - maxSlides;
        }
      }
      setProccessBar(tempProcessBar);
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 920;
    }
    calCurrentSlide("left");
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 920;
    }

    calCurrentSlide("right");
  };

  useEffect(() => {
    if (ypexpander.current && ypexpanderWrap.current) {
      const height = ypexpander.current.offsetHeight;
      const wrapHeight = ypexpanderWrap.current.offsetHeight;
      if (height < wrapHeight && ypRewards.current) {
        setYpExpanderHeight(height);
        setYpExpanderCont(false);
        setLoadMore(false);
      } else setLoadMore(true);
    }
  }, []);

  const handleYGExpand = () => {
    if (expander.current && expanderWrap.current) {
      const height = expander.current.offsetHeight;
      const wrapHeight = expanderWrap.current.offsetHeight;
      if (height === wrapHeight && ygRewards.current) {
        window.scrollTo({
          top: ygRewards.current.offsetTop,
          behavior: "smooth",
        });
        setTimeout(() => {
          setExpanderCont(true);
          setExpanderHeight(1080);
        }, 300);
      } else {
        setExpanderCont(false);
        setExpanderHeight(height);
      }
    }
  };

  const handleYPExpand = () => {
    if (ypexpander.current && ypexpanderWrap.current) {
      const height = ypexpander.current.offsetHeight;
      const wrapHeight = ypexpanderWrap.current.offsetHeight;
      if (height === wrapHeight && ypRewards.current) {
        window.scrollTo({
          top: ypRewards.current.offsetTop,
          behavior: "smooth",
        });
        setTimeout(() => {
          setYpExpanderCont(true);
          setYpExpanderHeight(1080);
        }, 300);
      } else {
        setYpExpanderCont(false);
        setYpExpanderHeight(height);
      }
    }
  };

  return (
    <div className="z-10 flex flex-col w-full items-center">
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/images/headers/rewardsBg.jpg"
            width={1920}
            height={960}
            quality={100}
            alt=""
          />
        </div>
        <div className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-2 w-2/3 lg:w-1/2">
            <h1>Rewards</h1>
            <p>
              NFT holders get monthly rewards. These rewards come from our
              validators, DeFi, NFTfi, and airdrops.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1920px] flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        <div className="flex flex-col gap-24 w-full">
          <div className="flex w-full items-center justify-center">
            <Tab
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              tabs={["Yield Crocs", "Yield Paws", "Yield Gorilla", "GATA"]}
            />
          </div>

          {/* YP Monthly reward */}
          {currentTab === 0 && (
            <section
              ref={ypRewards}
              className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center"
            >
              <div className="flex flex-col gap-[8px] items-center max-w-[1024px] text-center">
                <Image
                  width={222}
                  height={32}
                  loading="lazy"
                  alt=""
                  src="/images/common/title-decor.svg"
                />
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
                  <h2 className="text-green">YCs Reward</h2>
                  <h2>Distribution</h2>
                </div>
                <p>Epoch record of YC collection</p>
              </div>

              <motion.div
                ref={ypexpanderWrap}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "1080px",
                  overflow: "hidden",
                  width: "100%",
                }}
                animate={{
                  height: ypExpanderHeight,
                }}
              >
                <div ref={ypexpander} className="flex flex-col gap-16">
                  {initialYeildCrocsEpoch.map((epoch, i) => {
                    return (
                      <YieldCrocsReward
                        key={i}
                        title={epoch.title}
                        date={epoch.date}
                        href={epoch.href}
                        rewards={epoch.rewards}
                      />
                    );
                  })}
                </div>
                {ypExpanderCont && (
                  <div className="z-10 absolute bottom-0 w-full h-[128px] bg-gradient-to-t from-black to-transparent"></div>
                )}
              </motion.div>

              {loadMore && (
                <div className="flex w-full justify-center items-center">
                  <div onClick={handleYPExpand}>
                    <SecondaryButton>
                      {ypExpanderCont ? "load more" : "load less"}
                    </SecondaryButton>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* YP Monthly reward */}
          {currentTab === 1 && (
            <section
              ref={ypRewards}
              className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center"
            >
              <div className="flex flex-col gap-[8px] items-center max-w-[1024px] text-center">
                <Image
                  width={222}
                  height={32}
                  loading="lazy"
                  alt=""
                  src="/images/common/title-decor.svg"
                />
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
                  <h2 className="text-green">YPs Reward</h2>
                  <h2>Distribution</h2>
                </div>
                <p>Epoch record of YP collection</p>
              </div>

              <motion.div
                ref={ypexpanderWrap}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "1080px",
                  overflow: "hidden",
                  width: "100%",
                }}
                animate={{
                  height: ypExpanderHeight,
                }}
              >
                <div ref={ypexpander} className="flex flex-col gap-16">
                  {initialYPEpoch.map((epoch, i) => {
                    return (
                      <YPEpoch
                        key={i}
                        title={epoch.title}
                        date={epoch.date}
                        href={epoch.href}
                        rewards={epoch.rewards}
                      />
                    );
                  })}
                </div>
                {ypExpanderCont && (
                  <div className="z-10 absolute bottom-0 w-full h-[128px] bg-gradient-to-t from-black to-transparent"></div>
                )}
              </motion.div>

              {loadMore && (
                <div className="flex w-full justify-center items-center">
                  <div onClick={handleYPExpand}>
                    <SecondaryButton>
                      {ypExpanderCont ? "load more" : "load less"}
                    </SecondaryButton>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* YG rewards */}
          {currentTab === 2 && (
            <section
              ref={ygRewards}
              className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center"
            >
              <div className="flex flex-col gap-[8px] items-center max-w-[1024px] text-center">
                <Image
                  width={222}
                  height={32}
                  loading="lazy"
                  alt=""
                  src="/images/common/title-decor.svg"
                />
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
                  <h2 className="text-green">YGs Reward</h2>
                  <h2>Distribution</h2>
                </div>
                <p>Epoch record of YG collection</p>
              </div>

              <motion.div
                ref={expanderWrap}
                style={{
                  width: "100%",
                  height: "1080px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
                animate={{
                  height: expanderHeight,
                }}
              >
                <div ref={expander} className="flex flex-col gap-16">
                  {initialYGEpoch.map((epoch, i) => {
                    return (
                      <YieldGorillaReward
                        key={i}
                        title={epoch.title}
                        date={epoch.date}
                        href={epoch.href}
                        rewards={epoch.rewards}
                      />
                    );
                  })}
                </div>
                {expanderCont ? (
                  <div className="z-10 absolute bottom-0 w-full h-[128px] bg-gradient-to-t from-black to-transparent"></div>
                ) : null}
              </motion.div>
              <div className="flex w-full justify-center items-center">
                <div onClick={handleYGExpand}>
                  <SecondaryButton>
                    {expanderCont ? "load more" : "load less"}
                  </SecondaryButton>
                </div>
              </div>
            </section>
          )}

          {/* Gata Rewards */}
          {currentTab === 3 && (
            <section className="flex flex-col gap-[64px] items-center">
              <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[8px] items-center max-w-[1024px] text-center">
                <Image
                  width={222}
                  height={32}
                  loading="lazy"
                  alt=""
                  src="/images/common/title-decor.svg"
                />
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
                  <h2 className="text-green">GATA Revenue</h2>
                  <h2>Distribution</h2>
                </div>
                <p>
                  GATA NFT holders get the reward each month, these rewards come
                  from our validator operations.
                </p>
              </div>

              <div className="relative items-center w-full">
                <div
                  ref={sliderRef}
                  className="w-full h-full overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth"
                >
                  <div className="inline-block w-4 sm:w-8 lg:w-32 3xl:w-80"></div>
                  {initialGataEpoch.map((reward, i) => {
                    return (
                      <GataRewards
                        key={i}
                        title={reward.title}
                        desc={reward.desc}
                        atomeDist={reward.atomeDist}
                        date={reward.date}
                        href={reward.href}
                      />
                    );
                  })}
                  <div className="inline-block w-4 sm:w-8 lg:w-16 3xl:w-40"></div>
                </div>
              </div>

              <div className="px-4 sm:px-8 lg:px-32 3xl:px-80 flex items-center w-full justify-between">
                <div className="flex gap-1 items-center">
                  <div className="flex w-32 h-1 bg-dgray rounded-full">
                    <motion.div
                      style={{
                        width: `10%`,
                        height: "4px",
                        borderRadius: "2px",
                        background: "#fff",
                      }}
                      animate={{
                        width: `${proccessBar}%`,
                      }}
                    ></motion.div>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-end">
                  <div
                    onClick={slideLeft}
                    className="flex justify-center items-center rounded-full px-2 py-4 bg-purple border-2 border-white border-opacity-10 hover:bg-dgray"
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.12117 0.294358C6.73065 -0.0961663 6.09748 -0.0961663 5.70696 0.294358L-0.000151157 6.00146L5.70696 11.7086C6.09748 12.0991 6.73065 12.0991 7.12117 11.7086C7.51169 11.318 7.51169 10.6849 7.12117 10.2944L2.82828 6.00146L7.12117 1.70857C7.51169 1.31805 7.51169 0.684882 7.12117 0.294358Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div
                    onClick={slideRight}
                    className="flex justify-center items-center rounded-full px-2 py-4 bg-purple border-2 border-white border-opacity-10 hover:bg-dgray"
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.292893 0.294358C0.683417 -0.0961663 1.31658 -0.0961663 1.70711 0.294358L7.41421 6.00146L1.70711 11.7086C1.31658 12.0991 0.683417 12.0991 0.292893 11.7086C-0.0976311 11.318 -0.0976311 10.6849 0.292893 10.2944L4.58579 6.00146L0.292893 1.70857C-0.0976311 1.31805 -0.0976311 0.684882 0.292893 0.294358Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Treasury;
