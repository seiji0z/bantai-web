import ceoPhoto from "../assets/jop.JPG";
import ctoPhoto from "../assets/jeres.JPG";
import productLeadPhoto from "../assets/ces.JPG";
import growthPhoto from "../assets/horhe.JPG";
import backendPhoto from "../assets/jeysi.JPG";
import frontendPhoto from "../assets/seb.JPG";
import devopsPhoto from "../assets/yana.JPG";
import qaPhoto from "../assets/lolen.JPG";

const ceo = {
  number: "01",
  name: "Geoff Denuel Ferrer",
  role: "CEO",
  image: ceoPhoto,
};

const leadership = [
  { number: "02", name: "Jeremiah Ang-angco", role: "CTO", image: ctoPhoto },
  {
    number: "03",
    name: "Frances Julia Miranda",
    role: "Product Lead",
    image: productLeadPhoto,
  },
  {
    number: "04",
    name: "Jorge Frederic Terre",
    role: "Head of Growth & Business Ops",
    image: growthPhoto,
  },
];

const specialists = [
  {
    number: "05",
    name: "Jan Christian Atis",
    role: "Backend",
    image: backendPhoto,
  },
  {
    number: "06",
    name: "Bernard Sebasthian Molina",
    role: "Frontend",
    image: frontendPhoto,
  },
  {
    number: "07",
    name: "Giana Kristy Grabanzor",
    role: "DevOps & Cloud",
    image: devopsPhoto,
  },
  {
    number: "08",
    name: "Noelle Lorraine Adame",
    role: "Full-Stack & QA",
    image: qaPhoto,
  },
];

function TeamMember({ number, name, role, image, level }) {
  return (
    <article className={`team-member team-member-${level}`}>
      <div className="team-photo-slot">
        <img src={image} alt={`${name} - ${role}`} loading="lazy" />
      </div>
      <div className="team-member-copy">
        <span className="team-member-number">{number}</span>
        <h3>{name}</h3>
        <p className="team-member-role">{role}</p>
      </div>
    </article>
  );
}

function TeamSection() {
  return (
    <section className="team-section content-section" id="team">
      <div className="team-shell reveal">
        <div className="section-label">
          <span />
          THE PEOPLE BEHIND BANTAI
          <span />
        </div>
        <h2>
          One team.
          <br />
          <span>Eight perspectives.</span>
        </h2>
        <p className="team-intro">
          A focused team bringing together technology, product, operations, and
          the people needed to build safer schools.
        </p>

        <div className="team-structure" aria-label="BantAI team structure">
          <div className="team-ceo">
            <TeamMember {...ceo} level="ceo" />
          </div>

          <div className="team-leadership">
            {leadership.map((member) => (
              <TeamMember key={member.number} {...member} level="leadership" />
            ))}
          </div>

          <div className="team-specialists">
            {specialists.map((member) => (
              <TeamMember key={member.number} {...member} level="specialist" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
