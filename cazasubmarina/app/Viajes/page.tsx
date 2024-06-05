'use client';

import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import Carousel from '../ui/viajes/Carousel';
import TripCard from '../ui/viajes/TripCard';

const trips = [
  {
    image: 'https://via.placeholder.com/800x400',
    date: 'March 20, 2023',
    location: 'Punta del Este, Uruguay',
    duration: '3 days',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    date: 'April 15, 2023',
    location: 'Montevideo, Uruguay',
    duration: '5 days',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    date: 'May 10, 2023',
    location: 'Colonia del Sacramento, Uruguay',
    duration: '4 days',
  },
];


const TravelPage: React.FC = () => {
  
  return (
    <>
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Cazasubmarina Trips</h1>
      <Carousel />
      
      <section>
  
      <div id="yourimg1" className="card rounded is-out">
        <div className="card__overlay"></div>
        <div className="card__heading">
          <img src="https://via.placeholder.com/1600x800" alt=''/>  
          <span >Hover Me</span>
          <h2>Your Image</h2>
        </div>
      </div>

      <div id="yourimg2" className="card rounded is-out">
        <div className="card__overlay"></div>
        <div className="card__heading">
          <img src="https://via.placeholder.com/1600x800" alt=''/> 
          <span className="super">Hover Me</span>
          <h2>Your Image</h2>
        </div>
      </div>
</section>
      
      <div className="mt-8">
        {trips.map((trip, index) => (
          <TripCard
            key={index}
            image={trip.image}
            date={trip.date}
            location={trip.location}
            duration={trip.duration}
          />
        ))}
      </div>
     
    </div>
       

     
         
</>         
  );
};

export default TravelPage;