'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/app/ui/equipos/ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const ProductDetail = ({ params }: { params: { id: string } }) => {

  const id = Number(params.id);
  const [product, setProduct] = useState<Product | any>({image:"/"});
  const [prevProduct, setPrevProduct] = useState<Product | null>(null);
  const [nextProduct, setNextProduct] = useState<Product | null>(null);
 
  let prevProductId;
  let nextProductId;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://lucascastro29.github.io/json_products_cazasubmarina/');
        const products = response.data;
        const currentProduct = products[id];
        setProduct(currentProduct);

        
         prevProductId = id > 0 ? id - 1 : 84;
         nextProductId = id < products.length - 1 ? id + 1 : 0;
        setPrevProduct(prevProductId !== null ? products[prevProductId] : null);
        setNextProduct(nextProductId !== null ? products[nextProductId] : null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Link href={"/equipos"} className="text-blue-500 hover:underline mb-4">
        &larr; Back to products
      </Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
          <Image
          alt='image_alt'
            src={`${product.image[0]}`}
            layout="responsive"
            width={200}
            height={100}
            className="transition-transform duration-300 transform-gpu p-4"
          
          />
              </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="text-lg font-semibold mb-4">
              <span className="text-gray-900">Price: </span>${product.price}
            </div>
            <div className="text-sm text-gray-600 mb-4">
              <span className="text-gray-900">Category: </span>{product.category}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {prevProduct && (
                          <ProductCard product={prevProduct} index={prevProductId} />

      )}

      {nextProduct && (
                          <ProductCard product={nextProduct} index={nextProductId} />

      )}
      </div>
      
     
    </div>
  );
};

export default ProductDetail;