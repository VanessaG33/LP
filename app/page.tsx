import Brands from "@/components/Brands";
import BrandsPrice from "@/components/BrandsPrice";
import Faq from "@/components/Faq";
import Grid from "@/components/Grid";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Features from "@/components/ui/features-vertical";
import { Testimonials } from "@/components/ui/testimonials";
import VideoTop from "@/components/VideoTop";
import VideoTopAvis from "@/components/VideoTopAvis";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  avisQuery,
  faqQuery,
  homeQuery,
  howItWorksQuery,
  obstaclesQuery,
  offreQuery,
  roadmapQuery,
  startNowQuery,
  trustmeQuery,
} from "@/sanity/lib/query";
import {
  Avis,
  FaqType,
  HomeData,
  HowItWorks,
  Obstacles,
  Offre,
  RoadmapType,
  StartNow,
  TrustMe,
} from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;

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

  const priceData: Offre = await sanityFetch({
    query: offreQuery,
    tags: ["offre"],
  });

  const faqData: FaqType = await sanityFetch({
    query: faqQuery,
    tags: ["faq"],
  });

  const startNow: StartNow = await sanityFetch({
    query: startNowQuery,
    tags: ["startNow"],
  });

  const howItWorks: HowItWorks = await sanityFetch({
    query: howItWorksQuery,
    tags: ["howItWorks"],
  });

  return (
    <div>
      <Grid />
      <div className="px-2 lg:px-none1 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-[100px] mt-[100px] lg:mt-[170px] justify-center items-center">
        <div className="w-full lg:max-w-[735px] flex flex-col items-center lg:block">
          {home.image && (
            <Image src={home.image} alt={home.title} width={380} height={65} />
          )}
          <div className="lg:max-w-[700px] h2 flex gap-2 items-center flex-wrap mt-[35px] lg:mb-[32px]">
            <p>Lance ta</p> <p className="highlighted-text">conciergerie</p>
            <p>Airbnb en 8 semaines et signe</p>
            <p> ton premier client avec </p>
            <p className="highlighted-text">assurance</p>
          </div>
          <div className="mt-2 text-[18px]">
            <PortableText value={home.description} />
          </div>
          <div className="mt-4 flex gap-8 flex-wrap">
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
          <Link href="#call">
            <button className="white-btn mt-[50px]">{home.button}</button>
          </Link>
        </div>
        <div>
          <VideoTop videoUrl={"https://www.youtube.com/watch?v=dIRIYCt6g8Y"} />
        </div>
      </div>
      <Brands />
      <div className="px-4 lg:px-none flex flex-col lg:flex-row gap-[32px] lg:gap-3 justify-center mt-[60px] lg:mt-[135px]">
        <div className="pt-6 lg:pt-none flex justify-center flex-col p-4 lg:p-[40px] max-w-[750px] rounded-2xl bg-white text-text-main">
          <PortableText value={trustme.richText1} />
          <p className=" mt-[11px] lg:mt-[27px] h1">{trustme.title}</p>
          <div className="text-[#6B8DFF] mt-2">
            <PortableText value={trustme.richText2} />
          </div>
          <div>
            <div className="mt-6 flex gap-3 flex-wrap">
              {trustme.points.map((point, index) => (
                <p
                  className="border border-[#004AAD] rounded-full px-4 py-2 text-xs lg:text-sm "
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
          <div className="pt-6 lg:pt-none mt-1 flex gap-1">
            <Image src={"/stars.svg"} alt={"stars"} width={78} height={14} />
            <p className="text-sm lg:text-base text-black">{trustme.text}</p>
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
        <div className="flex gap-2 items-center flex-col lg:flex-row  ">
          <p className="h4">
            {obstacles.title.split(" ").slice(0, -2).join(" ")}
          </p>
          <p className="h4 highlighted-text">
            {obstacles.title.split(" ").slice(-2).join(" ")}
          </p>
        </div>

        <div className="p1 px-4 lg:px-none mt-6 text-center">
          <PortableText value={obstacles.description} />
        </div>
        <div className="flex gap-[32px] mt-[32px] lg:mt-[70px] flex-col lg:flex-row">
          {obstacles.blocks.map((block, index) => (
            <div
              key={index}
              className="px-[30px] w-[350px] rounded-2xl flex flex-col items-center border border-[#767676] relative"
            >
              <Image
                src="/grid.svg"
                alt="grid"
                width={350}
                height={350}
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="z-10 my-[100px] w-[52px] h-[52px] rounded-xl bg-[#6B8DFF] flex justify-center items-center ">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={20}
                  height={24}
                />
              </div>
              <div className="pb-[35px]">
                <p className="h4 text-center">{block.title}</p>
                <div className="text-[14px] mt-2 text-center">
                  <PortableText value={block.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="#call">
          <button className="lg:w-[450px] mt-[70px] white-btn">
            {obstacles.buttonText}
          </button>
        </Link>
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

      <div className="flex flex-col items-center mt-[100px] lg:mt-[150px]">
        <p className="hidden lg:block">{howItWorks.subtitle}</p>
        <p className="h2 mt-6 w-[250px] text-center lg:w-auto mb-6 lg:mb-0">
          {howItWorks.title.split(" ")[0]}{" "}
          <span style={{ padding: "0 8px" }} className="highlighted-text">
            {howItWorks.title.split(" ")[1]} {howItWorks.title.split(" ")[2]}
          </span>{" "}
          {howItWorks.title.split(" ").slice(3).join(" ")}
        </p>

        <Features data={howItWorks.steps} />
        <Link href="#call">
          <button className="white-btn mt-6">{howItWorks.buttonText}</button>
        </Link>
        <Image
          src={trustme.image1}
          alt={trustme.title}
          width={280}
          height={60}
          className="mt-6 hidden lg:block"
        />
        <div className="mt-1 hidden lg:flex gap-1">
          <Image src={"/stars.svg"} alt={"stars"} width={78} height={14} />
          <p id="roadmap" className="text-white">
            {trustme.text}
          </p>
        </div>
      </div>

      <Roadmap data={roadmapData} />
      <div className="flex justify-center">
        <Link href="#call">
          <button id="results" className="text-center lg:w-[450px] white-btn">
            {roadmapData.buttonText}
          </button>
        </Link>
      </div>
      <div className="mt-[130px]">
        <div className="flex flex-col items-center">
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
            <p className="text-white">{trustme.text}</p>
          </div>
          <p className="h4 mt-[35px] text-center lg:text-left ">{avis.title}</p>
          <div className=" lg:px-none flex flex-col lg:flex-row gap-[40px] justify-center mt-[30px]">
            <Testimonials data={avis.testimonials} />
            <div className="px-4 lg:px-none mt-[30px] lg:w-[400px] h-[650px]">
              <VideoTopAvis videoUrl={"Wk5ANPxTB_A"} />
            </div>
            <div className="hidden lg:block">
              <Testimonials data={avis.moreTestimonials} />
            </div>
          </div>
        </div>
      </div>
      <div id="price"></div>
      <Pricing price={priceData} />
      <div id="faq"></div>
      <div className="px-4 lg:px-none flex flex-col lg:flex-row justify-center items-center gap-[20px] lg:gap-[100px] mb-[100px]">
        <div className="max-w-[750px] ">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="h2">
              {faqData.title.split(" ").slice(0, -2).join(" ")}
            </p>
            <p className="h2 highlighted-text">
              {faqData.title.split(" ").slice(-2).join(" ")}
            </p>
          </div>
          <div className="mt-2 lg:mt-6 p1">
            <PortableText value={faqData.description} />
          </div>
          <Link className="hidden lg:block" href="#call">
            <button className="white-btn mt-6">{faqData.buttonText}</button>
          </Link>
        </div>
        <Faq data={faqData.questions} />
        <Link className="lg:hidden" href="#call">
          <button className="white-btn mt-6">{faqData.buttonText}</button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        {trustme.image1 && (
          <Image
            src={trustme.image1}
            alt={trustme.title}
            width={280}
            height={60}
            className="mt-6"
          />
        )}
        <div className="mt-2 lg:mt-1 flex gap-1">
          <Image src={"/stars.svg"} alt={"stars"} width={78} height={14} />
          <p>{trustme.text}</p>
        </div>
        <p className="h2 mt-6">{startNow.title}</p>
        <div className="mt-[20px] text-center max-w-[790px]">
          <PortableText value={startNow.description} />
        </div>
        <Link href="#call">
          <button id="call" className="white-btn mt-6">
            {startNow.buttonText}
          </button>
        </Link>
      </div>
      <div className="hidden lg:block mt-[150px] flex gap-[130px] justify-center">
        <div className="lg:max-w-[600px]">
          <div className="flex flex-wrap flex-col lg:flex-row gap-2 items-center">
            <p className="h2">
              {startNow.title2.split(" ").slice(0, -3).join(" ")}
            </p>
            <p className="h2 highlighted-text">
              {startNow.title2.split(" ").slice(-3).join(" ")}
            </p>
          </div>

          <div className="p1 mt-[20px] ">
            <PortableText value={startNow.description2} />
          </div>
          <div className="mt-6 pb-4 border-b border-[#FFFFFFB2]">
            {startNow.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 pb-4">
                <Image
                  src="/icons/check.svg"
                  alt={"check"}
                  width={18}
                  height={18}
                />
                <p>{feature}</p>
              </div>
            ))}
          </div>
          <div>
            <BrandsPrice />
          </div>
        </div>
        <div>
          <div
            className="iclosed-widget"
            data-url="https://app.iclosed.io/e/l-ecole-des-conciergeries/appel-strategique"
            title="💻 Visio Stratégique"
            style={{ width: "100%", height: "620px" }}
          ></div>
        </div>
      </div>
      <div className="px-4 flex flex-col lg:hidden mt-[120px]">
        <div className="flex lg:flex-row gap-2 items-center">
          <p className="h2">
            {startNow.title2.split(" ").slice(0, -3).join(" ")}
          </p>
          <p className="h2 highlighted-text">
            {startNow.title2.split(" ").slice(-3).join(" ")}
          </p>
        </div>
        <div className="p1 mt-[20px] ">
          <PortableText value={startNow.description2} />
        </div>
        <div className="mt-6 border-b border-[#FFFFFFB2] pb-4">
          {startNow.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 pb-4">
              <Image
                src="/icons/check.svg"
                alt={"check"}
                width={18}
                height={18}
              />
              <p className="text-sm">{feature}</p>
            </div>
          ))}
        </div>
        <div className="max-w-[90%]">
          <BrandsPrice />
        </div>
        <div>
          <div
            className="iclosed-widget"
            data-url="https://app.iclosed.io/e/l-ecole-des-conciergeries/appel-strategique"
            title="💻 Visio Stratégique"
            style={{ width: "100%", height: "620px" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[150px] lg:mt-0 pb-[150px]">
        <Image
          src={"/logo.svg"}
          alt={"vanessa conciergerie"}
          width={80}
          height={60}
        />
        <div className="flex gap-8 mt-6">
          <p className="text-sm text-[#D4D4D4]">Fonctionnement</p>
          <p className="text-sm text-[#D4D4D4]">Résultat accompagnement</p>
          <p className="text-sm text-[#D4D4D4]">A propos</p>
        </div>
        <div className="mt-6 flex gap-2">
          <Image
            src={"/icons/instagram.svg"}
            alt={"vanessa instagram"}
            width={24}
            height={24}
          />
          <Image
            src={"/icons/youtube.svg"}
            alt={"vanessa youtube"}
            width={32}
            height={60}
          />
        </div>
        <div className="mt-6">
          <p className="text-sm text-[#D4D4D4]">
            Réalisé par :{" "}
            <a target="_blank" href="https://la-landing.fr/">
              <u>LaLanding</u>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
