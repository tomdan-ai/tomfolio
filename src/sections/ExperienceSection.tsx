import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
}

const ExperienceSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  
  const experiences: Experience[] = [
    {
      company: 'Microverse',
      position: 'Mentor',
      period: 'Jan 2023 - Present',
      description: 'Mentoring junior developers in full-stack web development.',
      highlights: [
        'Provided code reviews and feedback to help students improve their coding skills',
        'Conducted technical interviews to assess student progress',
        'Guided students through complex JavaScript and React projects',
        'Organized weekly group sessions to discuss industry best practices',
      ],
    },
    {
      company: 'Juubix',
      position: 'Full Stack Intern',
      period: 'Jun 2022 - Dec 2022',
      description: 'Contributed to developing a blockchain-based platform for digital content creators.',
      highlights: [
        'Developed user interfaces using React and Tailwind CSS',
        'Implemented authentication system using JWT',
        'Collaborated with the team to design and implement new features',
        'Participated in daily stand-ups and sprint planning',
      ],
    },
    {
      company: 'Vosyn',
      position: 'Backend Developer Intern',
      period: 'Jan 2022 - May 2022',
      description: 'Worked on API development and database optimization for a SaaS product.',
      highlights: [
        'Designed and implemented RESTful APIs using Node.js and Express',
        'Optimized database queries to improve application performance',
        'Created comprehensive API documentation using Swagger',
        'Implemented unit tests to ensure code reliability',
      ],
    },
    {
      company: 'Faschcom',
      position: 'Full Stack Developer',
      period: 'May 2021 - Dec 2021',
      description: 'Built custom web applications for clients across different industries.',
      highlights: [
        'Developed responsive web applications using React, Node.js, and PostgreSQL',
        'Created an e-commerce platform for a local retail business',
        'Implemented payment gateway integrations with Stripe and PayPal',
        'Managed client relationships and gathered project requirements',
      ],
    },
    {
      company: 'SUI Hackathon',
      position: 'Blockchain Developer',
      period: 'Mar 2021',
      description: 'Participated in a blockchain development hackathon.',
      highlights: [
        'Built a decentralized application using the SUI blockchain',
        'Implemented smart contracts for asset tokenization',
        'Collaborated with a team of developers to deliver a working prototype',
        'Won third place for innovation and technical implementation',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const timelineLineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      }
    }
  };

  const timelineDotVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({ 
      scale: 1,
      transition: { 
        delay: 0.5 + i * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  return (
    <AnimatedSection 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      animation="fade"
    >
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey so far"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative ml-4 md:ml-12" ref={timelineRef}>
            {/* Animated timeline line */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500 dark:bg-blue-400 -ml-0.5"
              variants={timelineLineVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
              className="pl-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.position}`}
                  className="mb-12 relative"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute -left-[43px] mt-1.5 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center"
                    variants={timelineDotVariants}
                    custom={index}
                    whileHover={{ 
                      scale: 1.2, 
                      boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <Briefcase size={16} className="text-blue-500 dark:text-blue-400" />
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          variants={highlightVariants}
                          custom={idx}
                        >
                          <motion.span 
                            className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          />
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;