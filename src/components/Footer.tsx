import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="glass-card p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Padelverse
          </h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates on tournaments, events, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">PADELVERSE</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The ultimate destination for padel enthusiasts. World-class facilities, 
              professional tournaments, and an amazing community.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 glass-card hover:bg-white/20 transition-colors">
                <Facebook size={20} className="text-primary" />
              </button>
              <button className="p-2 glass-card hover:bg-white/20 transition-colors">
                <Instagram size={20} className="text-primary" />
              </button>
              <button className="p-2 glass-card hover:bg-white/20 transition-colors">
                <Twitter size={20} className="text-primary" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#courts" className="text-muted-foreground hover:text-primary transition-colors">Courts</a></li>
              <li><a href="#tournaments" className="text-muted-foreground hover:text-primary transition-colors">Tournaments</a></li>
              <li><a href="#booking" className="text-muted-foreground hover:text-primary transition-colors">Book Now</a></li>
              <li><a href="#membership" className="text-muted-foreground hover:text-primary transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Court Rental</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Equipment Rental</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Private Lessons</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Group Training</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Event Hosting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Padel Street<br />
                  Sports District, City 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@padelverse.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Mon-Fri: 6:00 AM - 11:00 PM</div>
                  <div>Sat-Sun: 7:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Padelverse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;