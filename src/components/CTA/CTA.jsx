import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="opacity-70">
        <Image src="/bgcta.png" width={1440} height={605} alt="bgcta" />
      </div>
      <div className="flex flex-col justify-center items-center absolute text-center">
        <p className="text-white font-dm text-[58px] font-normal leading-[70px] tracking-wide w-[518px]">
          Easy to setup. <br />
          Easy to maintain
        </p>
        <p className="text-white font-dm text-[22px] w-[518px] leading-8 font-normal mt-[20px]">
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end
          framework for faster and easier web development.
        </p>
        <div className="flex flex-row mt-[58px]">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="70" height="70" rx="35" fill="#EA3223" />
            <path
              d="M44.5851 35.2031C44.9311 35.0134 44.9311 34.7009 44.5851 34.5112L29.7637 26.2746C29.4177 26.0848 29.1387 26.2522 29.1387 26.6429V43.0714C29.1387 43.4621 29.4177 43.6295 29.7637 43.4397L44.5851 35.2031Z"
              fill="white"
            />
          </svg>
          <button className="bg-blue rounded-full w-[213px] h-[70px] ml-[27px]">
            <span className="text-white font-dm text-[20px] font-normal">
              {" "}
              Get Started
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
