import { FaReact, FaDocker, FaSpotify, FaYoutube } from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiOpenai,
  SiReactquery,
  SiPostgresql,
  SiExpress,
  SiSupabase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export const PROJECTS = [
  {
  title: "TLDR History",
  gif: "/tldr.mp4",
  poster:"/tldr.webp",
  tech: [
    {
      icon: <FaReact />,
      tag: "React",
      hover: "hover:text-sky-400",
    },
    {
      icon: <SiTypescript />,
      tag: "TypeScript",
      hover: "hover:text-blue-500",
    },
    {
      icon: <SiGraphql />,
      tag: "GraphQL",
      hover: "hover:text-pink-500",
    },
    {
      icon: <SiPostgresql />,
      tag: "PostgreSQL",
      hover: "hover:text-blue-600",
    },
    {
      icon: <SiOpenai />,
      tag: "OpenAI",
      hover: "hover:text-gray-100",
    },
    {
      icon: <SiReactquery />,
      tag: "TanStack",
      hover: "hover:text-orange-500",
    },
  ],
  description:
    "An AI-assisted history platform for exploring global events through infinite-scrolling timelines, interactive maps, and real-time statistics. Built on a GraphQL backend with PostgreSQL and Prisma, enriched with OpenAI embeddings, and secured via JWT authentication.",
  site: "https://tldrhistory.xyz",
  repo: "https://github.com/RobertLeeMorgan/tldrhistory-v2",
},
{
  title: "Aquaclear",
  gif: "/aquaclear.mp4",
  poster:"/aquaclear.webp",
  tech: [
    {
      icon: <SiTypescript />,
      tag: "TypeScript",
      hover: "hover:text-blue-500",
    },
    {
      icon: <FaReact />,
      tag: "React",
      hover: "hover:text-sky-400",
    },
    {
      icon: <SiExpress />,
      tag: "Express",
      hover: "hover:text-neutral-200",
    },
    {
      icon: <FaDocker />,
      tag: "Docker",
      hover: "hover:text-sky-500",
    },
    {
      icon: <SiSupabase />,
      tag: "Supabase",
      hover: "hover:text-emerald-500",
    },
    {
      icon: <SiOpenai />,
      tag: "OpenAI",
      hover: "hover:text-gray-100",
    },
  ],
  description:
    "A production web platform for a UK environmental services company featuring an AI-powered client assistant with persistent memory. Uses a RAG architecture with Supabase and OpenAI embeddings, comprehensive automated testing, and CI/CD deployment on Render.",
  site: "https://aquaclear.onrender.com",
  repo: "https://github.com/RobertLeeMorgan/aquaclear",
},
{
  title: "Slumbernaut",
  gif: "/slumbernaut.mp4",
  poster:"/slumbernaut.webp",
  tech: [
    {
      icon: <SiNextdotjs />,
      tag: "Next.js",
      hover: "hover:text-gray-400",
    },
    {
      icon: <FaReact />,
      tag: "React",
      hover: "hover:text-sky-400",
    },
    {
      icon: <SiTailwindcss />,
      tag: "Tailwind",
      hover: "hover:text-cyan-400",
    },
    {
      icon: <FaSpotify />,
      tag: "Spotify API",
      hover: "hover:text-green-500",
    },
    {
      icon: <FaYoutube />,
      tag: "YouTube API",
      hover: "hover:text-red-500",
    },
  ],
  description:
    "A dynamic artist website that auto-syncs content from Spotify, YouTube, and Google Calendar. Artists manage media and events directly from their platforms, with full theming via CSS variables and reusable state management.",
  site: "https://slumbernautreal.vercel.app",
  repo: "https://www.github.com/RobertLeeMorgan/slumbernautreal",
},

  // {
  //   title: "Grip Guru",
  //   gif: "/gripguru.mp4",
  //   tech: ["Express", "MongoDb", "EJS", "Bootstrap", "Mapbox", "Passport"],
  //   description:
  //     "A community review platform for bouldering gyms across Europe, built with Express, MongoDB, and Mapbox. Users can add gyms, upload photos, and explore locations on interactive maps via geospatial searches. Includes input validation for high-quality reviews, image hosting with Cloudinary, and secure authentication with Passport.js.",
  //   site: "https://gripguru.onrender.com/",
  //   repo: "https://www.github.com/RobertLeeMorgan/gripguru",
  // },
];
