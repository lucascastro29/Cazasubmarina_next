import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      
      <Image
        src={`${product.image[0]}`}
        alt={product}
        layout="responsive"
        width={200}
        height={100}
        className="transition-transform duration-300 transform-gpu"
       
      />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;