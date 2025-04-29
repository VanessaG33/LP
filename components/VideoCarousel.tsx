"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface VideoCarouselProps {
  videos: {
    video: {
      asset: {
        _id: string;
        url: string;
      };
    };
    name: string;
    job: string;
  }[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  return (
    <div className="h-[34rem] lg:h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={videos} direction="left" speed="fast" />
    </div>
  );
}
