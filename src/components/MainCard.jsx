import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MainCard() {
  const profileRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: profileRef,
   offset: ["125% 180%", "150% 200%"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <motion.main
      ref={profileRef}
      style={{ scale }}
      className="relative bg-neutral-950 rounded-3xl justify-center items-center pt-8 z-10 mt-[-100svh] overflow-x-hidden"
    >
      <AboutSection />
      <ProjectSection />
    </motion.main>
  );
}
