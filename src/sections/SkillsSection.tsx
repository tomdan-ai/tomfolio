import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { Code2, Database, Wrench, Brain, MonitorSmartphone, Server, Github as Git, Users } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <MonitorSmartphone size={24} />,
      skills: [
        {
          name: 'UI Development',
          icon: <Code2 size={20} />,
          description: 'Creating responsive and accessible user interfaces with modern frameworks',
          technologies: ['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind']
        },
        {
          name: 'State Management',
          icon: <Git size={20} />,
          description: 'Managing complex application state and data flow',
          technologies: ['Redux', 'Pinia', 'Context API', 'Zustand']
        }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: [
        {
          name: 'Server Development',
          icon: <Database size={20} />,
          description: 'Building scalable server applications and REST APIs',
          technologies: ['Node.js', 'Express', 'Ruby on Rails', 'PostgreSQL']
        },
        {
          name: 'API Design',
          icon: <Code2 size={20} />,
          description: 'Designing and implementing RESTful and GraphQL APIs',
          technologies: ['REST', 'GraphQL', 'WebSocket', 'API Security']
        }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench size={24} />,
      skills: [
        {
          name: 'Version Control',
          icon: <Git size={20} />,
          description: 'Managing code versions and collaborating with teams',
          technologies: ['Git', 'GitHub', 'GitLab', 'CI/CD']
        },
        {
          name: 'Development Tools',
          icon: <Code2 size={20} />,
          description: 'Using modern development tools and environments',
          technologies: ['Docker', 'Webpack', 'Vite', 'Jest']
        }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Brain size={24} />,
      skills: [
        {
          name: 'Team Collaboration',
          icon: <Users size={20} />,
          description: 'Working effectively in cross-functional teams',
          technologies: ['Agile', 'Scrum', 'Code Review', 'Mentoring']
        },
        {
          name: 'Problem Solving',
          icon: <Wrench size={20} />,
          description: 'Analytical thinking and creative problem solving',
          technologies: ['Architecture Design', 'Performance', 'Debugging', 'Optimization']
        }
      ]
    }
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15 
      }
    }
  };

  // Skill item animation variants
  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4
      }
    })
  };

  // Tech tag animation variants
  const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.03, duration: 0.2 }
    }),
    hover: { 
      scale: 1.05, 
      backgroundColor: "rgb(59, 130, 246)",
      color: "white",
      transition: { duration: 0.2 }
    }
  };

  // Icon container animation
  const iconContainerVariants = {
    hidden: { rotate: 0 },
    hover: { 
      rotate: [0, -10, 10, -5, 5, 0], 
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatedSection id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Expertise" 
          subtitle="Comprehensive overview of my technical skills and competencies"
        />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              variants={cardVariants}
              custom={categoryIndex}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="p-6 border-b border-gray-100 dark:border-gray-800"
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    variants={iconContainerVariants}
                    whileHover="hover"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
              </motion.div>

              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    variants={skillItemVariants}
                    custom={skillIndex}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-1"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5, 
                          backgroundColor: "rgb(59, 130, 246)",
                          color: "white"
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                              variants={techTagVariants}
                              custom={techIndex}
                              whileHover="hover"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;