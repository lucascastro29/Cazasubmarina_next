import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className=" p-4 ">
      
      <Image
        src={`${product.image[0]}`}
        alt={product}
        layout="responsive"
        width={200}
        height={100}
        className="transition-transform duration-300 transform-gpu p-4"
       
      />
      <p>{product.description}</p>
      <h2 className="text-lg font-semibold " style={{borderBottom:"solid black 3px",paddingBottom:"2px"}}>{product.name}</h2>

    </div>
  );
};

export default ProductCard;