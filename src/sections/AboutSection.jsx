import Photos from "@/components/Photos";
import TechStack from "@/components/TechStack";

export default function AboutSection() {
  return (
    <section id="about" className="mb-10 md:mb-30 pt-6 md:pt-10 lg:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 md:mb-34 gap-8 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* About Text */}
        <div className="md:text-left">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 sm:mb-8 heading text-neutral-100 uppercase md:tracking-wide">
            Profile
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl body max-w-2xl text-neutral-300">
            I design and ship web applications end-to-end with ownership across their full lifecycle — from architecture and deployment to iteration. My background in art and animation informs approach UX, while years in system-driven roles like Gracenote shaped how I think about validation, observability, and sustainability.
          </p>
        </div>
        {/* Polaroid Images */}
        <Photos />
      </div>

      <TechStack />
    </section>
  );
}
