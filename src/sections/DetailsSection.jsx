"use client";

import { motion } from "framer-motion";

export default function AgendaSection({ container, item }) {
  return (
    <motion.section
      id="details"
      className="
        relative
        max-w-xl
        mx-auto
        text-center
        space-y-10
        px-6
      "
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        variants={item}
        className="
          text-[clamp(1.8rem,4vw,2.6rem)]
          uppercase
          tracking-[0.18em]
          text-[#3b342c]
          font-light
          heading
        "
        style={{
          textShadow:
            "0 1px 0 rgba(255,255,255,0.55), 0 -1px 0 rgba(0,0,0,0.04)",
        }}
      >
        Details
      </motion.h2>

      <motion.div
        variants={container}
        className="
          text-[#5f564c]
          text-[1.05rem]
          leading-relaxed
          tracking-[0.03em]
          space-y-5
        "
      >
        <a
          href="https://maps.google.com/?q=Elaia+by+Cyma+Silang+Cavite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/location.webp"
            className="w-full h-[150px] object-cover border border-[#e6dfd4] "
            alt="Map location"
          />
        </a>
        <div className="space-y-6 text-[#4a433a] leading-relaxed pt-12">
          <p>
            <span className="block text-sm tracking-widest uppercase opacity-70">
              Attire
            </span>
            Smart Casual
          </p>

          <p className="max-w-md mx-auto">
            Your presence is the greatest gift we could ask for. Should you wish
            to bless us further, a monetary gift would be greatly appreciated.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
