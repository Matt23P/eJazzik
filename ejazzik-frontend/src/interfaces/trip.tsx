interface Trip {
  name: string;
  country: string;
  city: string;
  date: string;
  totalPrice: number;
  numberOfPeople: number;
  pricePerPerson: number;
  tripId: number;
  accommodation: {
    address: string;
    description: string;
    standard: string;
    maxPeople: string;
    name: string;
  };
  flightArrival: {
    airportArrival: string;
    airportDeparture: string;
    carrier: string;
    dateArrival: string;
    dateDeparture: string;
    luggage: string;
    standard: string;
    timeArrival: string;
    timeDeparture: string;
  };
  flightDeparture: {
    airportArrival: string;
    airportDeparture: string;
    carrier: string;
    dateArrival: string;
    dateDeparture: string;
    luggage: string;
    standard: string;
    timeArrival: string;
    timeDeparture: string;
  };
  attractions: [
    {
      name: string;
      address: string;
      description: string;
      phoneNumber: string;
      price: number;
    },
  ];
}
