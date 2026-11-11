import { AlertTriangle, Camera, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Connect",
    icon: Camera,
    description: "BantAI works with the school cameras already in place.",
  },
  {
    num: "02",
    title: "Understand",
    icon: Cpu,
    description: "An edge device analyzes relevant activity on-site.",
  },
  {
    num: "03",
    title: "Surface",
    icon: AlertTriangle,
    description: "Potential risks become clear, timely signals.",
  },
  {
    num: "04",
    title: "Support",
    icon: ShieldCheck,
    description: "Authorized staff stay in control of the response.",
  },
];

function HowItWorksSection() {
  return (
    <section className="how-it-works-section content-section" id="how-it-works">
      <div className="how-it-works-shell reveal">
        <div className="section-label">
          <span />
          HOW IT WORKS
          <span />
        </div>
        <h2>
          From what cameras
          <br />
          <span>see</span> to what schools can do.
        </h2>
        <p className="how-it-works-intro">
          BantAI turns existing camera infrastructure into a clearer path from
          activity to awareness, without taking decision-making away from people.
        </p>

        <ol className="how-it-works-flow" aria-label="How BantAI works">
          {steps.map(({ num, title, icon: Icon, description }, index) => (
            <li className="how-it-works-step" key={num}>
              <div className="how-it-works-node">
                <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
              </div>
              {index < steps.length - 1 && <span className="how-it-works-connector" />}
              <span className="how-it-works-number">{num}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>

        <div className="how-it-works-footer">
          <span className="how-it-works-pulse" />
          Human judgment remains at the center.
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
