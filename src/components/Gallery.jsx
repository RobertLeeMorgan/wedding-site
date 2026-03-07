import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/photos/georgia.jpeg",
  "/photos/morocotour.jpeg",
  "/photos/church.jpeg",
  "/photos/acrop1.jpeg",
  "/photos/boat.jpeg",
  "/photos/gallery.jpeg",
  "/photos/pamukalleview-l.jpeg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const paginate = (direction) => {
    setIndex((prev) => (prev + direction + images.length) % images.length);
  };

  useEffect(() => {
    if (paused) return;

    const timer = setTimeout(() => paginate(1), 4000);
    return () => clearTimeout(timer);
  }, [index, paused]);

  return (
    <motion.div
      className="relative z-10 w-full max-w-2xl h-[220px] mx-auto overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x > 100) paginate(-1);
            if (info.offset.x < -100) paginate(1);
          }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>
      <div className="absolute inset-0 border-2 border-[#ece2d2] pointer-events-none z-10 hidden sm:block" />
      <div className="absolute inset-[5px] border border-[#f7f3ea] pointer-events-none z-10 hidden sm:block" />
    </motion.div>
  );
}
