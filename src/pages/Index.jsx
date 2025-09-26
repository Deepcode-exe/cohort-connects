import HeroSection from "@/components/HeroSection";
import QuickAccessPanels from "@/components/QuickAccessPanels";
import NetworkingSection from "@/components/NetworkingSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import ContributionSection from "@/components/ContributionSection";
import DarkModeToggle from "@/components/DarkModeToggle";
import AIChatBot from "@/components/AIChatBot";

const Index = ({ onToggleMode, isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleMode} />
      <AIChatBot isDarkMode={isDarkMode} />
      <HeroSection />
      <QuickAccessPanels />
      <NetworkingSection />
      <NewsEventsSection />
      <ContributionSection />
    </div>
  );
};

export default Index;