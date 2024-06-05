import React from 'react';

interface TripCardProps {
  image: string;
  date: string;
  location: string;
  duration: string;
}

const TripCard: React.FC<TripCardProps> = ({ image, date, location, duration }) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <img className="w-32 h-32 object-cover" src={image} alt={location} />
      <div className="p-4">
        <h3 className="text-xl font-bold">{location}</h3>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-600">{duration}</p>
      </div>
    </div>
  );
};

export default TripCard;