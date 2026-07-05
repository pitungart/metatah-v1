import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";

export default function FooterSection() {
  return (
    <footer className="bg-tile relative overflow-hidden px-7 pt-20 pb-28 text-center md:pt-28 md:pb-36">
      <Reveal>
        <Eyebrow>Om Shanti Shanti Shanti Om</Eyebrow>
      </Reveal>
      <Reveal as="h2" className="font-script mt-2 text-[44px] text-ink md:text-6xl">
        Matur Suksma
      </Reveal>
      <Reveal>
        <Rule />
      </Reveal>
      <Reveal as="p" className="mx-auto mt-4 max-w-85 text-sm leading-[1.85] font-light text-ink-soft md:max-w-110">
        Atas kehadiran serta doa restu Bapak/Ibu/Saudara/i, kami sekeluarga mengucapkan
        terima kasih.
      </Reveal>
      <Reveal as="p" className="font-display mt-7 text-base leading-[1.7]">
        {CONFIG.family}
      </Reveal>
      <p className="font-label mt-14 text-[11px] tracking-[.2em] text-ink-soft/50 uppercase">
        Dibuat dengan hormat · Undangan Metatah Digital
      </p>
    </footer>
  );
}
