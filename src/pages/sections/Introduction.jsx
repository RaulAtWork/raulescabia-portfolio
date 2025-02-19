import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Introduction() {
  return (
    <section className="intro">
      <img src="https://placehold.co/200x200" />
      <div className="intro-container">
        <h1 className="intro-name">
          <span className="text-secondary">{"<h1> "}</span>Raúl Escabia
          <span className="text-secondary">{" </h1>"}</span>
        </h1>
        <p>
          <span className="text-secondary">{"<p> "}</span>
          <b className="text-primary-color">Senior Full-Stack </b>
          web developer who{" "}
          <b className="text-accent-color">specializes in Front-End</b>
          <span className="text-secondary">{" </p>"}</span>
        </p>
        <div className="intro-links">
          <a>
            <FontAwesomeIcon className="icon-l" icon={faLinkedin} />
          </a>
          <a>
            <FontAwesomeIcon className="icon-l" icon={faSquareGithub} />
          </a>
          <button className="button-secondary">Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
