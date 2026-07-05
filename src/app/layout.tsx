import type { Metadata } from "next";
import { CONFIG } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://metatah-v1.vercel.app"),
  title: `Undangan Metatah | ${CONFIG.title}`,
  description:
    "Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu pada Upacara Metatah putra kami.",
  openGraph: {
    title: `Undangan Metatah | ${CONFIG.title}`,
    description: `Undangan Upacara Manusa Yadnya Metatah (Mepandes) — ${CONFIG.heroDate}`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1022,
        height: 1019,
        alt: `Undangan Metatah ${CONFIG.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Undangan Metatah | ${CONFIG.title}`,
    description: `Undangan Upacara Manusa Yadnya Metatah (Mepandes) — ${CONFIG.heroDate}`,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400..700;1,400..700&family=Great+Vibes&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-deep text-ink">{children}</body>
    </html>
  );
}
