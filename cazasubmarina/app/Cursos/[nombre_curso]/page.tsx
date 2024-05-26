'use client'
import { Console } from 'console';
import { useRouter } from 'next/navigation';

const Curso = ({ curso }: { curso:string
 }) => {
  const router = useRouter();
  // Aquí podrías buscar la información específica del curso usando `nombre_curso`
  // Por ahora, vamos a simular los datos del curso.
  const courseData = {
    'curso': {
      name: 'Curso de Apnea',
      description: 'Descripción detallada del curso de apnea...',
      image: '/path/to/apnea_course_image.jpg',
      details: 'Información adicional sobre el curso de apnea...'
    },
    'entrenamiento_en_profundida': {
      name: 'Entrenamiento en Profundida',
      description: 'Descripción deaaaaaa...',
      image: '/path/to/profundida_course_image.jpg',
      details: 'Información adicional sobre el entrenamiento en profundida...'
    }
    // Añade más cursos según sea necesario
  };
  const course = courseData.curso;

  if (!course) {
    return <p>Curso no encontrado.</p>;
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
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