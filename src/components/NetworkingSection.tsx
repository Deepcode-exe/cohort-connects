import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  UserPlus, 
  MessageSquare, 
  Video,
  MapPin,
  Calendar,
  Star,
  Handshake
} from "lucide-react";

const NetworkingSection = () => {
  const networkingFeatures = [
    {
      icon: UserPlus,
      title: "Find Connections",
      description: "Discover alumni in your field or location with smart matching algorithms",
      features: ["Industry matching", "Location-based search", "Mutual connections"]
    },
    {
      icon: MessageSquare,
      title: "Direct Messaging",
      description: "Start conversations with fellow alumni through our secure messaging platform",
      features: ["Private messaging", "Group chats", "File sharing"]
    },
    {
      icon: Video,
      title: "Virtual Meetups",
      description: "Join video calls and networking sessions with alumni worldwide",
      features: ["Video conferences", "Screen sharing", "Recording available"]
    },
    {
      icon: Handshake,
      title: "Mentorship Program",
      description: "Connect with experienced alumni mentors or become a mentor yourself",
      features: ["Skill-based matching", "Structured programs", "Progress tracking"]
    }
  ];

  const featuredConnections = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      batch: "Class of 2018",
      location: "San Francisco, CA",
      expertise: ["Machine Learning", "Cloud Computing", "Team Leadership"],
      mutual: 12
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Meta",
      batch: "Class of 2016", 
      location: "Seattle, WA",
      expertise: ["Product Strategy", "User Research", "Data Analytics"],
      mutual: 8
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Scientist",
      company: "MIT",
      batch: "Class of 2012",
      location: "Boston, MA", 
      expertise: ["AI Research", "Publishing", "Grant Writing"],
      mutual: 15
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Networking Opportunities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build meaningful professional relationships with alumni across industries and geographies
          </p>
        </div>

        {/* Networking Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkingFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 p-6 transition-smooth hover:scale-105 hover:shadow-card group"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-smooth">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {feature.description}
              </p>
              <ul className="space-y-1">
                {feature.features.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center">
                    <Star className="h-3 w-3 text-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Featured Connections */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Alumni</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredConnections.map((person, index) => (
              <Card 
                key={index}
                className="card-gradient border-border/50 p-6 transition-smooth hover:scale-105 hover:shadow-card group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/20 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {person.mutual} mutual
                  </Badge>
                </div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                  {person.name}
                </h4>
                <p className="text-primary text-sm mb-1">{person.role}</p>
                <p className="text-muted-foreground text-sm mb-2">{person.company}</p>
                <div className="flex items-center text-xs text-muted-foreground mb-3">
                  <MapPin className="h-3 w-3 mr-1" />
                  {person.location}
                  <span className="mx-2">•</span>
                  {person.batch}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {person.expertise.slice(0, 2).map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {person.expertise.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{person.expertise.length - 2}
                    </Badge>
                  )}
                </div>
                <Button size="sm" className="w-full">
                  Connect
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="shadow-primary">
            <Users className="h-5 w-5 mr-2" />
            Explore All Alumni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NetworkingSection;