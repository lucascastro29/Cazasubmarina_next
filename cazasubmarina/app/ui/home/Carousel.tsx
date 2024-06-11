'use client';

import { useEffect, useState } from 'react';
import carrousel_Image_ambiente from "@/public/img/carrousel_home/ambiente.jpeg";
import carrousel_Image_apnea from "@/public/img/carrousel_home/apnea.jpg";
import carrousel_Image_cazasub from "@/public/img/carrousel_home/cazasub.jpeg";
import carrousel_Image_products from "@/public/img/carrousel_home/products.jpg";

import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
        let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.002}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.006}%`;
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
      <div className="relative w-full h-[95vh] overflow-hidden" id="below-landing">
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
          className="h-[95vh]"
        >
          <div className="relative group h-[95vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_products}
              layout="fill"

              objectFit="cover"
              className="transform transition-transform  h-[95vh] duration-500"
            />
            <Image
              src=""
              style={{
                zIndex: 2,
                backgroundPosition: backgroundPost,
                width: "432px",
                height: "142px",
                position: "absolute",
                top: "20px",
                left: "0px",
                right: "0px",
                margin: "20px"
              }}
              alt="fuente-savage-arcade"
              width={10}
              height={10}
            />
          </div>
          <div className="relative group h-[95vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_apnea}

              objectFit="cover"
              className="transform transition-transform  h-[95vh] duration-500"
            />
            <Image
              src=""
              style={{
                zIndex: 2,
                backgroundPosition: backgroundPost,
                width: "432px",
                height: "142px",
                position: "absolute",
                top: "20px",
                left: "0px",
                right: "0px",
                margin: "20px"
              }}
              alt="fuente-savage-arcade"
              width={10}
              height={10}
            />
          </div>
          <div className="relative group h-[95vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_cazasub}
              layout="fill"

              objectFit="cover"
              className="transform transition-transform  duration-500"
            />
            <Image
              src=""
              style={{
                zIndex: 2,
                backgroundPosition: backgroundPost,
                width: "432px",
                height: "142px",
                position: "absolute",
                top: "20px",
                left: "0px",
                right: "0px",
                margin: "20px"
              }}
              alt="fuente-savage-arcade"
              width={10}
              height={10}
            />
          </div>
          <div className="relative group h-[95vh]">
            <Image
              alt="Cursos"
              src={carrousel_Image_ambiente}
              objectFit="cover"
              className="transform transition-transform h-[95vh] duration-500"
            />
            <Image
              src=""
              style={{
                zIndex: 2,
                backgroundPosition: backgroundPost,
                width: "432px",
                height: "142px",
                position: "absolute",
                top: "20px",
                left: "0px",
                right: "0px",
                margin: "20px"
              }}
              alt="fuente-savage-arcade"
              width={10}
              height={10}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

{/**'use client';

import { useEffect, useRef, useState } from 'react';
import carrousel_Image_ambiente from "@/public/img/carrousel_home/ambiente.jpeg";
import carrousel_Image_apnea from "@/public/img/carrousel_home/apnea.jpg"
import carrousel_Image_cazasub from "@/public/img/carrousel_home/cazasub.jpeg";
import carrousel_Image_products from "@/public/img/carrousel_home/products.jpg";

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
          let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.002}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.006}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          console.log(x);
         
          setbackgroundPost(x)
      }
    
    }
    paralax()
    

  }, []);
  return (
    <div className="relative w-full h-full"  id="below-landing">
      <div className="relative w-full h-[95vh] overflow-hidden">
      <img 
        src="https://via.placeholder.com/1920x1080" 
        alt="Landing Background" 
        className="absolute inset-0 w-full h-full object-cover" 
      /><Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      className="shadow-lg"
    >
      <div className="relative group" >
        <div
          className="absolute   rounded-lg"
          id='parallax'
          
          style={{
            zIndex: 1,
            scale:"1.6",
            backgroundPosition:backgroundPost
          }}
        >

        </div>
        
      
         
      </div>
      <div className="relative group" >
        <div
          className="absolute   rounded-lg"
          id='parallax'
          
          style={{
            zIndex: 1,
            scale:"1.6",
            backgroundPosition:backgroundPost
          }}
        >

        </div>
        
        <div  className='h-[95vh]'>
        <Image
            alt="Cursos"
            src={carrousel_Image_products}
            layout="fill"
            objectFit="cover" 
            className="transform transition-transform duration-500  h-[95vh] "
          />
                        <Image     width={10} height={10}    src="" style={{zIndex:"2", backgroundPosition:backgroundPost,width:"432px",height:"142px",position:"absolute",top:"20px",right:"0px",left:"0px",margin:"20px"}} alt="fuente-savage-arcade" />

        </div>
      </div>
      <div className="relative group h-full w-hull" >
      <div
          className="absolute   rounded-lg"
          id='parallax'
          
          style={{
            zIndex: 1,
            scale:"1.6",
            backgroundPosition:backgroundPost
          }}
        >

        </div>
        
        <Image
            alt="Cursos"
            src={carrousel_Image_cazasub}
            layout="fill"
            objectFit="cover" 
            className="transform transition-transform duration-500 h-[95vh]  "
          />
                        <Image     width={10} height={10}    src="" style={{zIndex:"2", backgroundPosition:backgroundPost,width:"432px",height:"142px",position:"absolute",top:"20px",right:"0px",left:"0px",margin:"20px"}} alt="fuente-savage-arcade" />

         
      </div>
      <div className="relative group" style={{height:"800px",width:"100%"}}>
      <div
          className="absolute   rounded-lg"
          id='parallax'
          
          style={{
            zIndex: 1,
            scale:"1.6",
            backgroundPosition:backgroundPost
          }}
        >

        </div>
        
        <div style={{height:"800px",width:"100%"}}>
        <Image
            alt="Cursos"
            src={carrousel_Image_ambiente}
            layout="fill"
            objectFit="cover" 
            className="transform transition-transform duration-500  h-[95vh] "
          />
                        <Image     width={10} height={10}    src="" style={{zIndex:"2", backgroundPosition:backgroundPost,width:"432px",height:"142px",position:"absolute",top:"20px",right:"0px",left:"0px",margin:"20px"}} alt="fuente-savage-arcade" />

        </div>
         
      </div>
    </Carousel>
    </div>
      
    </div>
  );
} 
**/}
