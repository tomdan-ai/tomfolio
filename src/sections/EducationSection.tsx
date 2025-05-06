import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { GraduationCap } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

const EducationSection: React.FC = () => {
  const educations: Education[] = [
    {
      institution: 'Microverse',
      degree: 'Full Stack Web Development Program',
      period: '2020 - 2021',
      description: 'Completed rigorous training in full stack web development with focus on JavaScript, React, Ruby on Rails and remote pair programming.',
    },
    {
      institution: 'University of Uyo',
      degree: 'Bachelor of Science, Computer Science',
      period: '2014 - 2018',
      description: 'Graduated with honors. Specialized in software engineering with a focus on algorithms and data structures.',
    },
  ];

  return (
    <AnimatedSection id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and certifications"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {educations.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    <GraduationCap size={24} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      {edu.period}
                    </p>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 ml-16">
                  {edu.degree}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 ml-16">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;