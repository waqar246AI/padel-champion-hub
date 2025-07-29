import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Professional Padel Player",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Padelverse has completely transformed my training routine. The courts are world-class and the atmosphere is incredible. It's like playing in a professional tournament every day!",
    highlight: "World-class courts"
  },
  {
    id: 2,
    name: "James Chen",
    role: "Weekend Warrior",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The booking system is genius! I can reserve multiple courts for our group tournaments so easily. The staff is incredibly friendly and the facilities are spotless.",
    highlight: "Genius booking system"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "I love the combination of padel courts and fitness zones. After an intense match, I can hit the workout area. The air conditioning makes it comfortable year-round!",
    highlight: "Perfect combination"
  },
  {
    id: 4,
    name: "Carlos Mendez",
    role: "Tournament Organizer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "We've hosted over 20 tournaments at Padelverse. The facilities are unmatched and the support team makes every event seamless. Players always leave wanting to come back.",
    highlight: "Unmatched facilities"
  },
  {
    id: 5,
    name: "Ana Silva",
    role: "Social Player",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The social nights are amazing! I've met so many great people and improved my game significantly. The café is perfect for post-match discussions and celebrations.",
    highlight: "Amazing community"
  },
  {
    id: 6,
    name: "Roberto Fernandez",
    role: "Beginner Player",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "As a complete beginner, I was nervous about joining. But the welcoming atmosphere and helpful community made learning padel such a joy. Now I'm completely addicted!",
    highlight: "Welcoming atmosphere"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background/80" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-layer-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-layer-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center glass-card px-6 py-3 mb-6"
          >
            <Star className="w-5 h-5 text-primary mr-2" />
            <span className="text-foreground font-semibold">Player Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            What Our Players Say
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join thousands of satisfied players who have made Padelverse their home court. 
            Hear their experiences and success stories.
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
        >
          {/* Floating Quote Icon */}
          <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/30 cosmic-glow">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-primary to-primary-glow p-1 rounded-full">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="mb-4">
                <h4 className="text-xl font-bold text-foreground">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
              </div>
              
              <div className="inline-flex items-center glass-card px-4 py-2">
                <span className="text-sm text-primary font-semibold">
                  {testimonials[currentTestimonial].highlight}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-8 right-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-primary w-8" 
                      : "bg-white/30 w-4 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary/30 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {testimonial.content}
                </p>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our amazing community and experience what makes Padelverse special.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-4 rounded-lg font-semibold cosmic-glow hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;