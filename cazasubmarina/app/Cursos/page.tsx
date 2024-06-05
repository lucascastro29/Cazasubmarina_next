"use client"
import React, { useState } from 'react';
import CourseCard from '../ui/cursos/CourseCard';
import CourseModal from '../ui/cursos/CourseModal';
import cazasub_course from "@/public/img/diseños/cazasub_course.jpg"
import apnea_course from "@/public/img/diseños/apnea_course.jpg"
import carouselimg_1 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_1.jpg"
import carouselimg_2 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_2.jpg"
import carouselimg_3 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_3.jpg"
import carouselimg_1_c from "@/public/img/Cursos_img/carrousel_cazasub/carouselimg_1_c.jpg"
import carouselimg_2_c from "@/public/img/Cursos_img/carrousel_cazasub/carouselimg_2_c.png"
import carouselimg_3_c from "@/public/img/Cursos_img/carrousel_cazasub/carouselimg_3_c.png"
import cursoApneaimg from "@/public/img/Cursos_img/cursoApneaimg.jpg"
import entprof from "@/public/img/Cursos_img/entprof.jpg"
import entpiscina from "@/public/img/Cursos_img/ent_piscina.jpg"
import iniciacion from "@/public/img/Cursos_img/iniciacion.jpg"
import pracpisc from "@/public/img/Cursos_img/pracpisc.jpg"
import salidag from "@/public/img/Cursos_img/salidag.jpg"
import salidnoc from "@/public/img/Cursos_img/salidnoc.jpg"




import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

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
    image: cursoApneaimg
  },
  { id: 2, name: 'ENTRENAMIENTO EN PROFUNDIDAD',
    image: entprof 
  },
  { id: 3, name: 'ENTRENAMIENTO EN PISCINA',
    image: entpiscina 
  },
];

const cursosCazasubmarina = [
  { id: 1, name: 'INICIACION',
  image: iniciacion
},

{ id: 2, name: 'PRACTICA EN PISCINA', 
image: pracpisc 
},
  { id: 2, name: 'SALIDA GUIADA', 
  image: salidag 
},
{ id: 2, name: 'SALIDA NOCTURNA', 
image: salidnoc 
},
];

export default function Page(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);



  return ( <div className={kanit.className}>
    <div className="container mx-auto  mt-8">
      <div className='grid grid-cols-2 gap-8'>{/* Sección de Apnea */}
          <section className="mb-12 mr-4"  id='#cazasub'>
            <h2 className="text-3xl  mb-4" style={{borderBottom:"3px solid black",width:"80%"}}>CURSOS DE APNEA</h2>
            <div className="grid grid-cols-3">
            <div className=" grid cols-span-1 md:ml-6 text-lg text-start p-4 leading-relaxed">
                <p>Descubre el mundo submarino con solo una respiración. Te brindamos el conocimiento y herramientas técnicas, para que tu experiencia resulte fácil, segura, divertida y relajada.</p>
              </div>
              <div className='grid col-span-2'>

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
                  style={{paddingTop:"5px"}}
                >

                  <SwiperSlide >
                    <Image src={carouselimg_1} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
                  <SwiperSlide >
                  <Image src={carouselimg_2} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>  
                  <SwiperSlide >
                  <Image src={carouselimg_3} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
              </Swiper>
              </div>
              
              
            </div>
            <div  className='pt-8'>
            
              
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
            <h2 className="text-3xl mb-4" style={{borderBottom:"3px solid black",width:"80%"}}>CURSOS DE CAZASUBMARINA</h2>
            <div className="grid grid-cols-3">
            <div className="md:ml-6 mt-6 md:mt-0 text-lg text-start p-4 leading-relaxed">
                <p>Aventúrate y descubre las profundidades. Ofrecemos una variedad de cursos de cazasubmarina adaptados a todos los niveles, desde principiantes hasta expertos.</p>
              </div>
            <div className='grid col-span-2'>
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
                    <Image src={carouselimg_1_c} width={1000} height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image src={carouselimg_2_c} width={1000} height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>  
                  <SwiperSlide>
                  <Image src={carouselimg_3_c} width={1000} height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
                  
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper2}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    style={{paddingTop:"5px"}}
                    >
               <SwiperSlide >
                    <Image src={carouselimg_1_c} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image src={carouselimg_2_c} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>  
                  <SwiperSlide>
                  <Image src={carouselimg_3_c} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                  </SwiperSlide>
                  
                </Swiper>  
                </div>

                 
            </div>
            
            <div className='pt-8'>

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
    </div>
  );
};