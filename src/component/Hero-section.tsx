import "/Styles/Hero-section.css";
import ShootingStarsBackground from "./ShootingStars";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Herosection() {
    // Split text into individual letters
    const text = "Hi, I'm Sparshan";
    const letters = text.split("");

    // State to track mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            setMousePosition({
                x: (event.clientX - centerX) * 0.002, // Higher value for more sensitivity
                y: (event.clientY - centerY) * 0.009,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div>
            <ShootingStarsBackground />
            <section className="Hero-Section">
                <div className="Hero-Content">
                    <div className="Hero-Txt">
                        <h1 style={{ position: "relative" }}>
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="letter"
                                    initial={{ x: 0, y: 0 }}
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
                        </h1>
                        <div className="desc">
                            <p>I identify as a passionate Data Science student currently pursuing my studies at SAIT.</p>
                        </div>
                        <div className="Location">
                            <img src="src/assets/loc-icon.png" alt="Location Icon" className="location-icon" />
                            <span className="address">Calgary, Canada</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>    
    );
}
