import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
}

const CourseCard: React.FC<{ course: Course, }> = ({ course }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/Cursos/${encodeURIComponent(course.name.toLowerCase().replace(/ /g, '_'))}`);
  };

  return (
    
    <div className=" w-96 h-96"
    onClick={() => {  handleCardClick(); }}
    >
      <div className=" w-full h-full relative flex flex-col items-start justify-end text-center">
        {/* Front Side */}
        <div className=" absolute w-full h-full shadow-xl rounded-lg overflow-hidden" >
          <Image src={course.image}
          alt={course.name}
           layout="fill" objectFit="cover" className="rounded-lg"
           />
        </div>
        <div className="relative w-full flex flex-col bg-white text-black items-start justify-end z-10 p-4"style={{borderBottomLeftRadius: "7px",borderBottomRightRadius: "7px"}}>
          <h2 className="text-lg font-semibold flex  flex-col items-start justify-end" style={{borderBottom:"red 2px solid" ,width:"100%"} }>{course.name}</h2>
      <p className="text-gray-600">{course.description}</p>
            
          </div>
       
    </div>
  </div>
 
  );
};

export default CourseCard; 
{/*
<div className="flip-card-inner w-96 h-96"
    onClick={() => {  handleCardClick(); }}
    >
      <div className="flip-card w-full h-full relative flex flex-col items-start justify-end text-center">
        
        <div className="flip-card-front absolute w-full h-full shadow-lg rounded-lg overflow-hidden">
          <Image src={course.image}
          alt={course.name}
           layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative w-full flex flex-col bg-white text-black items-start justify-end z-10 p-4">
          <h2 className="text-lg font-semibold flex  flex-col items-start justify-end" style={{borderBottom:"red 2px solid" ,width:"100%"} }>{course.name}</h2>
      <p className="text-gray-600">{course.description}</p>
            
          </div>
        
        <div className="flip-card-back absolute w-full h-full bg-black bg-opacity-90 shadow-lg rounded-lg flex flex-col items-start justify-end text-center  text-white overflow-hidden">
          <div className="absolute inset-0 transform scale-x-[-1]">
            <Image src={course.image}
          alt={course.name}
           layout="fill" objectFit="cover" className="rounded-lg opacity-10" />
          </div>
          
        </div>
    </div>
  </div>
*/ };