import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  title: string;
  desc: string;
  twitter: string;
}

const MemberCard = ({ image, name, title, desc, twitter }: Props) => {
  return (
    <div className="flex w-[180px] mr-[64px] flex-col gap-[16px] items-center">
      <div className="group relative flex w-[80px] h-[80px] items-center justify-center rounded-full overflow-hidden cursor-pointer">
        <Image width={80} height={80} loading="lazy" alt="" src={image} />
        <div
          onClick={() => window.open(twitter, "_blank")}
          className="flex bg-purple/60 backdrop-blur-sm justify-center items-center absolute w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          <a className="flex justify-center items-center w-6 h-6 lg:w-[32px] lg:h-[32px]">
            <svg
              className="transition-all duration-300 ease-in-out fill-current text-white"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.26765 4L13.1475 17.2102L3.20526 27.9507H5.44285L14.1472 18.5473L21.1801 27.9507H28.7947L18.359 13.9974L27.6132 4H25.3756L17.3593 12.6604L10.8823 4H3.26765ZM6.55819 5.64821H10.0564L25.5037 26.3023H22.0055L6.55819 5.64821Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-[4px] items-center">
        <h3>{name}</h3>
        <p className="text-center text-purple font-bold">{title}</p>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
};

export default MemberCard;
