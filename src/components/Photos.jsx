import Polaroid from "./Polaroid.jsx";

export default function Photos() {
  return (
    <div className="flex group w-full m-auto overflow-hidden space-x-0 sm:space-x-4 lg:space-x-0 max-w-200">
      <Polaroid picture="/travel-1.webp" text="Morocco market"/>
      <Polaroid picture="/travel-2.webp" text="Art gallery"/>
      <Polaroid picture="/travel-3.webp" text="El Capitan, Yosemite"/>
    </div>
  );
}
