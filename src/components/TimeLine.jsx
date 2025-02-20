function TimeLine({ children }) {
  return <div className="timeline">{children}</div>;
}

function TimeItem({ year, company, position, children }) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" />
      <p className="text-secondary-s">{year}</p>
      <h2>
        {company}, <span className="text-primary-color">{position}</span>
      </h2>
      <p className="text-secondary">{children}</p>
    </div>
  );
}

export default TimeLine;
export { TimeItem };
