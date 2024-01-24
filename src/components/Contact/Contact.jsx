import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="flex flex-row items-center justify-center">
      <div className="w-full opacity-90">
        <Image src="/contactbg.png" width={1400} height={770} alt="contactbg" />
      </div>
      <div className="absolute flex flex-row">
        <div className="flex flex-col mt-10">
          <p className="font-dm text-white text-[42px] font-normal leading-[52px] tracking-wide">
            Let’s Keep in Touch
          </p>
          <p className="font-dm text-white text-[22px] font-normal leading-8 w-[399px] mt-[28px]">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
          <div className="flex flex-row w-[271px] flex-wrap mt-[53.2px]">
            <div className="flex">
              <div>
                <Image
                  src="/icon-phone.png"
                  width={15}
                  height={38}
                  alt="phone"
                />
              </div>
              <p className="font-dm text-white font-normal text-[16px] leading-[26px] ml-[15px] mt-[-2px] cursor-pointer tracking-wider">
                +1 555 505 5050
              </p>
            </div>
            <div className="flex mt-[32px]">
              <div>
                <Image
                  src="/icon-envelope.png"
                  width={15}
                  height={38}
                  alt="phone"
                />
              </div>
              <p className="font-dm text-white font-normal text-[16px] leading-[26px] ml-[15px] mt-[-2px]">
                info@designmodo.com
              </p>
            </div>
            <div className="flex mt-[32px]">
              <div>
                <Image
                  src="/icon-building.png"
                  width={15}
                  height={38}
                  alt="phone"
                />
              </div>
              <p className="font-dm text-white font-normal text-[16px] leading-[26px] ml-[15px] mt-[-2px] w-[252px]">
                San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                230909
              </p>
            </div>
          </div>
        </div>
        <div className="w-[470px] h-[570px] bg-white rounded-xl ml-[99px]">
          <div className="flex flex-col ml-[40px] mt-[40px]">
            <div className="flex flex-row justify-between">
              <p className="font-dm text-violet font-bold text-[16px] leading-[26px]">
                Your Name
              </p>
              <p className="font-dm text-violet font-bold text-[16px] leading-[26px] mr-[151px]">
                Budget
              </p>
            </div>
            <div className="flex flex-row w-[200px]">
              <input
                type="text"
                className="border border-black border-opacity-30 rounded-full w-[390px] h-[50px] mt-[10px] pl-[20px] font-dm text-black font-normal text-[16px] leading-[26px]"
                placeholder="Your Name"
              />
              <div className="ml-[30px]">
                <select
                  name=""
                  id=""
                  className="border border-black border-opacity-30 rounded-full w-[150px] h-[50px] mt-[10px] pl-[20px] pr-[20px] font-dm text-black text-[16px] leading-[26px] text-violet font-semibold"
                >
                  <option value="500$">100$</option>
                  <option value="500$">200$</option>
                  <option value="500$">300$</option>
                  <option value="500$">400$</option>
                </select>
              </div>
            </div>
            <p className="font-dm text-black font-bold text-[16px] leading-[26px] mt-[30px] text-violet">
              Your Email
            </p>
            <input
              type="text"
              className="border border-black border-opacity-30 rounded-full w-[390px] h-[50px] mt-[10px] pl-[20px] font-dm text-black font-normal text-[16px] leading-[26px]"
              placeholder="email@.com"
            />
            <p className="font-dm text-black font-bold text-[16px] leading-[26px] mt-[30px] text-violet">
              Your Message
            </p>
            <textarea
              type="text"
              className="border border-black border-opacity-30 rounded-xl w-[390px] h-[150px] mt-[10px] pl-[20px] font-dm text-black font-normal text-[16px] leading-[26px] max-h-[150px]  placeholder:pr-[100px] pt-2"
              placeholder="Message"
            />
            <div className="flex flex-row justify-between">
              <div class="inline-flex items-center mt-5">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-purple-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-purple checked:before:bg-white hover:before:opacity-10"
                    id="check"
                  />
                  <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-dm font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="check"
                >
                  Send me a copy
                </label>
              </div>

              <button className=" rounded-full w-[120px] h-[50px] mt-[30px] mr-[38px] bg-blue text-white font-dm">
                <span className="text-black font-dm text-[20px] font-normal">
                  {" "}
                  Send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
