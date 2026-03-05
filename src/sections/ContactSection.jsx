"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PiCaretUpBold } from "react-icons/pi";
import Footer from "@/components/Footer";
import AnimatedTitle from "@/components/AnimatedTitle";

const CONTACT = [
  {
    href: "https://www.linkedin.com/in/robert-morgan-dev/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://www.github.com/RobertLeeMorgan",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "mailto:robmorgan.dev@gmail.com",
    icon: <CiMail />,
    label: "Email",
  },
];

export default function ContactSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end end"],
});

  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.5, 1], [-120, 0]);

  const pop = {
    hidden: { scale: 0.6 },
    show: {
      scale: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full text-stone-800 h-[170lvh] mt-[-70lvh]"
      
    >
      <motion.div
        style={{ opacity, y }}
        className="sticky h-lvh top-0 flex flex-col justify-center items-center space-y-6 w-full"
      >
        <AnimatedTitle
          className="heading text-center md:tracking-wide flex text-5xl sm:text-7xl font-bold mb-8"
          name="Get in touch"
          delay={0.3}
        />

        <motion.div className="flex gap-8 py-2">
          {CONTACT.map((link, i) => (
            <motion.div
              key={i}
              variants={pop}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                target="_blank"
                className="text-5xl sm:text-6xl md:text-7xl text-stone-800 hover:text-stone-950 transition-colors duration-500"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="body text-xl text-stone-700 sm:text-xl md:text-3xl underline">
          robmorgan.dev@gmail.com
        </p>

        <p className="body text-base sm:text-xl text-stone-700 md:text-3xl">
          Open to freelance and contract work.
        </p>

        <motion.a
          href="#home"
          className="body flex justify-center text-5xl sm:text-6xl md:text-7xl text-stone-400 hover:text-stone-800 transition-colors duration-500"
          variants={pop}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <PiCaretUpBold />
        </motion.a>
      </motion.div>

      <Footer />
    </section>
  );
}
