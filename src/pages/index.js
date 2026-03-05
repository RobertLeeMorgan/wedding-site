"use client";

import { useRef, useEffect } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import HeroSection from "@/sections/HeroSection";
import ContactSection from "@/sections/ContactSection";
import Meta from "@/components/Meta";
import Lenis from "lenis";
import MainCard from "@/components/MainCard";

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const mono = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: true,
      anchors: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Meta />

      <div
        className={`${sans.variable} ${mono.variable} relative`}
        id="scroll-container"
      >
        <HeroSection />

        <MainCard />

        <ContactSection />
      </div>
    </>
  );
}
