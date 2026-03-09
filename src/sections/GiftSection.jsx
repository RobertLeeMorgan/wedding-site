"use client";

import { motion } from "framer-motion";

export default function GiftSection({ container, item }) {
  return (
    <motion.section
      id="gift"
      className="
        relative
        max-w-2xl
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
        Contributions & Well Wishes
      </motion.h2>

      {/* Description */}
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
        <p>
          Your presence is the greatest gift we could ask for. If you wish
          to bless us further, a monetary gift would be deeply appreciated.
        </p>
        <p className="italic text-sm text-[#7a6d5e]">
          Feel free to leave a message with your gift using the button below — we’ll read them
          all during the honeymoon!
        </p>
      </motion.div>

      <motion.a
        variants={item}
        href="https://revolut.me/lobbamogan"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          px-8
          py-3
          border
          border-[#bfb4a2]
          bg-[#ece6db]/80
          text-[#3b342c]
          uppercase
          tracking-[0.18em]
          text-sm
          hover:bg-[#e6dfd4]
          transition-colors
          font-medium
        "
      >
        Add a Gift & Note
      </motion.a>
    </motion.section>
  );
}
