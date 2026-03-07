"use client";

import { motion } from "framer-motion";

export default function AgendaSection({container, item}) {

  return (
    <motion.section
      id="agenda"
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
        Wedding Agenda
      </motion.h2>

      {/* Agenda List */}
      <motion.ul
        variants={container}
        className="
          text-[#5f564c]
          text-[1.05rem]
          leading-relaxed
          tracking-[0.03em]
          space-y-5
        "
      >
        {[
          ["Guest Arrival", "Guests are welcomed at the venue"],
          ["Ceremony", "Simple wedding officiated by Pastor Chris"],
          ["Photos & Family Portraits", "Portraits and candid photos after the ceremony"],
          ["Dinner", "Traditional Greek dishes served family-style"],
          ["Toasts", "Short speeches and well wishes during dinner"],
          ["Cake Cutting", "Includes a special gender reveal"],
          ["Bouquet Toss", "A fun activity to close the evening"],
          ["Wrap-Up", "Guests can linger, take photos, and depart at leisure"]
        ].map(([title, desc], i) => (
          <motion.li key={i} variants={item}>
            <span className="uppercase tracking-[0.12em] text-[#4a433b]">
              {title}
            </span>
            <p className="mt-1 text-[#6a6157]">
              {desc}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}