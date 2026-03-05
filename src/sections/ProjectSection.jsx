import { PROJECTS } from "@/data/ProjectData";
import ProjectScreen from "@/components/ProjectScreen";

export default function ProjectSection() {
  return (
    <section className="px-4 pt-10 sm:px-6 md:px-8 lg:px-10 pb-6" id="work">
      <h2 className="text-4xl sm:text-6xl md:text-7xl md:tracking-wide font-bold heading text-neutral-100 uppercase text-end md:mb-2">
        Select Work
      </h2>
      <p className="body text-end text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl">
        Please allow up to 1 minute for projects to spin up.
      </p>
      {PROJECTS.map((project) => (
        <ProjectScreen key={project.title} project={project} />
      ))}
    </section>
  );
}
