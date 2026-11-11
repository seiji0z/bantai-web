
import bantaiLogo from "../assets/BantAI Dark.svg";
import cursorLogo from "../assets/bantaicircle.svg";
import aiDetectionImage from "../assets/aidetection.png";

function HeroSection() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--cursor-x",
      `${e.clientX - rect.left}px`
    );

    e.currentTarget.style.setProperty(
      "--cursor-y",
      `${e.clientY - rect.top}px`
    );
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.setProperty("--cursor-visible", "1");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--cursor-visible", "0");
  };

  return (
    <section
      className="bantai-hero"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* BLUE LED BACKGROUND */}
      <div className="bantai-led-background"></div>

      {/* CURSOR FOLLOWING BANTAI LOGO */}
      <div className="bantai-cursor-logo" aria-hidden="true">
        <div className="cursor-logo-glow"></div>
        <img
          src={cursorLogo}
          alt=""
          className="cursor-logo-image"
        />
      </div>

      {/* HERO CONTENT */}
      <div className="bantai-hero-container">
        <div className="bantai-hero-copy">
          <div className="bantai-eyebrow">
            <span className="eyebrow-dot"></span>
            AI-POWERED SCHOOL SAFETY
          </div>

          <h1>
            Smarter eyes
            <br />
            <span>for safer communities.</span>
          </h1>

          <p className="bantai-hero-description">
            BantAI helps schools use their existing cameras
            more intelligently, giving staff earlier awareness
            of potential safety risks.
          </p>

          <div className="bantai-hero-actions">
            <a
              className="bantai-primary-button"
              href="#partnership"
            >
              Request a School Pilot
              <svg
                className="hero-button-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>

            <a
              className="bantai-secondary-button"
              href="#how-it-works"
            >
              See how it works
              <svg
                className="hero-button-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 5v14m-7-7 7 7 7-7" />
              </svg>
            </a>
          </div>

        </div>

        {/* HERO VISUAL */}
        <div className="bantai-hero-visual">
          <div className="visual-gradient"></div>

          <div className="visual-orbit orbit-large"></div>
          <div className="visual-orbit orbit-small"></div>

          {/* MAIN ILLUSTRATION */}
          <div className="vision-card">
            <div className="vision-card-header">
              <div className="vision-card-brand">
                <img
                  src={bantaiLogo}
                  alt=""
                  className="vision-brand-image"
                />
                BantAI Vision
              </div>

              <span className="vision-live">
                <span></span>
                ACTIVE
              </span>
            </div>

            <div className="vision-screen">
              <div className="vision-camera">
                <img
                  src={aiDetectionImage}
                  alt="AI detection alert on a school security camera feed"
                />
              </div>
            </div>

            <div className="vision-card-footer">
              <div>
                <span className="vision-footer-label">
                  SYSTEM STATUS
                </span>
                <strong>Monitoring active</strong>
              </div>

              <div className="vision-status-icon">✓</div>
            </div>
          </div>

          {/* FLOATING INFORMATION CARDS */}
          <div className="floating-card floating-top">
            <div className="floating-icon purple-icon">✦</div>
            <div>
              <strong>Smarter monitoring</strong>
              <span>AI-assisted awareness</span>
            </div>
          </div>

          <div className="floating-card floating-bottom">
            <div className="floating-icon green-icon">✓</div>
            <div>
              <strong>Existing cameras</strong>
              <span>No need to start over</span>
            </div>
          </div>

          <div className="visual-decoration decoration-one"></div>
          <div className="visual-decoration decoration-two"></div>
        </div>
      </div>

      <div className="bantai-hero-bottom">
        <a href="#trust" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
