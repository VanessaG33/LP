"use client";

import { useRef, useState } from "react";

export default function Video3({ data }: { data: any }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center lg:items-start mt-8">
      {data?.videos?.map((video: any, index: any) => (
        <div key={index} className="relative overflow-hidden rounded-2xl">
          {/* Vidéo YouTube au clic (mobile + desktop) */}
          <div
            className="border-4 rounded-2xl shadow-2xl shadow-white w-full object-cover"
            onClick={togglePlay}
          >
            <iframe
              width="350"
              height="580"
              src={`https://www.youtube.com/embed/${video}?autoplay=${isPlaying ? 1 : 0}&mute=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
