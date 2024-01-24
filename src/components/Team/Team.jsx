import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section className="flex flex-col bg-dpurple w-[1400px] h-[992px] items-center">
      <div className="flex flex-col mt-[100px] w-[880px] h-[96px]">
        <h1 className="text-4xl text-center text-white font-bold font-dm">
          Startup Crew
        </h1>
        <p className="text-[22px] font-dm text-white font-light mt-[31px] leading-8 ml-5">
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </p>
      </div>
      <div className="flex flex-row mt-[150px] flex-wrap w-[848px]">
        <div className="flex flex-col">
          <Image
            src="/p1.svg"
            width={100}
            height={100}
            alt="Picture of crew member"
          />
          <p className="font-dm text-[22px] font-light leading-8 text-white mt-[17px] ml-[5px]">
            Leah Saloman
          </p>
          <p className="font-dm text-[16px] font-light leading-8 text-white mt-[8.2px] ml-[5px]">
            UI Designer
          </p>
          <div className="flex flex-row ml-1 mt-[20px]">
            <Link href="/">
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt="Twitter logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/facebook.png"
                width={20}
                height={20}
                alt="Facebook logo"
                className="ml-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.png"
                width={20}
                height={20}
                alt="instagram logo"
                className="ml-[20px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-[200px]">
          <Image
            src="/p2.svg"
            width={100}
            height={100}
            alt="Picture of crew member"
          />
          <p className="font-dm text-[22px] font-light leading-8 text-white mt-[17px] ml-[5px]">
            Colin Timmons
          </p>
          <p className="font-dm text-[16px] font-light leading-8 text-white mt-[8.2px] ml-[5px]">
            UX Designer
          </p>
          <div className="flex flex-row ml-1 mt-[20px]">
            <Link href="/">
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt="Twitter logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/facebook.png"
                width={20}
                height={20}
                alt="Facebook logo"
                className="ml-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.png"
                width={20}
                height={20}
                alt="instagram logo"
                className="ml-[20px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-[200px]">
          <Image
            src="/p3.svg"
            width={100}
            height={100}
            alt="Picture of crew member"
          />
          <p className="font-dm text-[22px] font-light leading-8 text-white mt-[17px] ml-[5px]">
            Miguel Osborne
          </p>
          <p className="font-dm text-[16px] font-light leading-8 text-white mt-[8.2px] ml-[5px]">
            Frontend Developer
          </p>
          <div className="flex flex-row ml-1 mt-[20px]">
            <Link href="/">
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt="Twitter logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/facebook.png"
                width={20}
                height={20}
                alt="Facebook logo"
                className="ml-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.png"
                width={20}
                height={20}
                alt="instagram logo"
                className="ml-[20px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-[60.8px]">
          <Image
            src="/p4.svg"
            width={100}
            height={100}
            alt="Picture of crew member"
          />
          <p className="font-dm text-[22px] font-light leading-8 text-white mt-[17px] ml-[5px]">
            Taylor Simon
          </p>
          <p className="font-dm text-[16px] font-light leading-8 text-white mt-[8.2px] ml-[5px]">
            Product Manager
          </p>
          <div className="flex flex-row ml-1 mt-[20px]">
            <Link href="/">
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt="Twitter logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/facebook.png"
                width={20}
                height={20}
                alt="Facebook logo"
                className="ml-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.png"
                width={20}
                height={20}
                alt="instagram logo"
                className="ml-[20px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-[200px] mt-[60.8px] ">
          <Image
            src="/p5.svg"
            width={100}
            height={100}
            alt="Picture of crew member"
          />
          <p className="font-dm text-[22px] font-light leading-8 text-white mt-[17px] ml-[5px]">
            Steven MacAlister
          </p>
          <p className="font-dm text-[16px] font-light leading-8 text-white mt-[8.2px] ml-[5px]">
            Copywriter
          </p>
          <div className="flex flex-row ml-1 mt-[20px]">
            <Link href="/">
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt="Twitter logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/facebook.png"
                width={20}
                height={20}
                alt="Facebook logo"
                className="ml-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.png"
                width={20}
                height={20}
                alt="instagram logo"
                className="ml-[20px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
