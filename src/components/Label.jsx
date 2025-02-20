import {
  faCss3,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiPegasus } from "react-icons/gi";
import { SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const LABEL = {
  REACT: "react",
  JS: "js",
  NPM: "npm",
  SASS: "sass",
  VITE: "vite",
  HTML: "html",
  CSS: "css",
  PEGA: "pega",
  NODEJS: "nodejs",
  POSTGRE: "postgre",
  GIT: "git",
  GITHUB: "github",
  VSCODE: "vscode",
};
function Label({ type, showText = false }) {
  var content = { text: "test", css: "test" }; // {text, icon}

  switch (type) {
    case LABEL.REACT:
      content = { text: "React", icon: faReact, css: "react" };
      break;
    case LABEL.JS:
      content = { text: "JavaScript", icon: faJs, css: "js" };
      break;
    case LABEL.NPM:
      content = { text: "npm", icon: faNpm, css: "npm" };
      break;
    case LABEL.SASS:
      content = { text: "SASS", icon: faSass, css: "sass" };
      break;
    case LABEL.VITE:
      content = { text: "Vite", alticon: <SiVite className="icon-l label-vite" />, css: "vite" };
      break;
    case LABEL.HTML:
      content = { text: "HTML5", icon: faHtml5, css: "html" };
      break;
    case LABEL.CSS:
      content = { text: "CSS3", icon: faCss3Alt, css: "css" };
      break;
    case LABEL.PEGA:
      content = { text: "Pega", alticon: <GiPegasus className="icon-l label-pega" />, css: "pega" };
      break;
    case LABEL.NODEJS:
      content = { text: "NodeJS", icon: faNodeJs, css: "nodejs" };
      break;
    case LABEL.POSTGRE:
      content = { text: "Postgres", alticon: <BiLogoPostgresql className="icon-l label-postgre"/>, css: "postgre" };
      break;
    case LABEL.GIT:
      content = { text: "Git", icon: faGitAlt, css: "git" };
      break;
    case LABEL.GITHUB:
      content = { text: "GitHub", icon: faGithub, css: "github" };
      break;
    case LABEL.VSCODE:
      content = { text: "VSCode", alticon: <VscVscode className="icon-l label-vscode"/>, css: "vscode" };
      break;
  }

  return (
    <div className="label" title={content.text}>
      {content.icon && (
        <FontAwesomeIcon
          className={`icon${showText ? "-l":""} label-${content.css}`}
          icon={content.icon}
        />
      )}
      {content.alticon && content.alticon}
      {showText && <span className="text-center text-secondary"> {content.text}</span>}
    </div>
  );
}

export default Label;
export { LABEL };
