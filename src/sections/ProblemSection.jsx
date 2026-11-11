import SectionPlaceholder from "../components/ui/SectionPlaceholder";

function ProblemSection() {
  return (
    <section className="content-section" id="problem">
      <SectionPlaceholder
        eyebrow="THE PROBLEM"
        title="Schools have cameras. They need better awareness."
        description="Staff cannot monitor every camera continuously. BantAI is being designed to help schools recognize potential risks earlier."
      />
    </section>
  );
}

export default ProblemSection;
