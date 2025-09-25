import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  ExternalLink,
  ChevronRight,
  Trophy,
  Briefcase,
  GraduationCap
} from "lucide-react";
import "./NewsEventsSection.css";

const NewsEventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2024",
      date: "March 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "University Main Campus",
      type: "Reunion",
      attendees: 450,
      description: "Join us for an evening of networking, nostalgia, and celebration with fellow alumni from all graduation years.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Tech Career Workshop",
      date: "March 22, 2024", 
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      type: "Workshop",
      attendees: 120,
      description: "Learn about the latest trends in technology careers and get insights from industry leaders.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Entrepreneurship Panel",
      date: "April 5, 2024",
      time: "7:00 PM - 9:00 PM", 
      location: "Innovation Center",
      type: "Panel",
      attendees: 85,
      description: "Successful alumni entrepreneurs share their journey and insights for aspiring business owners.",
      image: "/api/placeholder/300/200"
    }
  ];

  const newsUpdates = [
    {
      title: "New Scholarship Program Launched",
      excerpt: "Thanks to alumni contributions, we're proud to announce a new scholarship program supporting 50 students annually.",
      date: "March 10, 2024",
      category: "Scholarship",
      readTime: "3 min read"
    },
    {
      title: "Alumni Startup Raises $10M Series A",
      excerpt: "Congratulations to Sarah Chen (Class of 2018) whose AI startup just secured major funding from leading VCs.",
      date: "March 8, 2024", 
      category: "Success Story",
      readTime: "2 min read"
    },
    {
      title: "Global Alumni Network Reaches 50,000",
      excerpt: "Our alumni community continues to grow worldwide, creating more opportunities for connection and collaboration.",
      date: "March 5, 2024",
      category: "Milestone",
      readTime: "4 min read"
    }
  ];

  const eventTypes = [
    { icon: Users, label: "Reunions", count: "12", color: "blue" },
    { icon: Briefcase, label: "Career Events", count: "8", color: "green" },
    { icon: Trophy, label: "Awards", count: "4", color: "yellow" },
    { icon: GraduationCap, label: "Educational", count: "15", color: "purple" }
  ];

  return (
    <section className="news-events-section">
      <div className="news-events-container">
        <div className="section-header">
          <h2 className="section-title">News & Events</h2>
          <p className="section-subtitle">
            Stay connected with the latest happenings in our alumni community
          </p>
        </div>

        <div className="event-types-grid">
          {eventTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div key={index} className={`event-type-card ${type.color}`}>
                <div className={`event-type-icon ${type.color}`}>
                  <IconComponent />
                </div>
                <div className="event-type-content">
                  <div className="event-type-count">{type.count}</div>
                  <div className="event-type-label">{type.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="content-grid">
          <div className="events-section">
            <h3 className="subsection-title">Upcoming Events</h3>
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="event-card">
                  <div className="event-header">
                    <Badge className={`event-badge ${event.type.toLowerCase()}`}>
                      {event.type}
                    </Badge>
                    <div className="event-attendees">
                      <Users className="attendees-icon" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-details">
                    <div className="event-detail">
                      <Calendar className="detail-icon" />
                      {event.date}
                    </div>
                    <div className="event-detail">
                      <Clock className="detail-icon" />
                      {event.time}
                    </div>
                    <div className="event-detail">
                      <MapPin className="detail-icon" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="event-actions">
                    <Button size="sm" className="register-button">
                      Register Now
                    </Button>
                    <Button variant="ghost" size="sm" className="learn-more-button">
                      Learn More
                      <ExternalLink className="learn-more-icon" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="news-section">
            <h3 className="subsection-title">Latest News</h3>
            <div className="news-list">
              {newsUpdates.map((news, index) => (
                <Card key={index} className="news-card">
                  <div className="news-header">
                    <Badge variant="outline" className="news-category">
                      {news.category}
                    </Badge>
                    <span className="news-read-time">{news.readTime}</span>
                  </div>
                  
                  <h4 className="news-title">{news.title}</h4>
                  <p className="news-excerpt">{news.excerpt}</p>
                  
                  <div className="news-footer">
                    <span className="news-date">{news.date}</span>
                    <Button variant="ghost" size="sm" className="read-more-button">
                      Read More
                      <ChevronRight className="read-more-icon" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="section-cta">
          <Button size="lg" className="view-all-button">
            <Calendar className="view-all-icon" />
            View All Events & News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;