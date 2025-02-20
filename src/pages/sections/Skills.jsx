import Label, { LABEL } from "../../components/Label";

function Skills() {
  return (
    <section>
      <h1 className="text-center">SKILLS</h1>
      <div className="skills-container">
        <div className="skill-section">
          <h2 className="skill-left">Front-End</h2>
          <div className="skill-right">
            <Label type={LABEL.REACT} showText={true} />
            <Label type={LABEL.HTML} showText={true} />
            <Label type={LABEL.CSS} showText={true} />
            <Label type={LABEL.SASS} showText={true} />
          </div>
        </div>
        <div className="skill-section">
          <h2 className="skill-left">Back-End</h2>
          <div className="skill-right">
            <Label type={LABEL.PEGA} showText={true} />
            <Label type={LABEL.NODEJS} showText={true} />
            <Label type={LABEL.POSTGRE} showText={true} />
          </div>
        </div>
        <div className="skill-section">
          <h2 className="skill-left">Other</h2>
          <div className="skill-right">
            <Label type={LABEL.JS} showText={true} />
            <Label type={LABEL.GIT} showText={true} />
            <Label type={LABEL.GITHUB} showText={true} />
            <Label type={LABEL.VSCODE} showText={true} />
          </div>
        </div>
        <div className="skill-section">
          <h2 className="skill-left">Languages</h2>
          <ul>
            <li>🇪🇸 Spanish - Native</li>
            <li>🇬🇧 English - Fluent</li>
            <li>
              🇯🇵 Japanese - Beginner
              <span className="text-secondary-s"> (currently studying)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
