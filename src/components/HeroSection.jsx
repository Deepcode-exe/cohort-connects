import { Button } from "@/components/ui/button";
import { 
  Users, 
  Search, 
  Calendar, 
  MessageCircle, 
  ChevronRight 
} from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Connect. <span className="hero-title-accent">Grow.</span> Succeed.
          </h1>
          <p className="hero-subtitle">
            Join thousands of alumni building meaningful professional relationships 
            and creating opportunities for the next generation
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <Users />
              </div>
              <div className="stat-content">
                <div className="stat-number">15,000+</div>
                <div className="stat-label">Active Alumni</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <MessageCircle />
              </div>
              <div className="stat-content">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Connections Made</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Calendar />
              </div>
              <div className="stat-content">
                <div className="stat-number">200+</div>
                <div className="stat-label">Events Yearly</div>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <Button size="lg" className="btn-primary">
              <Search className="btn-icon" />
              Find Alumni
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary">
              Join Network
              <ChevronRight className="btn-icon-right" />
            </Button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="network-visual">
            <div className="network-node node-1"></div>
            <div className="network-node node-2"></div>
            <div className="network-node node-3"></div>
            <div className="network-node node-4"></div>
            <div className="network-node node-5"></div>
            <div className="network-connection connection-1"></div>
            <div className="network-connection connection-2"></div>
            <div className="network-connection connection-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;