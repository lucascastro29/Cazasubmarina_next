'use client';

import { useEffect, useRef, useState } from 'react';
import carrousel_Image_1 from "@/public/img/carrousel_home/1.jpg";
import carrousel_image from "@/public/img/Cursos_img/carrousel_cazasub/carouselimg_3_c.png"
import carrousel_Image_1_0 from "@/public/img/carrousel_home/2.jpg";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import imgGerardo from "@/public/img/diseños/Gerardo.png"

export default function CarouselComponent() {

  const [backgroundPost,setbackgroundPost]=useState('')
  
  useEffect(() => {
    
    function paralax() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      // Magic happens here
      function parallax(e: { clientX: any; clientY: any; }) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          console.log(x);
         
          setbackgroundPost(x)
      }
    
    }
    paralax()
    

  }, []);
  useEffect(()=>{
  
  },[])
  return (
    <div className="relative w-full h-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        className="shadow-lg"
      >
        <div className="relative group" style={{height:"800px",width:"100%"}}>
          <div
            className="absolute   rounded-lg"
            id='parallax'
            
            style={{
              zIndex: 1,
              scale:"1.6",
              backgroundPosition:backgroundPost
            }}
          ></div>
          <div style={{height:"800px",width:"100%"}}>
          <Image
              alt="Cursos"
              src={carrousel_image}
              layout="fill"
              objectFit="cover" 
              className="transform transition-transform duration-500   "
            />
          </div>
           
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent opacity-75 p-4 rounded-b-lg">
              <h2 className="text-white text-2xl font-bold">Cursos</h2>
            </div>
        </div>
        <div className="relative group" style={{height:"800px",width:"100%"}}>
            <Image
              alt="Productos"
              src={carrousel_Image_1_0}
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent opacity-75 p-4 rounded-b-lg">
              <h2 className="text-white text-2xl font-bold">Productos</h2>
            </div>
        </div>
      </Carousel>
    </div>
  );
}