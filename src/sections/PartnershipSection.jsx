import bcpoLogo from "../assets/bcpo.svg";
import northcentralLogo from "../assets/northcentral.svg";
import schoolsDivisionLogo from "../assets/schoolsdivision.svg";
import sluLogo from "../assets/slu.svg";

const partners = [
  { name: "BCPO", logo: bcpoLogo },
  { name: "North Central", logo: northcentralLogo },
  { name: "Schools Division", logo: schoolsDivisionLogo },
  { name: "SLU", logo: sluLogo },
];

function PartnershipSection() {
  return (
    <section
      className="content-section partnership-section"
      id="partnership"
      aria-label="Partnerships"
    >
      <div className="partnership-shell reveal">
        <div className="section-label">
          <span />
          PARTNERSHIPS &amp; DATA
          <span />
        </div>
        <h2>Help us build safer schools.</h2>
        <p className="partnership-intro">
          Schools, institutions, research collaborators, and technology partners
          can help shape the first pilots.
        </p>

        <div className="partnership-viewport">
          <div className="partnership-track">
            {[false, true].map((isDuplicate) => (
              <ul
                className="partnership-logo-group"
                key={isDuplicate ? "duplicate" : "original"}
                aria-hidden={isDuplicate || undefined}
              >
                {partners.map(({ name, logo }) => (
                  <li className="partnership-logo-item" key={name}>
                    <img
                      src={logo}
                      alt={isDuplicate ? "" : name}
                      loading="lazy"
                      decoding="async"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnershipSection;
