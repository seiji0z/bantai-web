import {
  CalendarClock,
  ClipboardCheck,
  DoorOpen,
  Footprints,
  Shield,
  UsersRound,
} from "lucide-react";

const useCases = [
  {
    title: "Campus perimeter monitoring",
    description:
      "Help administrators prioritize review around campus boundaries and entrances when staff cannot watch every camera feed.",
    icon: Shield,
  },
  {
    title: "Hallway and corridor safety",
    description:
      "Give school teams another way to review reported concerns in busy hallways and understand where follow-up may be needed.",
    icon: Footprints,
  },
  {
    title: "Restricted-area awareness",
    description:
      "Support staff in reviewing activity near designated spaces and deciding whether it needs attention.",
    icon: DoorOpen,
  },
  {
    title: "Incident review and documentation",
    description:
      "Help administrators find relevant recorded activity more efficiently when documenting an incident or following up.",
    icon: ClipboardCheck,
  },
  {
    title: "Support for campus security teams",
    description:
      "Provide additional context to support coordination and follow-up, while staff remain in control of decisions.",
    icon: UsersRound,
  },
  {
    title: "Arrival, dismissal, and events",
    description:
      "Help administrators focus review during high-traffic periods, from the start and end of the school day to campus events.",
    icon: CalendarClock,
  },
];

function UseCasesSection() {
  return (
    <section className="content-section use-cases-section" id="use-cases">
      <div className="use-cases-shell reveal">
        <div className="section-label">
          <span />
          SCHOOL USE CASES
          <span />
        </div>
        <h2>Designed around the moments schools need to understand.</h2>
        <p className="use-cases-intro">
          From busy hallways to incident follow-up, BantAI is being shaped around
          the practical needs of school administrators and campus teams.
        </p>

        <div className="use-cases-grid">
          {useCases.map(({ title, description, icon: Icon }) => (
            <article className="use-case-card" key={title}>
              <div className="use-case-card-top">
                <span className="use-case-icon">
                  <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="use-case-status">Planned capability</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <p className="use-cases-note">
          These are planned use cases, not claims of currently available
          features. Exact capabilities and availability will be validated with
          school partners through pilot development.
        </p>
      </div>
    </section>
  );
}

export default UseCasesSection;
