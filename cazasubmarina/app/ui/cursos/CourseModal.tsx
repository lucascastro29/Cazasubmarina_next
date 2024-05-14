import React from 'react';

const CourseModal = ({ course, onCloseModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">{course.name}</h2>
        <p>{course.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={onCloseModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default CourseModal;