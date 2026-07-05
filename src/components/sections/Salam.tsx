import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";

export default function Salam() {
  return (
    <section className="px-7 py-18 text-center md:py-28">
      <Reveal as="h2" className="font-script text-[40px] text-ink md:text-5xl">
        Om Swastyastu
      </Reveal>
      <Reveal>
        <Rule />
      </Reveal>
      <Reveal
        as="p"
        className="mx-auto max-w-140 text-[15px] leading-[1.85] font-light text-ink-soft md:text-base"
      >
        Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha Esa,
        kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada Upacara Manusa
        Yadnya <strong className="font-bold text-ink">Metatah (Mepandes)</strong> putra kami.
      </Reveal>
    </section>
  );
}
