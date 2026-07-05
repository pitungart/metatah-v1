"use client";

import { useEffect } from "react";
import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Rule from "@/components/ui/Rule";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export default function Cover({
  guest,
  opened,
  onOpen,
}: {
  guest: string;
  opened: boolean;
  onOpen: () => void;
}) {
  /* kunci scroll selama cover masih tertutup */
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <div
      className={`bg-tile fixed inset-0 z-60 flex items-center justify-center bg-cream transition-[opacity,visibility] duration-900 ease-out ${
        opened ? "invisible opacity-0" : "visible opacity-100"
      }`}
    >
      <div className="relative flex h-full w-full max-w-120 flex-col items-center justify-center overflow-hidden px-8 py-12 text-center md:max-w-180">
        <div className="mb-6 rounded-full border border-olive/60 p-1.5">
          <div className="h-36 w-36 overflow-hidden rounded-full border border-dashed border-olive/50 p-1 md:h-44 md:w-44">
            <PhotoPlaceholder
              label="Foto"
              src={CONFIG.coverPhoto}
              className="h-full w-full rounded-full"
            />
          </div>
        </div>

        <Eyebrow>Upacara Manusa Yadnya</Eyebrow>
        <Rule />
        <p className="font-label text-xs font-bold uppercase tracking-[.34em] text-ink-soft">
          Undangan Metatah
        </p>
        <h1 className="font-names mt-3 mb-1 text-[38px] leading-[1.12] md:text-6xl">
          {CONFIG.title}
        </h1>
        <p className="font-display mb-11 text-[15px] tracking-[.28em] text-olive">
          {CONFIG.coverDate}
        </p>

        <p className="font-label mb-2 text-xs uppercase tracking-[.2em] text-ink-soft/70">
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <div className="font-names mb-10 min-h-12 border-b border-olive px-5 pb-2 text-2xl leading-tight font-semibold text-ink md:text-3xl">
          {guest}
        </div>

        <button
          onClick={onOpen}
          className="font-label inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-bark px-8 py-4 text-[13px] font-bold tracking-[.14em] text-cream uppercase shadow-soft transition hover:-translate-y-0.5 hover:bg-bark-soft"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 8 L12 14 L20 8" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
