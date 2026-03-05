import Button from "@/components/Button";
import Nav from "@/components/Nav";
import AnimatedTitle from "@/components/AnimatedTitle";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.32], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.32], [0, 100]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-[200svh] grid w-full mx-auto" id="home" ref={ref}>
      <Nav variants={variants} />
      {/* Main content */}
      <motion.div
        style={{ opacity, y, scale }}
        className="sticky top-0 h-svh grid lg:space-y-0 space-y-6 place-content-center lg:place-content-evenly px-6"
      >
        <div className="flex flex-wrap md:flex-nowrap sm:gap-[3vw] font-bold text-stone-900 tracking-tight text-start md:text-center heading pt-10 md:pt-0 md:text-[clamp(5rem,12cqw,20rem)] text-[clamp(4.5rem,18vw,8rem)] leading-none uppercase">
          <AnimatedTitle
            name="Robert"
            className="-ml-[0.05em]"
            delay={0}
            as="h1"
          />
          <AnimatedTitle
            name="Morgan"
            className="-ml-[0.05em] md:-mr-[0.05em]"
            delay={0.2}
          />
        </div>

        <motion.div
          className="self-start text-start sm:text-center sm:text-start"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xl body sm:text-2xl md:text-3xl max-w-xl mb-6 md:mb-10 text-stone-600">
            Full-stack developer building reliable, maintainable systems from
            architecture to production.
          </p>

          <div className="space-x-2 sm:space-x-4 text-left">
            <Button
              name="View Work"
              className="bg-stone-900 hover:bg-stone-200 text-stone-200 hover:text-stone-900 hover:border hover:border-stone-900 "
              hero
              link="#work"
              scroll
            />
            <Button
              name="Resume"
              className="text-stone-900 hover:text-stone-200 border border-stone-900 hover:bg-stone-900"
              hero
              link="/Robert_Morgan_Resume.pdf"
              target="_blank"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
