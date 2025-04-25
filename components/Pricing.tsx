import { sanityFetch } from "@/sanity/lib/fetch";
import { trustmeQuery } from "@/sanity/lib/query";
import { Offre, TrustMe } from "@/sanity/lib/type";
import Image from "next/image";
import Link from "next/link";
import Brands from "./Brands";
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
            <Link href="#call">
              <button>button</button>
            </Link>
          </div>

          <div className="mt-8">
            <Brands />
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="z-10 absolute -top-4 -left-2 px-4 py-2 bg-white border border-black rotate-[-25deg]">
            <p className="text-sm">{price?.titleAvis}</p>
          </div>
          <VideoTopAvis videoUrl={"ZGKBM4k8sCc"} />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block mb-[100px] mt-[100px]">
        <div className="flex w-full gap-16 items-center justify-center">
          <div className="w-[700px] p-[40px] flex flex-col border border-[#FFFFFF] rounded-2xl">
            <div className="h2 flex items-center gap-2">
              <p>
                {price?.title.split(" ").slice(0, -2).join(" ")}
                <span
                  style={{ bottom: 0, height: "60%" }}
                  className="highlighted-text highlighted-text-custom"
                >
                  {price?.title.split(" ").slice(-2).join(" ")}
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
                  <button className="white-btn w-[330px]">
                    {price?.textButton}
                  </button>
                </Link>
              </div>
              <div className="flex gap-3 justify-start items-center mt-4 mb-[20px]">
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
          <div className="relative w-[400px]">
            <p className="h4 mb-[50px] text-center w-[370px] m-auto">
              <div className="flex flex-wrap justify-center">
                <p>{price?.titleAvis.split(" ").slice(0, -5).join(" ")}</p>
                <p className="highlighted-text">
                  {price?.titleAvis.split(" ").slice(-5).join(" ")}
                </p>
              </div>
            </p>
            <div className="relative">
              <div className="z-10 absolute -top-4 -left-6 px-4 py-2 bg-[#004AAD] border border-white rounded-full rotate-[-25deg]">
                <p>Avis clients</p>
              </div>

              <VideoTopAvis videoUrl={"ZGKBM4k8sCc"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
