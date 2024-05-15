"use client"
import React, { useState, useEffect } from 'react';
import CategoryCard from '../ui/equipos/CategoryCard';
import ProductCard from '../ui/equipos/ProductCard';
import axios from 'axios'; // Importar axios para hacer la solicitud HTTP
import { Kanit } from "next/font/google";

const kanit=Kanit({
  weight:'400',
  subsets:['latin']
})

const categorias = [
  'Mascaras', 'Respiradores', 'Trajes',, 'Aletas', 'Arpones', , 'Boyas', 'Cinturones'   , 'Cuchillos', 'Lastres',
    'Linternas',  'Neoprenos', 'Relojes', 'Accesorios','Bolsos'
  ];
  ;

export default function page(){
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://lucascastro29.github.io/json_products_cazasubmarina/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterProductsByCategory = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
    setFilteredCategory(category);
    setSearchTerm('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredProducts([]);
      setFilteredCategory(null);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredProducts(filtered);
      setFilteredCategory(null);
    }
  };

  return (<div className={kanit.className}>
    <div className="container mx-auto py-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-1 ">
      <div className="border  mb-4 p-6 bg-white">
      <div className=" p-4 mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">CATEGORÍAS</h1>
        <button onClick={() => {setFilteredProducts([]); setSearchTerm('');}} className="px-4 py-2 bg-blue-500 text-white rounded-md">Limpiar</button>
      </div>
        <div className="grid grid-cols-2 gap-4">
          {categorias.map((categoria, index) => (
            <CategoryCard
              key={index}
              category={categoria}
              onClick={() => filterProductsByCategory(categoria)}
            />
          ))}
        </div>
      </div>
      
    </div>
    <div className="lg:col-span-2 bg-white">
    <div className="mt-4 mb-4 p-4">
        <input
          type="text"
          placeholder="BUSCAR EQUIPOS..."
          value={searchTerm}
          onChange={handleSearch}
          
          
          className="border border-none px-3 py-1 w-full  focus:outline-none focus:ring-0 text-2xl"
          style={{borderBottom:"solid black 3px",paddingBottom:"2px", }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0
          ? filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          : products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
      </div>
    </div>
  </div>
</div></div>
  );
};
