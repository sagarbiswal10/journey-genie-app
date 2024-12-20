import SearchBar from '../components/search/SearchBar';
import DestinationCard from '../components/DestinationCard';
import SpecialOffer from '../components/SpecialOffer';

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    title: "Luxury Beach Resort",
    location: "Maldives",
    price: 299,
    rating: 4.9,
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    title: "Mountain Retreat",
    location: "Swiss Alps",
    price: 199,
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Urban Boutique Hotel",
    location: "Paris, France",
    price: 249,
    rating: 4.7,
  },
];

const specialOffers = [
  {
    title: "Summer Escape Package",
    description: "Experience luxury for less with our exclusive summer package including spa access and daily breakfast.",
    discount: "25%",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-white/90">
              Find and book your perfect getaway
            </p>
          </div>
          <SearchBar />
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-dark mb-8">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-semibold text-dark mb-8">
          Special Offers
        </h2>
        <div className="space-y-6">
          {specialOffers.map((offer, index) => (
            <SpecialOffer key={index} {...offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;