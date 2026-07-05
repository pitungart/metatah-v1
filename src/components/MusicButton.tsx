"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG } from "@/config";

export default function MusicButton({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  /* autoplay saat undangan dibuka (gesture user sudah ada dari tombol Buka) */
  useEffect(() => {
    if (active && CONFIG.musicUrl && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }, [active]);

  if (!CONFIG.musicUrl) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={CONFIG.musicUrl} loop preload="none" />
      {active && (
        <button
          onClick={toggle}
          aria-label="Putar / jeda musik"
          className="fixed right-5 bottom-5 z-50 flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-olive bg-bark text-cream-deep shadow-soft"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={playing ? "animate-spin [animation-duration:5s]" : ""}
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          </svg>
        </button>
      )}
    </>
  );
}
