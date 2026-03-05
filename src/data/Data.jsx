import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiReactquery,
  SiReactrouter,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql, DiMongodb } from "react-icons/di";

export const SKILLS = {
  FrontEnd: [
    {
      icon: <FaReact />,
      tag: "React",
      hover: "group-hover:text-sky-400",
    },
    {
      icon: <SiNextdotjs />,
      tag: "Next.js",
      hover: "group-hover:text-black",
    },
    {
      icon: <SiTailwindcss />,
      tag: "Tailwind",
      hover: "group-hover:text-cyan-400",
    },
    {
      icon: <SiTypescript />,
      tag: "TypeScript",
      hover: "group-hover:text-blue-500",
    },
    {
      icon: <SiReactquery />,
      tag: "Tanstack",
      hover: "group-hover:text-orange-500",
    },
    {
      icon: <SiReactrouter />,
      tag: "React Router",
      hover: "group-hover:text-rose-500",
    },
  ],

  BackEnd: [
    {
      icon: <FaNodeJs />,
      tag: "Node.js",
      hover: "group-hover:text-green-600",
    },
    {
      icon: <SiExpress />,
      tag: "Express",
      hover: "group-hover:text-black",
    },
    {
      icon: <IoLogoJavascript />,
      tag: "JavaScript",
      hover: "group-hover:text-yellow-400",
    },
    {
      icon: <DiMysql />,
      tag: "MySQL",
      hover: "group-hover:text-blue-600",
    },
    {
      icon: <DiMongodb />,
      tag: "MongoDB",
      hover: "group-hover:text-emerald-600",
    },
    {
      icon: <SiGraphql />,
      tag: "GraphQL",
      hover: "group-hover:text-pink-500",
    },
    {
      icon: <FaGitAlt />,
      tag: "Git",
      hover: "group-hover:text-orange-600",
    },
  ],
};
