import {
  BiGlobe,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoTypescript,
  BiPalette,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { PiFigmaLogo } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";

export const industries = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      FaHtml5,
      SiTailwindcss,
      FaCss3Alt,
      RiJavascriptFill,
      BiLogoTypescript,
      TbBrandNextjs,
      FaReact,
      BsGithub,
    ],
    represent: BiGlobe,
  },
  {
    id: 2,
    title: "Full-stack Development",
    skills: [
      FaHtml5,
      SiTailwindcss,
      FaCss3Alt,
      RiJavascriptFill,
      BiLogoTypescript,
      TbBrandNextjs,
      FaReact,
      BsGithub,
      BiLogoMongodb,
      BiLogoPostgresql,
      TbBrandPrisma,
      SiExpress,
      FaNodeJs,
    ],
    represent: FaArrowsRotate,
  },
  {
    id: 3,
    title: "UX Design",
    skills: [PiFigmaLogo],
    represent: BiPalette,
  },
];
