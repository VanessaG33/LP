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
  items: string[];
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
        {[...items, ...items].map((item, index) => {
          const key = `${item}-${index}`;
          const isPlaying = playingStates[key];

          return (
            <li
              className="shadow-[#ffffff50] shadow w-[280px] overflow-hidden relative rounded-2xl"
              key={key}
            >
              <div
                className="relative cursor-pointer"
                onClick={() => handlePlayPause(item, key)}
              >
                <iframe
                  width="280"
                  height="500"
                  src={`https://www.youtube.com/embed/${item}?autoplay=${isPlaying ? 1 : 0}&mute=1&loop=1&playlist=${item}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>

                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300">
                    <Image
                      src="/icons/playBtn.svg"
                      width={52}
                      height={52}
                      alt="play button"
                    />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
