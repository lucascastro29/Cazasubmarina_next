'use client';

import React from 'react';
import Carousel from '../ui/nosotros/Carousel';
import InstructorCard from '../ui/nosotros/InstructorCard';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: '400',
  subsets: ['latin']
});
const instructors = [
  {
    name: 'Juan Pérez',
    title: 'Instructor Principal de Cazasubmarina',
    description: 'Soy Juan, amante del mar y apasionado de la cazasubmarina. Con más de 20 años de experiencia, he dedicado mi vida a enseñar y compartir este maravilloso deporte.',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    name: 'María López',
    title: 'Instructora de Apnea',
    description: 'Soy María, instructora certificada de apnea y cazasubmarina. Mi misión es ayudar a otros a explorar las profundidades del océano de manera segura y responsable.',
    image: 'https://via.placeholder.com/800x400',
  },
  // Agrega más instructores según sea necesario
];

export default function Page(){
  return (<div className={kanit.className}>
    <div className="container mx-auto py-8 px-4">
      {/* Sección ¿Quiénes Somos? */}
      <section className="mb-12">
        <Carousel />
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>
          <p className="text-gray-700">
            Cazasubmarina se fundó en 2010 por un grupo de apasionados del mar. Nuestro objetivo es promover y enseñar la cazasubmarina de manera segura y responsable, respetando siempre el medio ambiente. Creemos que este deporte no solo es emocionante, sino que también fomenta un profundo respeto por el océano y su biodiversidad.
          </p>
        </div>
      </section>

      {/* Sección de Razones para Tomar un Curso */}
      <section className="relative mb-12">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x800')" }}></div>
        <div className="relative z-10 bg-opacity-75 bg-black p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">¿Por Qué Tomar un Curso de Cazasubmarina o Apnea?</h2>
          <p>
            Tomar un curso con nosotros te permite aprender de los mejores, con instructores altamente calificados. Además, desarrollarás habilidades que no solo son útiles en el agua, sino también en la vida diaria, como la paciencia, la disciplina y el autocontrol.
          </p>
        </div>
      </section>
      

      {/* Sección de Comunidad */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestra Comunidad</h2>
        <p className="text-gray-700 mb-4">
          Al unirte a uno de nuestros cursos, te integras a una hermosa comunidad de cazadores submarinos y apneistas. Tendrás acceso a nuestro grupo de WhatsApp donde compartimos la visibilidad del agua en varias playas, organizamos salidas de caza y expediciones, y celebramos reuniones y comidas.
        </p>
      </section>

      {/* Sección de Instructores */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestros Instructores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              name={instructor.name}
              title={instructor.title}
              description={instructor.description}
              image={instructor.image}
            />
          ))}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
        <p className="text-gray-700 mb-4">Regístrate con tu email para recibir las últimas novedades y promociones.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Nombre</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Apellido</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Mensaje</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar</button>
        </form>
      </section>
    </div>
    </div>
  );
};
