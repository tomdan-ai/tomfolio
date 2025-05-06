import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'none';
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  threshold?: number;
  parallax?: boolean;
  parallaxIntensity?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  id,
  animation = 'fade',
  direction = 'up',
  duration = 0.7,
  threshold = 0.2,
  parallax = false,
  parallaxIntensity = 100
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect calculation
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [parallaxIntensity, -parallaxIntensity]
  );
  
  // Animation variants based on direction and type
  const getVariants = () => {
    switch (animation) {
      case 'slide':
        switch (direction) {
          case 'up': return {
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 }
          };
          case 'down': return {
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 }
          };
          case 'left': return {
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 }
          };
          case 'right': return {
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 }
          };
          default: return {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          };
        }
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'none':
      default:
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 1 }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
      style={parallax ? { y } : undefined}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;