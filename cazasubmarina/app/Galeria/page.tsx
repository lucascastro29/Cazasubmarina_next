'use client';

import React from 'react';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});
// Lista de imágenes para la galería
const images = [
  { src: 'https://via.placeholder.com/400x600', alt: 'Image 1', className: 'row-span-2' },
  { src: 'https://via.placeholder.com/600x400', alt: 'Image 2', className: 'col-span-2' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/600x600', alt: 'Image 4', className: 'col-span-2 row-span-2' },
  { src: 'https://via.placeholder.com/400x600', alt: 'Image 5', className: 'row-span-2' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Image 6' },
  { src: 'https://via.placeholder.com/600x400', alt: 'Image 7', className: 'col-span-2' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Image 8' },
];

const GalleryPage: React.FC = () => {
  return (<div className={kanit.className}>
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 w-full text-center">GALERIA</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`overflow-hidden ${image.className}`}>
            <img className="w-full h-full object-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
    </div>);
};

export default GalleryPage;