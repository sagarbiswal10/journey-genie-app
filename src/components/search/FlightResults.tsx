import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

interface Flight {
  id: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
}

const dummyFlights: Flight[] = [
  {
    id: "1",
    airline: "SkyWings Airlines",
    departureTime: "06:00",
    arrivalTime: "08:30",
    duration: "2h 30m",
    price: 299,
    stops: 0,
  },
  {
    id: "2",
    airline: "CloudJet Airways",
    departureTime: "08:45",
    arrivalTime: "11:30",
    duration: "2h 45m",
    price: 349,
    stops: 1,
  },
  {
    id: "3",
    airline: "StarLine Express",
    departureTime: "13:15",
    arrivalTime: "15:45",
    duration: "2h 30m",
    price: 279,
    stops: 0,
  },
];

const FlightResults = () => {
  return (
    <div className="mt-8 space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-4">Available Flights</h2>
      {dummyFlights.map((flight) => (
        <Card key={flight.id} className="hover:border-primary transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Plane className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{flight.airline}</h3>
                  <p className="text-sm text-gray-500">
                    {flight.stops === 0 ? "Direct" : `${flight.stops} stop`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">${flight.price}</p>
                <p className="text-sm text-gray-500">per person</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xl font-semibold">{flight.departureTime}</p>
                <p className="text-sm text-gray-500">Departure</p>
              </div>
              <div className="flex-1 mx-4 border-t border-dashed border-gray-300 relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                  {flight.duration}
                </span>
              </div>
              <div>
                <p className="text-xl font-semibold">{flight.arrivalTime}</p>
                <p className="text-sm text-gray-500">Arrival</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FlightResults;