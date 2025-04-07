"use client";

import React from "react";
import { PrimaryButton } from "../../../features/common/components/Button";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  atomeDist: number;
  date: string;
  href: string;
}

const GataRewards = ({ title, desc, atomeDist, date, href }: Props) => {
  return (
    <div className="inline-block mr-2 w-[256px] lg:w-[448px] p-4 lg:p-6 rounded-[16px] bg-black border-[1px] border-white border-opacity-10">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full px-4">
          <Image
            width={54}
            height={54}
            src="/images/common/gata-coin.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="flex flex-col whitespace-normal gap-2">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-col">
            <p className="font-semibold text-purple">Atom Distribution</p>
            <h5>{atomeDist} Atoms</h5>
          </div>
          <div className="flex h-fit w-fit gap-[8px] pl-1 pr-3 py-1 items-center rounded-full bg-dgray border-[1px] border-white border-opacity-10">
            <Image
              width={20}
              height={20}
              alt=""
              src="/images/common/date.svg"
              loading="lazy"
            />
            <p className="text-[14px]">{date}</p>
          </div>
        </div>
        <PrimaryButton width="full" href={href}>
          Learn more
        </PrimaryButton>
      </div>
    </div>
  );
};

export default GataRewards;
