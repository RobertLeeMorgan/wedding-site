import Divider from "@/components/Divider";
import Gallery from "@/components/Gallery";
import { motion } from "framer-motion";

export default function HeroSection({ container, item }) {
  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      animate="visible"
      className="
        w-full
        overflow-hidden
        max-w-3xl
        mx-auto
        text-center
        flex
        flex-col
        justify-center
        items-center
        space-y-18
        h-svh
      "
    >
      <motion.div variants={item} className="relative z-10">
        <Divider header />
        <h1
          className="
          relative
            text-[clamp(3rem,6vw,4rem)]
            title
            tracking-widest
            text-[#3b342c]
            font-light
          "
          style={{
            textShadow:
              "0 1px 0 rgba(255,255,255,0.55), 0 -1px 0 rgba(0,0,0,0.1)",
          }}
        >
          Mitzie & Rob
        </h1>
      </motion.div>

      <Gallery item={item} />

      <motion.div
        variants={item}
        className="
          relative z-10
          text-[#6a6157]
          text-lg
          uppercase
          tracking-[0.18em]
          space-y-2
        "
      >
        <p>March 10, 2026</p>
        <p>Elaia by Cyma, Silang</p>
      </motion.div>
    </motion.section>
  );
}
