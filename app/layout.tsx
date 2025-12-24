import type { Metadata } from "next";
import { Space_Mono, Titillium_Web } from "next/font/google";
import "./globals.css";
import Nav from "../features/common/components/Nav";
import Footer from "@/features/common/components/Footer";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
  display: "swap",
});

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-titillium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gata Hub",
  description: "GATA Yield Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative flex flex-col items-center w-full bg-black text-white ${spacemono.variable} ${titillium.variable}`}
      >
        <Nav />
        <div className="mt-[50px] lg:mt-[58px] max-w-[1920px] w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
