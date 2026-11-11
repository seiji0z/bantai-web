import { useState } from "react";

const faqItems = [
  {
    question: "Does BantAI require new cameras?",
    answer:
      "No, BantAI does not require new security cameras. It connects directly and integrates with an organization's existing compatible third-party CCTV and IP camera streams.",
  },
  {
    question: "How is BantAI deployed in a school?",
    answer:
      "BantAI follows a Hardware-as-a-Service at the Edge (Edge HaaS) model. A pre-configured on-site computing device (edge node) is installed alongside the school's existing network equipment, and the existing cameras.",
  },
  {
    question: "Does the system identify individual students?",
    answer:
      "BantAI is focused on identifying dangerous weapons and aggressive physical rather than unnecessarily identifying individual students. BantAI includes clear privacy, access, and data-retention policies for school environments.",
  },
  {
    question: "How are alerts reviewed?",
    answer:
      "Alerts are intended to support authorized school staff or first responders, not replace their judgment. Staff can review relevant information and decide what action, if any, is appropriate.",
  },
  {
    question: "Where is video data processed?",
    answer:
      "Video data is processed locally on-site through the deployed edge computing node rather than relying on cloud-based video analysis, keeping live video footage secure within the building's premises.",
  },
  {
    question: "How can a school become a pilot partner?",
    answer:
      "Schools and institutions can express interest through the partnership section. The BantAI team will follow up to understand the school’s environment, goals, and readiness for a pilot.",
  },
  {
    question: "What does the 85% accuracy target mean?",
    answer:
      "The 85% target is a model-development milestone planned for the end of Q2. The final evaluation will define the tested scenarios, dataset, and measurement method so the result can be interpreted responsibly.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section content-section" id="faq">
      <div className="faq-shell reveal">
        <div className="section-label">
          <span />
          FAQ
          <span />
        </div>
        <h2>Questions schools may have.</h2>
        <p className="faq-intro">
          Clear answers about deployment, privacy, pilots, and the technology
          behind BantAI.
        </p>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                className={`faq-item${isOpen ? " is-open" : ""}`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>
                {isOpen && (
                  <p id={answerId} className="faq-answer">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
