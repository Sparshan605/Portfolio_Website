import React, { useState } from "react";
import "./Work.css";
import image1 from "../assets/geofinity-logo.png";


interface Box {
  id: number;
  img: string;
  description: string;
}

const Work: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const title = "Work Experience".split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));

  const boxes: Box[] = [
    {
      id: 1,
      img: image1,
      
      description:
        "<strong>Dynamic Website</strong> <br> I made a dynamic website as part of a high school assignment to demonstrate my proficiency with HTML, CSS, and JavaScript. The project involved incorporating features like user login and navigation to improve user experience.",
    },
  ];

  return (
    <section className="work">
      <h1>{title}</h1>
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`box ${hoveredId === box.id ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredId(box.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img src={box.img} alt={`Image ${box.id}`} />
            <p dangerouslySetInnerHTML={{ __html: box.description }} />
          </div>
        ))}
    </section>
  );
};


export default Work;
