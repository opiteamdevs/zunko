import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zunko — Histórias e curiosidades da internet",
  description: "Zunko — vídeos rápidos, histórias e curiosidades da internet, com narração e edição dinâmica.",
  metadataBase: new URL("https://zunko-site.onrender.com"),
  openGraph: {
    title: "Zunko — Histórias e curiosidades da internet",
    description: "Histórias, curiosidades e vídeos rápidos sobre a internet.",
    type: "website",
    locale: "pt_BR"
  },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
