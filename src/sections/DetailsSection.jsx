"use client";

import { motion } from "framer-motion";

export default function DetailsSection({ container, item }) {
  return (
    <motion.section
      id="details"
      className="
        relative
        max-w-xl
        mx-auto
        text-center
        space-y-12
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
          space-y-8
        "
      >
        {/* Map */}
        <a
          href="https://maps.google.com/?q=Elaia+by+Cyma+Silang+Cavite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/location.webp"
            className="w-full h-[150px] object-cover border border-[#e6dfd4] rounded-lg"
            alt="Map location"
          />
        </a>

        <div className="space-y-4 text-[#4a433a] leading-relaxed pt-4">
          <p className="text-sm italic opacity-80 pb-4">
            Parking is available on site. For inquiries, contact +63 954 395
            4764.
          </p>
          <p>
            <span className="block text-sm tracking-widest uppercase opacity-70">
              Arrival
            </span>
            5:30pm
          </p>
          <p>
            <span className="block text-sm tracking-widest uppercase opacity-70">
              Departure
            </span>
            10pm
          </p>
          <p>
            <span className="block text-sm tracking-widest uppercase opacity-70">
              Attire
            </span>
            Smart Casual
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
