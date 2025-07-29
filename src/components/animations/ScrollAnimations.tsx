import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ScrollAnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  scale?: boolean;
  layerEffect?: boolean;
}

const ScrollAnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  scale = true,
  layerEffect = false
}: ScrollAnimatedCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.3
  });

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (layerEffect) {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.2;
        setOffset(rate);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [layerEffect]);

  const getInitialTransform = () => {
    switch(direction) {
      case "up": return { y: 60 };
      case "down": return { y: -60 };
      case "left": return { x: 60 };
      case "right": return { x: -60 };
      default: return { y: 60 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...getInitialTransform(),
        ...(scale && { scale: 0.8 }),
        rotateX: layerEffect ? 15 : 0
      }}
      animate={isInView ? { 
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale && { scale: 1 }),
        rotateX: 0
      } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      className={className}
      style={{
        transform: layerEffect ? `translateY(${offset}px)` : undefined,
        transformStyle: "preserve-3d"
      }}
      whileHover={layerEffect ? {
        scale: 1.05,
        rotateX: 5,
        z: 50,
        transition: { duration: 0.3 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};

// Stacking Cards Component for layered scroll effect
interface StackingCardsProps {
  cards: Array<{
    id: string;
    content: React.ReactNode;
    background?: string;
  }>;
  className?: string;
}

const StackingCards = ({ cards, className = "" }: StackingCardsProps) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {cards.map((card, index) => {
        const cardOffset = scrollY * 0.1 * (index + 1);
        const cardScale = 1 - (index * 0.05);
        const cardOpacity = 1 - (index * 0.1);
        
        return (
          <motion.div
            key={card.id}
            className="sticky top-20 mb-8"
            style={{
              transform: `translateY(${cardOffset}px) scale(${cardScale})`,
              opacity: cardOpacity,
              zIndex: cards.length - index,
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ 
              opacity: cardOpacity, 
              y: 0,
              transition: { 
                duration: 0.6, 
                delay: index * 0.1 
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`glass-card p-8 ${card.background || ''} hover:scale-105 transition-all duration-500`}>
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/3 w-6 h-6 bg-primary-glow/15 rounded-full blur-sm"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent/25 rounded-full blur-sm"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export { ScrollAnimatedCard, StackingCards, FloatingElements };