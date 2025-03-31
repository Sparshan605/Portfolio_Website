import React, { useState, useRef } from "react";
import "../Styles/Projects.css";
import image1 from "../assets/Sentiment_st.png";
import image2 from "../assets/Iris_st.png";
import image3 from "../assets/Web_scapper.png";
import image4 from "../assets/EDA.png";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AnimatedText from "./animation";

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
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });

  const projects: Project[] = [
    {
      id: 1,
      img: image1,
      title: "Video Sentiment Analysis",
      description:
        "A Data Science & Machine Learning project that predicts sentiment in provided data. It includes Exploratory Data Analysis (EDA), sentiment classification using NLTK VADER, and a trained Logistic Regression model for improved predictions. The project enables users to upload CSV files containing text data and process sentiment trends efficiently.",
      tags: ["Python", "NLTK", "Streamlit", "EDA","Data Science & ML"]
    },
    {
      id: 2,
      img: image2,
      title: "Classifying Iris to Flowers",
      description: "A Machine Learning project that uses trained KNeighbors Classifier to categorize iris flowers into three species (Setosa, Versicolor, and Virginica) based on their sepal and petal measurements. The project includes data preprocessing, model training, evaluation metrics, and displayed in streamlit.",
      tags: ["Python", "Machine Learning", "KNeighbors Classifier", "Scikit-learn", "Data Preprocessing","Streamlit"]
    },
    {
      id: 3,
      img: image3,
      title: "Web Scrapping",
      description:
        " A web scraper that extracts Monitor names and total reviews from Amazon search results, saving the data in an Excel file for analysis.The script sends HTTP requests to Amazon, retrieves the search results, and parses the HTML using BeautifulSoup. It extracts product names and review counts from multiple pages while implementing pagination handling. Finally, the collected data is stored in an Excel file using Pandas for further analysis.",
      tags: ["Python", "BeautifulSoup", "Web Scraping", "Data Collection"]
    },
    {
      id: 4,
      img: image4,
      title: "Exploratory Data Analysis and Data Preprocessing",
      description:
        "Performed EDA on multiple datasets, including Forbes Richest Athletes, USA Citizens' Income, and TikTok Data. Analyzed trends and relationships between dataset columns using data visualization tools like Matplotlib and Seaborn.",
      tags: ["Python", "Matplotlib", "Seaborn", "Data Visualization"]
    },
  ];


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

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4 // Same as Work component
      }
    }
  };


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
      {/* Updated header to match Work component style */}
      <div className="projects-header" ref={titleRef}>
        {isTitleInView ? (
          <AnimatedText 
            text="My Projects" 
            headingType="h1"
            staggerDelay={0.05}
            initialDelay={0.2}
            mouseSensitivityX={0.0}
            mouseSensitivityY={0.0}
            className="projects-title"
          />
        ) : (
          <h1 className="projects-title static-title">My Projects</h1>
        )}
        
        <motion.p 
          className="projects-subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
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