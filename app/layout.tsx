import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haiyang Liu (Aurora)",
  description: "Full-stack & Web3 builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
