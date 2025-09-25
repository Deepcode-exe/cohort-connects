import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Video,
  ExternalLink,
  Bell,
  Bookmark
} from "lucide-react";

const NewsEventsSection = () => {
  const upcomingEvents = [
    {
      title: "Global Alumni Reunion 2024",
      type: "Reunion",
      date: "December 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Grand Ballroom, Alumni Center",
      attendees: 250,
      isVirtual: false,
      description: "Join us for our biggest reunion yet with networking, dinner, and awards ceremony.",
      image: "reunion"
    },
    {
      title: "Tech Industry Career Panel",
      type: "Webinar", 
      date: "November 20, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      attendees: 150,
      isVirtual: true,
      description: "Learn from alumni working at top tech companies about career advancement.",
      image: "tech"
    },
    {
      title: "Entrepreneurship Workshop",
      type: "Workshop",
      date: "December 5, 2024", 
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Hub, Campus",
      attendees: 75,
      isVirtual: false,
      description: "Hands-on workshop on starting your own business with successful alumni entrepreneurs.",
      image: "workshop"
    }
  ];

  const newsUpdates = [
    {
      title: "Alumni Fund Reaches $2M Milestone",
      category: "Achievement",
      date: "October 25, 2024",
      excerpt: "Thanks to generous contributions from our alumni community, we've reached a significant fundraising milestone.",
      isRecent: true
    },
    {
      title: "New Mentorship Program Launch", 
      category: "Announcement",
      date: "October 20, 2024",
      excerpt: "Introducing our structured mentorship program connecting recent graduates with experienced professionals.",
      isRecent: true
    },
    {
      title: "Research Grant Success Stories",
      category: "Research",
      date: "October 15, 2024", 
      excerpt: "Celebrating our alumni researchers who received major grants for groundbreaking work in their fields.",
      isRecent: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">News & Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the latest happenings and upcoming opportunities in our alumni community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                View All Events
              </Button>
            </div>
            
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={index}
                  className="card-gradient border-border/50 p-6 transition-smooth hover:scale-[1.02] hover:shadow-card group"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Event Image Placeholder */}
                    <div className="bg-primary/10 rounded-lg w-full md:w-32 h-24 flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {event.type}
                          </Badge>
                          <h4 className="text-lg font-semibold group-hover:text-primary transition-smooth">
                            {event.title}
                          </h4>
                        </div>
                        {event.isVirtual && (
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-400/20">
                            <Video className="h-3 w-3 mr-1" />
                            Virtual
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          {event.attendees} registered
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button size="sm">
                          Register Now
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* News Updates */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Latest News</h3>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-4">
              {newsUpdates.map((news, index) => (
                <Card 
                  key={index}
                  className="card-gradient border-border/50 p-4 transition-smooth hover:scale-[1.02] hover:shadow-card group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant={news.category === 'Achievement' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {news.category}
                    </Badge>
                    {news.isRecent && (
                      <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-400/20 text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {news.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {news.date}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-6">
              View All Announcements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;