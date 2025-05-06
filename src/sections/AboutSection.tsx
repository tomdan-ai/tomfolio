import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { Download, ExternalLink } from 'lucide-react';
import profileImage from '../public/reme.jpg';

const AboutSection: React.FC = () => {
  return (
    <AnimatedSection id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background and expertise"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img 
                src={profileImage} 
                alt="Tom Udoh" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-600/20"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Full Stack Web Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a passionate full stack web developer with experience building scalable web applications 
              using modern technologies. With a background in both frontend and backend development, 
              I specialize in creating responsive, user-friendly interfaces that deliver exceptional user experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm proficient in JavaScript, TypeScript, React, Node.js, and various database technologies. 
              I enjoy tackling complex problems and continuously learning new technologies to stay at the 
              forefront of web development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400">Name</span>
                <span className="font-medium text-gray-900 dark:text-white">Tom Udoh</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400">Email</span>
                <span className="font-medium text-gray-900 dark:text-white">tomudoh258@email.com</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400">Location</span>
                <span className="font-medium text-gray-900 dark:text-white">Remote</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/Tom's Resume.pdf"
                download="Tom's Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} className="mr-2" />
                Download CV
              </motion.a>
              
              <motion.a
                href="https://docs.google.com/document/d/1CGP-NhJWLICClOQUlrtU9Irubx_D7Q9KXE-pDrFwswQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} className="mr-2" />
                View Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;