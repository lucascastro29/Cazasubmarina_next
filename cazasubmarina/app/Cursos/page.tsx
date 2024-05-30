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
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const cursosApnea = [
  { id: 1, name: 'CURSO APNEA', description: 'Curso de apnea...',
    image: apnea_course 
  },
  { id: 2, name: 'ENTRENAMIENTO EN PROFUNDIDAD', description: 'Curso de apnea...',
    image: apnea_course 
  },
  { id: 3, name: 'ENTRENAMIENTO EN PISCINA', description: 'Curso de apnea...',
    image: apnea_course 
  },
];

const cursosCazasubmarina = [
  { id: 1, name: 'INICIACION', description: 'Curso de cazasubmarina...',
    image: cazasub_course 
  },
  { id: 2, name: 'SALIDA GUIADA', description: 'Curso de cazasubmarina...',
  image: cazasub_course 
},
{ id: 2, name: 'SALIDA NOCTURNA', description: 'Curso de cazasubmarina...',
image: cazasub_course 
},
{ id: 2, name: 'PRACTICA EN PISCINA', description: 'Curso de cazasubmarina...',
image: cazasub_course 
},
];

export default function Page(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);

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
        <div className="grid grid-cols-1">
        <Swiper
         style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >     <SwiperSlide>

          <img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>
          </Swiper>
          <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
              <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>
<SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>
      </Swiper>

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
          rotate: 22,
          stretch: 15,
          depth: 110,
          modifier: 3,
          slideShadows: false,

        }}
        className="mySwiper"
          modules={[EffectCoverflow, Pagination]}
          pagination={true}

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
        <div className="grid grid-cols-1">
        <Swiper
         style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper2 }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >       <SwiperSlide>

          <img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>
          </Swiper>
          <Swiper
        onSwiper={setThumbsSwiper2}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
              <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>
<SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>  <SwiperSlide>

<img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
</SwiperSlide>
      </Swiper>          <div className="md:ml-6 mt-6 md:mt-0">
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
          pagination={true}

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