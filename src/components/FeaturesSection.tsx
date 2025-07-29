import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  Trophy, 
  Coffee, 
  Dumbbell, 
  Wind, 
  Zap,
  Clock
} from "lucide-react";
import { ScrollAnimatedCard, StackingCards } from "@/components/animations/ScrollAnimations";

const features = [
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Fully Air Conditioned",
    description: "Play in perfect climate conditions year-round with our state-of-the-art air conditioning system.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Booking System",
    description: "Book courts instantly with our proprietary NOVA system. Multiple sessions, online & offline payments.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "World-Class Tournaments",
    description: "Join exciting tournaments, Americano nights, and weekend padel parties with players of all levels.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "7 Premium Courts",
    description: "Experience professional-grade courts with perfect lighting and premium surfaces for optimal gameplay.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Café & Amenities",
    description: "Relax and socialize in our modern café with premium refreshments and comfortable seating areas.",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Fitness Zones",
    description: "Complete your training with our dedicated workout zones and fitness equipment for padel athletes.",
    color: "from-indigo-500 to-blue-500"
  }
];

const stats = [
  {
    icon: <Clock className="w-6 h-6" />,
    number: "24/7",
    label: "Available Booking"
  },
  {
    icon: <Users className="w-6 h-6" />,
    number: "1000+",
    label: "Active Members"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    number: "50+",
    label: "Tournaments Hosted"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    number: "100%",
    label: "Satisfaction Rate"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative" id="courts">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <ScrollAnimatedCard className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" delay={0.2}>
          {stats.map((stat, index) => (
            <ScrollAnimatedCard 
              key={index} 
              className="text-center glass-card p-6 hover:scale-105 transition-all duration-300"
              delay={0.3 + (index * 0.1)}
              layerEffect={true}
            >
              <div className="flex justify-center mb-3 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </ScrollAnimatedCard>
          ))}
        </ScrollAnimatedCard>

        {/* Features Grid */}
        <ScrollAnimatedCard className="text-center mb-16" delay={0.4}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            World-Class Padel Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the ultimate padel destination with premium facilities, cutting-edge technology, 
            and an unmatched atmosphere for players of all skill levels.
          </p>
        </ScrollAnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimatedCard
              key={index}
              delay={0.6 + (index * 0.1)}
              layerEffect={true}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </ScrollAnimatedCard>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimatedCard 
          className="text-center glass-card p-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20"
          delay={1.0}
          layerEffect={true}
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience Padelverse?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players who have made Padelverse their home for the ultimate padel experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Book Your First Session
            </Button>
            <Button variant="outline" size="lg">
              Take a Virtual Tour
            </Button>
          </div>
        </ScrollAnimatedCard>
      </div>
    </section>
  );
};

export default FeaturesSection;