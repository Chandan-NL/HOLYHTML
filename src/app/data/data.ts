import { FaUsers, FaPencilRuler } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import WebDevIcon from "../Icons/WebDevIcon";
import DeploymentIcon from "../Icons/DeploymentIcon";
import Everything from "../Icons/Everything";
import FullStackIcon from "../Icons/FullStackIcon";
import MaintenenceIcon from "../Icons/MaintenenceIcon";
import WebDesignIcon from "../Icons/WebDevIcon";

export const HeroData = [
  {
    id: 1,
    title: "Modern Web Apps",
    dec: "Web apps that are discoverable, easy to customize with a modern tech stack to optimize your website for performance.",
    icon: MdOutlineWeb,
  },
  {
    id: 2,
    title: "Tailored design",
    dec: "Custom designs tailored to your needs, providing you a prototype that is easy to navigate and comfortable to work with.",
    icon: FaPencilRuler,
  },
  {
    id: 3,
    title: "Built by experts",
    dec: "We are a team of Software Developers, have built and developed web apps at scale. You can trust us.",
    icon: FaUsers,
  },
];

export const ProjectData = [
  {
    id: 1,
    title: "Project 1",
    desc1:
      "project desc project descproject descproject descproject descproject descproject desc",
    desc2:
      "project desc project descproject descproject descproject descproject descproject desc",
    linkTitle: "Live Preview",
    link: "https://chandan-nl.github.io/portfolio/",
    img1: "./404.png",
    img2: "./404.png",
  },

  {
    id: 2,
    title: "Project 2",
    desc1:
      "project desc project descproject descproject descproject descproject descproject desc",
    desc2:
      "project desc project descproject descproject descproject descproject descproject desc",
    linkTitle: "Live Preview ",
    link: "/test",
    img1: "./404.png",
    img2: "./404.png",
  },
];

export const CardData = [
  {
    id: 1,
    icon: WebDevIcon,
    title: "Web App development",
    desc: "We'll build you a website that's so good, it'll make all the other websites jealous. Trust me, not kidding.",
  },
  {
    id: 2,
    icon: WebDesignIcon,
    title: "Web Design",
    desc: "Your website will be so beautiful, you'll want to frame it and hang it on your wall (but please don't).",
  },
  {
    id: 3,
    icon: DeploymentIcon,
    title: "Deployments and Hosting",
    desc: "Get your website out there in the world, where it belongs, with our lightning-fast deployment services.",
  },
  {
    id: 4,
    icon: MaintenenceIcon,
    title: "Maintenence",
    desc: "We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we've got you covered.",
  },
  {
    id: 5,
    icon: FullStackIcon,
    title: "Full-Stack Development",
    desc: "Take your website to the next level with our full-stack development services. We've got all the skills to make your vision a reality.",
  },
  {
    id: 6,
    icon: Everything,
    title: "And everything else",
    desc: "Ecommerce, Landing pages, Back-end heavy, Dashboards. You name it, we've done it AND we'll do it for you.",
  },
];
