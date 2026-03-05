export default function Footer() {

  return (
    <footer
      className="text-neutral-900 body p-6 w-full absolute bottom-0 left-0 grid grid-cols-2 text-nowrap"
      id="contact"
    >
      <aside className="items-center justify-content-center sm:justify-start gap-2 sm:gap-4 flex">
        <img src="/logo.webp" className="w-auto max-h-6" alt="RM logo"></img>
        <p className="body text-xs sm:text-[14px]">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>

      <div className="justify-end hidden md:block gap-4 md:place-self-center md:justify-self-end">
        <p className="body">Built with React/ Next.js</p>
      </div>
    </footer>
  );
}
