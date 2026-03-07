"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SKILLS } from "../data/Data.jsx";
import Tech from "./Tech.jsx";

export default function TechStack() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <div
      ref={containerRef}
      className="w-full relative "
    >
      <h2 className="text-3xl text-nowrap sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-4 sm:mb-6 md:mb-8 heading uppercase text-center lg:text-start px-4 sm:px-6 md:px-8 lg:px-10">
        Tech Stack
      </h2>

      {/* Frontend Row */}
      <div className="flex overflow-hidden justify-center">
        <motion.div
          style={{ x: x1 }}
          className="gap-4 md:gap-10 inline-flex bg-linear-to-r from-neutral-200 to-neutral-300 py-3"
        >
          {[...SKILLS.FrontEnd, ...SKILLS.FrontEnd].map((skill, i) => (
            <Tech skill={skill} key={`${skill.tag}-${i}`} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
