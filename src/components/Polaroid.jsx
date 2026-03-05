export default function Polaroid({ picture, text }) {
  return (
    <figure className="hover:scale-[1.02] transition grayscale duration-500 hover:grayscale-0">
      <img src={picture} alt={text} loading="lazy"/>
    </figure>
  );
}
