import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  GraduationCap, 
  Briefcase, 
  DollarSign,
  Users,
  Target,
  TrendingUp,
  Award
} from "lucide-react";
import "./ContributionSection.css";

const ContributionSection = () => {
  const contributionTypes = [
    {
      icon: GraduationCap,
      title: "Mentorship Programs",
      description: "Guide the next generation of students and recent graduates",
      impact: "500+ mentees guided",
      action: "Become a Mentor",
      colorClass: "blue"
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Share industry insights and help with job placements",
      impact: "200+ careers launched",
      action: "Share Opportunities",
      colorClass: "green"
    },
    {
      icon: DollarSign,
      title: "Financial Support", 
      description: "Contribute to scholarships and institutional development",
      impact: "$2M+ raised this year",
      action: "Make a Donation",
      colorClass: "yellow"
    },
    {
      icon: Users,
      title: "Volunteer Programs",
      description: "Participate in events and community outreach initiatives",
      impact: "1000+ volunteer hours",
      action: "Join Programs",
      colorClass: "purple"
    }
  ];

  const impactStats = [
    {
      icon: Target,
      value: "95%",
      label: "Student Placement Rate",
      description: "Through alumni network support"
    },
    {
      icon: TrendingUp,
      value: "$2.5M",
      label: "Scholarships Funded",
      description: "By alumni contributions"
    },
    {
      icon: Award,
      value: "150+",
      label: "Success Stories",
      description: "Alumni-mentored achievements"
    }
  ];

  const successStories = [
    {
      name: "Maria Rodriguez",
      role: "Software Engineer at Apple",
      story: "Thanks to my alumni mentor's guidance, I landed my dream job in tech. Now I'm paying it forward by mentoring current students.",
      mentorName: "David Chen (Class of 2015)"
    },
    {
      name: "James Wilson", 
      role: "Startup Founder",
      story: "The entrepreneurship workshop led by alumni gave me the confidence to start my own company. We've now raised $5M in funding.",
      mentorName: "Alumni Network Support"
    }
  ];

  return (
    <section className="contribution-section">
      <div className="contribution-container">
        <div className="section-header">
          <h2 className="section-title">Contribution & Support</h2>
          <p className="section-subtitle">
            Make a meaningful impact by contributing your expertise, time, or resources to help future generations succeed
          </p>
        </div>

        <div className="contribution-types-grid">
          {contributionTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={index}
                className="contribution-type-card"
              >
                <div className={`contribution-icon ${type.colorClass}`}>
                  <IconComponent />
                </div>
                <h3 className="contribution-title">
                  {type.title}
                </h3>
                <p className="contribution-description">
                  {type.description}
                </p>
                <div className="contribution-impact">
                  <p className="impact-text">
                    {type.impact}
                  </p>
                </div>
                <Button size="sm" className="contribution-action">
                  {type.action}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="impact-stats-grid">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className="impact-stat-card"
              >
                <div className="stat-icon">
                  <IconComponent />
                </div>
                <h3 className="stat-value">
                  {stat.value}
                </h3>
                <p className="stat-label">
                  {stat.label}
                </p>
                <p className="stat-description">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="success-stories">
          <h3 className="stories-title">Success Stories</h3>
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <Card 
                key={index}
                className="story-card"
              >
                <div className="story-header">
                  <div className="story-avatar">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="story-info">
                    <h4 className="story-name">
                      {story.name}
                    </h4>
                    <p className="story-role">{story.role}</p>
                  </div>
                </div>
                
                <blockquote className="story-quote">
                  "{story.story}"
                </blockquote>
                
                <div className="story-mentor">
                  <Heart className="mentor-icon" />
                  <span className="mentor-text">
                    Mentored by: <span className="mentor-name">{story.mentorName}</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="contribution-cta">
          <h3 className="cta-title">Ready to Make an Impact?</h3>
          <p className="cta-description">
            Join thousands of alumni who are already making a difference in the lives of current students and fellow graduates.
          </p>
          <div className="cta-actions">
            <Button size="lg" className="start-contributing-button">
              <Heart className="heart-icon" />
              Start Contributing
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;