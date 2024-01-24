import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-dpurple w-[1400px] h-[992px]">
      <div className="flex flex-col w-[764px] text-center">
        <h1 className="text-4xl text-center text-white font-bold font-dm">
          Startup Crew
        </h1>
        <p className="text-[22px] font-dm text-white font-light mt-[31px] leading-8 ml-5">
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </p>
      </div>
      <div className="flex flex-row w-[700px] h-[543px] flex-wrap mt-[70px]">
        <div className="flex flex-col">
          <Image
            src="/p1.svg"
            width={100}
            height={100}
            alt="Picture of the team"
          />
          <div className="flex flex-col">
            <p className="font-dm text-white font-medium text-[22px] mt-[17px]">
              Leah Salomon
            </p>
            <p className="font-dm text-white font-normal text-[16px] mt-[8.2px]">
              UI Designer
            </p>
            <div className="flex flex-row mt-[20px]">
              <Image
                src="/twitter.svg"
                width={17}
                height={38}
                alt=" twitter icon"
              />
              <Image
                src="/facebook.png"
                width={17}
                height={38}
                alt=" facebook icon"
                className="ml-[20px]"
              />
              <Image
                src="/instagram.png"
                width={17}
                height={38}
                alt="ig icon"
                className="ml-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-[100px]">
          <Image
            src="/p2.svg"
            width={100}
            height={100}
            alt="Picture of the team"
          />
          <div className="flex flex-col">
            <p className="font-dm text-white font-medium text-[22px] mt-[17px]">
              Colin Timmons
            </p>
            <p className="font-dm text-white font-normal text-[16px] mt-[8.2px]">
              UX Designer
            </p>
            <div className="flex flex-row mt-[20px]">
              <Image
                src="/twitter.svg"
                width={17}
                height={38}
                alt=" twitter icon"
              />
              <Image
                src="/facebook.png"
                width={17}
                height={38}
                alt=" facebook icon"
                className="ml-[20px]"
              />
              <Image
                src="/instagram.png"
                width={17}
                height={38}
                alt="ig icon"
                className="ml-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-[100px]">
          <Image
            src="/p3.svg"
            width={100}
            height={100}
            alt="Picture of the team"
          />
          <div className="flex flex-col">
            <p className="font-dm text-white font-medium text-[22px] mt-[17px]">
              Miguel Osborne
            </p>
            <p className="font-dm text-white font-normal text-[16px] mt-[8.2px]">
              Frontend Developer
            </p>
            <div className="flex flex-row mt-[20px]">
              <Image
                src="/twitter.svg"
                width={17}
                height={38}
                alt=" twitter icon"
              />
              <Image
                src="/facebook.png"
                width={17}
                height={38}
                alt=" facebook icon"
                className="ml-[20px]"
              />
              <Image
                src="/instagram.png"
                width={17}
                height={38}
                alt="ig icon"
                className="ml-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/p4.svg"
            width={100}
            height={100}
            alt="Picture of the team"
          />
          <div className="flex flex-col">
            <p className="font-dm text-white font-medium text-[22px] mt-[17px]">
              Taylor Simon
            </p>
            <p className="font-dm text-white font-normal text-[16px] mt-[8.2px]">
              Product Manager
            </p>
            <div className="flex flex-row mt-[20px]">
              <Image
                src="/twitter.svg"
                width={17}
                height={38}
                alt=" twitter icon"
              />
              <Image
                src="/facebook.png"
                width={17}
                height={38}
                alt=" facebook icon"
                className="ml-[20px]"
              />
              <Image
                src="/instagram.png"
                width={17}
                height={38}
                alt="ig icon"
                className="ml-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-[100px]">
          <Image
            src="/p5.svg"
            width={100}
            height={100}
            alt="Picture of the team"
          />
          <div className="flex flex-col">
            <p className="font-dm text-white font-medium text-[22px] mt-[17px]">
              Steven MacAlister
            </p>
            <p className="font-dm text-white font-normal text-[16px] mt-[8.2px]">
              Copywriter
            </p>
            <div className="flex flex-row mt-[20px]">
              <Image
                src="/twitter.svg"
                width={17}
                height={38}
                alt=" twitter icon"
              />
              <Image
                src="/facebook.png"
                width={17}
                height={38}
                alt=" facebook icon"
                className="ml-[20px]"
              />
              <Image
                src="/instagram.png"
                width={17}
                height={38}
                alt="ig icon"
                className="ml-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
