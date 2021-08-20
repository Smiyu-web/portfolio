import premiere from "../../images/premiere.jpeg";
import yuco from "../../images/yuco.jpeg";
import am from "../../images/11am.jpeg";
import wecoop from "../../images/wecoop.jpeg";

export const projects = [
  {
    title: "we co-op",
    id: "wecoop",
    image: wecoop,
    url: "https://we-coop.netlify.app/",
    git: "https://github.com/We-Coop-Project",
    type: "TIME MANAGEMENT",
    langs: ["React", "Tailwind", "Python", "Django", "PostgreSQL", "Firebase"],
    partner: "with Ami, Ayumi, Hiro",
    about:
      "We CO-OP is a co-op time management web application. We want to do something useful for students who go to school like us. This app was created in that process, and we hope it will be useful to everyone.",
  },
  {
    title: "premiere",
    id: "premiere",
    image: premiere,
    url: "https://premiere-st.netlify.app/",
    git: "https://github.com/ayumitanaka13/premiere",
    type: "E-COMMERCE",
    langs: ["HTML", "SASS", "JavaScript", "jQuery", "Django"],
    partner: "with Ayumi Tanaka",
  },
  {
    title: "yu + co.",
    id: "yuco",
    image: yuco,
    url: "https://adoring-tesla-c7c25f.netlify.app/",
    git: "https://github.com/Smiyu-web/yuco-finalProject",
    type: "WEBSITE",
    langs: ["HTML", "SASS", "JavaScript"],
    partner: "Individual project",
  },
  {
    title: "11am",
    id: "am",
    image: am,
    url: "https://premiere-st.netlify.app/",
    git: "https://github.com/Smiyu-web/portfolio-11am",
    type: "WEBSITE",
    langs: ["HTML", "SASS", "JavaScript", "jQuery"],
    partner: "with Ivan, Inae, Ami",
  },
];

export const findWork = (id) => {
  return projects.find((work) => work.id === id);
};
