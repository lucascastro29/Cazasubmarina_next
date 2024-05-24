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
  const [prevProductIdN, setPrevProductId] = useState(id);
  const [nextProductIdN, setNextProductId] = useState(id);
  
  let prevProductId:number;
  let nextProductId:number;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://lucascastro29.github.io/json_products_cazasubmarina/');
        const products = response.data;
        const currentProduct = products[id];
        setProduct(currentProduct);

        
         prevProductId = id > 0 ? id - 1 : 84;
         nextProductId = id < products.length - 1 ? id + 1 : 0;
         id > 0 ? setPrevProductId(id - 1) : setPrevProductId(84);
         id < products.length - 1 ? setNextProductId(id + 1) : setNextProductId(0);
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
      <Link href={"/equipos"} className="text-blue-500 hover:underline  ml-14">
        &larr; Back to products
      </Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden m-14">
        <div className="grid grid-cols-2">
          <div className="">
          <Image
          alt='image_alt'
            src={`${product.image[0]}`}
            layout="responsive"
            width={10}
            height={10}
            className=" p-4"
          
          />
              </div>
          <div className=" p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 ">{product.name}</h2>

            
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description }
            </p>
            <div className="text-sm text-gray-600 mb-4">
              <span className="text-gray-900">Category: </span>{product.category}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
        <div className='bg-white shadow-md rounded-lg overflow-hidden m-14 p-4 ' style={{width:"80%"}} >
          <div className='m-4' style={{width:"80%"}}>
     <h2 className=" font-semibold " style={{borderBottom:"solid black 3px",fontSize:"25px",paddingBottom:"2px"}}>PRODUCTOS RELACIONADOS</h2>

          </div>

     <div className="grid grid-cols-4  sm:grid-cols-4 p-2 gap-4">
     {prevProduct && (
                          <ProductCard product={prevProduct} index={prevProductIdN} />

      )}

      {nextProduct && (
                          <ProductCard product={nextProduct} index={nextProductIdN} />

      )}
      </div>
        </div>
     
      
     
    </div>
  );
};

export default ProductDetail;