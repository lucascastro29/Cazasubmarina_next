import { useRouter } from 'next/navigation'

export default function ProductCard({ product, index })  {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/equipos/${index}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="border rounded-md p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

