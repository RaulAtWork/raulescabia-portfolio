import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label, { LABEL } from "../../components/Label";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const LINKS = {
  OASIS: {
    code: "https://github.com/RaulAtWork/UI-Oasis",
    demo: "https://oasis-ui.netlify.app/",
  },
  CHROMA: {
    code: "https://github.com/RaulAtWork/chroma-shift-component",
    demo: "https://www.npmjs.com/package/chroma-shift",
  },
  LOCKNOTE: {
    code: "https://github.com/RaulAtWork/lock-a-note",
    demo: "https://lock-a-note.netlify.app/"
  },
};

function Projects() {
  return (
    <section>
      <h1 className="text-center">PROJECTS</h1>
      <div className="projects-container">
        <div className="projects-card">
          <img src="/img/chroma.png" />
          <div className="projects-card-inner">
            <h2 className="text-accent-color">Chroma Shift</h2>
            <p className="text-secondary">
              Package available on npm that provides tools to change color
              scheme.
            </p>
            <div className="projects-cards-techs">
              <Label type={LABEL.NPM} />
              <Label type={LABEL.REACT} />
              <Label type={LABEL.JS} />
            </div>
            <div className="projects-cards-links">
              <a href={LINKS.CHROMA.code} target="_blank">
                Source Code {" "}
                <FontAwesomeIcon
                  className="icon-s"
                  icon={faUpRightFromSquare}
                />
              </a>
              <a href={LINKS.CHROMA.demo} target="_blank">
                npm {" "}
                <FontAwesomeIcon
                  className="icon-s"
                  icon={faUpRightFromSquare}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img src="/img/oasis.png" />
          <div className="projects-card-inner">
            <h2 className="text-accent-color">Oasis UI</h2>
            <p className="text-secondary">
              Compilation of React components and UI/UX techniques.
            </p>
            <div className="projects-cards-techs">
              <Label type={LABEL.REACT} /> <Label type={LABEL.JS} />
            </div>
            <div className="projects-cards-links">
              <a href={LINKS.OASIS.code} target="_blank">
                Source Code{" "}
                <FontAwesomeIcon
                  className="icon-s"
                  icon={faUpRightFromSquare}
                />
              </a>
              <a href={LINKS.OASIS.demo} target="_blank">
                Demo{" "}
                <FontAwesomeIcon
                  className="icon-s"
                  icon={faUpRightFromSquare}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img src="/img/lock-note.png" />
          <div className="projects-card-inner">
            <h2  className="text-accent-color">Lock-a-Note</h2>
            <p className="text-secondary">
              Visual organization and note-taking tool.
            </p>
            <div className="projects-cards-techs">
              <Label type={LABEL.REACT} />
              <Label type={LABEL.JS} />
              <Label type={LABEL.SASS} />
            </div>
            <div className="projects-cards-links">
              <a href={LINKS.LOCKNOTE.code} target="_blank">
                Source Code{" "}
                <FontAwesomeIcon
                  className="icon-s"
                  icon={faUpRightFromSquare}
                />
              </a>
              <a href={LINKS.LOCKNOTE.demo} target="_blank">
                Demo{" "}
                <FontAwesomeIcon
                  className="icon-s"
                  icon={faUpRightFromSquare}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
