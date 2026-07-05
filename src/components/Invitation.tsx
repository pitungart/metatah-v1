"use client";

import { useState } from "react";
import Cover from "@/components/Cover";
import MusicButton from "@/components/MusicButton";
import Hero from "@/components/sections/Hero";
import Salam from "@/components/sections/Salam";
import Peserta from "@/components/sections/Peserta";
import Sloka from "@/components/sections/Sloka";
import SadRipu from "@/components/sections/SadRipu";
import Acara from "@/components/sections/Acara";
import Countdown from "@/components/sections/Countdown";
import Galeri from "@/components/sections/Galeri";
import Rsvp from "@/components/sections/Rsvp";
import Gift from "@/components/sections/Gift";
import FooterSection from "@/components/sections/FooterSection";

export default function Invitation({ guest }: { guest: string }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Cover guest={guest} opened={opened} onOpen={() => setOpened(true)} />
      <MusicButton active={opened} />

      <main className="relative mx-auto max-w-120 overflow-hidden bg-cream shadow-[0_0_60px_rgba(26,24,20,.18)] md:max-w-none md:shadow-none">
        <Hero />
        <Salam />
        <Peserta />
        <Sloka />
        <SadRipu />
        <Acara />
        <Countdown />
        <Galeri />
        <Rsvp guest={guest} />
        <Gift />
        <FooterSection />
      </main>
    </>
  );
}
