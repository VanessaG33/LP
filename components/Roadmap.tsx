"use client";
import { RoadmapStep, RoadmapType } from "@/sanity/lib/type";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Roadmap({ data }: { data: RoadmapType }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative w-full overflow-clip">
      <div className="mt-[150px] w-full md:px-10" ref={containerRef}>
        <div className="mb-[80px] max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="flex gap-2 mb-4">
            <p className="h2">{data.title.split(" ").slice(0, -2).join(" ")}</p>
            <p className="h2 highlighted-text">
              {data.title.split(" ").slice(-2).join(" ")}
            </p>
          </div>
          <p className="p1 max-w-[880px]">{data.subtitle}</p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.steps.map((item: RoadmapStep, index: number) => (
            <div
              key={index}
              className="flex justify-start pt-[120px] md:gap-[120px]"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start md:w-full max-w-[500px]">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#6B8DFF] flex items-center justify-center">
                  <span>{index + 1}</span>
                </div>
                <div className="flex flex-col md:pl-20 gap-4">
                  <h3 className="hidden md:block h3 ">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={560}
                  height={500}
                />
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
