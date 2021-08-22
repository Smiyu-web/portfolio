import premiere from "../../images/premiere.jpeg";
import wecoop from "../../images/wecoop.jpeg";
import airbnb from "../../images/airbnb.jpeg";

export const projects = [
  {
    title: "Airbnb",
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
      "Tailwind",
      "AWS Cognito",
      "AWS APP SYNC",
      "AWS DynamoDB",
    ],
    about:
      "An airbnb clone app. We made this to study new language such as GraphQL, Appllo Client, and AWS database.",
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
