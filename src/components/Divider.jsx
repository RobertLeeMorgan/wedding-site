export default function Divider({header}) {
  return (
    <img
      src={header ? "/emblem.svg" : "/fancy.svg"}
      alt="ornamental divider"
      className={`${header ? "h-40 opacity-13 absolute -top-8" : "h-8 opacity-80"} place-self-center mix-blend-multiply saturate-120 transition-all duration-500`}
    />
  );
}
