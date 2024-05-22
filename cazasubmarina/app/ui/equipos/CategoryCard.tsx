import React, { useState } from 'react';
import Image from 'next/image';

const CategoryCard = ({ category, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-md overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(category)}
    >
      <Image
        src={`/img/Products/Categories/${category}.jpg`}
        alt={category}
        layout="responsive"
        width={200}
        height={100}
        className="transition-transform duration-300 transform-gpu"
        style={{
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition:"all 0.5s"
        }}
      />
      
        <div className="absolute top-0 p-3 left-0 right-0 bottom-0 flex items-start justify-start  text-white" style={{fontSize:"20px"}} 
        >
          {category}
        </div>
      
    </div>
  );
};

export default CategoryCard;