import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  className = ''
}) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className="w-24 h-1 bg-blue-600 mx-auto mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: '6rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  );
};

export default SectionTitle;