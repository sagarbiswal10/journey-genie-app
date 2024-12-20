import { Heart } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
}

const DestinationCard = ({ image, title, location, price, rating }: DestinationCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg text-dark">{title}</h3>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">⭐</span>
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-primary font-semibold">
          ${price} <span className="text-gray-500 font-normal">/ night</span>
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;