"use client";
import Image from "next/image";
import { useState } from "react";

export default function VideoTopAvis({ videoUrl }: { videoUrl: any }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (video: HTMLVideoElement) => {
    if (video.paused) {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Mobile: Vidéo au clic */}
      <video
        poster={videoUrl}
        className="lg:hidden border-4 rounded-2xl shadow-2xl shadow-white  w-full object-cover"
        src={videoUrl}
        onClick={(e) => handlePlayPause(e.currentTarget)}
      ></video>

      {/* Desktop: Vidéo en preview automatique */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden lg:block border-4 rounded-2xl shadow-2xl shadow-white w-full object-cover"
        src={videoUrl}
        onClick={(e) => handlePlayPause(e.currentTarget)}
      ></video>

      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300 rounded-2xl"
          onClick={(e) =>
            handlePlayPause(
              e.currentTarget.previousElementSibling as HTMLVideoElement
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
    </div>
  );
}
