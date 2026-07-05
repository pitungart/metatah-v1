import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { ToothMedallion } from "@/components/ui/Ornaments";

export default function Hero() {
  return (
    <header className="bg-tile relative overflow-hidden px-7 pt-24 pb-20 text-center md:pt-32 md:pb-24">
      <Reveal>
        <ToothMedallion className="mb-6" />
      </Reveal>
      <Reveal>
        <Eyebrow>Metatah — Mepandes</Eyebrow>
      </Reveal>
      <Reveal as="h1" className="font-names mx-auto mt-2.5 mb-1 max-w-190 text-[38px] leading-[1.15] md:text-6xl">
        {CONFIG.title}
      </Reveal>
      <Reveal as="p" className="font-display mt-3.5 text-sm tracking-[.3em] text-olive">
        {CONFIG.heroDate}
      </Reveal>
    </header>
  );
}
