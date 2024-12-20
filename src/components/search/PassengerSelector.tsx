import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Users, Plus, Minus } from 'lucide-react';

interface PassengerSelectorProps {
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  updatePassengers: (type: 'adults' | 'children' | 'infants', operation: 'add' | 'subtract') => void;
}

const PassengerSelector = ({ passengers, updatePassengers }: PassengerSelectorProps) => {
  const getTotalPassengers = () => {
    return passengers.adults + passengers.children + passengers.infants;
  };

  return (
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
  );
};

export default PassengerSelector;