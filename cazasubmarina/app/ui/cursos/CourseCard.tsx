import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
}

const CourseCard: React.FC<{ course: Course, onOpenModal: (course: Course) => void }> = ({ course }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/Cursos/${encodeURIComponent(course.name.toLowerCase().replace(/ /g, '_'))}`);
  };

  return (
    <div
      className="bg-white p-4 rounded-md shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={handleCardClick}
    >
      <div className="relative h-80 mb-4">
        <Image
          src={course.image}
          alt={course.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold">{course.name}</h2>
      <p className="text-gray-600">{course.description}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
      >
        Ver más
      </button>
    </div>
  );
};

export default CourseCard;