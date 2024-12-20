import { useState } from 'react';
import { TrainFront, Bus, Hotel } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlightSearchForm from './FlightSearchForm';
import FlightResults from './FlightResults';
import { SearchCriteria, Flight } from '@/types/search';

const DUMMY_FLIGHTS: Flight[] = [
  {
    id: '1',
    from: 'New York',
    to: 'London',
    departureTime: '10:00 AM',
    arrivalTime: '10:00 PM',
    price: 500,
    airline: 'British Airways',
    duration: '12h'
  },
  {
    id: '2',
    from: 'London',
    to: 'Paris',
    departureTime: '2:00 PM',
    arrivalTime: '4:00 PM',
    price: 200,
    airline: 'Air France',
    duration: '2h'
  },
  {
    id: '3',
    from: 'Paris',
    to: 'New York',
    departureTime: '9:00 AM',
    arrivalTime: '11:00 PM',
    price: 600,
    airline: 'American Airlines',
    duration: '14h'
  }
];

const SearchBar = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    from: '',
    to: '',
    date: undefined,
    passengers: {
      adults: 1,
      children: 0,
      infants: 0
    }
  });

  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [showResults, setShowResults] = useState(false);

  const updatePassengers = (type: 'adults' | 'children' | 'infants', operation: 'add' | 'subtract') => {
    setSearchCriteria(prev => ({
      ...prev,
      passengers: {
        ...prev.passengers,
        [type]: operation === 'add' ? prev.passengers[type] + 1 : Math.max(0, prev.passengers[type] - 1)
      }
    }));
  };

  const handleSearch = () => {
    console.log('Searching with criteria:', searchCriteria);
    
    const filtered = DUMMY_FLIGHTS.filter(flight => {
      const matchesFrom = !searchCriteria.from || 
        flight.from.toLowerCase().includes(searchCriteria.from.toLowerCase());
      const matchesTo = !searchCriteria.to || 
        flight.to.toLowerCase().includes(searchCriteria.to.toLowerCase());
      
      return matchesFrom && matchesTo;
    });

    setFilteredFlights(filtered);
    setShowResults(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg animate-fadeIn">
        <Tabs defaultValue="flights" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="flights" className="flex items-center gap-2">
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
            <FlightSearchForm
              searchCriteria={searchCriteria}
              setSearchCriteria={setSearchCriteria}
              onSearch={handleSearch}
              updatePassengers={updatePassengers}
            />
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
      
      {showResults && (
        <div className="mt-8">
          <FlightResults flights={filteredFlights} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
