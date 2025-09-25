import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  UserCircle, 
  Trophy, 
  MessageCircle,
  ChevronRight,
  Building2,
  GraduationCap,
  Briefcase
} from "lucide-react";
import "./QuickAccessPanels.css";

const QuickAccessPanels = () => {
  const quickActions = [
    {
      icon: Users,
      title: "Alumni Directory",
      description: "Browse and connect with alumni from all batches and departments",
      colorClass: "blue"
    },
    {
      icon: UserCircle,
      title: "Update Profile",
      description: "Keep your information current and showcase your achievements",
      colorClass: "green"
    },
    {
      icon: Trophy,
      title: "Share Achievements",
      description: "Celebrate your successes and inspire fellow alumni",
      colorClass: "yellow"
    },
    {
      icon: MessageCircle,
      title: "Connect & Chat",
      description: "Start conversations and build meaningful professional relationships",
      colorClass: "purple"
    }
  ];

  const categories = [
    {
      icon: GraduationCap,
      title: "By Graduation Year",
      count: "2000-2024"
    },
    {
      icon: Building2,
      title: "By Department", 
      count: "25+ Departments"
    },
    {
      icon: Briefcase,
      title: "By Industry",
      count: "50+ Industries"
    }
  ];

  return (
    <section className="quick-access-section">
      <div className="quick-access-container">
        <div className="section-header">
          <h2 className="section-title">Quick Access</h2>
          <p className="section-subtitle">
            Everything you need to connect and engage with the alumni community
          </p>
        </div>

        <div className="quick-actions-grid">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={index}
                className={`quick-action-card ${action.colorClass}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`action-icon ${action.colorClass}`}>
                  <IconComponent />
                </div>
                <h3 className="action-title">
                  {action.title}
                </h3>
                <p className="action-description">
                  {action.description}
                </p>
                <Button variant="ghost" size="sm" className="action-button">
                  Get Started
                  <ChevronRight className="action-chevron" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="category-card"
              >
                <div className="category-icon">
                  <IconComponent />
                </div>
                <h3 className="category-title">
                  {category.title}
                </h3>
                <p className="category-count">
                  {category.count}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessPanels;