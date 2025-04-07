"use client";

import React from "react";
import Image from "next/image";
import roadmapData from "../../features/roadmap/data/roadmap.json";
import RoadmapComp from "@/features/roadmap/components/RoadmapComp";

interface Points {
  point: string;
  href: string;
}

interface RoadmapCont {
  subTitle: string;
  points: Points[];
}

interface RoadmapMain {
  title: string;
  desc: string;
  content: RoadmapCont[];
}

const Roadmap = () => {
  const initialPoint: RoadmapMain[] = roadmapData;

  const RoadmapCount = initialPoint.length;

  return (
    <div className="z-10 flex flex-col w-full items-center">
      {/* <div className="absolute z-[-1] top-[800px] right-0">
        <img src="/bg-waves.png" alt="" loading="lazy" />
      </div> */}
      <div className="w-full px-4">
        <>
          <Image
            alt=""
            priority={true}
            width={1888}
            height={522}
            src="/images/headers/common-header.png"
          />
        </>
      </div>
      <div className="w-full mt-[-48px] sm:mt-[-80px] lg:mt-[-104px] xl:mt-[-128px] 2xl:mt-[-256px] max-w-[1920px] flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64">
        <div className="mx-8 lg:mx-16 3xl:mx-40 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1>Roadmap</h1>
          </div>
        </div>

        <div className="mx-4 sm:mx-8 lg:mx-32 3xl:mx-80 flex flex-col gap-[64px] items-center">
          <div className="w-full flex gap-2">
            {/* <div className="flex flex-col items-center bg-purple w-1"></div> */}
            <div className="flex flex-col w-full gap-4">
              {initialPoint.map((point, i) => {
                if (i === 0) {
                  return (
                    <RoadmapComp
                      key={i}
                      title={point.title}
                      desc={point.desc}
                      content={point.content}
                      state={true}
                      index={i}
                    />
                  );
                } else if (i === RoadmapCount - 1) {
                  return (
                    <RoadmapComp
                      key={i}
                      title={point.title}
                      desc={point.desc}
                      content={point.content}
                      state={false}
                      index={1}
                    />
                  );
                } else {
                  return (
                    <RoadmapComp
                      key={i}
                      title={point.title}
                      desc={point.desc}
                      content={point.content}
                      state={false}
                      index={2}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
