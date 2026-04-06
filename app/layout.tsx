import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import { defaultLocale } from "@/lib/i18n";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artiplast.com"),
  title: "ArtıPLAST",
  description: "Premium manufacturer website for ArtıPLAST.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={`${manrope.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
