import "../Styles/Hero-section.css";
import ShootingStarsBackground from "./ShootingStars";
import { motion } from "framer-motion";
import AnimatedText from "./animation";
import locIcon from '../../assets/loc-icon.png';

export default function Herosection() {
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
                        <AnimatedText 
                            text="Hi, I'm Sparshan" 
                            headingType="h1"
                            mouseSensitivityX={0.005}
                            mouseSensitivityY={0.012}
                        />
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
                            <img src={locIcon} alt="Location Icon" className="location-icon" />
                            <span className="address">Calgary, Canada</span>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>    
    );
}