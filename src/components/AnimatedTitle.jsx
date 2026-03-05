"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle({
  name,
  className,
  delay = 0,
  as: Component = "h2",
}) {
  const letters = name.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const MotionHeading = motion.create(Component);

  return (
    <MotionHeading
      className={`${className} text-nowrap`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span variants={letter} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </MotionHeading>
  );
}
