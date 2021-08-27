import premiere from "../../images/premiere.jp2";
import wecoop from "../../images/wecoop.jp2";
import airbnb from "../../images/airbnb.jp2";
import pawly from "../../images/pawly.jp2";
import planimal from "../../images/planimal.jp2";

export const projects = [
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
    title: "planimal",
    id: "planimal",
    image: planimal,
    url: "https://planimal-app.vercel.app/",
    git: "https://github.com/Smiyu-web/planimal-app",
    type: "RETAIL/WHOLESALE E-COMMERCE",
    langs: ["React", "React Redux", "Tailwind CSS", "MongoDB", "Express"],
    about:
      "Planimal is a retail/website plants store. This is MERN application.",
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
  return projects.find((work) => work.id === id);
};
