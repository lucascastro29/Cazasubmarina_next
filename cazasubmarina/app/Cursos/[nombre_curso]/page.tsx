'use client'
import { Console } from 'console';
import { useParams } from 'next/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import carouselimg_1 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_1.jpg"
import carouselimg_2 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_2.jpg"
import carouselimg_3 from "@/public/img/Cursos_img/carrousel_apnea/carouselimg_3.jpg"


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
const Curso = ({ curso }: { curso:string
 }) => {
  const cursoName=useParams().nombre_curso
let course: { nameurl: string; name: string; description: string; image: StaticImageData[]; details: string; } | { nameurl: string; name: string; description: string; image: string; details: string; };
  // Aquí podrías buscar la información específica del curso usando `nombre_curso`
  // Por ahora, vamos a simular los datos del curso.
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const courseData = [
    {
      nameurl:'salida_guiada',
      name: 'SALIDA GUIADA',
      description: 'Descripción detallada del curso de apnea...',
      image: [carouselimg_1,'carouselimg_2',carouselimg_3],
      details: 'Información adicional sobre el curso de apnea...'
    },
    {
      nameurl:'salida_nocturna',
      name: 'SALIDA NOCTURNA',
      description: 'Descripción deaaaaaa...',
      image: [carouselimg_1,carouselimg_2,carouselimg_3],
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'iniciacion',
      name: 'INICIACION',
      description: 'Descripción deaaaaaa...',
      image: [carouselimg_1,carouselimg_2,carouselimg_3],
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'curso_apnea',
      name: 'CURSO APNEA',
      description: 'Descripción deaaaaaa...',
      image: [carouselimg_1,carouselimg_2,carouselimg_3],
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'entrenamiento_en_profundidad',
      name: 'ENTRENAMIENTO EN PROFUNDIDAD',
      description: 'Descripción deaaaaaa...',
      image: [carouselimg_1,carouselimg_2,carouselimg_3],
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'entrenamiento_en_piscina',
      name: 'ENTRENAMIENTO EN PISCINA',
      description: 'Descripción deaaaaaa...',
      image: [carouselimg_1,carouselimg_2,carouselimg_3],
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },{
      nameurl:'practica_en_piscina',
      name: 'PRACTICA EN PISCINA',
      description: 'Descripción detallada del curso de apnea...',
      image: [carouselimg_1,carouselimg_2,carouselimg_3],
      details: 'Información adicional sobre el curso de apnea...'
    },
    // Añade más cursos según sea necesario
   ]
  courseData.map((curso)=>{
if(curso.nameurl===cursoName){
  course=curso
}
  })

  if (!course) {
    return <p>Curso no encontrado.</p>;
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4" style={{borderBottom:"3px solid black"}}>{course.name}</h1>
      <div className='grid grid-cols-3 '>
      <div className='grid grid-cols-1'>

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
                    
                                <Image src={course.image[0]} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                                </SwiperSlide>
                                <SwiperSlide >
                    
                    <Image src={course.image[1]} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                    </SwiperSlide><SwiperSlide >
                    
                    <Image src={course.image[2]} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
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
                                  
                                  <Image src={course.image[0]} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                                  </SwiperSlide>
                                  <SwiperSlide >
                      
                      <Image src={course.image[1]} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                      </SwiperSlide><SwiperSlide >
                      
                      <Image src={course.image[2]} width={1000 } height={1000} alt="Cursos de Apnea" style={{background:"transparent"}} className="  w-full md:w-1/2 h-auto "/>
                      </SwiperSlide>
      
              </Swiper>
        
      </div>
      <div className="m-6 grid col-span-2">
          <p>{course.description}</p>
          <p className="mt-4">{course.details}</p>
        </div>
        </div>
    </div>
  );
};

export default Curso;