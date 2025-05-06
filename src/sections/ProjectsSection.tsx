import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'LeaderBoard',
      description: 'A leaderboard application that displays scores submitted by different players and allows adding new scores.',
      image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Bookstore CMS',
      description: 'A content management system for a bookstore that allows adding, removing, and tracking reading progress of books.',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Redux', 'Notion API', 'CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Doctor Appointments',
      description: 'An appointment booking system for doctors that allows users to schedule, reschedule, and cancel appointments.',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Rails', 'React', 'PostgreSQL', 'JWT'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'COVID-19 Reports',
      description: 'A real-time COVID-19 statistics application that displays data from around the world with interactive visualizations.',
      image: 'https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Vue', 'Pinia', 'COVID API', 'D3.js'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Budget App',
      description: 'A budget tracking application that helps users manage expenses and track spending across different categories.',
      image: 'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Rails API', 'PostgreSQL', 'Devise', 'Bootstrap'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Blockchain Explorer',
      description: 'A blockchain explorer that allows users to browse transactions, blocks, and wallet information on the SUI network.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TypeScript', 'SUI SDK', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
      },
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.4 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.2
      }
    })
  };

  return (
    <AnimatedSection id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Highlighted Projects" 
          subtitle="A collection of my most notable projects"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-48 overflow-hidden relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-4"
                  variants={overlayVariants}
                >
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm"
                        aria-label="View Live"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm"
                        aria-label="View Source"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={`${project.title}-${tech}`}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      variants={techBadgeVariants}
                      custom={idx}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgb(59, 130, 246)",
                        color: "white"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;