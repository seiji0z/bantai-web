import { AlertTriangle, ArrowRight, BellRing, Camera, ScanEye } from "lucide-react";

const solutionStages = [
  {
    index: "01",
    title: "School Cameras",
    description: "Start with the cameras your school already has.",
    icon: Camera,
  },
  {
    index: "02",
    title: "AI Analysis",
    description: "BantAI analyzes relevant activity and identifies situations that may be unsafe.",
    icon: ScanEye,
  },
  {
    index: "03",
    title: "Alerts & Insights",
    description: "Staff receive useful alerts and information to help them review what happened.",
    icon: BellRing,
  },
  {
    index: "04",
    title: "Faster Response",
    description: "Schools can respond sooner and review incidents more efficiently.",
    icon: AlertTriangle,
  },
];

function SolutionSection() {
  return (
    <section className="content-section solution-section" id="solution">
      <div className="solution-shell reveal">
        <div className="section-label">
          <span />
          OUR SOLUTION
          <span />
        </div>
        <h2>Turning existing cameras into smarter safety tools.</h2>
        <p className="solution-intro">
          BantAI combines school camera feeds, AI analysis, and human decision-making in one focused workflow.
        </p>

        <ol className="solution-flow" aria-label="How BantAI supports school safety">
          {solutionStages.map(({ index, title, description, icon: Icon }, stageIndex) => (
            <li className="solution-flow-step" key={title}>
              <div className="solution-step-heading">
                <span className="solution-step-index">STEP {index}</span>
                <span className="solution-step-icon">
                  <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              {stageIndex < solutionStages.length - 1 && (
                <ArrowRight
                  className="solution-flow-arrow"
                  size={20}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
        <p className="solution-note">
          AI helps surface activity for review; school staff decide what action
          to take.
        </p>
      </div>
    </section>
  );
}

export default SolutionSection;
