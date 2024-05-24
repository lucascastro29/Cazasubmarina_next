'use client'
import { useEffect, useRef } from 'react';
import carrousel_Image_1 from "@/public/img/carrousel_home/1.jpg"
import carrousel_Image_1_0 from "@/public/img/carrousel_home/2.jpg"
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

export default function CarouselComponent() {
    const parallaxRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (event) => {
        if (parallaxRef.current) {
          const { clientX, clientY } = event;
          const { innerWidth, innerHeight } = window;
          const xPos = (clientX / innerWidth) * 100;
          const yPos = (clientY / innerHeight) * 100;
          parallaxRef.current.style.transform = `translate(${xPos / 10}%, ${yPos / 10}%)`;
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  return (
    <div className="relative w-full  h-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        className=" shadow-lg"
      >
        <div className="relative group ">
        <div ref={parallaxRef} className="absolute w-96 h-96 bg-blue-500 opacity-75" style={{ zIndex: 10, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>

          <Link href="/Cursos" className="block relative h-96 md:h-[800px]">
              <Image alt="Cursos" src={carrousel_Image_1} layout="fill" objectFit="cover" className="transform transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent opacity-75 p-4 rounded-b-lg">
                <h2 className="text-white text-2xl font-bold">Cursos</h2>
              </div>
          </Link>
          </div>
        <div className="relative group">
          <Link href="/equipos" className="block relative h-96 md:h-[800px]">
              <Image alt="Productos" src={carrousel_Image_1_0} layout="fill" objectFit="cover" className="transform transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent opacity-75 p-4 rounded-b-lg">
                <h2 className="text-white text-2xl font-bold">Productos</h2>
              </div>
          </Link>
        </div>
        
      </Carousel>
      
    </div>
  )
}