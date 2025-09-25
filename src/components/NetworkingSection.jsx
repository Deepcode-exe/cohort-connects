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
import "./NetworkingSection.css";

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
    <section className="networking-section">
      <div className="networking-container">
        <div className="section-header">
          <h2 className="section-title">Networking Opportunities</h2>
          <p className="section-subtitle">
            Build meaningful professional relationships with alumni across industries and geographies
          </p>
        </div>

        <div className="networking-features-grid">
          {networkingFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="networking-feature-card"
              >
                <div className="feature-icon">
                  <IconComponent />
                </div>
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
                <ul className="feature-list">
                  {feature.features.map((item, i) => (
                    <li key={i} className="feature-item">
                      <Star className="feature-star" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="featured-connections">
          <h3 className="featured-title">Featured Alumni</h3>
          <div className="connections-grid">
            {featuredConnections.map((person, index) => (
              <Card 
                key={index}
                className="connection-card"
              >
                <div className="connection-header">
                  <div className="connection-avatar">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Badge variant="secondary" className="mutual-badge">
                    {person.mutual} mutual
                  </Badge>
                </div>
                <h4 className="connection-name">
                  {person.name}
                </h4>
                <p className="connection-role">{person.role}</p>
                <p className="connection-company">{person.company}</p>
                <div className="connection-meta">
                  <MapPin className="meta-icon" />
                  {person.location}
                  <span className="meta-separator">•</span>
                  {person.batch}
                </div>
                <div className="expertise-tags">
                  {person.expertise.slice(0, 2).map((skill, i) => (
                    <Badge key={i} variant="outline" className="expertise-tag">
                      {skill}
                    </Badge>
                  ))}
                  {person.expertise.length > 2 && (
                    <Badge variant="outline" className="expertise-tag">
                      +{person.expertise.length - 2}
                    </Badge>
                  )}
                </div>
                <Button size="sm" className="connect-button">
                  Connect
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="networking-cta">
          <Button size="lg" className="explore-button">
            <Users className="explore-icon" />
            Explore All Alumni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NetworkingSection;