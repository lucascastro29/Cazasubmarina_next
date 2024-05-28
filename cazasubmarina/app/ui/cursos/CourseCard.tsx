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
    
    <div className="flip-card-inner w-96 h-96" >
      <div className="flip-card w-full h-full relative">
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full shadow-lg rounded-lg overflow-hidden">
          <Image src={course.image}
          alt={course.name}
           layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full bg-black bg-opacity-70 shadow-lg rounded-lg flex flex-col items-center justify-center text-center p-4 text-white overflow-hidden">
          <div className="absolute inset-0 transform scale-x-[-1]">
            <Image src={course.image}
          alt={course.name}
           layout="fill" objectFit="cover" className="rounded-lg opacity-10" />
          </div>
          <div className="relative z-10">
          <h2 className="text-lg font-semibold">{course.name}</h2>
      <p className="text-gray-600">{course.description}</p>
            <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
      >
        Ver más
      </button>
          </div>
        </div>
    </div>
  </div>
  );
};

export default CourseCard;