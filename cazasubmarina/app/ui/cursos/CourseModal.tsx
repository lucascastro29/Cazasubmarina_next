import React from 'react';
import CourseCard from './CourseCard';

const CourseModal = ({ course, onCloseModal }) => {
  return (<>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white  p-4 rounded-md shadow-md" style={{width:"800px"}}>
        <h2 className="text-lg font-semibold mb-4">{course.name}</h2>
        <p>{course.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {course.subcursos.map((course) => (
          <CourseCard key={course.id} course={course}  />
        ))}
        </div>
      </div>
      
    </div>
    <div className='fixed inset-0 flex ' >
    <button className=" mt-4 px-4 py-2 bg-red-500 m-8 text-white rounded-md" onClick={onCloseModal}>Cerrar</button>

    </div>
        </>
  );
};

export default CourseModal;