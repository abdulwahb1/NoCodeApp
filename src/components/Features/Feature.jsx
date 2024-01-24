import Image from "next/image";

const Feature = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div
        className="bg-cover bg-center w-[1400px] h-[736px]"
        style={{ backgroundImage: 'url("/featurebg.png")' }}
      >
        <div className="flex flex-row mr-0">
          <Image
            src="/laptop.png"
            width={500}
            height={500}
            alt="laptop"
            className="mt-[100px]"
          />
          <div className="flex flex-col items-center justify-center ml-[28px] mt-[70px] ">
            <h2 className="text-white w-[532px] h-[52px] font-dm text-[42px] font-bold leading-[52px] tracking-wide">
              We Create Something New
            </h2>
            <p className="font-dm w-[532px] h-[96px] text-white text-[22px] leading-[32px] mt-[20px]">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
            <div className="flex flex-row mt-[66px]">
              <div className="flex flex-col">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.9139 34.6139V11.7855C34.9139 11.6037 34.844 11.4498 34.7041 11.3239C34.5782 11.1841 34.4243 11.1141 34.2425 11.1141H11.4142C11.2323 11.1141 11.0715 11.1841 10.9316 11.3239C10.8057 11.4498 10.7427 11.6037 10.7427 11.7855V34.6139C10.7427 34.7957 10.8057 34.9496 10.9316 35.0755C11.0715 35.2154 11.2323 35.2853 11.4142 35.2853H34.2425C34.4243 35.2853 34.5782 35.2154 34.7041 35.0755C34.844 34.9496 34.9139 34.7957 34.9139 34.6139ZM37.5996 11.7855V34.6139C37.5996 35.5371 37.2709 36.3274 36.6135 36.9848C35.956 37.6423 35.1657 37.971 34.2425 37.971H11.4142C10.491 37.971 9.70064 37.6423 9.04321 36.9848C8.38578 36.3274 8.05706 35.5371 8.05706 34.6139V11.7855C8.05706 10.8623 8.38578 10.072 9.04321 9.41458C9.70064 8.75715 10.491 8.42843 11.4142 8.42843H34.2425C35.1657 8.42843 35.956 8.75715 36.6135 9.41458C37.2709 10.072 37.5996 10.8623 37.5996 11.7855ZM29.5426 3.72848V7.08559H26.8569V3.72848C26.8569 3.54664 26.7869 3.39277 26.647 3.26688C26.5212 3.127 26.3673 3.05706 26.1854 3.05706H3.35711C3.17526 3.05706 3.0144 3.127 2.87452 3.26688C2.74863 3.39277 2.68569 3.54664 2.68569 3.72848V26.5568C2.68569 26.7387 2.74863 26.8995 2.87452 27.0394C3.0144 27.1653 3.17526 27.2282 3.35711 27.2282H6.71422V29.9139H3.35711C2.4339 29.9139 1.64358 29.5852 0.98615 28.9278C0.328717 28.2703 0 27.48 0 26.5568V3.72848C0 2.80527 0.328717 2.01495 0.98615 1.35752C1.64358 0.700087 2.4339 0.37137 3.35711 0.37137H26.1854C27.1086 0.37137 27.899 0.700087 28.5564 1.35752C29.2138 2.01495 29.5426 2.80527 29.5426 3.72848Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[14px] font-dm font-normal tracking-wider uppercase leading-6 text-white mt-[30px]">
                  30 New feature pages
                </p>
                <p className="font-dm text-white text-[16px] font-normal leading-6 w-[200] h-[78px] mt-[16.2px]">
                  Startup Framework contains <br /> components and complex
                  blocks <br />
                  which can easily.
                </p>
              </div>
              <div className="flex flex-col ml-[30px]">
                <svg
                  width="44"
                  height="35"
                  viewBox="0 0 44 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.44817 13.4855L18.5199 27.4385L12.2253 13.4855H5.44817ZM22.4855 29.6835L29.8082 13.4855H15.1628L22.4855 29.6835ZM12.2883 10.7998L16.5686 2.74274H11.0713L5.02853 10.7998H12.2883ZM26.4511 27.4385L39.5228 13.4855H32.7457L26.4511 27.4385ZM15.3307 10.7998H29.6403L25.36 2.74274H19.611L15.3307 10.7998ZM32.6827 10.7998H39.9425L33.8997 2.74274H28.4024L32.6827 10.7998ZM35.6412 0.602589L43.6982 11.3453C43.894 11.5971 43.985 11.8909 43.971 12.2266C43.957 12.5483 43.8381 12.8281 43.6143 13.0659L23.4716 34.5513C23.2199 34.8311 22.8911 34.971 22.4855 34.971C22.0798 34.971 21.7511 34.8311 21.4993 34.5513L1.35669 13.0659C1.13289 12.8281 1.01399 12.5483 1 12.2266C0.986012 11.8909 1.07693 11.5971 1.27277 11.3453L9.32982 0.602589C9.58161 0.238901 9.9383 0.0570576 10.3999 0.0570576H34.5711C35.0327 0.0570576 35.3894 0.238901 35.6412 0.602589Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[14px] font-dm font-normal tracking-wider uppercase leading-6 text-white mt-[30px]">
                  Useful Symbol Components
                </p>
                <p className="font-dm text-white text-[16px] font-normal leading-6 w-[200] h-[78px] mt-[16.2px]">
                  Samples will show you the feeling on <br />
                  how to play around using the <br />
                  components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
