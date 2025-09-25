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

const ContributionSection = () => {
  const contributionTypes = [
    {
      icon: GraduationCap,
      title: "Mentorship Programs",
      description: "Guide the next generation of students and recent graduates",
      impact: "500+ mentees guided",
      action: "Become a Mentor",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Share industry insights and help with job placements",
      impact: "200+ careers launched",
      action: "Share Opportunities",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: DollarSign,
      title: "Financial Support", 
      description: "Contribute to scholarships and institutional development",
      impact: "$2M+ raised this year",
      action: "Make a Donation",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Users,
      title: "Volunteer Programs",
      description: "Participate in events and community outreach initiatives",
      impact: "1000+ volunteer hours",
      action: "Join Programs",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Contribution & Support</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make a meaningful impact by contributing your expertise, time, or resources to help future generations succeed
          </p>
        </div>

        {/* Contribution Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contributionTypes.map((type, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 p-6 transition-smooth hover:scale-105 hover:shadow-card group text-center"
            >
              <div className={`${type.bgColor} ${type.color} p-4 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                <type.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {type.description}
              </p>
              <div className="bg-primary/10 rounded-lg p-2 mb-4">
                <p className="text-primary font-semibold text-sm">
                  {type.impact}
                </p>
              </div>
              <Button size="sm" className="w-full">
                {type.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 p-8 text-center transition-smooth hover:scale-105 hover:shadow-card group"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                {stat.label}
              </p>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <Card 
                key={index}
                className="card-gradient border-border/50 p-6 transition-smooth hover:scale-[1.02] hover:shadow-card group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/20 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-smooth">
                      {story.name}
                    </h4>
                    <p className="text-primary text-sm">{story.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic mb-4">
                  "{story.story}"
                </blockquote>
                
                <div className="flex items-center text-sm">
                  <Heart className="h-4 w-4 text-red-400 mr-2" />
                  <span className="text-muted-foreground">
                    Mentored by: <span className="text-primary">{story.mentorName}</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center card-gradient rounded-xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of alumni who are already making a difference in the lives of current students and fellow graduates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-primary">
              <Heart className="h-5 w-5 mr-2" />
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