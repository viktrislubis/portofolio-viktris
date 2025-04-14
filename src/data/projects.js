import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbApi, TbDatabase } from "react-icons/tb";
import { SiThemoviedatabase } from "react-icons/si";
import { FaLaravel, FaPhp } from "react-icons/fa";

const ProjectsData = [
  {
    id: "1",
    name: "IT Del Alumni and Career Website",
    image: "./ppkha.png",
    icons: [FaLaravel, FaPhp, BiLogoCss3, SiThemoviedatabase],
    description:
      "A web-based system to support IT Del students' careers and strengthen alumni engagement.",
    github: "https://github.com/mitsuha19/SI-PPKHA",
  },
  {
    id: "2",
    name: "IT Del Informatics Website ",
    image: "./prodi.png",
    icons: [FaLaravel, FaPhp, BiLogoTailwindCss, TbDatabase],
    description:
      "The Informatics website is a platform that provides various information on the Bachelor of Informatics study program at the Del Institute of Technology.",
    github: "https://github.com/viktrislubis/website-prodi-proyekbesar",
  },
  {
    id: "3",
    name: "IT Del Lost and Found Website ",
    image: "./lostfound.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, BiLogoCss3, BiLogoFirebase],
    description:
      "The Lost and Found website at IT Del is a platform designed to help students report and track lost or found items within the campus.",
    github: "https://github.com/delcom-itdel/pabwe2024-k2-lost-founds",
  },
];

export default ProjectsData;
