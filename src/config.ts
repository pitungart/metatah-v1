/**
 * Konfigurasi terpusat undangan — edit di sini, tidak perlu menyentuh komponen.
 * Semua yang bertanda "PLACEHOLDER:" menunggu isian (cari dengan: grep -r "PLACEHOLDER:" src)
 */
export const CONFIG = {
  title: "I Putu Angga Wiguna",
  family: "Keluarga Besar Wiguna",

  heroDate: "Minggu, 12 Juli 2026",
  coverDate: "12 . 07 . 2026",
  /** target countdown, WITA (+08:00) */
  countdownTo: "2026-07-12T11:00:00+08:00",

  // PLACEHOLDER: FOTO-COVER — foto bingkai lingkaran di halaman cover (mis. "/photos/cover.jpg")
  coverPhoto: "/photos/cover.png",

  child: {
    nick: "Angga Wiguna",
    full: "I Putu Angga Wiguna, S.Kom",
    order: "Anak pertama dari pasangan",
    father: "I Putu Utara Kanda",
    mother: "Ni Komang Martini",
    address: "Br. Dinas Pangussari, Desa Tigawasa, Buleleng, Bali",
    // PLACEHOLDER: FOTO-ANAK — isi path foto (mis. "/photos/anak.jpg"), kosong = kotak placeholder
    photo: "/photos/foto-anak.png",
  },

  event: {
    name: "Metatah",
    day: "Minggu, 12 Juli 2026",
    time: "11.00 WITA — Selesai",
    place: "Kediaman Keluarga",
    area: "Br. Dinas Pangussari, Desa Tigawasa, Buleleng, Bali",
    mapUrl: "https://maps.app.goo.gl/1pYshYYbBXGCv9YT8",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.931825801057!2d115.0228333!3d-8.2096111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTInMzQuNiJTIDExNcKwMDEnMjIuMiJF!5e0!3m2!1sid!2sid!4v1783226035621!5m2!1sid!2sid",
  },

  // PLACEHOLDER: FOTO-GALERI-1 s/d FOTO-GALERI-6 — isi path foto, kosong = kotak placeholder
  gallery: [
    "/photos/7.jpg",
    "/photos/4.jpg",
    "/photos/5.jpg",
    "/photos/6.jpg",
    "/photos/2.png",
    "/photos/3.jpg"
  ],

  account: {
    bank: "BCA",
    number: "8271027753",
    name: "I PUTU ANGGA WIGUNA",
  },

  /** musik latar — kosongkan untuk menonaktifkan */
  musicUrl: "/audio/gus-teja-hidden-beauty.mp3",
};

export type Config = typeof CONFIG;
