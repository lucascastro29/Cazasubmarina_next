'use client';

import { Kanit } from "next/font/google";
import cazasub_course from "@/public/img/diseños/cazasub_course.jpg"
import apnea_course from "@/public/img/diseños/apnea_course.jpg"
import bg from "@/public/img/backgroud_courses.jpg"

import Image from "next/image";
import Link from "next/link";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});

export default function Courses() {
  return (
    <div 
      className="flex flex-col py-24 md:py-48 lg:py-24 bg-cover bg-center"
      style={{  
        backgroundImage: `url(${bg.src})`
      }}
    >
      <div className="w-full flex items-center justify-center" style={{ fontSize: "300%" }}>
        <div className="grid justify-items-start" style={{ width: "825px", color: "white" }}>
          <div className={kanit.className}>
            CURSOS 
            <div className="rounded mb-4" style={{ backgroundColor: "red", width: "350%", height: "5px" }}></div>
          </div>
        </div>
      </div>

      <div className="flex items-stretch justify-center w-full space-x-16">
        <Link href="/Cursos">
          <div className="max-w-md bg-transparent dark:bg-gray-800 pt-4">
            <Image src={apnea_course} alt="design" width={400} height={300} layout="responsive" />
            <div className="p-4">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">APNEA</h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400 leading-relaxed">
                Sumérgete en una experiencia única y emocionante mientras exploras las técnicas esenciales para mejorar tu capacidad en el agua y descubrir el mundo submarino con confianza y seguridad. Aprende a controlar tu respiración, mejorar tu técnica y aumentar tu resistencia bajo el agua.
              </p>
              <Link href="/Cursos" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Más Información
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        </Link>

        <Link href="/Cursos">
          <div className="max-w-md bg-transparent pt-4 dark:bg-gray-800">
            <Image src={cazasub_course} alt="design" width={400} height={300} layout="responsive" />
            <div className="p-4">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">CAZASUBMARINA</h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400 leading-relaxed">
                Descubre un mundo de emociones bajo el agua. Aprende las habilidades esenciales para convertirte en un cazador experto, desde la seguridad en el agua hasta las técnicas de camuflaje. Únete a nuestra comunidad de entusiastas de la pesca submarina y comienza tu aventura.
              </p>
              <Link href="/Cursos" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Más Información
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}