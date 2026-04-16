export interface RideOption {
  id: string;
  type: "bike" | "auto" | "cab" | "car";
  name: string;
  image: string;
  pricePerKm: number;
  baseFare: number;
  rating: number;
  eta: string;
  description: string;
}

export interface Driver {
  id: string;
  name: string;
  photo: string;
  vehicleType: "bike" | "auto" | "cab" | "car";
  vehicleName: string;
  vehicleNumber: string;
  rating: number;
  totalRides: number;
  city: string;
}

export const rideOptions: RideOption[] = [
  {
    id: "1",
    type: "bike",
    name: "Bike",
    image: "🏍️",
    pricePerKm: 8,
    baseFare: 15,
    rating: 4.5,
    eta: "3-5 min",
    description: "Affordable & quick for short distances"
  },
  {
    id: "2",
    type: "auto",
    name: "Auto",
    image: "🛺",
    pricePerKm: 12,
    baseFare: 25,
    rating: 4.3,
    eta: "5-8 min",
    description: "Comfortable 3-wheeler rides"
  },
  {
    id: "3",
    type: "cab",
    name: "Mini Cab",
    image: "🚕",
    pricePerKm: 14,
    baseFare: 40,
    rating: 4.6,
    eta: "6-10 min",
    description: "AC sedan for comfortable travel"
  },
  {
    id: "4",
    type: "car",
    name: "Prime Sedan",
    image: "🚗",
    pricePerKm: 18,
    baseFare: 60,
    rating: 4.8,
    eta: "8-12 min",
    description: "Premium sedans with top-rated drivers"
  },
  {
    id: "5",
    type: "car",
    name: "SUV",
    image: "🚙",
    pricePerKm: 22,
    baseFare: 80,
    rating: 4.7,
    eta: "10-15 min",
    description: "Spacious SUV for groups & luggage"
  }
];

export const drivers: Driver[] = [
  {
    id: "1",
    name: "Raju Kumar",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    vehicleType: "bike",
    vehicleName: "Honda Activa",
    vehicleNumber: "KA 01 AB 1234",
    rating: 4.8,
    totalRides: 2340,
    city: "Bangalore"
  },
  {
    id: "2",
    name: "Mohammed Salim",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    vehicleType: "auto",
    vehicleName: "Bajaj Auto",
    vehicleNumber: "KA 03 CD 5678",
    rating: 4.6,
    totalRides: 5670,
    city: "Bangalore"
  },
  {
    id: "3",
    name: "Venkatesh Rao",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    vehicleType: "cab",
    vehicleName: "Maruti Swift Dzire",
    vehicleNumber: "MH 02 EF 9012",
    rating: 4.9,
    totalRides: 8920,
    city: "Mumbai"
  },
  {
    id: "4",
    name: "Arjun Singh",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    vehicleType: "car",
    vehicleName: "Honda City",
    vehicleNumber: "DL 04 GH 3456",
    rating: 4.7,
    totalRides: 3450,
    city: "Delhi"
  },
  {
    id: "5",
    name: "Prasad Nair",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    vehicleType: "car",
    vehicleName: "Toyota Innova",
    vehicleNumber: "KA 05 IJ 7890",
    rating: 4.8,
    totalRides: 6780,
    city: "Bangalore"
  },
  {
    id: "6",
    name: "Suresh Patil",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop",
    vehicleType: "bike",
    vehicleName: "TVS Jupiter",
    vehicleNumber: "MH 12 KL 2345",
    rating: 4.5,
    totalRides: 1890,
    city: "Pune"
  }
];
