import Brands from "@/components/Brands";
import Grid from "@/components/Grid";
import Roadmap from "@/components/Roadmap";
import ThreeCards from "@/components/ThreeCards";
import VideoTop from "@/components/VideoTop";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  avisQuery,
  homeQuery,
  obstaclesQuery,
  roadmapQuery,
  trustmeQuery,
} from "@/sanity/lib/query";
import {
  Avis,
  HomeData,
  Obstacles,
  RoadmapType,
  TrustMe,
} from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 60;

export default async function Home() {
  const home: HomeData = await sanityFetch({
    query: homeQuery,
    tags: ["home"],
  });

  const trustme: TrustMe = await sanityFetch({
    query: trustmeQuery,
    tags: ["trustme"],
  });

  const obstacles: Obstacles = await sanityFetch({
    query: obstaclesQuery,
    tags: ["obstacles"],
  });

  const roadmapData: RoadmapType = await sanityFetch({
    query: roadmapQuery,
    tags: ["roadmap"],
  });

  const avis: Avis = await sanityFetch({
    query: avisQuery,
    tags: ["avis"],
  });

  return (
    <div>
      <Grid />
      <div className="relative z-10 flex gap-[100px] mt-[170px] justify-center items-center">
        <div className="max-w-[735px]">
          {home.image && (
            <Image src={home.image} alt={home.title} width={380} height={65} />
          )}
          <div className="h1 mt-[35px]">{home.title}</div>
          <div className="mt-[35px] text-[18px]">
            <PortableText value={home.description} />
          </div>
          <div className="mt-4 flex gap-8">
            {home.bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src="/icons/check.svg"
                  alt={"check"}
                  width={24}
                  height={24}
                />
                <p className="text-sm">{bullet}</p>
              </div>
            ))}
          </div>
          <button className="white-btn mt-[50px]">
            <a href={home.cta}>{home.button}</a>
          </button>
        </div>
        <div>
          <VideoTop videoUrl={home.video?.asset?.url} />
        </div>
      </div>
      <Brands />
      <div className="flex gap-3 justify-center mt-[135px]">
        <div className="flex justify-center flex-col p-[40px] max-w-[750px] rounded-2xl bg-white text-text-main">
          <PortableText value={trustme.richText1} />
          <p className="mt-[27px] h1">{trustme.title}</p>

          <div className="text-[#6B8DFF] mt-2">
            <PortableText value={trustme.richText2} />
          </div>
          <div>
            <div className="mt-6 flex gap-3">
              {trustme.points.map((point, index) => (
                <p
                  className="border border-[#004AAD] rounded-full px-4 py-2 text-sm"
                  key={index}
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
          {trustme.image1 && (
            <Image
              src={trustme.image1}
              alt={trustme.title}
              width={280}
              height={60}
              className="mt-6"
            />
          )}
          <div className="mt-1 flex gap-1">
            <Image src={"/stars.svg"} alt={"stars"} width={78} height={14} />
            <p className="text-black">{trustme.text}</p>
          </div>
        </div>
        {trustme.image2 && (
          <Image
            className="rounded-2xl"
            src={trustme.image2}
            alt={trustme.title}
            width={550}
            height={540}
          />
        )}
      </div>
      <div className="mt-[130px] flex flex-col justify-center items-center">
        <p className="h2">{obstacles.title}</p>
        <div className="p1 mt-6 text-center">
          <PortableText value={obstacles.description} />
        </div>
        <ThreeCards blocks={obstacles.blocks} />
        <button className="w-[450px] mt-[70px] white-btn">
          {obstacles.buttonText}
        </button>
        <Image
          src={trustme.image1}
          alt={trustme.title}
          width={280}
          height={60}
          className="mt-6"
        />
        <div className="mt-1 flex gap-1">
          <Image src={"/stars.svg"} alt={"stars"} width={78} height={14} />
          <p className="text-white">{trustme.text}</p>
        </div>
      </div>

      <Roadmap data={roadmapData} />
      <div className="flex justify-center">
        <button className="text-center w-[450px] white-btn">
          {roadmapData.buttonText}
        </button>
      </div>
      <div>
        <p>title</p>
        <div>array of image, name, description</div>
        <video src="video.url"></video>
        <div>array2 of image, name, description</div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col items-center">
{trustme.image1 && (
  <Image
    src={trustme.image1}
    alt={trustme.title}
    width={280}
    height={60}
    className="mt-6"
  />
)}
<div className="mt-1 flex gap-1">
  <Image src={"/stars.svg"} alt={"stars"} width={78} height={14} />
  <p className="text-black">{trustme.text}</p>
</div>
<p className="h2"></p>

<Testimonials />
</div> */
}
