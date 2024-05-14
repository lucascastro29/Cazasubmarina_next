"use client"
import React, { useState } from 'react';
import CategoryCard from '../ui/equipos/CategoryCard';
import ProductCard from '../ui/equipos/ProductCard';

const categorias = [
  'accesorios', 'aletas', 'arpones', 'bolsos', 'boya', 'cinturon', 'cuchillo', 'lastre',
  'linterna', 'mapa', 'mascara', 'neopreno', 'relojes', 'respiradores', 'trajes'
];

const productos = [
  // Ejemplo de datos de productos
  { id: 1, name: 'Producto 1', category: 'accesorios', description: 'Descripción del producto 1' },
  { id: 2, name: 'Producto 2', category: 'aletas', description: 'Descripción del producto 2' },
  // Otros productos...
];

const EquiposPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProductsByCategory = (category) => {
    const filtered = productos.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Equipos de Caza Submarina</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {categorias.map((categoria) => (
          <CategoryCard key={categoria} category={categoria} onClick={filterProductsByCategory} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {filteredProducts.length > 0 ?
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) :
          productos.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default EquiposPage;