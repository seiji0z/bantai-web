import { AlertTriangle, Plug, Scan, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "INTEGRATE",
    icon: Plug,
    description:
      "Plug our edge device directly into your existing CCTV system.",
  },
  {
    num: "02",
    title: "DETECT",
    icon: Scan,
    description:
      "AI scans live feeds in real time for immediate threat recognition.",
  },
  {
    num: "03",
    title: "ALERT",
    icon: AlertTriangle,
    description:
      "Instant notifications reach operators the moment a threat is identified.",
  },
  {
    num: "04",
    title: "RESPOND",
    icon: ShieldCheck,
    description:
      "Security personnel can quickly intervene and address active risks.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="content-section relative overflow-hidden border-t border-slate-400/10 bg-[#080e19]"
      id="how-it-works"
    >
      <div className="reveal relative z-10 mx-auto w-full max-w-7xl text-center">
        <div
          className="mx-auto flex w-full flex-col items-center text-center"
          style={{ marginBottom: "3rem" }}
        >
          <div className="section-label">
            <span />
            HOW IT WORKS
            <span />
          </div>
          <h2 className="mx-auto mb-5 max-w-4xl text-center text-4xl font-semibold leading-tight tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
            From school cameras to useful insights.
          </h2>
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-slate-400 md:text-lg">
            Connect, analyze, detect, and support a faster response while
            keeping authorized staff in control.
          </p>
        </div>

        <ol
          className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4"
          aria-label="How BantAI works"
        >
          {steps.map(({ num, title, icon: Icon, description }) => (
            <li
              className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 via-[#0b1727] to-[#080e19] text-center transition duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_16px_40px_rgba(2,132,199,0.12)]"
              style={{ padding: "2rem" }}
              key={num}
            >
              <span className="text-5xl font-semibold leading-none tracking-tight text-sky-400">
                {num}
              </span>
              <div className="text-sky-400">
                <Icon size={40} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold tracking-wide text-slate-50 md:text-2xl">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
