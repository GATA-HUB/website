import React from "react";
import Image from "next/image";

interface Points {
  point: string;
  href?: string;
}

interface Props {
  index: number;
  subTitle: string;
  points: Points[];
}

const PhaseContainer = ({ index, subTitle, points }: Props) => {
  return (
    <div className="relative w-full flex flex-col gap-4 p-4 lg:p-6 bg-dgray border-2 border-white border-opacity-10 rounded-[1rem] overflow-hidden">
      <div className="flex w-fit gap-2 justify-center items-center py-2 pr-4 pl-[12px] border-2 border-white border-opacity-10 rounded-full bg-purple">
        <Image width={16} height={16} alt="" loading="lazy" src="/phase.svg" />
        <p className="uppercase font-semibold text-[14px] text-dgray">
          phase 0{index + 1}
        </p>
      </div>
      <h4>{subTitle}</h4>
      <div className="flex flex-col gap-2">
        {points.map((p, i) => {
          return (
            <div key={i} className="flex gap-4">
              <div className="flex min-w-4 h-4 mt-1">
                <>
                  <Image
                    width={16}
                    height={16}
                    alt="icon"
                    src="/gata-bullet.png"
                  />
                </>
              </div>
              {p.href ? (
                <div onClick={() => window.open(p.href, "_blank")}>
                  <p className="text-purple cursor-pointer hover:text-white underline transition-all duration-300 ease-in-out">
                    {p.point}
                  </p>
                </div>
              ) : (
                <p>{p.point}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhaseContainer;
