import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-padel.jpg";
import courtsImage from "@/assets/padel-courts.jpg";
import tournamentImage from "@/assets/tournament.jpg";

const slides = [
  {
    id: 1,
    image: heroImage,
    title: "FULLY AIR CONDITIONED INDOOR PADEL CLUB",
    subtitle: "7 World Class courts, Amenities, Café, Work out zones, and more.",
    buttonText: "Book now"
  },
  {
    id: 2,
    image: courtsImage,
    title: "NOVA BOOKING SYSTEM",
    subtitle: "Our proprietary booking system - 3 easy step process, add multiple sessions, pay online & offline",
    buttonText: "Book now"
  },
  {
    id: 3,
    image: tournamentImage,
    title: "WORLD CLASS TOURNAMENTS & SOCIAL NIGHTS",
    subtitle: "Padelverse Cup, Americano Nights, Weekend Padel Parties, and much more!",
    buttonText: "Join Events"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>
        <Button variant="hero" size="lg" className="text-lg px-8 py-6">
          {slides[currentSlide].buttonText}
          <ArrowRight className="ml-2" />
        </Button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 glass-card p-3 hover:bg-white/20 transition-all group"
      >
        <ChevronLeft className="text-white group-hover:text-primary transition-colors" size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 glass-card p-3 hover:bg-white/20 transition-all group"
      >
        <ChevronRight className="text-white group-hover:text-primary transition-colors" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-primary scale-125 cosmic-glow" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;