import Image from 'next/image';
import React from 'react';

interface InstructorCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function InstructorCard(InstructorCardProps: { image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }){
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <Image className="w-32 h-32 object-cover" src={InstructorCardProps.image} height={10} width={10} alt={InstructorCardProps.name} />
      <div className="p-4">
        <h3 className="text-xl font-bold">{InstructorCardProps.name}</h3>
        <p className="text-gray-600">{InstructorCardProps.title}</p>
        <p className="text-gray-700">{InstructorCardProps.description}</p>
      </div>
    </div>
  )
};
