"use client";

import { motion } from "framer-motion";

export default function Button({ name, link, className, scroll, label }) {
  return (
    <motion.a
      className={`
        py-2 text-lg sm:text-xl 
        w-32 sm:w-36 md:w-38 body
        rounded-full shadow-md hover:shadow-lg
        ${className} 
        inline-block text-center transition-colors duration-300
      `}
      label={name}
      target="_blank"
      href={link}
      aria-label={`Go to ${label && label} ${name}`}
      {...(scroll && { "data-scroll-to": true })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {name}
    </motion.a>
  );
}
