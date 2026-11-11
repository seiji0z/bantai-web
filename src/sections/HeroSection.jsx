function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content reveal">
        <p className="eyebrow">AI-POWERED SCHOOL SAFETY</p>
        <h1>
          Smarter eyes
          <br />
          for safer communities.
        </h1>
        <p className="hero-description">
          BantAI helps schools use their existing cameras more intelligently,
          giving staff earlier awareness of potential safety risks.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#partnership">
            Request a School Pilot
          </a>
          <a className="text-button" href="#how-it-works">
            See how it works <span>↓</span>
          </a>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#trust" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
