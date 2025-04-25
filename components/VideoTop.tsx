"use client";
import Image from "next/image";
import { useState } from "react";

export default function VideoTop({ videoUrl }: { videoUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Extraire l'ID de la vidéo YouTube de l'URL
  const videoId = videoUrl.split("v=")[1]?.split("&")[0];

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Vidéo YouTube au clic (mobile + desktop) */}
      <div
        className="border-4 rounded-2xl shadow-2xl shadow-white w-full object-cover"
        onClick={handlePlayPause}
      >
        <iframe
          width="350"
          height="580"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl" // Applique une bordure arrondie
        ></iframe>
      </div>

      {/* Bouton de lecture / pause */}
      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300 rounded-2xl"
          onClick={handlePlayPause}
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
