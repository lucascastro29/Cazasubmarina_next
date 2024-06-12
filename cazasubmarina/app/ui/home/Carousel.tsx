'use client';

import { useEffect, useState } from 'react';
import carrousel_Image_ambiente from "@/public/img/carrousel_home/ambiente.jpg";
import carrousel_Image_apnea from "@/public/img/carrousel_home/apnea.jpg";
import carrousel_Image_cazasub from "@/public/img/carrousel_home/cazasub.jpg";
import carrousel_Image_products from "@/public/img/carrousel_home/products.jpg";

import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import { Swiper } from 'swiper/react';

export default function CarouselComponent() {
  const [backgroundPost, setBackgroundPost] = useState('');

  useEffect(() => {
    function parallax() {
      // Add event listener
      document.addEventListener("mousemove", parallaxEffect);
      // Magic happens here
      function parallaxEffect(e: { clientX: any; clientY: any; }) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.01}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);

        setBackgroundPost(x);
      }
    }
    parallax();

    return () => {
      document.removeEventListener("mousemove", parallaxEffect);
    };
  }, []);
  
function parallaxEffect(this: Document, ev: MouseEvent) {
  throw new Error('Function not implemented.');
}



  return (
    <div className="relative w-full h-full "  >
      <div className="relative w-full h-[90vh] overflow-hidden" id="below-landing">
        <img
          src="https://via.placeholder.com/1920x1080"
          alt="Landing Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          className="h-[90vh]"
        >
          <div className="relative group h-[90vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_products}
              layout="fill"

              objectFit="cover"
              className="transform transition-transform  h-[90vh] duration-500"
            />
            <Link
                href="/equipos"
                id='parallaxp'

              style={{
                zIndex: 2,
                backgroundPosition: backgroundPost,
                position: "absolute",
                top: "-200px",
                left: "-250px",
                right: "0px",
                bottom:"0px",
                paddingBottom:"600px",
                margin: "20px",
                width:"200vh",
                height:"90vh",
              }}
            />
          </div>
          <div className="relative group h-[90vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_apnea}

              objectFit="cover"
              className="transform transition-transform  h-[90vh] duration-500"
            />
            <Link
                href="/Cursos"
              id='parallaxa'

              style={{
                zIndex: 2,
                backgroundPosition: backgroundPost,
                position: "absolute",
                top: "-50px",
                left: "-400px",
                right: "0px",
                margin: "20px",
                width:"200vh",
                height:"90vh",
              }}
            />
          </div>
          <div className="relative group h-[90vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_cazasub}
              layout="fill"

              objectFit="cover"
              className="transform transition-transform  duration-500"
            />
            <Link
                href="/Cursos"

              id='parallaxc'
              style={{
                zIndex: 2,

                backgroundPosition: backgroundPost,
                position: "absolute",
                
                left: "0px",
                right: "0px",
                bottom:"-200px",
                margin: "20px",
                width:"200vh",
                height:"90vh",
              }}
            />
          </div>
          <div className="relative group h-[90vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_ambiente}
              objectFit="cover"
              className="transform transition-transform h-[90vh] duration-500"
            />
            <Link
              id='parallaxam'
          href="/Nosotros#Ambiente"
              style={{
                zIndex: 2,
                backgroundPosition: backgroundPost,
                position: "absolute",
                top: "20px",
                left: "0px",
                right: "0px",
                margin: "20px",
                width:"200vh",
                height:"90vh",
              }}
            />
          </div>
        </Carousel>

      </div>
    </div>
  )
}