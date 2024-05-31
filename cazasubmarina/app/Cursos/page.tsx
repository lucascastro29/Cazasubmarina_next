"use client"
import React, { useState } from 'react';
import CourseCard from '../ui/cursos/CourseCard';
import CourseModal from '../ui/cursos/CourseModal';
import cazasub_course from "@/public/img/diseños/cazasub_course.jpg"
import apnea_course from "@/public/img/diseños/apnea_course.jpg"
import carouselimg_1 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_1.jpg"
import carouselimg_2 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_2.jpg"
import carouselimg_3 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_3.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const cursosApnea = [
  { id: 1, name: 'CURSO APNEA',
    image: carouselimg_1
  },
  { id: 2, name: 'ENTRENAMIENTO EN PROFUNDIDAD',
    image: apnea_course 
  },
  { id: 3, name: 'ENTRENAMIENTO EN PISCINA',
    image: apnea_course 
  },
];

const cursosCazasubmarina = [
  { id: 1, name: 'INICIACION',
  image: apnea_course
},
  { id: 2, name: 'SALIDA GUIADA', 
  image: cazasub_course 
},
{ id: 2, name: 'SALIDA NOCTURNA', 
image: cazasub_course 
},
{ id: 2, name: 'PRACTICA EN PISCINA', 
image: cazasub_course 
},
];

export default function Page(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);



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
              >     
                <SwiperSlide >
                    <Image src={carouselimg_1} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image src={carouselimg_2} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>  
                  <SwiperSlide>
                  <Image src={carouselimg_3} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
               
                  
              </Swiper>
              
              <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                  style={{padding:"5px"}}
                >
                  <SwiperSlide >
                    <Image src={carouselimg_1} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image src={carouselimg_2} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>  
                  <SwiperSlide>
                  <Image src={carouselimg_3} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
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
                    <SwiperSlide style={{padding:"15px",backgroundColor:"transparent",width:"100%"}}
                    >
                    <CourseCard key={course.id} course={course}  />
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

              >       
                  <SwiperSlide >
                    <Image src={apnea_course.src} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className=" p-4 w-full md:w-1/2 h-auto rounded-lg"/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image src={apnea_course.src} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className=" p-4 w-full md:w-1/2 h-auto rounded-lg"/>
                  </SwiperSlide>  
                  <SwiperSlide>
                  <Image src={apnea_course.src} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className=" p-4 w-full md:w-1/2 h-auto rounded-lg"/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image src={apnea_course.src} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className=" p-4 w-full md:w-1/2 h-auto rounded-lg"/>
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
                  </SwiperSlide>  
                  <SwiperSlide>
                    <img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                    <img src={apnea_course.src} alt="Cursos de Apnea" className="w-full md:w-1/2 h-auto rounded-lg" />
                  </SwiperSlide>
                 </Swiper>     
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
                pagination={true}
            >
                {cursosCazasubmarina.map((course) => (
                  <SwiperSlide style={{padding:"15px", backgroundColor:"transparent",width:"100%" }}>
                    <CourseCard key={course.id} course={course}  />
                  </SwiperSlide>
                ))}
              
            </Swiper>
                  
          </div>

        </section>
    
    
    
     </div>
    </div>
  );
};