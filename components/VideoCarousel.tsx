"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function VideoCarousel({ videos }: any) {
  return (
    <div className="h-[34rem] lg:h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={videos} direction="left" speed="fast" />
    </div>
  );
}
