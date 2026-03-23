import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ESPRON | Stavebné práce, Architektonické služby, Čistiace práce",
  description:
    "Odborné stavebné práce, architektonické služby a čistiace práce po celom Slovensku. Viac ako 10 rokov skúseností.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${manrope.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
