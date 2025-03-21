import "../Styles/Hero-section.css";
import ShootingStarsBackground from "./ShootingStars";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Herosection() {
    const text = "Hi, I'm Sparshan";
    const letters = text.split("");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            setMousePosition({
                x: (event.clientX - centerX) * 0.005, 
                y: (event.clientY - centerY) * 0.01,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };
    const letterVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    const contentVariants = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 1.2
            }
        }
    };

    return (
        <div>
            <ShootingStarsBackground />
            <section className="Hero-Section">
                <div className="Hero-Content">
                    <div className="Hero-Txt">
                        <h1 style={{ position: "relative" }}>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ display: "inline-block" }}
                            >
                                {letters.map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        className="letter"
                                        variants={letterVariants}
                                        animate={{
                                            x: mousePosition.x * (index % 2 === 0 ? 1 : -1), 
                                            y: mousePosition.y * (index % 2 === 0 ? -1 : 1),
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        style={{ display: "inline-block", position: "relative" }}
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </h1>
                        <motion.div 
                            className="desc"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p>I identify as a passionate Data Science student currently pursuing my studies at SAIT.</p>
                        </motion.div>
                        <motion.div 
                            className="Location"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                delay: 1.4
                            }}
                        >
                            <img src="src/assets/loc-icon.png" alt="Location Icon" className="location-icon" />
                            <span className="address">Calgary, Canada</span>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>    
    );
}