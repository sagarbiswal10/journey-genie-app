export interface SearchCriteria {
  from: string;
  to: string;
  date: Date | undefined;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
}

export interface Flight {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  airline: string;
  duration: string;
}