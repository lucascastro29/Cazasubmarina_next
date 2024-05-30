'use client'
import { Console } from 'console';
import { useParams } from 'next/navigation';

const Curso = ({ curso }: { curso:string
 }) => {
  const cursoName=useParams().nombre_curso
let course;
  console.log(cursoName)
  // Aquí podrías buscar la información específica del curso usando `nombre_curso`
  // Por ahora, vamos a simular los datos del curso.
  const courseData = [
    {
      nameurl:'salida_guiada',
      name: 'SALIDA GUIADA',
      description: 'Descripción detallada del curso de apnea...',
      image: '/path/to/apnea_course_image.jpg',
      details: 'Información adicional sobre el curso de apnea...'
    },
    {
      nameurl:'salida_nocturna',
      name: 'SALIDA NOCTURNA',
      description: 'Descripción deaaaaaa...',
      image: '/path/to/profundida_course_image.jpg',
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'iniciacion',
      name: 'INICIACION',
      description: 'Descripción deaaaaaa...',
      image: '/path/to/profundida_course_image.jpg',
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'curso_apnea',
      name: 'CURSO APNEA',
      description: 'Descripción deaaaaaa...',
      image: '/path/to/profundida_course_image.jpg',
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'entrenamiento_en_profundidad',
      name: 'ENTRENAMIENTO EN PROFUNDIDAD',
      description: 'Descripción deaaaaaa...',
      image: '/path/to/profundida_course_image.jpg',
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },
    {
      nameurl:'entrenamiento_en_piscina',
      name: 'ENTRENAMIENTO EN PISCINA',
      description: 'Descripción deaaaaaa...',
      image: '/path/to/profundida_course_image.jpg',
      details: 'Información adicional sobre el entrenamiento en profundida...'
    },{
      nameurl:'practica_en_piscina',
      name: 'PRACTICA EN PISCINA',
      description: 'Descripción detallada del curso de apnea...',
      image: '/path/to/apnea_course_image.jpg',
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
      <h1 className="text-3xl font-bold mb-4" style={{width:"80%",borderBottom:"2px solid black"}}>{course.name}</h1>
      <div className="flex flex-col md:flex-row mb-6">
        <img src={course.image} alt={course.name} className="w-full md:w-1/2 h-auto rounded-lg" />
        <div className="md:ml-6 mt-6 md:mt-0">
          <p>{course.description}</p>
          <p className="mt-4">{course.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Curso;