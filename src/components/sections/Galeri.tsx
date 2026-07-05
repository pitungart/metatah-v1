import { CONFIG } from "@/config";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export default function Galeri() {
  return (
    <section id="galeri" className="bg-tile px-7 py-18 text-center md:py-28">
      <Reveal>
        <Eyebrow>Galeri</Eyebrow>
      </Reveal>
      <Reveal as="h2" className="font-display text-[32px]">
        Momen Bahagia
      </Reveal>
      <Reveal>
        <Rule />
      </Reveal>

      <Reveal className="mt-9 grid grid-cols-2 gap-3 md:mx-auto md:mt-11 md:max-w-240 md:grid-cols-3 md:gap-4">
        {CONFIG.gallery.map((src, i) => (
          <div
            key={i}
            className={`group overflow-hidden rounded-xl border border-olive/40 ${
              i === 0 || i === 5 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <PhotoPlaceholder
              label={`Foto Galeri ${i + 1}`}
              src={src}
              className={`w-full transition-transform duration-500 group-hover:scale-104 ${
                i === 0 || i === 5 ? "aspect-[16/10] md:aspect-[3/4]" : "aspect-[3/4]"
              }`}
            />
          </div>
        ))}
      </Reveal>
    </section>
  );
}
