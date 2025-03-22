import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  mouseSensitivityX?: number;
  mouseSensitivityY?: number;
  staggerDelay?: number;
  initialDelay?: number;
  springStiffness?: number;
  springDamping?: number;
}

const AnimatedText = ({
  text,
  className = "",
  headingType = "h1",
  mouseSensitivityX = 0.004,
  mouseSensitivityY = 0.009,
  staggerDelay = 0.08,
  initialDelay = 0.3,
  springStiffness = 150,
  springDamping = 25,
}: AnimatedTextProps) => {
  const letters = text.split("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePosition({
        x: (event.clientX - centerX) * mouseSensitivityX,
        y: (event.clientY - centerY) * mouseSensitivityY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseSensitivityX, mouseSensitivityY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };


  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };


  const HeadingTag = headingType as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={className} style={{ position: "relative" }}>
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
              stiffness: springStiffness,
              damping: springDamping,
            }}
            style={{ display: "inline-block", position: "relative" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </HeadingTag>
  );
};

export default AnimatedText;