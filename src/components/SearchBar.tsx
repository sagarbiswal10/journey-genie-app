import { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';

const SearchBar = () => {
  const [destination, setDestination] = useState('');

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
            <Calendar size={20} className="text-gray-400" />
            <span className="hidden md:inline">Check in</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
            <Users size={20} className="text-gray-400" />
            <span className="hidden md:inline">Guests</span>
          </button>
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;