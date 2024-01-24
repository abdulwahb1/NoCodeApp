/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <div className="w-full">
        <Image src="/image.png" alt="bg" width={1400} height={850} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center mb-[130px]">
        <p className="text-white font-dm text-[24px] not-italic -tracking-normal font-medium">
          Startup 3
        </p>
        <h1 className="text-white font-dm text-[72px] leading-[86px] tracking-wide font-medium mt-[28.8px]">
          Forget About Code
        </h1>
        <p className="font-dm text-[22px] w-[720px] h-[96px] text-white mt-[28.8px] leading-[32px] flex text-center">
          Startup Framework gives you complete freedom over your creative
          process — you don’t have to think about any technical aspects. There
          are no limits and absolutely no coding.
        </p>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center mt-[450px]">
        <button className="w-[240px] h-[60px] rounded-full bg-purple text-white font-dm text-[18px] font-normal ">
          Create an Account
        </button>
      </div>
    </section>
  );
};

export default Hero;
