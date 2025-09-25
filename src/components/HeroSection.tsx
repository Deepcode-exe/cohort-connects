import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, Award, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,hsl(158_64%_52%/0.05)_25%,hsl(158_64%_52%/0.05)_26%,transparent_27%,transparent_74%,hsl(158_64%_52%/0.05)_75%,hsl(158_64%_52%/0.05)_76%,transparent_77%,transparent)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Hero Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Alumni Network
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect, collaborate, and grow with fellow alumni. Build lasting professional relationships and unlock new opportunities.
          </p>
        </div>

        {/* Search Bar */}
        <div className="animate-scale-in max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search alumni by name, batch, department, or profession..."
              className="pl-12 h-14 text-lg card-gradient border-border/50 backdrop-blur-sm"
            />
            <Button className="absolute right-2 top-2 h-10">
              Search
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="animate-slide-in-left grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card-gradient rounded-xl p-6 border border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:shadow-primary">
            <Users className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-primary">15,000+</h3>
            <p className="text-muted-foreground">Active Alumni</p>
          </div>
          <div className="card-gradient rounded-xl p-6 border border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:shadow-primary">
            <Award className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-primary">500+</h3>
            <p className="text-muted-foreground">Companies Represented</p>
          </div>
          <div className="card-gradient rounded-xl p-6 border border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:shadow-primary">
            <Calendar className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-primary">50+</h3>
            <p className="text-muted-foreground">Events This Year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;