"use client";

import { useEffect } from "react";
import HeroSection from "@/sections/HeroSection";
import RSVPSection from "@/sections/RSVPSection";
import Meta from "@/components/Meta";
import Lenis from "lenis";
import AgendaSection from "@/sections/AgendaSection";
import StreamSection from "@/sections/StreamSection";
import DetailsSection from "@/sections/DetailsSection";
import Container from "@/components/Container";
import Divider from "@/components/Divider";

export default function Home() {
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

  const container = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Meta />
      <Container>
        <div>
          <HeroSection container={container} item={item} />
          <Divider />
        </div>
        <AgendaSection container={container} item={item} />
        <Divider />
        <DetailsSection />
        <Divider />
        <StreamSection container={container} item={item} />
        <Divider />
        <RSVPSection container={container} item={item} />
      </Container>
    </>
  );
}
