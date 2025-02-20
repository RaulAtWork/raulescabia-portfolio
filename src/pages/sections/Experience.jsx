import TimeLine, { TimeItem } from "../../components/TimeLine";

function Experience() {
  return (
    <section>
      <h1 className="text-center">EXPERIENCE</h1>
      <TimeLine>
        <TimeItem
          year="2020 - Present"
          title="Saltech Consulting"
          subtitle="Software Consultant"
        >
          <p className="text-secondary">
            Developed and maintained a large-scale{" "}
            <span className="text-accent-color">
              Cash Management application{" "}
            </span>
            spanning 46 countries with a complex database architecture,
            leveraging the <b>Gitflow workflow</b> like approach for version
            control. Played a key role in{" "}
            <span className="text-accent-color">project estimation</span>,{" "}
            <span className="text-accent-color">front-end design</span>, and{" "}
            <span className="text-accent-color">code review</span>, ensuring
            high-quality deliverables and seamless collaboration across the
            <b> CICD</b> development lifecycle.
          </p>
        </TimeItem>
        <TimeItem
          year="2019 - 2020"
          title="Tragsatech"
          subtitle="Full-Stack Developer"
        >
          <p className="text-secondary">
            Development of <b>LetraQ</b>, a{" "}
            <span className="text-accent-color">database system</span> for
            tracing milk quality across Spain in collaboration with the Ministry
            of Agriculture. Contributed to the creation of{" "}
            <span className="text-accent-color">
              responsive HTML and CSS templates
            </span>
            , supported{" "}
            <span className="text-accent-color">
              system design and architecture
            </span>
            , <span className="text-accent-color">SQL query calls</span>, and
            provided <b>training for new team members</b> to ensure smooth
            onboarding and project continuity.
          </p>
        </TimeItem>
      </TimeLine>
    </section>
  );
}

export default Experience;
