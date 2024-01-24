import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="flex flex-col w-[1400px] h-[800px] bg-vdpurple">
      <div className="flex flex-col mt-[100px] ml-[215px]">
        <h1 className="font-dm text-white text-[42px] font-normal">
          Our Happy Clients
        </h1>
        <div className="flex flex-row w-[970px] mt-[40px] flex-wrap">
          <div className="border border-white border-opacity-50 rounded-xl w-[470px] h-[237px]">
            <div className="flex flex-row ml-[35px] mt-[36px]">
              <div className="relative">
                <Image
                  src="/client1.png"
                  width={70}
                  height={70}
                  alt="client"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="w-[307px] font-dm font-light leading-7 text-white ml-[30px]">
                  Get a fully retina ready site when you build with Startup
                  Framework. Websites look sharper and more gorgeous on devices
                  with retina display support
                </p>
                <p className="text-white font-dm font-light opacity-30 uppercase leading-7 ml-[30px] mt-[13px]">
                  Rayhan Curran
                </p>
              </div>
            </div>
          </div>
          <div className="border border-white border-opacity-50 rounded-xl w-[470px] h-[237px] ml-[30px]">
            <div className="flex flex-row ml-[35px] mt-[36px]">
              <div className="relative">
                <Image
                  src="/client2.png"
                  width={70}
                  height={70}
                  alt="client"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="w-[307px] font-dm font-light leading-7 text-white ml-[30px]">
                  As a business targeting high net worth individuals, we were
                  looking for a slick, cool and mini-malistic design for our
                  website
                </p>
                <p className="text-white font-dm font-light opacity-30 uppercase leading-7 ml-[30px] mt-[41px]">
                  Kayley Frame
                </p>
              </div>
            </div>
          </div>
          <div className="border border-white border-opacity-50 rounded-xl w-[470px] h-[237px] mt-[30px]">
            <div className="flex flex-row ml-[35px] mt-[36px]">
              <div className="relative">
                <Image
                  src="/client3.png"
                  width={70}
                  height={70}
                  alt="client"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="w-[307px] font-dm font-light leading-7 text-white ml-[30px]">
                  The most important part of the Startup Framework is the
                  samples
                </p>
                <p className="text-white font-dm font-light opacity-30 uppercase leading-7 ml-[30px] mt-[97px]">
                  Gene Whitfield
                </p>
              </div>
            </div>
          </div>
          <div className="border border-white border-opacity-50 rounded-xl w-[470px] h-[237px] ml-[30px] mt-[30px]">
            <div className="flex flex-row ml-[35px] mt-[36px]">
              <div className="relative">
                <Image
                  src="/client4.png"
                  width={70}
                  height={70}
                  alt="client"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="w-[307px] font-dm font-light leading-7 text-white ml-[30px]">
                  I’ve built my website with Startup just in one day, and it was
                  ready-to-go.
                </p>
                <p className="text-white font-dm font-light opacity-30 uppercase leading-7 ml-[29px] mt-[69px]">
                  Allan Kim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
