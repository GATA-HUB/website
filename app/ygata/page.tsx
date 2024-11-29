"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  PrimaryExternalLink,
  SecondaryExternalLink,
} from "../components/Button";
import SABCard from "../components/ygata/SABCard";
import LiquidAssetsCard from "../components/ygata/LiquidAssetsCard";
import NFTValueCard from "../components/ygata/NFTValueCard";
import { fetchTokenPriceV2 } from "@/actions/fetchTokenPriceV2";
import { fetchStakedAssets } from "@/actions/fetchStakedAssets";
import RowCardLoader from "../components/ygata/RowCardLoader";

interface SAB {
  network: string;
  symbol: string;
  icon: string;
  addr: string;
  quantity: number;
}

const page = () => {
  const initialLiquidity = [
    {
      network: "BTC",
      icon: "/validator_chains/btc.png",
      quantity: 0.005,
      symbol: "nBTC",
    },
    {
      network: "ETH",
      icon: "/validator_chains/eth.png",
      quantity: 0.5,
      symbol: "ETH",
    },
    {
      network: "SOL",
      icon: "/validator_chains/sol.png",
      quantity: 1,
      symbol: "SOL",
    },
    {
      network: "ATOM",
      icon: "/validator_chains/cosmos.png",
      quantity: 10,
      symbol: "ATOM",
    },
    {
      network: "FLIX",
      icon: "/validator_chains/omni.png",
      quantity: 1000,
      symbol: "FLIX",
    },
    {
      network: "STARS",
      icon: "/validator_chains/stars.png",
      quantity: 20000,
      symbol: "STARS",
    },
  ];

  const initialNFTVal = [
    {
      network: "GATAc",
      icon: "/validator_chains/gata.png",
      quantity: 0,
      usdValue: 0,
    },
    {
      network: "GATAv",
      icon: "/validator_chains/gata.png",
      quantity: 0,
      usdValue: 0,
    },
  ];

  const totalLPValue = 112500;
  const totalNFTValue = 0;

  const [sabData, setSabData] = useState<SAB[] | null>();
  const [CoingeckoYGata, setCoingeckoYGata] = useState(0);
  const [managedAssets, setManagedAssets] = useState<number>(0);
  const [assetsPrices, setAssetsPrices] = useState<number[]>([]);
  const [stakedAssets, setStakedAssets] = useState<number>(0);
  const [stakedQuantities, setStakedQuantities] = useState<number[]>([]);
  const [stakedQuantity, setStakedQuantity] = useState<number>(0);
  const [liquidityQuantities, setLiquidityQuantities] = useState<number[]>([]);
  const [liquidityQuantity, setLiquidityQuantity] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [yGataPrice, setYGataPrice] = useState("0");

  const price = Number(yGataPrice);
  const lastAPR = 21;
  const circulatingSupply = 14070000;
  const totalSupply = 21000000;
  const communityPool = 6600000;
  const stakedTokens = 11050000;
  const marketCap = circulatingSupply * price;
  const fdv = totalSupply * price;

  const [liquidAssetsPrices, setLiquidAssetsPrices] = useState<number[]>([]);
  const [liquidAssets, setLiquidAssets] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const fetchBalance = async () => {
      const allSABData = await fetchStakedAssets();
      setSabData(allSABData);
      setLoading(false);
    };

    fetchBalance();
  }, []);

  const handlePriceUpdate = (newPrice: number, index: number) => {
    if (newPrice) {
      setAssetsPrices((prevPrices) => {
        const updatedPrices = [...prevPrices];
        updatedPrices[index] = newPrice;
        return updatedPrices;
      });
    }
  };

  const handleStakedQuantity = (newQuantity: number, index: number) => {
    if (newQuantity) {
      setStakedQuantities((prevQuantity) => {
        const updatedQuantity = [...prevQuantity];
        updatedQuantity[index] = newQuantity;
        return updatedQuantity;
      });
    }
  };

  const handleLiquidityQuantity = (newQuantity: number, index: number) => {
    if (newQuantity) {
      setLiquidityQuantities((prevQuantity) => {
        const updatedQuantity = [...prevQuantity];
        updatedQuantity[index] = newQuantity;
        return updatedQuantity;
      });
    }
  };

  const handlePriceFormat = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
    return formattedPrice;
  };

  const handleLiquidityPriceUpdate = (newPrice: number, index: number) => {
    if (newPrice) {
      setLiquidAssetsPrices((prevPrices) => {
        const updatedPrices = [...prevPrices];
        updatedPrices[index] = newPrice;
        return updatedPrices;
      });
    }
  };

  useEffect(() => {
    const sum = assetsPrices.reduce((acc, curr) => acc + curr, 0);
    setStakedAssets(sum);
  }, [assetsPrices]);

  useEffect(() => {
    const sum = liquidAssetsPrices.reduce((acc, curr) => acc + curr, 0);
    setLiquidAssets(sum);
  }, [liquidAssetsPrices]);

  useEffect(() => {
    const sum = stakedQuantities.reduce((acc, curr) => acc + curr, 0);
    setStakedQuantity(sum);
  }, [stakedQuantities]);

  useEffect(() => {
    const sum = liquidityQuantities.reduce((acc, curr) => acc + curr, 0);
    setLiquidityQuantity(sum);
  }, [liquidityQuantities]);

  useEffect(() => {
    setManagedAssets(
      stakedAssets + liquidAssets + totalLPValue + totalNFTValue
    );
    setCoingeckoYGata(managedAssets / circulatingSupply);
  }, [stakedAssets]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchPrices = async () => {
      // setLoading(true);
      const updatedTokens = await fetchTokenPriceV2("YGATA");
      const roundedPrice =
        updatedTokens !== null ? parseFloat(updatedTokens).toFixed(5) : null;
      if (roundedPrice) {
        setYGataPrice(roundedPrice);
      } else {
        setYGataPrice("0");
      }
      // setLoading(false);
    };

    fetchPrices();
  }, []);

  const formatNumber = (num: number) => {
    if (num > 1_000_000_000) {
      // Format numbers greater than 1 billion
      return (
        (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 2) + "B"
      );
    } else if (num > 1_000_000) {
      // Format numbers greater than 1 million
      return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 2) + "M";
    } else if (num > 1_000) {
      // Format numbers greater than 1 thousand
      return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 2) + "K";
    } else {
      // Format numbers below 1 thousand with commas
      return new Intl.NumberFormat("en-US").format(num);
    }
  };

  console.log(stakedQuantity);

  return (
    <div className="z-10 flex flex-col w-full items-center">
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/ygataBg.jpg"
            width={1920}
            height={960}
            quality={100}
            alt=""
            priority={true}
          />
        </div>
        <div className="w-full mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-2 lg:w-1/2">
            <h1 className="w-full">GATA YIELD DAO</h1>
            <h5 className="text-gray">Managed Assets</h5>
            <div className="flex gap-2 items-center">
              <div className="relative flex items-center justify-center w-6 h-6 bg-dgray rounded">
                <div className="absolute w-[8px] h-[8px] bg-black bg-opacity-40 rounded-full" />
                <motion.div
                  animate={{
                    background: ["#7B5AFF", "#FF4874", "#7B5AFF"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="w-[16px] h-[16px] rounded-full"
                />
              </div>
              {managedAssets ? (
                <>
                  <h4>{formatNumber(managedAssets)}</h4>
                  <h4 className="text-purple">USD</h4>
                </>
              ) : (
                <h4>-</h4>
              )}
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <Image
                width={24}
                height={24}
                alt=""
                src="/validator_chains/osmosis.png"
              />
              <motion.h4
                animate={{
                  color: ["#7B5AFF", "#FF4874", "#7B5AFF"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                {yGataPrice ? `${yGataPrice}/yGATA` : "-"}
              </motion.h4>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          bottom: "-64px",
        }}
        animate={{
          bottom: "32px",
        }}
        transition={{
          type: "spring",
          ease: "easeIn",
          duration: 1,
          delay: 1,
        }}
        className="fixed flex flex-wrap justify-center gap-4 z-10 px-4"
      >
        <PrimaryExternalLink href="https://daodao.zone/dao/omniflix19z3h463xmkz66vdq8tcpk986kvecjyqxy4ywtdzu4qqe2vjyz69sy0u32r/home">
          Visit DAO to Stake and Vote
        </PrimaryExternalLink>
        <PrimaryExternalLink href="https://app.osmosis.zone/pool/2300">
          Osmosis Incentivize pool
        </PrimaryExternalLink>
        <SecondaryExternalLink href="">epoch rewards</SecondaryExternalLink>
        <SecondaryExternalLink href="https://docs.gatahub.zone/welcome-to-gitbook/gatahub/ygata">
          docs
        </SecondaryExternalLink>
      </motion.div>

      <div className="w-full flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        {/* content container 1 */}
        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          {/* title section */}

          <div className="w-full flex justify-center gap-16 md:gap-32 flex-wrap">
            {/* sub content */}
            <div className="flex flex-col gap-1 items-center">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-green">
                {yGataPrice ? yGataPrice : "-"}
              </h3>
              <p>price</p>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-red">
                {lastAPR ? lastAPR : "-"}%
              </h3>
              <p>Last APR</p>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-lpurple">
                {fdv ? formatNumber(fdv) : "-"}
              </h3>
              <p>FDV</p>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-yellow">
                {marketCap ? formatNumber(marketCap) : "-"}
              </h3>
              <p>Market Cap</p>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-yellow">
                {circulatingSupply ? formatNumber(circulatingSupply) : "-"}
              </h3>
              <p>Circulating Supply</p>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-yellow">
                {totalSupply ? formatNumber(totalSupply) : "-"}
              </h3>
              <p>Total Supply</p>
            </div>
          </div>
        </div>

        <div className="relative mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col xl:flex-row gap-8">
          <div className="flex flex-col gap-4 h-full">
            <h2>Staked Asset Breakdown</h2>
            <div className="flex gap-2 items-center">
              <div className="relative flex items-center justify-center w-6 h-6 bg-dgray rounded">
                <div className="absolute w-[8px] h-[8px] bg-black bg-opacity-40 rounded-full" />
                <motion.div
                  animate={{
                    background: ["#7B5AFF", "#FF4874", "#7B5AFF"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="w-[16px] h-[16px] rounded-full"
                />
              </div>
              {stakedAssets ? (
                <>
                  <h4>{handlePriceFormat(stakedAssets)}</h4>
                  <h4 className="text-purple">USD</h4>
                </>
              ) : (
                <h4>-</h4>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 w-full">
            {sabData &&
              sabData.map((sab, i) => {
                return (
                  <>
                    {loading ? (
                      <RowCardLoader />
                    ) : (
                      <SABCard
                        key={i}
                        icon={sab.icon}
                        network={sab.network}
                        quantity={sab.quantity}
                        prices={assetsPrices}
                        setPrice={(newPrice) => handlePriceUpdate(newPrice, i)}
                        setQuantity={(newQuantity) =>
                          handleStakedQuantity(newQuantity, i)
                        }
                        symbol={sab.symbol}
                        addr={sab.addr}
                      />
                    )}
                  </>
                );
              })}
          </div>

          <div className="z-[-1] absolute w-full flex justify-center items-center">
            <div className="absolute w-[100vw] h-[637px] top-[-104px] overflow-hidden">
              <Image
                style={{
                  minWidth: "1920px",
                }}
                src="/ygataBg2.jpg"
                width={1920}
                height={637}
                quality={100}
                alt=""
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* Token Distribution  */}
        <div
          ref={ref}
          className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col md:flex-row gap-[40px] items-center"
        >
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px]">
              Token Distribution
            </h3>
            <div className="relative flex items-center justify-between p-6 rounded-xl bg-dgray overflow-hidden">
              <p className="z-[1] text-white">Circulating Supply</p>
              <p className="z-[1] text-white">
                {formatNumber(circulatingSupply)}
              </p>
              <motion.div
                animate={{
                  width: inView
                    ? `${(circulatingSupply / totalSupply) * 100}%`
                    : "0%",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                }}
                className="absolute left-0 bg-red h-full"
              ></motion.div>
            </div>

            <div className="relative flex items-center justify-between p-6 rounded-xl bg-dgray overflow-hidden">
              <p className="z-[1] text-white">Staked</p>
              <p className="z-[1] text-white">{formatNumber(stakedTokens)}</p>
              <motion.div
                animate={{
                  width: inView
                    ? `${(stakedTokens / totalSupply) * 100}%`
                    : "0%",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                }}
                className="absolute left-0 bg-red h-full"
              ></motion.div>
            </div>

            <div className="relative flex items-center justify-between p-6 rounded-xl bg-dgray overflow-hidden">
              <p className="z-[1] text-white">DAO/CP</p>
              <p className="z-[1] text-white">{formatNumber(communityPool)}</p>
              <motion.div
                animate={{
                  width: inView
                    ? `${(communityPool / totalSupply) * 100}%`
                    : "0%",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                }}
                className="absolute left-0 bg-red h-full"
              ></motion.div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px]">
              Asset Allocation
            </h3>
            <div className="relative flex items-center justify-between p-6 rounded-xl bg-dgray overflow-hidden">
              <p className="z-[1] text-white">Staked Assets</p>
              <p className="z-[1] text-white">
                {formatNumber(stakedAssets)}{" "}
                <span className="text-purple font-bold"> USD</span>
              </p>
              <motion.div
                animate={{
                  width: inView
                    ? `${(stakedAssets / managedAssets) * 100}%`
                    : "0%",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                }}
                className="absolute left-0 bg-purple h-full"
              ></motion.div>
            </div>

            <div className="relative flex items-center justify-between p-6 rounded-xl bg-dgray overflow-hidden">
              <p className="z-[1] text-white">Liquid Assets</p>
              <p className="z-[1] text-white">
                {formatNumber(liquidAssets)}
                <span className="text-purple font-bold"> USD</span>
              </p>
              <motion.div
                animate={{
                  width: inView
                    ? `${(liquidAssets / managedAssets) * 100}%`
                    : "0%",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                }}
                className="absolute left-0 bg-purple h-full"
              ></motion.div>
            </div>

            <div className="relative flex items-center justify-between p-6 rounded-xl bg-dgray overflow-hidden">
              <p className="z-[1] text-white">LP</p>
              <p className="z-[1] text-white">
                {formatNumber(totalLPValue)}
                <span className="text-purple font-bold"> USD</span>
              </p>

              <motion.div
                animate={{
                  width: inView
                    ? `${(totalLPValue / managedAssets) * 100}%`
                    : "0%",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                }}
                className="absolute left-0 bg-purple h-full"
              ></motion.div>
            </div>
          </div>
        </div>

        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col lg:flex-row gap-[32px] 2xl:gap-[64px]">
          <div className="flex w-full flex-col gap-4">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px]">
              Liquid Assets
            </h3>
            <div className="flex gap-2 items-center">
              <div className="relative flex items-center justify-center w-6 h-6 bg-dgray rounded">
                <div className="absolute w-[8px] h-[8px] bg-black bg-opacity-40 rounded-full" />
                <motion.div
                  animate={{
                    background: ["#7B5AFF", "#FF4874", "#7B5AFF"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="w-[16px] h-[16px] rounded-full"
                />
              </div>
              {liquidAssets ? (
                <>
                  <h4>{handlePriceFormat(liquidAssets)}</h4>
                  <h4 className="text-purple">USD</h4>
                </>
              ) : (
                <h4>-</h4>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              {initialLiquidity.map((liquidity, i) => {
                return (
                  <LiquidAssetsCard
                    key={i}
                    icon={liquidity.icon}
                    network={liquidity.network}
                    quantity={liquidity.quantity}
                    symbol={liquidity.symbol}
                    prices={liquidAssetsPrices}
                    setPrice={(newPrice) =>
                      handleLiquidityPriceUpdate(newPrice, i)
                    }
                    setQuantity={(newQuantity) =>
                      handleLiquidityQuantity(newQuantity, i)
                    }
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full flex flex-col p-6 gap-6 rounded-2xl bg-dgray border-[1px] border-white border-opacity-10">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px]">
              NFT Value
            </h3>
            <div className="w-full h-[2px] rounded bg-lgray" />

            <div className="w-full h-full overflow-y-scroll overflow-x-hidden flex flex-col gap-2">
              {initialNFTVal.map((nftVal, i) => {
                return (
                  <NFTValueCard
                    key={i}
                    icon={nftVal.icon}
                    network={nftVal.network}
                    quantity={nftVal.quantity}
                    usdValue={nftVal.usdValue}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex gap-[64px] items-center">
          <div className="relative w-full flex flex-col md:flex-row justify-between items-center p-8 rounded-xl bg-purple">
            <div className="z-[1] flex gap-4 items-center">
              <div className="w-12 h-12">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.40083 0.996531C8.66011 1.14083 8.82244 1.22199 8.97801 1.32119C11.2574 2.70551 13.5413 4.07405 15.8139 5.46739C15.9506 5.56049 16.1084 5.6181 16.2729 5.63502C16.4374 5.65195 16.6036 5.62766 16.7564 5.56434C20.9417 4.1147 25.4717 3.98797 29.7316 5.20135C29.8809 5.25144 30.0397 5.26691 30.196 5.2466C30.3522 5.22629 30.5018 5.17073 30.6334 5.08411C33.2623 3.49838 35.9016 1.92542 38.5515 0.365244C38.7432 0.252515 38.9393 0.139785 39.1941 0C39.2214 0.149049 39.2395 0.299642 39.2482 0.450919C39.2482 3.75616 39.2482 7.06139 39.2482 10.3711C39.2576 10.4907 39.241 10.611 39.1993 10.7235C39.1576 10.836 39.092 10.9381 39.007 11.0227C37.5257 12.4882 36.0534 13.9672 34.5789 15.4395C34.5331 15.4737 34.4849 15.5046 34.4347 15.5319C31.0843 12.3304 27.0666 10.8221 22.4109 11.2279C19.1233 11.5045 16.027 12.8892 13.6292 15.1554C11.292 17.3112 9.69886 20.1529 9.07921 23.2716C8.45956 26.3903 8.84531 29.6252 10.1809 32.5107C11.5166 35.3962 13.7332 37.7837 16.5119 39.3294C19.2905 40.8751 22.4879 41.4995 25.644 41.1126C33.1089 40.1814 37.4806 34.3668 38.432 29.5713H37.7715C32.7377 29.5713 27.7024 29.5713 22.6657 29.5713C22.2345 29.5797 21.8145 29.4333 21.482 29.1587C21.0314 28.8019 20.6676 28.3475 20.4183 27.8296C20.169 27.3117 20.0405 26.744 20.0427 26.1692C20.0449 25.5945 20.1776 25.0277 20.4308 24.5118C20.6841 23.9958 21.0512 23.5441 21.5045 23.1908C21.8383 22.9173 22.2591 22.7725 22.6905 22.7827C26.636 22.7985 30.5815 22.7827 34.5226 22.7827H45.3446C45.41 23.2742 45.4957 23.7454 45.5363 24.2211C45.905 28.3252 45.1027 32.4496 43.2223 36.1162C41.342 39.7827 38.4607 42.841 34.9126 44.9363C31.1706 47.1838 26.8323 48.2369 22.4763 47.9552C12.8694 47.3984 4.39216 40.3956 2.46223 30.525C1.0283 23.202 2.94696 16.7314 7.99049 11.2144C8.12771 11.0794 8.23574 10.9178 8.30788 10.7394C8.38001 10.5609 8.41472 10.3696 8.40985 10.1772C8.39181 7.359 8.40985 4.54076 8.40985 1.72477L8.40083 0.996531Z"
                    fill="white"
                  />
                </svg>
              </div>

              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px]">
                Managed Liquidity
              </h3>
            </div>
            <div className="z-[1] flex gap-4">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px]">
                {formatNumber(totalLPValue)}
              </h3>
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-dgray">
                USD
              </h3>
            </div>

            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/managedLiqBG.png"
                width={1920}
                height={460}
                quality={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
