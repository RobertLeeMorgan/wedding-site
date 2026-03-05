export default function Tech({ skill }) {
    return (
         <div
            className="group flex items-center gap-2 md:gap-4 text-neutral-700 min-w-max"
          >
            <span
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-80 transition-colors duration-300 ${skill.hover}`}
            >
              {skill.icon}
            </span>
            <span className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl heading tracking-tight sm:tracking-normal md:tracking-wide transition-colors duration-300 ${skill.hover}`}>
              {skill.tag}
            </span>
          </div>
    )
}