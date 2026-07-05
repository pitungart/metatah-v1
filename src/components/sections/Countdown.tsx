"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

function remaining() {
  const target = new Date(CONFIG.countdownTo).getTime();
  const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

export default function Countdown() {
  /* mulai dari 0 lalu isi di client — menghindari hydration mismatch */
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setT(remaining());
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { v: t.d, label: "Hari" },
    { v: t.h, label: "Jam" },
    { v: t.m, label: "Menit" },
    { v: t.s, label: "Detik" },
  ];

  return (
    <section className="bg-bark px-7 py-18 text-center text-cream md:py-28">
      <Reveal>
        <Eyebrow bright>Menghitung Hari</Eyebrow>
      </Reveal>
      <Reveal as="h2" className="font-display text-[32px]">
        Rahina Bahagia
      </Reveal>
      <Reveal className="mx-auto mt-8.5 grid max-w-155 grid-cols-4 gap-2.5">
        {items.map((it) => (
          <div
            key={it.label}
            className="rounded-xl border border-cream-deep/40 bg-cream/5 px-1 py-4.5"
          >
            <b className="font-display block text-3xl font-normal text-cream-deep">{it.v}</b>
            <span className="font-label text-[10.5px] tracking-[.22em] text-cream/60 uppercase">
              {it.label}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
