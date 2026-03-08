export default function Divider({ header }) {
  return (
    <img
      src={header ? "/emblem.png" : "/fancy.svg"}
      alt="ornamental divider"
      className={`
    ${
      header
        ? "h-40 opacity-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        : "h-8 opacity-80 block mx-auto w-auto"
    }
    mix-blend-multiply saturate-120 transition-all duration-500
  `}
    />
  );
}
