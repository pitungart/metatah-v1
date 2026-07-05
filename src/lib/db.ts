import { createClient, type Client } from "@libsql/client";
import fs from "node:fs";
import path from "node:path";

/**
 * Turso (produksi & dev bila .env.local terisi) — fallback ke file SQLite lokal.
 */
function createDb(): Client {
  const url = process.env.TURSO_DATABASE_URL || "file:data/rsvp.db";
  if (url.startsWith("file:")) {
    fs.mkdirSync(path.join(process.cwd(), "data"), { recursive: true });
  }
  return createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN });
}

/* cache di globalThis agar hot-reload dev tidak membuka koneksi berulang */
const g = globalThis as unknown as { __rsvpDb?: Client; __rsvpSchema?: Promise<unknown> };
const db = g.__rsvpDb ?? (g.__rsvpDb = createDb());

/** pastikan tabel ada — dipanggil sekali sebelum query pertama */
export function ensureSchema() {
  g.__rsvpSchema ??= db.execute(`
    CREATE TABLE IF NOT EXISTS rsvp (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      attendance TEXT NOT NULL CHECK (attendance IN ('Hadir','Tidak Hadir','Masih Ragu')),
      message TEXT NOT NULL,
      guest_param TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  return g.__rsvpSchema;
}

export default db;
