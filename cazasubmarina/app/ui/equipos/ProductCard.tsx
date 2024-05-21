import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function ProductCard({ product, index })  {
  const router = useRouter();

  let id=index;
  const handleClick = () => {
    router.push(`/equipos/${id}`);
  };

  return (
    
    <div onClick={handleClick} className="cursor-pointer">
      
    <Image
      src={`${product.image[0]}`}
      layout="responsive"
      width={200}
      height={100}
      className="transition-transform duration-300 transform-gpu p-4"
     
    />
    <p>{product.description}</p>
    <h2 className="text-lg font-semibold " style={{borderBottom:"solid black 3px",paddingBottom:"2px"}}>{product.name}</h2>

  </div>
  );
};

