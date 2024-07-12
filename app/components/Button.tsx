"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  href?: string;
  width?: string;
  disabled?: boolean;
}

export const PrimaryButton = ({ children, href, width, disabled }: Props) => {
  return (
    <div
      onClick={href ? () => window.open(href, "_blank") : () => null}
      className={`w-${
        width || "fit"
      } flex px-4 py-1 justify-center items-center text-center rounded-[4px] bg-purple border-2 border-white border-opacity-10 font-titillium font-semibold uppercase text-dgray text-[14px] hover:bg-dgray hover:text-purple hover:border-purple hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer sm:px-4 sm:py-2 3xl:px-[24px] 3xl:py-[8px] sm:text-[14px] lg:text-[14px]`}
    >
      {children}
    </div>
  );
};

export const SecondaryButton = ({ children, href, width, disabled }: Props) => {
  return (
    <>
      {disabled ? (
        <div
          onClick={href ? () => window.open(href, "_blank") : () => null}
          className={`w-${
            width || "fit"
          } flex px-4 py-1 justify-center items-center text-center rounded-[8px] bg-dgray font-titillium font-semibold uppercase text-lgray text-[14px] sm:px-6 sm:py-2 3xl:px-[32px] 3xl:py-[8px] sm:text-[16px] lg:text-[18px]`}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={href ? () => window.open(href, "_blank") : () => null}
          className={`w-${
            width || "fit"
          } flex px-4 py-1 justify-center items-center text-center rounded-[8px] bg-dgray border-2 border-purple font-titillium font-semibold uppercase text-white text-[14px] hover:bg-purple hover:text-dgray hover:border-white hover:border-opacity-10 transition-all duration-300 ease-in-out cursor-pointer sm:px-6 sm:py-2 3xl:px-[32px] 3xl:py-[8px] sm:text-[16px] lg:text-[18px]`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export const TertiaryButton = ({ children, href, disabled }: Props) => {
  return (
    <div
      onClick={href ? () => window.open(href, "_blank") : () => null}
      className={`font-titillium font-semibold text-purple text-[11px] sm:text-[16px] lg:text-[18px] underline hover:text-white transition-all duration-300 ease-in-out cursor-pointer`}
    >
      {children}
    </div>
  );
};
