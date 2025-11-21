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
      } flex px-4 py-1 sm:px-6 sm:py-2 3xl:px-[32px] 3xl:py-[8px] justify-center items-center text-center rounded-[4px] bg-purple border-[1px] border-white border-opacity-10 font-titillium font-semibold uppercase text-dgray text-[14px] hover:bg-dgray hover:text-purple hover:border-purple hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer sm:text-[14px]`}
    >
      {children}
    </div>
  );
};

export const PrimaryExternalLink = ({
  children,
  href,
  width,
  disabled,
}: Props) => {
  return (
    <div
      onClick={href ? () => window.open(href, "_blank") : () => null}
      className={`w-${
        width || "fit"
      } group flex pl-4 pr-1 py-1 gap-4 justify-between items-center text-center rounded-[8px] bg-purple border-[1px] border-white border-opacity-10 font-titillium font-semibold uppercase text-dgray text-[14px] hover:bg-dgray hover:text-purple hover:border-purple hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer sm:pl-4 sm:pr-2 sm:py-2 3xl:pl-[24px] 3xl:pr-[8px] 3xl:py-[8px] sm:text-[14px]`}
    >
      {children}

      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-[#B09CFF] group-hover:fill-purple transition-all ease-in-out duration-300"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 4C21 3.44772 21.4477 3 22 3H28C28.5523 3 29 3.44772 29 4V10C29 10.5523 28.5523 11 28 11C27.4477 11 27 10.5523 27 10V6.41421L20.7071 12.7071C20.3166 13.0976 19.6834 13.0976 19.2929 12.7071C18.9024 12.3166 18.9024 11.6834 19.2929 11.2929L25.5858 5H22C21.4477 5 21 4.55228 21 4Z"
          fill="none"
        />
        <path
          className="fill-[#B09CFF] group-hover:fill-purple transition-all ease-in-out duration-300"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 9C3 5.68629 5.68629 3 9 3H17C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5H9C6.79086 5 5 6.79086 5 9V23C5 25.2091 6.79086 27 9 27H23C25.2091 27 27 25.2091 27 23V15C27 14.4477 27.4477 14 28 14C28.5523 14 29 14.4477 29 15V23C29 26.3137 26.3137 29 23 29H9C5.68629 29 3 26.3137 3 23V9Z"
          fill="none"
        />
      </svg>
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
          } flex px-4 py-1 justify-center items-center text-center rounded-[4px] bg-black font-titillium font-semibold uppercase text-lgray text-[14px] sm:px-6 sm:py-2 3xl:px-[32px] 3xl:py-[8px] sm:text-[14px]`}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={href ? () => window.open(href, "_blank") : () => null}
          className={`w-${
            width || "fit"
          } z-10 flex px-4 py-1 justify-center items-center text-center rounded-[4px] bg-black border-[1px] border-white border-opacity-10 font-titillium font-semibold uppercase text-white text-[14px] hover:border-purple hover:border-opacity-100 hover:text-white transition-all duration-300 ease-in-out cursor-pointer sm:px-6 sm:py-2 3xl:px-[32px] 3xl:py-[8px] sm:text-[14px]`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export const SecondaryExternalLink = ({
  children,
  href,
  width,
  disabled,
}: Props) => {
  return (
    <>
      {disabled ? (
        <div
          onClick={href ? () => window.open(href, "_blank") : () => null}
          className={`w-${
            width || "fit"
          } flex px-4 py-1 justify-center items-center text-center rounded-[8px] bg-dgray font-titillium font-semibold uppercase text-lgray text-[14px] sm:px-6 sm:py-2 3xl:px-[32px] 3xl:py-[8px] sm:text-[14px]`}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={href ? () => window.open(href, "_blank") : () => null}
          className={`w-${
            width || "fit"
          } group flex pl-4 pr-1 py-1 gap-4 justify-between items-center text-center rounded-[8px] bg-dgray border-[1px] border-purple font-titillium font-semibold uppercase text-white text-[14px] hover:bg-purple hover:text-dgray hover:border-white hover:border-opacity-10 transition-all duration-300 ease-in-out cursor-pointer sm:pl-4 sm:pr-2 sm:py-2 3xl:pl-[24px] 3xl:pr-[8px] 3xl:py-[8px] sm:text-[14px]`}
        >
          {children}

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-purple group-hover:fill-lgray transition-all ease-in-out duration-300"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 4C21 3.44772 21.4477 3 22 3H28C28.5523 3 29 3.44772 29 4V10C29 10.5523 28.5523 11 28 11C27.4477 11 27 10.5523 27 10V6.41421L20.7071 12.7071C20.3166 13.0976 19.6834 13.0976 19.2929 12.7071C18.9024 12.3166 18.9024 11.6834 19.2929 11.2929L25.5858 5H22C21.4477 5 21 4.55228 21 4Z"
              fill="none"
            />
            <path
              className="fill-purple group-hover:fill-lgray transition-all ease-in-out duration-300"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 9C3 5.68629 5.68629 3 9 3H17C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5H9C6.79086 5 5 6.79086 5 9V23C5 25.2091 6.79086 27 9 27H23C25.2091 27 27 25.2091 27 23V15C27 14.4477 27.4477 14 28 14C28.5523 14 29 14.4477 29 15V23C29 26.3137 26.3137 29 23 29H9C5.68629 29 3 26.3137 3 23V9Z"
              fill="none"
            />
          </svg>
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
