import React from 'react';
import '../Styles/ShootingStars.css';  

const ShootingStarsBackground: React.FC = () => {
  return (
    <div className="stars">
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i} className="star" />
      ))}
    </div>
  );
};

export default ShootingStarsBackground;