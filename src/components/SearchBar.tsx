import { useState } from 'react';
import { Search, TrainFront, Bus, Plane, Hotel, Calendar, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SearchBar = () => {
  const [destination, setDestination] = useState('');

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg animate-fadeIn">
      <Tabs defaultValue="flights" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="flights" className="flex items-center gap-2">
            <Plane size={18} />
            <span className="hidden sm:inline">Flights</span>
          </TabsTrigger>
          <TabsTrigger value="hotels" className="flex items-center gap-2">
            <Hotel size={18} />
            <span className="hidden sm:inline">Hotels</span>
          </TabsTrigger>
          <TabsTrigger value="trains" className="flex items-center gap-2">
            <TrainFront size={18} />
            <span className="hidden sm:inline">Trains</span>
          </TabsTrigger>
          <TabsTrigger value="buses" className="flex items-center gap-2">
            <Bus size={18} />
            <span className="hidden sm:inline">Buses</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flights">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Plane className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="From where?"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex-1 relative">
              <Plane className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="To where?"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Calendar size={20} className="text-gray-400" />
                <span className="hidden md:inline">Date</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Users size={20} className="text-gray-400" />
                <span className="hidden md:inline">Passengers</span>
              </button>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="hotels">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Hotel className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Where do you want to stay?"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Calendar size={20} className="text-gray-400" />
                <span className="hidden md:inline">Check in - Check out</span>
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
        </TabsContent>

        <TabsContent value="trains">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <TrainFront className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="From station"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex-1 relative">
              <TrainFront className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="To station"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Calendar size={20} className="text-gray-400" />
                <span className="hidden md:inline">Date</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Users size={20} className="text-gray-400" />
                <span className="hidden md:inline">Passengers</span>
              </button>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="buses">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Bus className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="From bus station"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex-1 relative">
              <Bus className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="To bus station"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Calendar size={20} className="text-gray-400" />
                <span className="hidden md:inline">Date</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Users size={20} className="text-gray-400" />
                <span className="hidden md:inline">Passengers</span>
              </button>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchBar;