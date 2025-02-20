function TimeLine({ children }) {
  return <div className="timeline">{children}</div>;
}

function TimeItem({ year, title, subtitle, children }) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" />
      <p className="text-secondary-s">{year}</p>
      <h2>
        {title}, <span className="text-primary-color">{subtitle}</span>
      </h2>
      <p className="text-secondary">{children}</p>
    </div>
  );
}

export default TimeLine;
export { TimeItem };
