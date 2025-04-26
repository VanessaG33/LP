import { sanityFetch } from "@/sanity/lib/fetch";
import { trustmeQuery } from "@/sanity/lib/query";
import { Offre, TrustMe } from "@/sanity/lib/type";
import Image from "next/image";
import Link from "next/link";
import BrandsPrice from "./BrandsPrice";
import VideoTopAvis from "./VideoTopAvis";

interface PricingProps {
  price?: Offre;
}

export default async function Pricing({ price }: PricingProps) {
  const trustme: TrustMe = await sanityFetch({
    query: trustmeQuery,
    tags: ["trustme"],
  });
  return (
    <div className="px-4 lg:px-[30px] m-auto">
      {/* Desktop View */}
      <div className="block mb-[20px] lg:mb-[100px] mt-[100px]">
        <div className="flex flex-col lg:flex-row  w-full gap-16 items-center justify-center">
          <div className="w-full lg:w-[700px] p-[26px] lg:p-[40px] flex flex-col border border-[#FFFFFF] rounded-2xl">
            <div className="h2 flex flex-col items-start gap-2">
              <p>{price?.title}</p>
              <p className="h4">
                {price?.titleSecond.split(" ").slice(0, -1).join(" ")}
                <span className="highlighted-text">
                  {price?.titleSecond.split(" ").slice(-1).join(" ")}
                </span>
              </p>
            </div>
            <p className="mt-[25px] text-[18px] text-[#6B8DFF]">
              {price?.title2}
            </p>
            <div className="mt-[30px]">
              <div className="flex items-center gap-4">
                <p className="h5">{price?.sub1}</p>
                <span className="h-[1px] w-[90px] bg-[#444]"></span>
              </div>
              <div className="mt-5 flex gap-4 flex-col">
                {price?.sub1List.map((desc, index) => (
                  <p key={index} className="text-sm font-[600] flex gap-2">
                    <Image
                      src="/icons/check.svg"
                      width={16}
                      height={16}
                      alt="logo"
                    />
                    {desc}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-6">
                <p className="h5">{price?.sub2}</p>
                <span className="h-[1px] w-[90px] bg-[#444]"></span>
              </div>
              <div className="mt-5 flex gap-4 flex-col">
                {price?.sub2List.map((desc, index) => (
                  <p key={index} className="text-sm font-[600] flex gap-2">
                    <Image
                      src="/icons/check.svg"
                      width={16}
                      height={16}
                      alt="logo"
                    />
                    {desc}
                  </p>
                ))}
              </div>

              <div className="mt-12">
                <Link href="#call">
                  <button className="!min-w-[300px] white-btn lg:w-[330px]">
                    {price?.textButton}
                  </button>
                </Link>
              </div>
              <div className="items-baseline flex flex-col lg:flex-row gap-3 justify-start lg:items-center mt-6 lg:mt-4 mb-[20px]">
                <Image
                  src={trustme.image1}
                  alt={trustme.title}
                  width={280}
                  height={60}
                  className="w-[140px] lg:w-auto"
                />
                <p className="flex lg:block gap-2 items-center text-white text-xs lg:text-base">
                  <Image
                    src={"/stars.svg"}
                    alt={"stars"}
                    width={78}
                    height={14}
                  />
                  {trustme.text}
                </p>
              </div>
              <div className="mt-4 w-full">
                <BrandsPrice />
              </div>
            </div>
          </div>
          <div className="relative w-[400px]">
            <p className="h4 h4-custom mb-[50px] text-center w-[370px] m-auto">
              {price?.titleAvis.split(" ").slice(0, -5).join(" ")}
              <span className="highlighted-text">
                {price?.titleAvis.split(" ").slice(-5).join(" ")}
              </span>
            </p>
            <div className="relative">
              <div className="hidden lg:block z-10 absolute -top-4 -left-6 px-4 py-2 bg-[#004AAD] border border-white rounded-full rotate-[-25deg]">
                <p>Avis clients</p>
              </div>
              <div className="px-4 lg:px-none mt-[30px] lg:w-[400px] h-[650px]">
                <VideoTopAvis videoUrl={"ZGKBM4k8sCc"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
