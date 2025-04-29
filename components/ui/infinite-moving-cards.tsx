"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    video: any;
    name: string;
    job: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef(null) as any;
  const scrollerRef = useRef(null) as any;
  const [start, setStart] = useState(false);
  const [playingStates, setPlayingStates] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed] || "40s",
      );
    }
  };

  const handlePlayPause = (video: any, key: any) => {
    setPlayingStates((prev) => ({ ...prev, [key]: !prev[key] }));
    if (video.paused) {
      video.muted = false;
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {[...items, ...items].map((item, index) => (
          <li
            className="shadow-[#ffffff50] shadow w-[280px] overflow-hidden relative rounded-2xl"
            key={`${item.name}-${index}`}
          >
            <video
              poster={item.video.asset.url}
              className="block lg:hidden w-full h-full rounded-2xl"
              src={item.video.asset.url}
              muted
              loop
              data-name={item.name}
              onClick={(e) =>
                handlePlayPause(e.currentTarget, `${item.name}-${index}`)
              }
            ></video>
            <video
              className="hidden lg:block w-full h-full rounded-2xl"
              src={item.video.asset.url}
              muted
              loop
              data-name={item.name}
              onClick={(e) =>
                handlePlayPause(e.currentTarget, `${item.name}-${index}`)
              }
            ></video>

            {!playingStates[`${item.name}-${index}`] && (
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300"
                onClick={(e) =>
                  handlePlayPause(
                    e.currentTarget.previousSibling,
                    `${item.name}-${index}`,
                  )
                }
              >
                <Image
                  src="/icons/playBtn.svg"
                  width={52}
                  height={52}
                  alt="play button"
                />
              </button>
            )}

            <div className="flex flex-col gap-2 text-white absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <p className="text-center text-2xl">{item.name}</p>
              <p className="text-center text-[18px]">{item.job}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
