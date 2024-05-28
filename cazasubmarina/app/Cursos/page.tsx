"use client"
import React, { useState } from 'react';
import CourseCard from '../ui/cursos/CourseCard';
import CourseModal from '../ui/cursos/CourseModal';
import cazasub_course from "@/public/img/diseños/cazasub_course.jpg"
import apnea_course from "@/public/img/diseños/apnea_course.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import FlipCard from '../ui/cursos/flipCard';

const cursosApnea = [
  { id: 1, name: 'CURSO', description: 'Curso de apnea...',
    image: apnea_course 
  },
  { id: 2, name: 'ENTRENAMIENTO EN PROFUNDIDA', description: 'Curso de apnea...',
    image: apnea_course 
  },
  { id: 3, name: 'ENTRENAMIENTO EN PISCINA', description: 'Curso de apnea...',
    image: apnea_course 
  },
];

const cursosCazasubmarina = [
  { id: 1, name: 'INICIACIÓN', description: 'Curso de cazasubmarina...',
    image: cazasub_course 
  },
  { id: 2, name: 'CURSO', description: 'Curso de cazasubmarina...',
    image: cazasub_course 
  },
  { id: 2, name: 'SALIDA GUIADA', description: 'Curso de cazasubmarina...',
  image: cazasub_course 
},
{ id: 2, name: 'SALIDA NOCTURNA', description: 'Curso de cazasubmarina...',
image: cazasub_course 
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
    <div className="container mx-auto  mt-8">
      <div className='grid grid-cols-2 gap-8'>{/* Sección de Apnea */}
      <section className="mb-12 mr-4"  id='#cazasub'>
        <h2 className="text-3xl font-bold mb-4">Cursos de Apnea</h2>
        <div className="flex flex-col md:flex-row mb-6">
          <img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
          <div className="md:ml-6 mt-6 md:mt-0">
            <p>Descubre el mundo submarino con solo una respiración. Te brindamos el conocimiento y herramientas técnicas, para que tu experiencia resulte fácil, segura, divertida y relajada.</p>
          </div>
        </div>
        <div >
        
          
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        initialSlide={1}

        coverflowEffect={{
          rotate: 25,
          stretch: 15,
          depth: 110,
          modifier: 3,
          slideShadows: false,

        }}
        className="mySwiper"
          modules={[EffectCoverflow, Pagination]}
      >
          {cursosApnea.map((course) => (
            <SwiperSlide style={{backgroundColor:"transparent",width:"100%"}}
            >
            <CourseCard key={course.id} course={course} onOpenModal={handleOpenModal} />
            </SwiperSlide>
          ))}
        
      </Swiper>
        </div>
      </section>
       {/* Sección de Cazasubmarina */}
       <section className="mb-12 ml-4" id='#cazasub'>
        <h2 className="text-2xl font-bold mb-4">Cursos de Cazasubmarina</h2>
        <div className="flex flex-col md:flex-row mb-6">
          <img src={cazasub_course.src} alt="Cursos de Cazasubmarina" className="w-full md:w-1/2 h-auto rounded-lg" />
          <div className="md:ml-6 mt-6 md:mt-0">
            <p>Aventúrate y descubre las profundidades. Ofrecemos una variedad de cursos de cazasubmarina adaptados a todos los niveles, desde principiantes hasta expertos.</p>
          </div>
        </div>
        <div >

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        initialSlide={1}
        coverflowEffect={{
          rotate: 20,
          stretch: 10,
          depth: 110,
          modifier: 3,
          slideShadows: false,

        }}
          modules={[EffectCoverflow, Pagination]}
      >
          {cursosCazasubmarina.map((course) => (
            <SwiperSlide style={{padding:"0px", width:"100%",opacity:"4px" }}
            >
            <CourseCard key={course.id} course={course} onOpenModal={handleOpenModal} />
            </SwiperSlide>
          ))}
        
      </Swiper>
               
                </div>

      </section></div>
      

     

      {modalOpen && <CourseModal course={selectedCourse} onCloseModal={handleCloseModal} />}
    </div>
  );
};