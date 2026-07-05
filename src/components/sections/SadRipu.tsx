"use client";

import { useEffect, useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";

const RIPU = [
  { no: "I", nm: "Kama", mean: "nafsu yang tak terkendali" },
  { no: "II", nm: "Lobha", mean: "keserakahan" },
  { no: "III", nm: "Krodha", mean: "kemarahan" },
  { no: "IV", nm: "Mada", mean: "kemabukan" },
  { no: "V", nm: "Moha", mean: "kebingungan" },
  { no: "VI", nm: "Matsarya", mean: "iri hati" },
];

export default function SadRipu() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [filed, setFiled] = useState(false);

  /* saat grid terlihat: garis "kikir" menyapu tiap nama bergantian */
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFiled(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="sadripu" className="bg-tile px-7 py-18 text-center md:py-28">
      <Reveal>
        <Eyebrow>Makna Upacara</Eyebrow>
      </Reveal>
      <Reveal as="h2" className="font-display text-[32px]">
        Mengikis Sad Ripu
      </Reveal>
      <Reveal>
        <Rule />
      </Reveal>
      <Reveal as="p" className="mx-auto mb-10 max-w-100 text-sm leading-[1.85] font-light text-ink-soft md:max-w-130 md:text-[15px]">
        Enam gigi atas dikikir sebagai simbol pengendalian enam musuh dalam diri manusia.
        Saat kikir menyapu, enam sifat ini perlahan diredam.
      </Reveal>

      <div ref={gridRef} className="grid grid-cols-2 gap-3.5 md:mx-auto md:max-w-220 md:grid-cols-3">
        {RIPU.map((r, i) => (
          <Reveal
            key={r.nm}
            delay={i * 100}
            className="rounded-xl border border-olive/45 bg-cream/70 px-3.5 py-5 md:px-4 md:py-6.5"
          >
            <div className="font-display text-xs tracking-[.2em] text-olive">{r.no}</div>
            <div
              className={`font-display relative mx-auto mt-1.5 mb-1 inline-block text-[21px] transition-colors duration-1000 md:text-[23px] ${
                filed ? "text-ink/45" : "text-ink"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {r.nm}
              <span
                className="absolute top-[55%] left-0 h-[1.5px] bg-bark transition-[width] duration-1000 ease-[cubic-bezier(.7,0,.3,1)]"
                style={{ width: filed ? "100%" : 0, transitionDelay: `${i * 150}ms` }}
                aria-hidden="true"
              />
            </div>
            <div className="text-xs font-light text-ink-soft">{r.mean}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
