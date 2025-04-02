import React, { useState,  useRef } from "react";
import "../Styles/Work.css";
import image1 from "../assets/geofinity-logo.png";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./animation";

interface WorkExperience {
  id: number;
  img: string;
  title: string;
  position?: string;
  period?: string;
  description: string[];
  skills?: string[];
}

const Work: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.08 });

  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      img: image1,
      title: "Geofinity",
      position: "Frontened Developer",
      period: "Jun 2024 - Nov 2024",
      description:[
        "Developed and maintained the company's official website (https://geofinity.com.np) ",
        "Created comprehensive company profiles, brochures, cards, and banner designs that improved brand consistency by 60% and generated 25% more client inquiries",
        "Produced high-quality graphics utilizing Figma ,Adobe Photoshop, Photopea ,Canva ,etc.",
        "Implemented CMS solutions leveraging the ERPNEXT's Frappe Framework",
        "Designed and implemented website for Klheathpro and OptERP components using the ERPNext Framework, enhancing functionality and user experience",
        "Development of product based service in wordpress.",
        "Collaborated effectively with cross-functional team members on web development projects, reducing project delivery time by 20% and implementation errors by 35%",
        "Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript",
      ],
      skills: ["HTML", "CSS","React","JavaScript","Figma", "Responsive Design", "Graphic Designing"]
    },
  ];

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
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
        delay: 0.4 
      }
    }
  };

  
  return (
    <section className="work" ref={sectionRef}>
      <div className="work-header" ref={titleRef}>
        {isTitleInView ? (
          <AnimatedText 
            text="Work Experience" 
            headingType="h1"
            staggerDelay={0.05}
            initialDelay={0.1}
            mouseSensitivityX={0.0}
            mouseSensitivityY={0.0}
            className="work-title"
          />
        ) : (
          <h1 className="work-title static-title">Work Experience</h1>
        )}
        
        <motion.p 
          className="subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          My professional journey
        </motion.p>
      </div>

      <motion.div 
        className="work-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {workExperiences.map((work) => (
          <motion.div
            key={work.id}
            className={`work-card ${hoveredId === work.id ? "hovered" : ""}`}
            variants={itemVariants}
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="work-card-header">
              <img src={work.img} alt={work.title} className="company-logo" />
              <div className="work-info">
                <h3 className="company-name">{work.title}</h3>
                {work.position && <div className="position">{work.position}</div>}
                {work.period && <div className="period">{work.period}</div>}
              </div>
            </div>
            
            <div className="work-card-body">
            
              <ul>
                {work.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {work.skills && (
                <div className="skills-container">
                  <h4 className="skills-title">Skills</h4>
                  <div className="skills-list">
                    {work.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;