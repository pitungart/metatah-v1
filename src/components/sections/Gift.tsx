"use client";

import { useState } from "react";
import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Gift() {
  const [copied, setCopied] = useState(false);
  const acc = CONFIG.account;

  async function copy() {
    try {
      await navigator.clipboard.writeText(acc.number);
    } catch {
      const t = document.createElement("textarea");
      t.value = acc.number;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="gift" className="bg-bark px-7 py-18 text-center text-cream md:py-28">
      <Reveal>
        <Eyebrow bright>Tanda Kasih</Eyebrow>
      </Reveal>
      <Reveal as="h2" className="font-display text-[32px]">
        Punia Digital
      </Reveal>
      <Reveal as="p" className="mx-auto mt-4 max-w-120 text-sm leading-[1.85] font-light text-cream/75">
        Tanpa mengurangi rasa hormat, bagi keluarga dan sahabat yang ingin mengirimkan
        tanda kasih, dapat melalui:
      </Reveal>

      <Reveal className="mx-auto mt-6 max-w-95 rounded-[14px] border border-cream-deep/45 p-6">
        <div className="font-label text-[11px] font-bold tracking-[.3em] text-cream-deep uppercase">
          {acc.bank}
        </div>
        <div className="font-display my-2.5 text-2xl tracking-[.12em]">{acc.number}</div>
        <div className="mb-4.5 text-[13px] text-cream/70">a.n. {acc.name}</div>
        <button
          onClick={copy}
          className="font-label inline-flex cursor-pointer items-center rounded-full bg-cream-deep px-5.5 py-2.75 text-[11px] font-bold tracking-[.14em] text-bark uppercase transition hover:-translate-y-0.5 hover:bg-cream"
        >
          {copied ? "Tersalin ✓" : "Salin No Rekening"}
        </button>
      </Reveal>
    </section>
  );
}
