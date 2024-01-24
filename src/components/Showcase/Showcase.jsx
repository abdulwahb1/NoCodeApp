import Image from "next/image";

const Showcase = () => {
  return (
    <section className="flex flex-col bg-black w-[1400px] h-[1050px]">
      <div className="flex flex-row justify-evenly mt-[100px]">
        <h1 className="font-dm text-white font-normal text-[42px] mt-[-10px]">
          Last works
        </h1>
        <button className="border border-white border-opacity-30 rounded-full w-[170px] h-[50px] ml-[390px]">
          <span className="text-white font-dm text-[20px] font-normal">
            {" "}
            View All Works
          </span>
        </button>
      </div>
      <div className="flex flex-row mt-[53px] justify-items-center w-[970px] flex-wrap ml-[215px]">
        <div className="flex flex-col items-center">
          <Image src="/port1.png" width={470} height={280} alt="portfolio" />
          <p className="font-dm text-white font-normal text-[14px] uppercase mt-[30px]">
            UI kit
          </p>
          <p className="font-dm text-white font-normal text-[22px]">
            Mozart Project
          </p>
        </div>
        <div className="flex flex-col items-center ml-[30px]">
          <Image src="/port2.png" width={470} height={280} alt="portfolio" />
          <p className="font-dm text-white font-normal text-[14px] uppercase mt-[30px]">
            UI kit
          </p>
          <p className="font-dm text-white font-normal text-[22px]">
            Mozart Project
          </p>
        </div>
        <div className="flex flex-col items-center mt-[74px]">
          <Image src="/port3.png" width={470} height={280} alt="portfolio" />
          <p className="font-dm text-white font-normal text-[14px] uppercase mt-[30px]">
            UI kit
          </p>
          <p className="font-dm text-white font-normal text-[22px]">
            Mozart Project
          </p>
        </div>
        <div className="flex flex-col items-center ml-[30px] mt-[74px]">
          <Image src="/port4.png" width={470} height={280} alt="portfolio" />
          <p className="font-dm text-white font-normal text-[14px] uppercase mt-[30px]">
            UI kit
          </p>
          <p className="font-dm text-white font-normal text-[22px]">
            Mozart Project
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
