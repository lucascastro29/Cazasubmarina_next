import Image from 'next/image';

const FlipCard = ({ imageUrl, title, description }) => {
  return (
    <div className="perspective">
      <div className="flip-card-inner w-64 h-96">
        <div className="flip-card w-full h-full relative">
          {/* Front Side */}
          <div className="flip-card-front absolute w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={imageUrl} alt="Front Image" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          {/* Back Side */}
          <div className="flip-card-back absolute w-full h-full bg-black bg-opacity-70 shadow-lg rounded-lg flex flex-col items-center justify-center text-center p-4 text-white overflow-hidden">
            <div className="absolute inset-0 transform scale-x-[-1]">
              <Image src={imageUrl} alt="Back Image" layout="fill" objectFit="cover" className="rounded-lg opacity-30" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="mb-4">{description}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;