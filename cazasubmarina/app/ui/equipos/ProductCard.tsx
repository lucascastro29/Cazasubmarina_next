import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;