import Label, { LABEL } from "../../components/Label";

function Projects() {
  return (
    <section>
      <h1 className="text-center">PROJECTS</h1>
      <div className="projects-container">
        <div className="projects-card">
          <img src="https://placehold.co/250x150" />
          <div className="projects-card-inner">
            <h2>Chroma Shift</h2>
            <p className="text-secondary-m">
              Package availabel on npm that provides tools to change color scheme.
            </p>
            <div className="projects-cards-techs">
              <Label type={LABEL.NPM} />
              <Label type={LABEL.REACT} />
              <Label type={LABEL.JS} />
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img src="https://placehold.co/250x150" />
          <div className="projects-card-inner">
            <h2>Oasis UI</h2>
            <p className="text-secondary-m">
              Compilation of React components and UI/UX techniques.
            </p>
            <div className="projects-cards-techs">
              <Label type={LABEL.REACT} /> <Label type={LABEL.JS} />
            </div>
          </div>
        </div>
        <div className="projects-card">
          <img src="https://placehold.co/250x150" />
          <div className="projects-card-inner">
            <h2>Lock-a-Note</h2>
            <p className="text-secondary-m">Visual organization and note-taking tool.</p>
            <div className="projects-cards-techs">
              <Label type={LABEL.REACT} />
              <Label type={LABEL.JS} />
              <Label type={LABEL.SASS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
