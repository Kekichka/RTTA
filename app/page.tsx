import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { Workflow } from "@/components/Workflow";
import { Features } from "@/components/Features";
import { InteractivePreview } from "@/components/InteractivePreview";
import { AgentExplanation } from "@/components/AgentExplanation";
import { Benefits } from "@/components/Benefits";
import { UseCases } from "@/components/UseCases";
import { Technology } from "@/components/Technology";
import { Roadmap } from "@/components/Roadmap";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Workflow />
        <Features />
        <InteractivePreview />
        <AgentExplanation />
        <Benefits />
        <UseCases />
        <Technology />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
