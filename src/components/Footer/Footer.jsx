import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col w-[1400px] h-[240px] bg-spurple items-center justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mt-[53px]">
          <p className="font-dm text-white font-normal not-italic text-[24px] ">
            Startup 3
          </p>
          <div className="inline-flex">
            <p className="font-dm text-white font-light text-[16px] mt-1 cursor-pointer hover:text-violet">
              Privacy Policy
            </p>
            <p className="font-dm text-white font-light text-[16px] ml-[27px] mt-1 cursor-pointer hover:text-violet">
              Terms
            </p>
            <Image
              src="/twitter.svg"
              width={17}
              height={26}
              alt="twitter"
              className="ml-[30px] mb-1 cursor-pointer"
            />
            <Image
              src="/fbnoborder.svg"
              width={11}
              height={26}
              alt="facebook"
              className="ml-[29px] mb-1"
            />
            <Image
              src="/google.svg"
              width={24}
              height={26}
              alt="google"
              className="ml-[29px] mb-1"
            />
          </div>
        </div>
        <div className="flex flex-col border border-white opacity-30 w-[1169px] h-[2px] stroke-2 items-center justify-center mt-[46px]"></div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="font-dm text-white text-[16px] font-normal leading-7 cursor-pointer">
              Tour
            </p>
            <p className="font-dm text-white text-[16px] font-normal leading-7 ml-[29px] cursor-pointer">
              Features
            </p>
            <p className="font-dm text-white text-[16px] font-normal leading-7 ml-[29px] cursor-pointer">
              Pricing Plans
            </p>
            <p className="font-dm text-white text-[16px] font-normal leading-7 ml-[29px] cursor-pointer">
              Our Works
            </p>
            <p className="font-dm text-white text-[16px] font-normal leading-7 ml-[29px] cursor-pointer">
              Brands
            </p>
            <p className="font-dm text-white text-[16px] font-normal leading-7 ml-[29px] cursor-pointer">
              Contacts
            </p>
          </div>
          <div>
            <p className="font-dm text-white text-[16px] font-normal leading-7">
              © 2017 Designmodo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
