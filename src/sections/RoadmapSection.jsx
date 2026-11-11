const roadmapItems = [
  {
    quarter: "Q1",
    title: "Partnerships & data",
    description:
      "Build relationships with institutions and collect the data needed to understand and support school safety environments.",
    milestones: [
      "Partner with schools and institutions",
      "Collect representative school data",
      "Validate pilot requirements",
    ],
  },
  {
    quarter: "Q2",
    title: "Model & edge development",
    description:
      "Fine-tune the model and develop edge-device deployment for faster, more flexible processing in schools.",
    milestones: [
      "Fine-tune the AI model",
      "Develop edge-device capabilities",
      "Target 85% model accuracy",
    ],
  },
  {
    quarter: "Q3",
    title: "First school clients",
    description:
      "Begin school deployments while introducing BantAI to the market through focused marketing and promotion.",
    milestones: [
      "Onboard the first five clients",
      "Launch marketing and promotion",
      "Gather deployment feedback",
    ],
  },
  {
    quarter: "Q4",
    title: "Expansion & maintenance",
    description:
      "Expand the client base and establish the maintenance and update processes needed for reliable long-term deployments.",
    milestones: [
      "Onboard ten more clients",
      "Provide maintenance and updates",
      "Improve deployment capacity",
    ],
  },
];

function RoadmapSection() {
  return (
    <section className="roadmap-section content-section" id="roadmap">
      <div className="roadmap-shell reveal">
        <div className="section-label">
          <span />
          ROADMAP
          <span />
        </div>
        <h2>Building BantAI one milestone at a time.</h2>
        <p className="roadmap-intro">
          From institutional partnerships to school deployments, each quarter
          moves us closer to safer, smarter campuses.
        </p>

        <div className="roadmap-grid">
          {roadmapItems.map((item, index) => (
            <article className="roadmap-card" key={item.quarter}>
              <div className="roadmap-card-header">
                <span className="roadmap-quarter">{item.quarter}</span>
                <span className="roadmap-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="roadmap-milestones">
                {item.milestones.map((milestone) => (
                  <li key={milestone}>{milestone}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="roadmap-target">
          <strong>At least 15 total clients</strong>
          <p>by the end of 2026</p>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
