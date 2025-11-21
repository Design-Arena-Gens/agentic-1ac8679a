import { ActionPlan } from "@/components/action-plan";
import { FAQSection } from "@/components/faq";
import { HeroSection } from "@/components/hero";
import { ImpactAreas } from "@/components/impact";
import { ImplementationRoadmap } from "@/components/roadmap";
import { RiskMatrix } from "@/components/risk-matrix";
import { ResourceToolkit } from "@/components/toolkit";
import { SiteFooter } from "@/components/footer";
import { StrategyPillars } from "@/components/pillars";
import { TopNavigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNavigation />
      <main>
        <HeroSection />
        <StrategyPillars />
        <ImpactAreas />
        <ActionPlan />
        <ImplementationRoadmap />
        <RiskMatrix />
        <ResourceToolkit />
        <FAQSection />
      </main>
      <SiteFooter />
    </div>
  );
}
