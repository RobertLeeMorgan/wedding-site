import {motion} from "framer-motion"

export default function TimeBlock({ value, label, item }) {
  return (
    <motion.div variants={item} className="text-center space-y-1">
      <div
        className="
          text-3xl
          font-light
          tracking-[0.08em]
          text-[#3b342c]
        "
        style={{
          textShadow:
            "0 1px 0 rgba(255,255,255,0.55), 0 -1px 0 rgba(0,0,0,0.04)",
        }}
      >
        {value}
      </div>

      <div
        className="
          text-xs
          uppercase
          tracking-[0.18em]
          text-[#8a8075]
        "
      >
        {label}
      </div>
    </motion.div>
  );
}