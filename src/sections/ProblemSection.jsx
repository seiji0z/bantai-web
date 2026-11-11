function ProblemSection() {
  return (
    <section className="problem-section content-section" id="problem">
      <div className="problem-shell reveal">
        <div className="problem-heading">
          <div className="section-label">
            <span />
            THE PROBLEM
            <span />
          </div>
          <h2>
            A camera can
            <br />
            <span>see everything.</span>
          </h2>
          <p>
            But no school team can watch every screen, every hallway, and
            every moment at once.
          </p>
        </div>

        <div className="problem-visual" aria-label="The school safety visibility gap">
          <div className="problem-visual-top">
            <span className="problem-status">
              <span />
              LIVE SCHOOL ENVIRONMENT
            </span>
            <span className="problem-time">24 / 7</span>
          </div>

          <div className="problem-signal">
            <span className="problem-signal-line" />
            <span className="problem-signal-dot" />
            <span className="problem-signal-line" />
          </div>

          <div className="problem-insight">
            <strong>THE VISIBILITY GAP</strong>
            <span>Too much activity. Too little attention.</span>
          </div>

          <ul className="problem-points">
            <li>
              <span>01</span>
              <p>Existing cameras mostly record what has already happened.</p>
            </li>
            <li>
              <span>02</span>
              <p>Staff cannot continuously monitor every feed.</p>
            </li>
            <li>
              <span>03</span>
              <p>Important moments can be missed before help is needed.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
