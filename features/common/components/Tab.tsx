"use client";

import React, { useState } from "react";

interface Props {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
  tabs: string[];
}

const Tab = ({ currentTab, setCurrentTab, tabs }: Props) => {
  const handleTab = (selectedTab: number) => {
    setCurrentTab(selectedTab);
  };

  return (
    <div className="w-fit flex gap-1 sm:gap-1 justify-center items-center p-1 bg-black border-[1px] border-white border-opacity-10 rounded-full">
      {tabs.map((tab, i) => {
        return (
          <div
            key={i}
            className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
              currentTab === i ? "dgray border-[1px]" : "black border-0"
            } hover:bg-dgray  border-white/10`}
            onClick={() => handleTab(i)}
          >
            <p
              className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-white capitalize ${
                currentTab === i ? "text-white" : "text-gray hover:text-white"
              }`}
            >
              {tab}
            </p>
          </div>
        );
      })}

      {/* <div
        className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
          currentTab === 1 ? "purple" : "dgray"
        } hover:bg-purple border-2 border-white border-opacity-10`}
        onClick={() => handleTab(1)}
      >
        <p
          className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
            currentTab === 1 ? "dgray" : "white"
          }`}
        >
          GATA Series
        </p>
      </div>

      <div
        className={`group cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center px-3 py-0 sm:px-6 sm:py-0 rounded-full border-1 border-opacity-10 bg-${
          currentTab === 2 ? "purple" : "dgray"
        } hover:bg-purple border-2 border-white border-opacity-10`}
        onClick={() => handleTab(2)}
      >
        <p
          className={`py-[12px] transition-all duration-300 ease-in-out font-semibold group-hover:text-dgray text-${
            currentTab === 2 ? "dgray" : "white"
          }`}
        >
          Yield Series
        </p>
      </div> */}
    </div>
  );
};

export default Tab;
