import React from 'react';
import Image from 'next/image';
const CategoryCard = ({ category, onClick }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md cursor-pointer" onClick={() => onClick(category)}>
      <div className="relative h-40 mb-4">
        <Image
          src={`/img/Products/Categories/${category}.jpg`}
          alt={category}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold">{category}</h2>
    </div>
  );
};

export default CategoryCard;