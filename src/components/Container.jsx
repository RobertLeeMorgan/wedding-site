import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

export const sans = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
  display: "swap",
});

export const mono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function Container({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${sans.variable} ${mono.variable} relative flex justify-center min-h-screen bg-gradient-to-b from-[#0b1812] via-[#0f1f17] to-[#14261d]`}
    >
      {/* Left gutter */}
      <div
        className="hidden md:block fixed top-0 left-0 h-screen w-1/6 bg-cover bg-top opacity-5 scale-x-[-1]"
        style={{ backgroundImage: "url('/abstract.webp')" }}
      />
      <div
        className="hidden md:block fixed top-0 right-0 h-screen w-1/6 bg-cover bg-top opacity-5"
        style={{ backgroundImage: "url('/abstract.webp')" }}
      />

      <div className="relative w-full md:w-2/3">
        <div
          className="
              relative
              overflow-hidden
              mx-auto
              text-center
              bg-gradient-to-b from-[#f7f3ea] via-[#f3eee4] to-[#ece6db]
              border-t border-l border-[#f5f0e7]
              border-b border-r border-[#d8cfc1]
              ring-2 ring-[#d9d2c6]
              shadow-[0_20px_40px_rgba(0,0,0,0.45)]
            "
        >
          {/* Paper texture */}
          <div
            className="
                absolute inset-0
                bg-[url('/paper.webp')]
                bg-repeat
                bg-[length:420px]
                opacity-[0.8]
                mix-blend-multiply
                pointer-events-none
                z-0
              "
          />

          {/* Page content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 space-y-16"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
