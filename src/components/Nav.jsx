"use client";

import { motion } from "framer-motion";

export default function Nav({ variants }) {
  return (
    <motion.nav
      className="py-6 body z-20 px-6 md:px-[clamp(6px,3vw,60px)] w-full absolute top-0 left-0 grid grid-cols-2"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="justify-start">
        <a className="btn btn-ghost text-wrap text-md sm:text-xl text-stone-600">
          Web Developer and Designer
        </a>
      </div>
      <div className="flex justify-end">
        <ul className="md:gap-8 lg:gap-10 space-y-3 flex text-stone-600 text-md sm:text-xl flex-col md:flex-row">
          {["About", "Work", "Contact"].map((item) => (
            <li key={item} className="overflow-hidden h-[1.2em]">
              <motion.a
                className="inline-block"
                initial={{ y: 0 }}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: "-50%" }}
                whileTap={{ y: "-50%" }}
                transition={{ type: "tween", duration: 0.3 }}
                aria-label={`Go to ${item}`}
              >
                <span className="block">{item}</span>
                <span className="block">{item}</span>{" "}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
