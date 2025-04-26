"use client";
import Image from "next/image";
import { useState } from "react";

export default function VideoTopAvis({ videoUrl }: { videoUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Extraire l'ID de la vidéo Shorts depuis l'URL complète

  return (
    <div className="h-full relative overflow-hidden rounded-2xl">
      {/* Vidéo YouTube Shorts au clic (mobile + desktop) */}
      <div
        className="h-full border-4 rounded-2xl shadow-2xl shadow-white lg:w-full object-cover"
        onClick={handlePlayPause}
      >
        <iframe
          width="390"
          height="700"
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title="YouTube Shorts video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-xl w-[350px] lg:w-full h-[580px] lg:h-full" // Applique une bordure arrondie
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
