import premiere from "../../images/premiere.jp2";
import wecoop from "../../images/wecoop.jp2";
import airbnb from "../../images/airbnb.jp2";
import pawly from "../../images/pawly.jp2";
import elements from "../../images/elements.jpg";
import anotherWorks from "../../images/anotherWorks.jpg";
import papamo from "../../images/papamo.jpg";

export const workProjects = [
  {
    title: "PAPAMO株式会社",
    id: "papamo",
    image: papamo,
    about: "詳細はスキルシートでご確認ください。",
  },
  {
    title: "株式会社 Elements",
    id: "elements",
    image: elements,
    about: "詳細はスキルシートでご確認ください。",
  },
  {
    title: "株式会社 Another works",
    id: "anotherWorks",
    image: anotherWorks,
    about: "詳細はスキルシートでご確認ください。",
  },
];

export const myProjects = [
  {
    title: "pawly",
    id: "pawly",
    image: pawly,
    url: "https://pawly.vercel.app/",
    git: "https://github.com/Smiyu-web/pawly-client",
    type: "PUPPY HEALTH MANAGEMENT APP",
    langs: [
      "Next.js",
      "React",
      "React Redux",
      "Apollo Client",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "Apollo Server Express",
    ],
    about:
      "Pawly is a puppy health management application. Able to keep a redord of puppy's weight, what they eat, and how long they do exercise",
  },
  {
    title: "airbnb",
    id: "airbnb",
    image: airbnb,
    url: "https://airbnb-project.vercel.app/",
    git: "https://github.com/hiro9108/airbnb-project",
    type: "AIRBNB CLONE APP",
    langs: [
      "Next.js",
      "React",
      "React Redux",
      "TypeScript",
      "Apollo Client",
      "Tailwind CSS",
      "AWS Cognito",
      "AWS APP SYNC",
      "AWS DynamoDB",
    ],
    about:
      "An airbnb clone app. We made this to study new language such as GraphQL, Appllo Client, and AWS database.",
  },
  {
    title: "we co-op",
    id: "wecoop",
    image: wecoop,
    url: "https://we-coop.netlify.app/",
    git: "https://github.com/We-Coop-Project",
    type: "TIME MANAGEMENT APP",
    langs: ["React", "Tailwind", "Python", "Django", "PostgreSQL", "Firebase"],
    about:
      "We CO-OP is a co-op time management web application. We want to do something useful for students who go to school like us. This app was created in that process, and we hope it will be useful to everyone.",
  },
  {
    title: "premiere",
    id: "premiere",
    image: premiere,
    url: "https://premiere-st.netlify.app/",
    git: "https://github.com/ayumitanaka13/premiere",
    type: "E-COMMERCE WEBSITE",
    langs: ["HTML", "SASS", "JavaScript", "jQuery", "Django"],
    about:
      "A mockup eCommerce website for the select interior shop based in Vancouver, Canada.",
  },
];

export const findWork = (id) => {
  return myProjects.find((work) => work.id === id);
};
