"use client";

import { useEffect, useRef } from "react";

export default function IClosed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === "https://audit-situation-conciergerie.youcanbook.me/"
      ) {
        if (iframeRef.current) {
          iframeRef.current.style.height = `${event.data}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="relative w-full">
      <iframe
        ref={iframeRef}
        id="ycbm"
        src="https://audit-situation-conciergerie.youcanbook.me/?embed=true"
        style={{
          width: "100%",
          height: "1000px", // valeur initiale
          border: "0px",
          backgroundColor: "transparent",
        }}
        frameBorder="0"
      />
    </div>
  );
}
