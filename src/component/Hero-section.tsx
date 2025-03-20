import "./Hero-section.css";
import ShootingStarsBackground from "./ShootingStars";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Herosection() {
    // Mouse motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth motion values
    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 15 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 15 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Set motion values based on mouse movement
            mouseX.set((clientX - centerX) * 0.03);
            mouseY.set((clientY - centerY) * 0.03);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Split text into individual letters
    const text = "Hi,I'm Sparshan";
    const letters = text.split("");

    return (
        <div>
            <ShootingStarsBackground />
            <section className="Hero-Section">
                <div className="Hero-Content">
                    <div className="Hero-Txt">
                        <h1>
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="letter"
                                    style={{
                                        x: smoothX,
                                        y: smoothY,
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="desc">
                            <p>I identify as a passionate Data science student currently pursuing my studies at SAIT.</p>
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
