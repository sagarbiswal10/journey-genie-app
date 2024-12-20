import { ArrowRight } from 'lucide-react';

interface SpecialOfferProps {
  title: string;
  description: string;
  discount: string;
  image: string;
}

const SpecialOffer = ({ title, description, discount, image }: SpecialOfferProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            {discount} OFF
          </span>
          <h3 className="text-2xl font-semibold text-dark mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all">
            <span>Book now</span>
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;