function SectionPlaceholder({ eyebrow, title, description }) {
  return (
    <div className="section-shell reveal">
      <div className="section-label">
        <span />
        {eyebrow}
        <span />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionPlaceholder;
