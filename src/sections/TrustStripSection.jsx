import {
  Building2,
  Camera,
  LockKeyhole,
  School,
  ShieldAlert,
} from "lucide-react";

const trustItems = [
  { label: "Built for schools", icon: School },
  { label: "Designed for existing camera systems", icon: Camera },
  { label: "Focused on early detection", icon: ShieldAlert },
  { label: "Developed with institutional partners", icon: Building2 },
  { label: "Privacy-conscious deployment", icon: LockKeyhole },
];

function TrustStripSection() {
  return (
    <section
      className="content-section trust-strip"
      id="trust"
      aria-label="BantAI trust and positioning"
    >
      <div className="trust-strip-viewport">
        <div className="trust-strip-track">
          {[false, true].map((isDuplicate) => (
            <ul
              className="trust-strip-group"
              key={isDuplicate ? "duplicate" : "original"}
              aria-hidden={isDuplicate || undefined}
            >
              {trustItems.map(({ label, icon: Icon }) => (
                <li className="trust-item" key={label}>
                  <Icon className="trust-icon" size={24} strokeWidth={1.6} aria-hidden="true" />
                  <span>{label}</span>
                  <span className="trust-item-divider" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStripSection;
