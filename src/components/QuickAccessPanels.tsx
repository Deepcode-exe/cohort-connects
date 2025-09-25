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

const QuickAccessPanels = () => {
  const quickActions = [
    {
      icon: Users,
      title: "Alumni Directory",
      description: "Browse and connect with alumni from all batches and departments",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: UserCircle,
      title: "Update Profile",
      description: "Keep your information current and showcase your achievements",
      color: "text-green-400", 
      bgColor: "bg-green-500/10"
    },
    {
      icon: Trophy,
      title: "Share Achievements",
      description: "Celebrate your successes and inspire fellow alumni",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: MessageCircle,
      title: "Connect & Chat",
      description: "Start conversations and build meaningful professional relationships",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
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
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Quick Access</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to connect and engage with the alumni community
          </p>
        </div>

        {/* Main Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 p-6 transition-smooth hover:scale-105 hover:shadow-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${action.bgColor} ${action.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-smooth`}>
                <action.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {action.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {action.description}
              </p>
              <Button variant="ghost" size="sm" className="w-full justify-between group-hover:text-primary transition-smooth">
                Get Started
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 p-6 transition-smooth hover:scale-105 hover:shadow-card group cursor-pointer text-center"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {category.title}
              </h3>
              <p className="text-muted-foreground">
                {category.count}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessPanels;