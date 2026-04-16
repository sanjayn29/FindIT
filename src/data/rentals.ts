export interface Property {
  id: string;
  title: string;
  type: "Apartment" | "House" | "Villa" | "Studio";
  bhk: number;
  rent: number;
  deposit: number;
  location: string;
  area: number;
  furnishing: "Fully Furnished" | "Semi Furnished" | "Unfurnished";
  amenities: string[];
  image: string;
  available: boolean;
  postedDate: string;
}

export interface PG {
  id: string;
  name: string;
  type: "Boys" | "Girls" | "Co-living";
  rent: number;
  location: string;
  amenities: string[];
  meals: boolean;
  image: string;
  rating: number;
  occupancy: "Single" | "Double" | "Triple";
}

export interface RentalItem {
  id: string;
  name: string;
  category: string;
  pricePerDay: number;
  pricePerMonth: number;
  deposit: number;
  location: string;
  image: string;
  available: boolean;
  owner: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Spacious 2BHK in Koramangala",
    type: "Apartment",
    bhk: 2,
    rent: 28000,
    deposit: 100000,
    location: "Koramangala, Bangalore",
    area: 1100,
    furnishing: "Fully Furnished",
    amenities: ["Gym", "Swimming Pool", "Parking", "Security", "Power Backup"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    available: true,
    postedDate: "2 days ago"
  },
  {
    id: "2",
    title: "Modern 3BHK in Bandra West",
    type: "Apartment",
    bhk: 3,
    rent: 85000,
    deposit: 300000,
    location: "Bandra West, Mumbai",
    area: 1800,
    furnishing: "Fully Furnished",
    amenities: ["Sea View", "Gym", "Club House", "Parking", "Security"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    available: true,
    postedDate: "1 week ago"
  },
  {
    id: "3",
    title: "Cozy 1BHK near Hinjewadi",
    type: "Apartment",
    bhk: 1,
    rent: 15000,
    deposit: 50000,
    location: "Hinjewadi, Pune",
    area: 650,
    furnishing: "Semi Furnished",
    amenities: ["Parking", "Security", "Power Backup"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    available: true,
    postedDate: "3 days ago"
  },
  {
    id: "4",
    title: "Luxury Villa in Jubilee Hills",
    type: "Villa",
    bhk: 4,
    rent: 120000,
    deposit: 500000,
    location: "Jubilee Hills, Hyderabad",
    area: 3500,
    furnishing: "Fully Furnished",
    amenities: ["Garden", "Swimming Pool", "Home Theatre", "Servant Quarters"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    available: true,
    postedDate: "5 days ago"
  },
  {
    id: "5",
    title: "Budget 2BHK in Noida Sector 62",
    type: "Apartment",
    bhk: 2,
    rent: 18000,
    deposit: 60000,
    location: "Sector 62, Noida",
    area: 950,
    furnishing: "Unfurnished",
    amenities: ["Parking", "Security", "Lift"],
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    available: true,
    postedDate: "1 day ago"
  },
  {
    id: "6",
    title: "Studio Apartment in Indiranagar",
    type: "Studio",
    bhk: 1,
    rent: 22000,
    deposit: 80000,
    location: "Indiranagar, Bangalore",
    area: 450,
    furnishing: "Fully Furnished",
    amenities: ["Gym", "Rooftop", "Laundry", "WiFi"],
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop",
    available: false,
    postedDate: "4 days ago"
  }
];

export const pgs: PG[] = [
  {
    id: "1",
    name: "Stanza Living - Acropolis",
    type: "Boys",
    rent: 12000,
    location: "Koramangala, Bangalore",
    amenities: ["WiFi", "Laundry", "Housekeeping", "TV Lounge", "Gym"],
    meals: true,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
    rating: 4.5,
    occupancy: "Double"
  },
  {
    id: "2",
    name: "Zolo Stays - Harmony House",
    type: "Girls",
    rent: 10000,
    location: "Andheri East, Mumbai",
    amenities: ["WiFi", "AC", "Security", "Power Backup"],
    meals: true,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop",
    rating: 4.3,
    occupancy: "Triple"
  },
  {
    id: "3",
    name: "Nestaway - Urban Living",
    type: "Co-living",
    rent: 15000,
    location: "Whitefield, Bangalore",
    amenities: ["WiFi", "Gym", "Game Room", "Cafe", "Coworking"],
    meals: false,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
    rating: 4.6,
    occupancy: "Single"
  },
  {
    id: "4",
    name: "OYO Life - Tech Park PG",
    type: "Boys",
    rent: 8500,
    location: "Hinjewadi, Pune",
    amenities: ["WiFi", "Parking", "TV", "RO Water"],
    meals: true,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop",
    rating: 4.0,
    occupancy: "Double"
  }
];

export const rentalItems: RentalItem[] = [
  {
    id: "1",
    name: "Canon EOS 5D Mark IV",
    category: "Camera",
    pricePerDay: 1500,
    pricePerMonth: 25000,
    deposit: 50000,
    location: "Andheri, Mumbai",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    available: true,
    owner: "PhotoHub Rentals"
  },
  {
    id: "2",
    name: "Sony PlayStation 5",
    category: "Gaming",
    pricePerDay: 500,
    pricePerMonth: 8000,
    deposit: 15000,
    location: "Koramangala, Bangalore",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    available: true,
    owner: "GameZone Rentals"
  },
  {
    id: "3",
    name: "MacBook Pro 16-inch M3",
    category: "Electronics",
    pricePerDay: 800,
    pricePerMonth: 15000,
    deposit: 80000,
    location: "Gurgaon",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    available: true,
    owner: "TechRent India"
  },
  {
    id: "4",
    name: "Wedding Photography Kit",
    category: "Photography",
    pricePerDay: 3000,
    pricePerMonth: 50000,
    deposit: 100000,
    location: "Connaught Place, Delhi",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
    available: false,
    owner: "WedShoot Rentals"
  },
  {
    id: "5",
    name: "Portable AC 1.5 Ton",
    category: "Appliances",
    pricePerDay: 300,
    pricePerMonth: 5000,
    deposit: 10000,
    location: "HSR Layout, Bangalore",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
    available: true,
    owner: "CoolRent Services"
  }
];
