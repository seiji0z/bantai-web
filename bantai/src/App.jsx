
import { useEffect } from "react";

const teamMembers = [
  { name: "John Doe", role: "Project Leader", icon: "👨‍💻" },
  { name: "Jane Smith", role: "UI/UX Designer", icon: "👩‍🎨" },
  { name: "Alex Johnson", role: "Frontend Developer", icon: "👨‍💻" },
  { name: "Emily Davis", role: "Backend Developer", icon: "👩‍💻" },
  { name: "Michael Brown", role: "AI Specialist", icon: "🤖" },
  { name: "Sarah Wilson", role: "Researcher", icon: "🔬" },
  { name: "David Miller", role: "Documentation", icon: "📝" },
  { name: "Chris Taylor", role: "Developer", icon: "💻" },
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">◈</span>
          BantAI
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#mission">Our Mission</a>
          <a href="#team">Our Team</a>
        </div>

        <a href="#team" className="nav-button">
          Meet the Team <span>↗</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-bottom">
          <a href="#mission" className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-arrow">↓</span>
          </a>
        </div>
      </section>

      {/* TAGLINE SECTION */}
      <section className="mission" id="mission">
        <div className="mission-background"></div>

        <div className="mission-content reveal">
          <div className="section-label">
            <span></span>
            OUR PURPOSE
            <span></span>
          </div>

          <h2>
            Same Cameras.
            <br />
            <span>Smarter Eyes.</span>
            <br />
            <span className="highlight">Help us Save Lives.</span>
          </h2>

          <div className="mission-bottom">
            <span>INNOVATION WITH A PURPOSE</span>
            <span className="mission-arrow">↓</span>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="team" id="team">
        <div className="team-heading reveal">
          <div className="section-label">
            <span></span>
            THE PEOPLE BEHIND BANTAI
            <span></span>
          </div>

          <h2>
            Meet the <span>Team.</span>
          </h2>

          <p>
            Meet the people working together to bring
            BantAI to life.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              className="team-card reveal"
              key={member.name}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="member-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="member-avatar">
                <span>{member.icon}</span>
              </div>

              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>

              <div className="member-decoration">↗</div>
            </div>
          ))}
        </div>

        <div className="team-footer reveal">
          <span>BANTAI — SAME CAMERAS. SMARTER EYES.</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">◈</span>
          BantAI
        </a>

        <p>Same Cameras. Smarter Eyes.</p>

        <span className="copyright">
          © 2026 BANTAI. ALL RIGHTS RESERVED.
        </span>
      </footer>
    </main>
  );
}

export default App;
