import { useState } from 'react';
import { Search, TrainFront, Bus, Plane, Hotel, Calendar, Users, Plus, Minus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import FlightResults from './FlightResults';

const SearchBar = () => {
  const [date, setDate] = useState<Date>();
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });
  const [showFlightResults, setShowFlightResults] = useState(false);

  const updatePassengers = (type: 'adults' | 'children' | 'infants', operation: 'add' | 'subtract') => {
    setPassengers(prev => ({
      ...prev,
      [type]: operation === 'add' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const getTotalPassengers = () => {
    return passengers.adults + passengers.children + passengers.infants;
  };

  const handleFlightSearch = () => {
    setShowFlightResults(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg animate-fadeIn">
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
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                      <Calendar size={20} className="text-gray-400" />
                      <span className="hidden md:inline">
                        {date ? format(date, 'PP') : 'Date'}
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                      <Users size={20} className="text-gray-400" />
                      <span className="hidden md:inline">{getTotalPassengers()} Passengers</span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Adults</p>
                          <p className="text-sm text-gray-500">Age 13+</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updatePassengers('adults', 'subtract')}
                            disabled={passengers.adults <= 1}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-8 text-center">{passengers.adults}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updatePassengers('adults', 'add')}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Children</p>
                          <p className="text-sm text-gray-500">Age 2-12</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updatePassengers('children', 'subtract')}
                            disabled={passengers.children <= 0}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-8 text-center">{passengers.children}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updatePassengers('children', 'add')}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Infants</p>
                          <p className="text-sm text-gray-500">Under 2</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updatePassengers('infants', 'subtract')}
                            disabled={passengers.infants <= 0}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-8 text-center">{passengers.infants}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updatePassengers('infants', 'add')}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <button 
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={handleFlightSearch}
                >
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
      
      {showFlightResults && <FlightResults />}
    </div>
  );
};

export default SearchBar;
