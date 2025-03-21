import React, { useState } from "react";
import "../Styles/Projects.css";
import image1 from "../assets/12project.png";
import image2 from "../assets/web_s.png";
import image3 from "../assets/train-titanic.png";
import image4 from "../assets/EDA.png";


interface Box {
  id: number;
  img: string;
  description: string;
}

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const title = "Projects".split("").map((letter, index) => (
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
    {
      id: 2,
      img: image2,
      description:
        "<strong>Web Scraping</strong><br>I successfully scraped product listings of monitors, including ratings and product names, using requests and Python packages like BeautifulSoup.",
    },
    {
      id: 3,
      img: image3,
      description:
        "<strong>Data Preprocessing</strong><br>I conducted data preprocessing on the Titanic Survivors dataset, managing missing information, standardizing data types, and cleaning the data for further analysis using pandas and Python.",
    },
    {
      id: 4,
      img: image4,
      description:
        "<strong>EDA</strong><br>I performed exploratory data analysis (EDA) on the Forbes Richest Athlete dataset, analyzing trends in athlete earnings over time. I used data visualization tools like Matplotlib and Seaborn to create visual representations and highlight key insights.",
    },
  ];

  return (
    <div className="title">
      <h1>{title}</h1>
      <span className="description">
        These are the projects I have completed over a period of time
      </span>
      <div className="projectbox">
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
      </div>
    </div>
  );
};


export default Projects;
