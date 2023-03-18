import jsLogo from "./icons/javascript.svg";
import nodeLogo from "./icons/node.svg";
import htmlLogo from "./icons/html.svg";
import typescriptLogo from "./icons/typescript.svg";
import tailwindLogo from "./icons/tailwind.svg";
import cssLogo from "./icons/css3.svg";
import rtlLogo from "./icons/RTL.png";
import triviaImg from "./icons/trivia.png";
import trybeTunesImg from "./icons/trybetunes.png";
import recipesAppImg from "./icons/recipes-app.png";
import trybeWalletImg from "./icons/trybeWallet.png";

export const texts = {
  myName: "Douglas Santos",
  myProfission: "DEV Front-end",
  HardSkills: [
    {
      name: "React",
      styles: "animated-spin-slow",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
    },
    {
      name: "JavaScript ES6",
      styles: "hover:animate-ping",
      img: jsLogo,
    },
    {
      name: "TypeScript",
      styles: "hover:animate-ping",
      img: typescriptLogo,
    },
    {
      name: "NodeJs",
      styles: "hover:animate-bounce",
      img: nodeLogo,
    },
    {
      name: "HTML",
      styles: "hover:animate-ping",
      img: htmlLogo,
    },
    {
      name: "CSS",
      styles: "hover:animate-ping",
      img: cssLogo,
    },
    {
      name: "TailWind",
      styles: "hover:animate-ping",
      img: tailwindLogo,
    },
    {
      name: "React Testing Library",
      styles: "hover:animate-ping",
      img: rtlLogo,
    },
  ],
  softskills: "Metodologias ageis com scrum Kanban, Trello ",
};

export const projectsList = [
  {
    name: "Trivia",
    image: triviaImg,
    technologies: "React, Javascript, Jest, React Router, Tailwind, API, Redux",
    deploy: "https://dougsaint.github.io/trivia/",
    repository: "https://github.com/DougSaint/trivia",
  },
  {
    name: "App de receitas",
    image: recipesAppImg,
    technologies:"React, Javascript, Jest, Tailwind, API, ContextApi, Tailwind",
    deploy: "",
    repository: "",
  },
  {
    name: "Trybe Wallet",
    image: trybeWalletImg,
    technologies: "React, Javascript, Jest, React Router, Tailwind, Redux",
    deploy: "https://dougsaint.github.io/trybewallet/",
    repository: "https://github.com/DougSaint/trybewallet",
  },
  {
    name: "TrybeTunes",
    image: trybeTunesImg,
    technologies: "React, Javascript, Jest, React Router, Css Modules, API.",
    deploy: "https://dougsaint.github.io/trybetunes/",
    repository: "https://github.com/DougSaint/trybetunes",
  },
];
