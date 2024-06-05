import React from 'react';

export default function Carousel(){
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 flex transition-transform transform">
        <img className="w-full h-full object-cover" src="https://via.placeholder.com/800x400" alt="Image 1" />
        <img className="w-full h-full object-cover" src="https://via.placeholder.com/800x400" alt="Image 2" />
        <img className="w-full h-full object-cover" src="https://via.placeholder.com/800x400" alt="Image 3" />
      </div>
      <button className="absolute top-0 left-0 p-2 m-2 text-white bg-black bg-opacity-50 rounded-full">‹</button>
      <button className="absolute top-0 right-0 p-2 m-2 text-white bg-black bg-opacity-50 rounded-full">›</button>
    </div>
  );
};

