"use client"
import React, { useState } from 'react';
import CourseCard from '../ui/cursos/CourseCard';
import CourseModal from '../ui/cursos/CourseModal';
import cazasub_course from "@/public/img/diseños/cazasub_course.jpg"
import apnea_course from "@/public/img/diseños/apnea_course.jpg"

const cursos = [
  { id: 1, name: 'Apnea', description: 'Curso de apnea...',
  image:apnea_course ,subcursos:[
    { id: 1, name: 'CURSO', description: 'Curso de apnea...',
    image:apnea_course 
   },
    { id: 2, name: 'ENTRENAMIENTO APNEA', description: 'Curso de cazasubmarina...'
      ,  image: cazasub_course
  
     },
     { id: 2, name: 'ENTRENAMIENTO PISCINA', description: 'Curso de cazasubmarina...'
       ,  image: cazasub_course
   
      },
  ],
 },
  { id: 2, name: 'Cazasubmarina', description: 'Curso de cazasubmarina...'
    ,  image: cazasub_course,
    subcursos:[
      { id: 1, name: 'INTRODUCCIÓN', description: 'Curso de apnea...',
      image:apnea_course 
     },
      { id: 2, name: 'CURSO', description: 'Curso de cazasubmarina...'
        ,  image: cazasub_course
    
       },
    ],

   },
];

export default function Page(){
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Cursos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cursos.map((course) => (
          <CourseCard key={course.id} course={course} onOpenModal={handleOpenModal} />
        ))}
      </div>
      {modalOpen && <CourseModal course={selectedCourse} onCloseModal={handleCloseModal} />}
    </div>
  );
};
