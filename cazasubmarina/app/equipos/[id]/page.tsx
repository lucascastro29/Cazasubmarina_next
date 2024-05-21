'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Page(){
    
const router = useRouter();
const { id } = router;
const [product, setProduct] = useState<Product | null>(null);

useEffect(() => {
  if (id) {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://lucascastro29.github.io/json_products_cazasubmarina/');
        const product = response.data[Number(id)]; // Convert id to number
        setProduct(product);
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
  <div>
    <h1 className="text-2xl font-bold">{product.name}</h1>
    
  </div>
);

}