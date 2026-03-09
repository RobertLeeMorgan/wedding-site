import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TimeBlock from "@/components/TimeBlock";

export default function StreamSection({ container, item }) {
  const streamStart = new Date("2026-03-10T17:30:00+08:00");

  function getTimeRemaining() {
    const now = new Date();
    const diff = streamStart - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const remaining = getTimeRemaining();
    setTimeLeft(remaining);
    setStarted(remaining === null);

    const timer = setInterval(() => {
      const remaining = getTimeRemaining();

      if (!remaining) {
        setStarted(true);
        setTimeLeft(null);
        clearInterval(timer);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section
      id="stream"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        relative
        max-w-3xl
        mx-auto
        text-center
        space-y-10
        px-6
      "
    >
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
        Watch the Ceremony
      </motion.h2>

      <motion.p
        variants={item}
        className="text-[#6a6157] text-[1.05rem] tracking-[0.03em] max-w-xl mx-auto"
      >
        For friends and family who cannot attend in person.
      </motion.p>

      {!started && timeLeft && (
        <motion.div variants={item} className="space-y-6">
          <p className="text-[#5f564c] tracking-[0.08em] uppercase text-sm">
            Livestream begins in
          </p>

          <div className="flex justify-center gap-10 text-[#3b342c]">
            <TimeBlock value={timeLeft.days} label="Days" item={item} />
            <TimeBlock value={timeLeft.hours} label="Hours" item={item} />
            <TimeBlock value={timeLeft.minutes} label="Minutes" item={item} />
            <TimeBlock value={timeLeft.seconds} label="Seconds" item={item} />
          </div>
        </motion.div>
      )}

      {started && (
        <motion.div
          variants={item}
          className="
            max-w-3xl
            mx-auto
            aspect-video
            overflow-hidden
            border border-[#d8cfc1]
            shadow-[0_8px_20px_rgba(0,0,0,0.08)]
          "
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/DFKKBADTBdE?autoplay=1"
            title="Wedding Livestream"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </motion.div>
      )}

      {!started && (
        <motion.p
          variants={item}
          className="text-[#8a8075] text-sm tracking-[0.04em]"
        >
          The stream will appear here when the ceremony begins.
        </motion.p>
      )}
    </motion.section>
  );
}