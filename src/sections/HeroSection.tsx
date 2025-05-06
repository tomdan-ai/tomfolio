import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Create motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      } 
    }
  };

  // Calculate bubble positions based on mouse movement using motion values
  const bubble1X = useTransform(
    mouseX, 
    [0, window.innerWidth], 
    [-20, 20]
  );
  
  const bubble1Y = useTransform(
    mouseY, 
    [0, window.innerHeight], 
    [-20, 20]
  );
  
  const bubble2X = useTransform(
    mouseX, 
    [0, window.innerWidth], 
    [20, -20]
  );
  
  const bubble2Y = useTransform(
    mouseY, 
    [0, window.innerHeight], 
    [20, -20]
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-blue-500 blur-3xl top-1/4 -left-48"
          style={{ x: bubble1X, y: bubble1Y }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-purple-500 blur-3xl bottom-1/4 -right-48"
          style={{ x: bubble2X, y: bubble2Y }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-blue-600 dark:text-blue-400 font-medium mb-3"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Tom Udoh
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
            variants={itemVariants}
          >
            Full Stack Web Developer
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Building scalable and beautiful web applications with cutting-edge tech.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/tomudoh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
              variants={socialVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tomudoh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
              variants={socialVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:tomudoh258@email.com"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
              variants={socialVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 1.5
            },
            opacity: { delay: 1.5 }
          }
        }}
        whileHover={{ scale: 1.2 }}
        onClick={scrollToNext}
      >
        <ChevronDown className="text-gray-600 dark:text-gray-400" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;