import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export default function Peserta() {
  const c = CONFIG.child;
  return (
    <section id="peserta" className="px-7 py-18 text-center md:py-28">
      <Reveal>
        <Eyebrow>Sang Meraga Suci</Eyebrow>
      </Reveal>
      <Reveal as="h2" className="font-display text-[32px]">
        Peserta Metatah
      </Reveal>
      <Reveal>
        <Rule />
      </Reveal>

      <Reveal
        as="article"
        className="mt-11 md:mx-auto md:mt-16 md:grid md:max-w-195 md:grid-cols-[280px_1fr] md:items-center md:gap-13 md:text-left"
      >
        <div className="mx-auto mb-5 h-[238px] w-[190px] overflow-hidden rounded-t-[110px] rounded-b-[14px] border border-olive bg-cream p-2 md:mx-0 md:mb-0 md:h-[350px] md:w-[280px]">
          <PhotoPlaceholder
            label="Foto Anak"
            src={c.photo}
            className="h-full w-full rounded-t-[100px] rounded-b-lg"
          />
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-4xl">{c.nick}</h3>
          <p className="font-names mt-1 mb-3.5 text-[18px] text-olive italic md:text-[20px]">{c.full}</p>
          <p className="text-sm leading-[1.8] font-light text-ink-soft md:text-[15px]">
            {c.order}
            <br />
            <strong className="font-bold text-ink">{c.father}</strong> &amp;{" "}
            <strong className="font-bold text-ink">{c.mother}</strong>
          </p>
          <p className="mt-2.5 text-[12.5px] text-ink-soft italic md:text-[15px]">{c.address}</p>
        </div>
      </Reveal>
    </section>
  );
}
