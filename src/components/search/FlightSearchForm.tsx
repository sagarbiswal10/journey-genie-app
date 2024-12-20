import { Plane, Calendar } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import PassengerSelector from './PassengerSelector';
import { SearchCriteria } from '@/types/search';

interface FlightSearchFormProps {
  searchCriteria: SearchCriteria;
  setSearchCriteria: React.Dispatch<React.SetStateAction<SearchCriteria>>;
  onSearch: () => void;
  updatePassengers: (type: 'adults' | 'children' | 'infants', operation: 'add' | 'subtract') => void;
}

const FlightSearchForm = ({ searchCriteria, setSearchCriteria, onSearch, updatePassengers }: FlightSearchFormProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <Plane className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="From where?"
          value={searchCriteria.from}
          onChange={(e) => setSearchCriteria(prev => ({ ...prev, from: e.target.value }))}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div className="flex-1 relative">
        <Plane className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="To where?"
          value={searchCriteria.to}
          onChange={(e) => setSearchCriteria(prev => ({ ...prev, to: e.target.value }))}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
              <Calendar size={20} className="text-gray-400" />
              <span className="hidden md:inline">
                {searchCriteria.date ? format(searchCriteria.date, 'PP') : 'Date'}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={searchCriteria.date}
              onSelect={(date) => setSearchCriteria(prev => ({ ...prev, date }))}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <PassengerSelector
          passengers={searchCriteria.passengers}
          updatePassengers={updatePassengers}
        />

        <button 
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearchForm;