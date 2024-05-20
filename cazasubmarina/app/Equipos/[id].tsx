'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id !== undefined) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get('https://lucascastro29.github.io/json_products_cazasubmarina/');
          setProduct(response.data[id]);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.description}</p>
      <img src={product.image} alt={product.name} className="mt-4" />
      {/* Add other product details here */}
    </div>
  );
};

export default ProductDetailPage;
