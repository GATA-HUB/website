"use client";

import React, { useEffect, useState } from "react";
import NftCard from "../../features/nft-collection/components/NftCard";
import Template from "../template";
import Image from "next/image";
import nftData from "../../features/nft-collection/data/nfts.json";
import { NFTCollection } from "@/types";
import Tab from "@/features/common/components/Tab";

const NftCollection = () => {
  const initialNFTs: NFTCollection[] = nftData;

  const [nfts, setNfts] = useState<NFTCollection[]>(initialNFTs);
  const collectionTads: string[] = [
    "all",
    "Genesis GATA collection",
    "Yield Series",
    "Souvenirs collection",
  ];
  const [tab, setTab] = useState<number>(0);

  // const handleCollection = (collectionName: string) => {
  //   let updatedNFTs: NFTCollection[];

  //   if (collectionName === "all") {
  //     updatedNFTs = nfts.map((nft) => ({ ...nft, active: true }));
  //   } else {
  //     updatedNFTs = nfts.map((nft) =>
  //       nft.collection != collectionName
  //         ? { ...nft, active: false }
  //         : { ...nft, active: true }
  //     );
  //   }

  //   setNfts(updatedNFTs);
  // };

  useEffect(() => {
    const selectedCollection = collectionTads[tab];

    let updatedNFTs: NFTCollection[];

    if (selectedCollection === "all") {
      updatedNFTs = nftData.map((nft) => ({ ...nft, active: true }));
    } else {
      updatedNFTs = nftData.map((nft) =>
        nft.collection === selectedCollection
          ? { ...nft, active: true }
          : { ...nft, active: false }
      );
    }

    setNfts(updatedNFTs);
  }, [tab]);

  return (
    <div className="z-10 flex flex-col w-full items-center">
      <div className="relative flex w-full h-[960px] items-center ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <Image
            style={{
              minWidth: "1920px",
            }}
            src="/images/headers/nftCollBg.jpg"
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
              src="/images/common/title-decor.svg"
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
            </div>
          </div>

          {/* Tab Section */}

          <Tab
            setCurrentTab={setTab}
            currentTab={tab}
            tabs={[
              "All NFT's",
              "GATA Series",
              "Yield Series",
              "Souvenir Series",
            ]}
          />

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
