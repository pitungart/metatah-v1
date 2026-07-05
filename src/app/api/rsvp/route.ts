import { NextRequest, NextResponse } from "next/server";
import db, { ensureSchema } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ATTENDANCE = ["Hadir", "Tidak Hadir", "Masih Ragu"] as const;
const SELECT = "SELECT id, name, attendance, message, created_at FROM rsvp";

export async function GET() {
  await ensureSchema();
  const rs = await db.execute(`${SELECT} ORDER BY id DESC LIMIT 100`);
  return NextResponse.json({ wishes: rs.rows });
}

/* rate-limit sederhana: maks 5 kiriman per IP per menit */
const hits = new Map<string, number[]>();
function isLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isLimited(ip)) {
    return NextResponse.json(
      { error: "Terlalu banyak kiriman, mohon tunggu sebentar 🙏" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Format data tidak valid." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const name = String(b?.name ?? "").trim().slice(0, 80);
  const attendance = String(b?.attendance ?? "");
  const message = String(b?.message ?? "").trim().slice(0, 500);
  const guestParam = String(b?.guestParam ?? "").trim().slice(0, 120) || null;

  if (name.length < 2 || message.length < 2) {
    return NextResponse.json(
      { error: "Mohon isi nama dan ucapan terlebih dahulu 🙏" },
      { status: 400 }
    );
  }
  if (!ATTENDANCE.includes(attendance as (typeof ATTENDANCE)[number])) {
    return NextResponse.json({ error: "Pilihan kehadiran tidak valid." }, { status: 400 });
  }

  await ensureSchema();
  const info = await db.execute({
    sql: "INSERT INTO rsvp (name, attendance, message, guest_param) VALUES (?, ?, ?, ?)",
    args: [name, attendance, message, guestParam],
  });
  const rs = await db.execute({
    sql: `${SELECT} WHERE id = ?`,
    args: [Number(info.lastInsertRowid)],
  });

  return NextResponse.json({ wish: rs.rows[0] }, { status: 201 });
}
