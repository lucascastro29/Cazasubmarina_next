import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function ProductCard({ product, index })  {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  let id=index;
  const handleClick = () => {
    router.push(`/equipos/${id}`);
  };

  return (
    
    <div onClick={handleClick} className="cursor-pointer m-4"
    onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'scale(1.050)' : 'scale(1)',
        transition:"all 0.5s"
      }}
    >
        <h2 className="text-lg font-semibold " style={{borderBottom:"solid black 3px",paddingBottom:"2px"}}>{product.name}</h2>
  <div className="md:w-3/2">
  <Image
    alt='image_alt'
      src={`${product.image[0]}`}
      layout="responsive"
      width={200}
      height={100}
      className="transition-transform duration-300 transform-gpu p-4 pl-0 w-full h-full object-cover"
      
     
    />
  </div>
    

  </div>
  );
};

