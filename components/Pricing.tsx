import { sanityFetch } from "@/sanity/lib/fetch";
import { trustmeQuery } from "@/sanity/lib/query";
import { Offre, TrustMe } from "@/sanity/lib/type";
import Image from "next/image";
import Brands from "./Brands";
import BrandsPrice from "./BrandsPrice";
import VideoTop from "./VideoTop";

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
      {/* Mobile View */}
      <div className="lg:hidden mt-8">
        <div className="p-6 border border-[#121212]">
          <p className="h2">{price?.title}</p>
          <p className="text-[18px] text-[#6B8DFF]">{price?.title2}</p>

          <div className="mt-6 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <p className="font-cabin">{price?.sub1}</p>
                <span className="h-[1px] flex-1 bg-[#12121220]"></span>
              </div>
              <div className="mt-4 space-y-3">
                {price?.sub1List.map((desc, index) => (
                  <p
                    key={index}
                    className="font-extralight flex items-start gap-2"
                  >
                    <Image
                      src="logoStep.svg"
                      width={20}
                      height={20}
                      alt="logo"
                      className="mt-1"
                    />
                    <span>{desc}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <p className="font-cabin">{price?.sub2}</p>
                <span className="h-[1px] flex-1 bg-[#12121220]"></span>
              </div>
              <div className="mt-4 space-y-3">
                {price?.sub2List.map((desc, index) => (
                  <p
                    key={index}
                    className="font-extralight flex items-start gap-2"
                  >
                    <Image
                      src="logoStep.svg"
                      width={20}
                      height={20}
                      alt="logo"
                      className="mt-1"
                    />
                    <span>{desc}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button>button</button>
          </div>

          <div className="mt-8">
            <Brands />
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="z-10 absolute -top-4 -left-2 px-4 py-2 bg-white border border-black rotate-[-25deg]">
            <p className="text-sm">{price?.titleAvis}</p>
          </div>
          <VideoTop videoUrl={price?.videoAvis} />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block mb-[50px] mt-[80px]">
        <div className="flex gap-16 w-full items-center justify-around">
          <div className="w-[700px] p-[40px] flex flex-col border border-[#FFFFFF] rounded-2xl">
            <p className="h2">{price?.title}</p>
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
                <button className="white-btn w-[330px]">
                  {price?.textButton}
                </button>
              </div>
              <div className="flex gap-3 justify-center items-center mt-4">
                <Image
                  src={trustme.image1}
                  alt={trustme.title}
                  width={280}
                  height={60}
                />
                <p className="text-white">
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
          <div className="relative">
            <div className="z-10 absolute -top-4 -left-6 px-4 py-2 bg-white border border-black rotate-[-25deg]">
              <p>{price?.titleAvis}</p>
            </div>
            <VideoTop videoUrl={price?.videoAvis} />
          </div>
        </div>
      </div>
    </div>
  );
}
