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
          filter: hovered ? 'grayscale(100%)' : 'none',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition:"all 0.5s"
        }}
      />
      {hovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
          {category}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;