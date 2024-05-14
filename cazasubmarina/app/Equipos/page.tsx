"use client"
import React, { useState, useEffect } from 'react';
import CategoryCard from '../ui/equipos/CategoryCard';
import ProductCard from '../ui/equipos/ProductCard';
import axios from 'axios'; // Importar axios para hacer la solicitud HTTP

const categorias = [
    'Accesorios', 'Aletas', 'Arpones', 'Bolsos', 'Boyas', 'Cinturones'   , 'Cuchillos', 'Lastres',
    'Linternas', 'Mascaras', 'Neoprenos', 'Relojes', 'Respiradores', 'Trajes'
  ];
  ;

export default function page(){
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);


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
  };

  const resetFilter = () => {
    setFilteredProducts([]);
    setFilteredCategory(null);
    // Restaurar la lista completa de productos
    setProducts(products);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Productos</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {categorias.map((categoria, index) => (
          <CategoryCard
            key={index}
            category={categoria}
            onClick={() => filterProductsByCategory(categoria)}
          />
        ))}
        <button onClick={resetFilter}>Mostrar todos</button>
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
  );
};