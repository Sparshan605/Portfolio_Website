import React, { useState, useRef } from "react";
import "../Styles/Projects.css";
import image1 from "../assets/12project.png";
import image2 from "../assets/web_s.png";
import image3 from "../assets/train-titanic.png";
import image4 from "../assets/EDA.png";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Enhanced project data with tags and cleaner structure
  const projects: Project[] = [
    {
      id: 1,
      img: image1,
      title: "Dynamic Website",
      description:
        "A high school assignment demonstrating proficiency with HTML, CSS, and JavaScript. Features include user login and improved navigation for better user experience.",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX"]
    },
    {
      id: 2,
      img: image2,
      title: "Web Scraping",
      description:
        "Successfully scraped product listings of monitors, including ratings and product names, using requests and Python packages like BeautifulSoup.",
      tags: ["Python", "BeautifulSoup", "Web Scraping", "Data Collection"]
    },
    {
      id: 3,
      img: image3,
      title: "Data Preprocessing",
      description:
        "Conducted data preprocessing on the Titanic Survivors dataset, managing missing information, standardizing data types, and cleaning the data for analysis.",
      tags: ["Python", "Pandas", "Data Cleaning", "Analytics"]
    },
    {
      id: 4,
      img: image4,
      title: "Exploratory Data Analysis",
      description:
        "Performed EDA on the Forbes Richest Athlete dataset, analyzing trends in athlete earnings over time using data visualization tools like Matplotlib and Seaborn.",
      tags: ["Python", "Matplotlib", "Seaborn", "Data Visualization"]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const titleLetterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  // Expanded project variants
  const expandedInfoVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="projects-section" ref={sectionRef}>
      <div className="projects-header">
        <h1 className="projects-title">
          {Array.from("Projects").map((letter, index) => (
            <motion.span
              key={index}
              className="title-letter"
              custom={index}
              variants={titleLetterVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          className="projects-subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          My portfolio of completed projects
        </motion.p>
      </div>

      <motion.div 
        className="projects-vertical-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-card ${hoveredId === project.id ? "hovered" : ""}`}
            variants={projectVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
              transition: { 
                scale: { duration: 0.3, type: "spring", stiffness: 300 },
                boxShadow: { duration: 0.3 }
              }
            }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="project-content-wrapper">
              <div className="project-image-container">
                <img src={project.img} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-overlay-title">{project.title}</h3>
                  <p className="project-overlay-text">Hover to expand</p>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                
                <AnimatePresence>
                  {hoveredId === project.id ? (
                    <motion.div 
                      className="project-expanded-info"
                      variants={expandedInfoVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="project-actions">
                        <button className="project-btn">View Details</button>
                        <button className="project-btn">GitHub</button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p 
                      className="project-short-description"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {project.description.split('.')[0] + '.'}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;