import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  TbBrandNextjs,
  TbApi,
  TbDatabase,
  TbBrandPrisma,
} from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "IT Del Alumni and Career Information System",
    image: "./ppkha.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description:
      "This project aims to build a web-based career and alumni information system for IT Del, designed to support students' career advancement and enhance alumni engagement.",
    github: "https://github.com/mitsuha19/SI-PPKHA",
  },
  {
    id: "2",
    name: "IT Del Informatics Website ",
    image: "./prodi.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description:
      "The Informatics website is a platform that provides various information on the Bachelor of Informatics study program at the Del Institute of Technology.",
    github: "https://github.com/viktrislubis/website-prodi-proyekbesar",
  },
  {
    id: "3",
    name: "IT Del Lost and Found Website ",
    image: "./chatapp.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description:
      "The Lost and Found website at IT Del is a platform designed to help students report and track lost or found items within the campus.",
    github: "https://github.com/delcom-itdel/pabwe2024-k2-lost-founds",
  },
  {
    id: "4",
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    icons: [
      BiLogoMongodb,
      SiExpress,
      BiLogoReact,
      BiLogoRedux,
      BiLogoTailwindCss,
    ],
    description:
      "This application provides an interface for users to track their expenses .",
    github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
  },
  {
    id: "5",
    name: "Car Rental Website",
    image: "./car-rental-app.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description:
      "This is an online platform that allows users to rent cars for personal or business use.",
    github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
  },
  {
    id: "8",
    name: "Blog Application",
    image: "./blog-app.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb, TbBrandPrisma],
    description:
      "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
    demo: "https://write-ur-blog.vercel.app",
  },
];

export default ProjectsData;
