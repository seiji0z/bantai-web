import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../sections/HeroSection";
import TrustStripSection from "../sections/TrustStripSection";
import ProblemSection from "../sections/ProblemSection";
import SolutionSection from "../sections/SolutionSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import PartnershipSection from "../sections/PartnershipSection";
import RoadmapSection from "../sections/RoadmapSection";
import TeamSection from "../sections/TeamSection";
import FaqSection from "../sections/FaqSection";
import FinalCtaSection from "../sections/FinalCtaSection";

function HomePage() {
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
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStripSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <PartnershipSection />
        <RoadmapSection />
        <TeamSection />
        <FinalCtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
