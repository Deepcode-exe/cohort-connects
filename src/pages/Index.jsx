import HeroSection from "@/components/HeroSection";
import QuickAccessPanels from "@/components/QuickAccessPanels";
import NetworkingSection from "@/components/NetworkingSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import ContributionSection from "@/components/ContributionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickAccessPanels />
      <NetworkingSection />
      <NewsEventsSection />
      <ContributionSection />
    </div>
  );
};

export default Index;