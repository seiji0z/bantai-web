import SectionPlaceholder from "../components/ui/SectionPlaceholder";

function PrivacySection() {
  return (
    <section className="content-section" id="privacy">
      <SectionPlaceholder
        eyebrow="PRIVACY & RESPONSIBLE AI"
        title="Safety technology must also respect privacy."
        description="The final section will explain data minimization, access controls, retention, and human review."
      />
    </section>
  );
}

export default PrivacySection;
