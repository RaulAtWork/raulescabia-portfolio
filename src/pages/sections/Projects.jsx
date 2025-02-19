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
              npm package that provides tools to change color scheme.
            </p>
            <p className="projects-cards-techs">
              <Label type={LABEL.NPM} />
              <Label type={LABEL.REACT} />
              <Label type={LABEL.JS} />
            </p>
          </div>
        </div>
        <div className="projects-card">
          <img src="https://placehold.co/250x150" />
          <div className="projects-card-inner">
            <h2>Oasis UI</h2>
            <p className="text-secondary-m">
              Compilation of React components and UI/UX techniques.
            </p>
            <p className="projects-cards-techs">react, SCSS</p>
          </div>
        </div>
        <div className="projects-card">
          <img src="https://placehold.co/250x150" />
          <div className="projects-card-inner">
            <h2>Lock-a-Note</h2>
            <p className="text-secondary-m">Brainmap</p>
            <p className="projects-cards-techs">react, js, SCSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
