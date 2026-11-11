import SectionPlaceholder from "../components/ui/SectionPlaceholder";

function FaqSection() {
  return (
    <section className="content-section" id="faq">
      <SectionPlaceholder
        eyebrow="FAQ"
        title="Questions schools may have."
        description="This section will cover deployment, existing cameras, privacy, pilots, alerts, and the model accuracy target."
      />
    </section>
  );
}

export default FaqSection;
