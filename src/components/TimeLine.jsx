function TimeLine({ children }) {
  return <div className="timeline">{children}</div>;
}

function TimeItem({ year, title, subtitle, children }) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" />
      <p className="text-secondary-s">{year}</p>
      <h2>{title}</h2>
      <span className="text-primary-color text-l">{subtitle}</span>
      {children}
    </div>
  );
}

export default TimeLine;
export { TimeItem };
