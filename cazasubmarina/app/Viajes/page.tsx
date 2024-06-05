'use client';

import React from 'react';
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

const TravelPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">VIAJES</h1>
      <Carousel />
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
  );
};

export default TravelPage;