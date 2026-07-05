import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Sloka() {
  return (
    <section className="bg-bark px-7 py-18 text-center text-cream md:py-28">
      <Reveal className="mb-5 flex justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="#f0e2c5"
          opacity="0.85"
          aria-hidden="true"
        >
          <path d="M10.5 7.5C7.6 8.6 5.8 10.8 5.8 13.6c0 1.9 1.3 3.4 3.1 3.4 1.6 0 2.9-1.3 2.9-2.9 0-1.5-1.1-2.7-2.6-2.8.4-1.3 1.4-2.3 2.8-2.9l-1.5-.9zm7.7 0c-2.9 1.1-4.7 3.3-4.7 6.1 0 1.9 1.3 3.4 3.1 3.4 1.6 0 2.9-1.3 2.9-2.9 0-1.5-1.1-2.7-2.6-2.8.4-1.3 1.4-2.3 2.8-2.9l-1.5-.9z" />
        </svg>
      </Reveal>
      <Reveal as="blockquote" className="font-display mx-auto max-w-170 text-[19px] leading-[1.65] md:text-2xl">
        Tasmāt tvam indriyāṇy ādau niyamya bharatarṣabha
        <br />
        Pāpmānaṁ prajahi hy enaṁ jñāna-vijñāna-nāśanam
      </Reveal>
      <Reveal as="p" className="my-4.5">
        <Eyebrow bright>Bhagavad Gita 3.41</Eyebrow>
      </Reveal>
      <Reveal as="p" className="mx-auto max-w-140 text-sm leading-[1.85] font-light text-cream/80">
        Karena itu, hendaklah engkau terlebih dahulu mengendalikan indria-indria, kemudian
        menaklukkan musuh yang menghancurkan pengetahuan dan kebijaksanaan.
      </Reveal>
    </section>
  );
}
