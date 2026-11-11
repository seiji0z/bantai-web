import SectionPlaceholder from "../components/ui/SectionPlaceholder";

function RoadmapSection() {
  return (
    <section className="content-section" id="roadmap">
      <SectionPlaceholder
        eyebrow="ROADMAP"
        title="Building BantAI one milestone at a time."
        description="The quarterly roadmap covers partnerships and data, model and edge development, initial onboarding, and expansion."
      />
    </section>
  );
}

export default RoadmapSection;
