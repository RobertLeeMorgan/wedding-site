"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function RSVPSection({ container, item }) {
  const ref = useRef(null);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      attendance: form.attendance.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.success) {
        setToast({ type: "success", message: "RSVP submitted. Thank you." });
        form.reset();
      } else {
        setToast({
          type: "error",
          message: data.error || "Something went wrong.",
        });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: "error", message: "Failed to submit RSVP." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <motion.section
      ref={ref}
      id="rsvp"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        relative
        max-w-3xl
        mx-auto
        text-center
        space-y-12
        px-6
        mb-10
      "
    >
      <motion.h2
        variants={item}
        className="
          text-[clamp(2rem,5vw,3rem)]
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
        RSVP
      </motion.h2>

      <motion.form
        variants={container}
        onSubmit={handleSubmit}
        className="
          grid
          gap-6
          w-full
          max-w-lg
          mx-auto
        "
      >
        <motion.input
          variants={item}
          type="text"
          name="name"
          placeholder="Your Name(s)"
          required
          className="px-4 py-3 text-[#3b342c] bg-transparent border border-[#c9bfaf] focus:outline-none focus:border-[#a89e8d] tracking-[0.03em] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
        />

        <motion.input
          variants={item}
          type="email"
          name="email"
          placeholder="Email Address"
          className="px-4 py-3 text-[#3b342c] bg-transparent border border-[#c9bfaf] focus:outline-none focus:border-[#a89e8d] tracking-[0.03em] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
        />

        <motion.select
          variants={item}
          name="attendance"
          required
          className="px-4 py-3 text-[#3b342c] bg-[#ece6db]/70 border border-[#c9bfaf] focus:outline-none focus:border-[#a89e8d] tracking-[0.03em] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
        >
          <option value="">Will you attend?</option>
          <option value="yes">Yes, I will attend</option>
          <option value="no">No, I cannot attend</option>
        </motion.select>

        <motion.textarea
          variants={item}
          name="message"
          rows={4}
          placeholder="Notes / Special Requests"
          className="px-4 py-3 text-[#3b342c] bg-transparent border border-[#c9bfaf] focus:outline-none focus:border-[#a89e8d] tracking-[0.03em] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
        />

        <motion.button
          variants={item}
          type="submit"
          disabled={loading}
          className="mt-2 py-3 border border-[#bfb4a2] text-[#3b342c] uppercase tracking-[0.18em] text-sm  hover:bg-[#e6dfd4]  transition-colors  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit RSVP"}
        </motion.button>

        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-16
              px-6
              py-3
              border
              border-[#d8cfc1]
              bg-[#f5efe5]
              text-[#3b342c]
              text-sm
              tracking-[0.05em]
              shadow-[0_4px_10px_rgba(0,0,0,0.08)]
            "
          >
            {toast.message}
          </motion.div>
        )}
      </motion.form>

      <motion.a
        variants={item}
        href="#home"
        className="
          text-4xl
          text-[#8a8075]
          hover:text-[#3b342c]
          transition-colors
          justify-center flex 
        "
      >
        <img
          src="/emblem.png"
          alt="ornamental divider"
          className="h-18 opacity-20 place-self-center mix-blend-multiply saturate-120 transition-all duration-500 "
        />
      </motion.a>
    </motion.section>
  );
}
