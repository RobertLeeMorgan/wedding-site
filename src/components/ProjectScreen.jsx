import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import VideoOp from "./VideoOp";

export default function ProjectScreen({ project }) {
  return (
    <div className="relative w-full  py-10 md:py-20 lg:py-30 grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center justify-center sm:gap-2 lg:gap-6">
      {/* LEFT COLUMN */}
      <div className="relative z-10 max-w-[800px] rounded-lg text-neutral-200  order-1">
        <AnimatedTitle
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 title sm:text-center md:text-left"
          name={project.title}
        />

        {/* DESKTOP DESCRIPTION */}
        <div className="hidden lg:block">
          <p className="mb-4 body text-xl text-neutral-300">
            {project.description}
          </p>

          <div className="flex flex-wrap md:gap-2 md:mb-4">
            {project.tech.map((tech) => (
              <span
                key={`${tech.tag}-${project.title}`}
                className={`${tech.hover} transition-colors duration-500 px-2 py-1 rounded body text-[14px] md:text-lg lg:text-xl flex gap-2 items-center text-neutral-300`}
              >
                {tech.icon} {tech.tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <Button
              name="Live Site"
              link={project.site}
              className="bg-neutral-200 text-neutral-900 hover:border hover:border-neutral-200 hover:bg-neutral-950 hover:text-neutral-200"
            />
            <Button
              name="View Repo"
              link={project.repo}
              className="text-neutral-200 border border-neutral-200 hover:bg-neutral-200 hover:text-neutral-950"
              label={project.title}
            />
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <VideoOp
        src={project.gif}
        poster={project.poster}
        className="rounded order-2 md:order-2 lg:mb-0 md:mb-6 mb-4 w-full max-w-[800px] mx-auto h-auto"
      />

      {/* MOBILE DESCRIPTION */}
      <div className="lg:hidden order-3 max-w-4xl text-neutral-200 max-w-[800px] mx-auto">
        <p className="mb-4 body text-base sm:text-lg md:text-xl lg:text-2xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.tech.map((tech) => (
            <span
              key={`${tech.tag}-${project.title}-mobile`}
              className={`${tech.hover} transition-colors duration-500 rounded text-sm sm:text-base md:text-lg flex gap-3 items-center`}
            >
              {tech.icon} {tech.tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button
            name="Live Site"
            link={project.site}
            className="bg-neutral-200 text-neutral-900 hover:border hover:border-neutral-200 hover:bg-neutral-950 hover:text-neutral-200"
          />
          <Button
            name="View Repo"
            link={project.repo}
            className="text-neutral-200 border border-neutral-200 hover:bg-neutral-200 hover:text-neutral-950"
          />
        </div>
      </div>
    </div>
  );
}
