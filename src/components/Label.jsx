import {
  faJs,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LABEL = {
  REACT: "react",
  JS: "js",
  NPM: "npm",
  SASS: "sass",
};
function Label({ type, showText = false}) {
  var content; // {text, icon}

  switch (type) {
    case LABEL.REACT:
      content = { text: "React", icon: faReact, css: "react" };
      break;
    case LABEL.JS:
      content = { text: "JavaScript", icon: faJs, css:"js" };
      break;
    case LABEL.NPM:
      content = { text: "npm", icon: faNpm, css:"npm" };
      break;
    case LABEL.SASS:
      content = { text: "SASS", icon: faSass, css:"sass" };
      break;
  }

  return (
    <div className="label" title={content.text}>
      <FontAwesomeIcon className={`icon label-${content.css}`} icon={content.icon} />
      {showText &&<span>{" "}{content.text}</span>}
    </div>
  );
}

export default Label;
export { LABEL };
