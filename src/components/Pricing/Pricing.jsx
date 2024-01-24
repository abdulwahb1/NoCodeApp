import Image from "next/image";

const Pricing = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-spurple w-[1400px] h-[1130px] relative">
      <div className="w-full">
        <Image
          src="/pricebng.svg"
          width={1400}
          height={1130}
          alt="Pricing Background"
          className="relative opacity-60"
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute">
        <h1 className="text-white font-dm text-[42px] not-italic font-medium leading-[52px] tracking-wide">
          Plans & Pricing
        </h1>
        <p className="font-dm text-white text-[22px] not-italic font-normal leading-8 text-center w-[586px] h-[64px] mt-[30px]">
          Startup Framework is free forever — you only pay for <br />
          custom domain hosting or to export your site.
        </p>
        <div className="flex flex-row mt-[54px]">
          <div className="flex flex-col">
            <div className=" rounded-lg opacity-20 border border-white w-[370px] h-[730px]"></div>
            <div className="absolute">
              <p className="text-white font-dm text-[22px] not-italic font-normal leading-8 ml-[69px] mt-[64px]">
                Starter
              </p>
              <div className="flex flex-row mt-[22.6px] ml-[69px]">
                <p className="text-white font-dm not-italic text-[58px] font-semibold tracking-wide leading-[70px] ">
                  9.99
                </p>
                <span className="text-[16px] not-italic font-light font-dm text-white ml-[7px] mt-2">
                  $
                </span>
              </div>
              <div className="flex flex-col ml-[44px] mt-[48.2px]">
                <div className="flex flex-row">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    2 GB of space
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    14 days of backups
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Social integrations
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Client billing
                  </p>
                </div>
                <div className="flex flex-col ml-[27px] opacity-70">
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    Remote access
                  </p>
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    Custom domain
                  </p>
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    24 hours support
                  </p>
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    Admin tools
                  </p>
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    Collaboration tools
                  </p>
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    User management
                  </p>
                </div>
                <button className="border border-white border-opacity-30 rounded-full w-[230px] h-[60px] mt-[47.6px] ml-[27px]">
                  <span className="text-white font-dm text-[20px] font-normal">
                    {" "}
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded-lg ml-[30px] border-opacity-20 border border-white w-[370px] h-[730px]">
            <div className="absolute">
              <p className="text-white font-dm text-[22px] not-italic font-normal leading-8 ml-[69px] mt-[64px]">
                Professional
              </p>
              <div className="flex flex-row mt-[22.6px] ml-[69px]">
                <p className="text-white font-dm not-italic text-[58px] font-semibold tracking-wide leading-[70px] ">
                  19.99
                </p>
                <span className="text-[16px] not-italic font-light font-dm text-white ml-[7px] mt-2">
                  $
                </span>
              </div>
              <div className="flex flex-col ml-[44px] mt-[48.2px]">
                <div className="flex flex-row">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    2 GB of space
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    14 days of backups
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Social integrations
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Client billing
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Remote access
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Custom domain
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    24 hours support
                  </p>
                </div>
                <div className="flex flex-col ml-[27px] opacity-70">
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    Admin tools
                  </p>
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    Collaboration tools
                  </p>
                  <p className="text-[16px] font-dm font-light not-italic text-white  mt-[10px]">
                    User management
                  </p>
                </div>
                <button className=" rounded-full w-[230px] h-[60px] mt-[47.6px] ml-[27px] bg-pink">
                  <span className="text-white font-dm text-[20px] font-normal">
                    {" "}
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded-lg ml-[30px] border-opacity-20 border border-white w-[370px] h-[730px]">
            <div className="absolute">
              <p className="text-white font-dm text-[22px] not-italic font-normal leading-8 ml-[69px] mt-[64px]">
                Team
              </p>
              <div className="flex flex-row mt-[22.6px] ml-[69px]">
                <p className="text-white font-dm not-italic text-[58px] font-semibold tracking-wide leading-[70px] ">
                  49.99
                </p>
                <span className="text-[16px] not-italic font-light font-dm text-white ml-[7px] mt-2">
                  $
                </span>
              </div>
              <div className="flex flex-col ml-[44px] mt-[48.2px]">
                <div className="flex flex-row">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    2 GB of space
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    14 days of backups
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Social integrations
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Client billing
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Remote access
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Custom domain
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    24 hours support
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Admin tools
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    Collaboration tools
                  </p>
                </div>
                <div className="flex flex-row mt-[10px]">
                  <Image src="/check.svg" width={12} height={8} alt="Check" />
                  <p className="text-[16px] font-dm font-light not-italic text-white ml-[15px]">
                    User management
                  </p>
                </div>
                <button className="border border-white border-opacity-30 rounded-full w-[230px] h-[60px] mt-[47.6px] ml-[27px]">
                  <span className="text-white font-dm text-[20px] font-normal">
                    {" "}
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
