"use client";

import { useEffect, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";

type Wish = {
  id: number;
  name: string;
  attendance: string;
  message: string;
  created_at: string;
};

const OPTIONS = ["Hadir", "Tidak Hadir", "Masih Ragu"] as const;

export default function Rsvp({ guest }: { guest: string }) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<(typeof OPTIONS)[number]>("Hadir");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/rsvp")
      .then((r) => r.json())
      .then((d) => setWishes(d.wishes ?? []))
      .catch(() => {});
  }, []);

  async function submit() {
    setError("");
    if (name.trim().length < 2 || message.trim().length < 2) {
      setError("Mohon isi nama dan ucapan terlebih dahulu 🙏");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attendance, message, guestParam: guest }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Gagal mengirim, coba lagi.");
        return;
      }
      setWishes((w) => [data.wish, ...w]);
      setName("");
      setMessage("");
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    } catch {
      setError("Gagal terhubung ke server, coba lagi.");
    } finally {
      setSending(false);
    }
  }

  const labelCls =
    "font-label mb-2 block text-[11px] font-bold uppercase tracking-[.2em] text-ink-soft";
  const inputCls =
    "w-full rounded-[10px] border border-olive/55 bg-white px-4 py-3.5 text-sm text-ink outline-none focus:ring-2 focus:ring-olive";

  return (
    <section id="rsvp" className="bg-cream-deep px-7 py-18 md:py-28">
      <div className="text-center">
        <Reveal>
          <Eyebrow>Konfirmasi Kehadiran</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="font-display text-[32px]">
          Mohon Doa Restu
        </Reveal>
        <Reveal>
          <Rule />
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-8.5 md:grid md:max-w-240 md:grid-cols-2 md:items-start md:gap-14">
        {/* form */}
        <div>
          <div className="mb-4">
            <label htmlFor="fName" className={labelCls}>
              Nama
            </label>
            <input
              id="fName"
              type="text"
              autoComplete="name"
              placeholder="Nama Bapak/Ibu/Saudara/i"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputCls}
            />
          </div>

          <div className="mb-4">
            <span className={labelCls}>Kehadiran</span>
            <div className="flex flex-wrap gap-2">
              {OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  aria-pressed={attendance === opt}
                  onClick={() => setAttendance(opt)}
                  className={`font-body cursor-pointer rounded-full border px-4.5 py-2.5 text-[13px] font-semibold transition ${
                    attendance === opt
                      ? "border-bark bg-bark text-cream"
                      : "border-olive/55 text-ink-soft hover:bg-olive/10"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="fMsg" className={labelCls}>
              Ucapan &amp; Doa
            </label>
            <textarea
              id="fMsg"
              placeholder="Tulis ucapan dan doa restu..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputCls} min-h-24 resize-y`}
            />
          </div>

          <button
            onClick={submit}
            disabled={sending}
            className="font-label inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-bark px-8 py-4 text-[13px] font-bold tracking-[.14em] text-cream uppercase shadow-soft transition hover:-translate-y-0.5 hover:bg-bark-soft disabled:opacity-60"
          >
            {sending ? "Mengirim..." : "Kirim Ucapan"}
          </button>
          {sent && (
            <p className="mt-3 text-[13px] font-bold text-olive">
              Matur suksma — ucapan terkirim 🙏
            </p>
          )}
          {error && <p className="mt-3 text-[13px] font-bold text-red-800">{error}</p>}
        </div>

        {/* daftar ucapan */}
        <div className="mt-10 flex max-h-85 flex-col gap-3.5 overflow-auto pr-1 md:mt-0 md:max-h-105">
          {wishes.length === 0 && (
            <p className="text-sm font-light text-ink-soft italic">
              Jadilah yang pertama mengirim doa restu 🙏
            </p>
          )}
          {wishes.map((w) => (
            <div key={w.id} className="border-l-2 border-olive py-1 pl-4">
              <span className="font-display text-[15px]">{w.name}</span>
              <span className="font-label ml-2 text-[10.5px] font-bold tracking-[.16em] text-olive uppercase">
                {w.attendance}
              </span>
              <p className="mt-1 text-[13.5px] leading-[1.7] font-light text-ink-soft">
                {w.message}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
