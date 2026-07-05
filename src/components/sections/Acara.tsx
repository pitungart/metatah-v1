import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";

export default function Acara() {
  const e = CONFIG.event;
  return (
    <section id="acara" className="bg-cream-deep px-7 py-18 text-center md:py-28">
      <Reveal>
        <Eyebrow>Rahina Ayu</Eyebrow>
      </Reveal>
      <Reveal as="h2" className="font-display text-[32px]">
        Dudonan Acara
      </Reveal>
      <Reveal>
        <Rule />
      </Reveal>

      <Reveal className="mx-auto mt-6 max-w-130 rounded-2xl border border-olive/50 bg-cream px-7 py-9 shadow-soft md:px-10 md:py-12">
        <h3 className="font-display text-[27px] text-ink">{e.name}</h3>
        <p className="font-display mt-3.5 text-lg">{e.day}</p>
        <p className="font-label mb-4 text-[13px] tracking-[.14em] text-ink-soft uppercase">
          {e.time}
        </p>
        <p className="mb-5.5 text-sm leading-[1.7] font-light text-ink-soft">
          <strong className="font-bold text-ink">{e.place}</strong>
          <br />
          {e.area}
        </p>
        <div className="mb-5.5 overflow-hidden rounded-xl border border-olive/40">
          <iframe
            src={e.mapEmbedUrl}
            title="Peta lokasi acara"
            className="block h-65 w-full border-0 md:h-80"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <a
          href={e.mapUrl}
          target="_blank"
          rel="noopener"
          className="font-label inline-flex items-center gap-2.5 rounded-full border border-bark px-7 py-3.5 text-[13px] font-bold tracking-[.14em] text-ink uppercase transition hover:-translate-y-0.5 hover:bg-bark/8"
        >
          Buka di Google Maps
        </a>
      </Reveal>

      <Reveal as="p" className="mx-auto mt-8.5 max-w-130 text-sm leading-[1.85] font-light text-ink-soft">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
        berkenan hadir memberikan doa restu.
      </Reveal>
    </section>
  );
}
