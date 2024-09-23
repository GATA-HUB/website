"use client";

import React, { useState } from "react";
import NftCard from "../components/nft-collections/NftCard";
import Template from "../template";
import { TertiaryButton } from "../components/Button";
import Image from "next/image";
import nftData from "../../public/data/nfts.json";

interface NFT {
  image: string;
  name: string;
  desc?: string;
  collection: string;
  active: boolean;
  href: string;
  details: string;
}

const NftCollection = () => {
  const initialNFTs: NFT[] = nftData;

  const [nfts, setNfts] = useState<NFT[]>(initialNFTs);
  const [tab, setTab] = useState("all");

  const handleCollection = (collectionName: string) => {
    let updatedNFTs: NFT[];

    if (collectionName === "all") {
      updatedNFTs = nfts.map((nft) => ({ ...nft, active: true }));
    } else {
      updatedNFTs = nfts.map((nft) =>
        nft.collection != collectionName
          ? { ...nft, active: false }
          : { ...nft, active: true }
      );
    }

    setNfts(updatedNFTs);
    setTab(collectionName);
  };

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
            src="/nftCollBg.jpg"
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
            <h1>Exclusive NFTs made by GATA HUB</h1>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1920px] flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        <section className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[16px] items-center max-w-[1024px] text-center">
            <Image
              alt=""
              width={222}
              height={32}
              src="/title-decor.svg"
              loading="lazy"
            />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
              <h2 className="text-green">NFT</h2>
              <h2>Collections</h2>
            </div>
            <div className="flex flex-col items-center">
              <p>
                Some pay revenue share to the holders, some generate DeFi Yield
                and some are memorial
              </p>
              {/* <div className="flex gap-[4px] items-center justify-center">
                <p>For more details visit GATA HUB</p>
                <TertiaryButton>gitbook</TertiaryButton>
                <p>or</p>
                <TertiaryButton>GATA Paper</TertiaryButton>
              </div> */}
            </div>
          </div>

          {/* Tab Section */}
          <div className="flex gap-1 sm:gap-1 justify-center items-center p-1 bg-black border-2 border-white border-opacity-10 rounded-full">
            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "all" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleCollection("all")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "all" ? "dgray" : "white"
                }`}
              >
                All NFT's
              </p>
            </div>

            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "Genesis GATA collection" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleCollection("Genesis GATA collection")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "Genesis GATA collection" ? "dgray" : "white"
                }`}
              >
                GATA Series
              </p>
            </div>

            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "Yield Series" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleCollection("Yield Series")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "Yield Series" ? "dgray" : "white"
                }`}
              >
                Yield Series
              </p>
            </div>

            <div
              className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
                tab === "Souvenirs collection" ? "purple" : "dgray"
              } hover:bg-purple border-2 border-white border-opacity-10`}
              onClick={() => handleCollection("Souvenirs collection")}
            >
              <p
                className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
                  tab === "Souvenirs collection" ? "dgray" : "white"
                }`}
              >
                Souvenir Series
              </p>
            </div>
          </div>

          {/* NFT Collections */}

          <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {nfts.map((nft, i) => {
              if (nft.active) {
                return (
                  <Template key={i}>
                    <NftCard
                      image={nft.image}
                      name={nft.name}
                      desc={nft.desc}
                      collection={nft.collection}
                      href={nft.href}
                      details={nft.details}
                    />
                  </Template>
                );
              }
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NftCollection;
