import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haiyang Liu (Aurora) — Builder, Founder of Borealis Studio",
  description:
    "Full-stack & Web3 builder. Founder of Borealis Studio. Building JobHunter and QuantBlock.",
  openGraph: {
    title: "Haiyang Liu (Aurora)",
    description:
      "Full-stack & Web3 builder. Founder of Borealis Studio. Building JobHunter and QuantBlock.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
