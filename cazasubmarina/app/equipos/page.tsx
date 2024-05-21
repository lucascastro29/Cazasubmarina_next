"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import CategoryCard from '../ui/equipos/CategoryCard';
import ProductCard from '../ui/equipos/ProductCard';
import axios from 'axios';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

const categorias = [
  'Accesorios', 'Aletas', 'Arpones', 'Bolsos', 'Boyas', 'Cinturones', 'Cuchillos', 'Lastres',
  'Linternas', 'Mascaras', 'Neoprenos', 'Relojes', 'Respiradores', 'Trajes'
];

export default function EquiposPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

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

  const handleSearch = (e:any) => {
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

  const handleProductClick = (index:number) => {
    console.log(index+"aaaaa")
    router.push(`/equipos/${index}`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className={kanit.className}>
        <h1 className="text-2xl font-semibold mb-4">EQUIPOS</h1>

        <div className="flex flex-wrap gap-4 mb-4">
          {categorias.map((categoria, index) => (
            <CategoryCard
              key={index}
              category={categoria}
              onClick={() => filterProductsByCategory(categoria)}
            />
          ))}
          <button onClick={() => { setFilteredProducts([]); setSearchTerm(''); }}>Mostrar todos</button>
        </div>
        <input
          type="text"
          placeholder="BUSCAR EQUIPOS..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 px-3 py-1 rounded-md mb-4 focus:outline-none"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0
            ? filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))
              : products.map((product, index) => (
                  <ProductCard key={index} product={product} index={index} />
                ))}
        </div>
      </div>
    </div>
  );
}