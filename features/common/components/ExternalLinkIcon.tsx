"use client";

import React from "react";

type ExternalLinkIconProps = {
  size?: number;
  fill?: string;
  hoverFill?: string;
};

const ExternalLinkIcon = ({ size, fill, hoverFill }: ExternalLinkIconProps) => {
  return (
    <div className="group cursor-pointer">
      <svg
        width={`${size || 32}`}
        height={`${size || 32}`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`${fill ? `fill-${fill}` : "fill-purple"} ${
            hoverFill
              ? `group-hover:fill-${hoverFill}`
              : "group-hover:fill-lgray"
          } transition-all ease-in-out duration-300`}
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
  );
};

export default ExternalLinkIcon;
