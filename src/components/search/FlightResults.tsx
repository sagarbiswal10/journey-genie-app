import { Flight } from '@/types/search';
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from 'lucide-react';

interface FlightResultsProps {
  flights: Flight[];
}

const FlightResults = ({ flights }: FlightResultsProps) => {
  if (flights.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No flights found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Available Flights</h2>
      {flights.map((flight) => (
        <Card key={flight.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="text-lg font-semibold">{flight.departureTime}</div>
                  <Plane className="text-primary" size={20} />
                  <div className="text-lg font-semibold">{flight.arrivalTime}</div>
                </div>
                <div className="text-sm text-gray-500">
                  {flight.from} → {flight.to}
                </div>
                <div className="text-sm text-gray-500">
                  {flight.airline} • Duration: {flight.duration}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  ${flight.price}
                </div>
                <button className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Select
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FlightResults;