import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Deepak's Portfolio",
  description: "Developer portfolio",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-inter antialiased bg-mainbackground_gray`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
