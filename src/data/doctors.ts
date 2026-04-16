export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  consultationFee: number;
  hospital: string;
  location: string;
  image: string;
  available: boolean;
  languages: string[];
  education: string;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    experience: 15,
    rating: 4.8,
    consultationFee: 800,
    hospital: "Apollo Hospitals",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop",
    available: true,
    languages: ["English", "Hindi", "Kannada"],
    education: "MBBS, MD - Cardiology, AIIMS Delhi"
  },
  {
    id: "2",
    name: "Dr. Rajesh Kumar",
    specialization: "Dermatologist",
    experience: 12,
    rating: 4.6,
    consultationFee: 600,
    hospital: "Fortis Healthcare",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop",
    available: true,
    languages: ["English", "Hindi", "Marathi"],
    education: "MBBS, MD - Dermatology, KEM Hospital"
  },
  {
    id: "3",
    name: "Dr. Anita Desai",
    specialization: "Pediatrician",
    experience: 20,
    rating: 4.9,
    consultationFee: 700,
    hospital: "Max Super Speciality",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop",
    available: true,
    languages: ["English", "Hindi"],
    education: "MBBS, MD - Pediatrics, MAMC Delhi"
  },
  {
    id: "4",
    name: "Dr. Suresh Menon",
    specialization: "Orthopedic",
    experience: 18,
    rating: 4.7,
    consultationFee: 900,
    hospital: "Manipal Hospitals",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop",
    available: false,
    languages: ["English", "Tamil", "Malayalam"],
    education: "MBBS, MS - Orthopedics, CMC Vellore"
  },
  {
    id: "5",
    name: "Dr. Kavita Reddy",
    specialization: "Gynecologist",
    experience: 14,
    rating: 4.8,
    consultationFee: 750,
    hospital: "KIMS Hospital",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop",
    available: true,
    languages: ["English", "Hindi", "Telugu"],
    education: "MBBS, MD - Obstetrics & Gynecology, Osmania Medical College"
  },
  {
    id: "6",
    name: "Dr. Amit Patel",
    specialization: "Neurologist",
    experience: 16,
    rating: 4.5,
    consultationFee: 1000,
    hospital: "Narayana Health",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop",
    available: true,
    languages: ["English", "Hindi", "Gujarati"],
    education: "MBBS, DM - Neurology, NIMHANS"
  },
  {
    id: "7",
    name: "Dr. Lakshmi Nair",
    specialization: "Ophthalmologist",
    experience: 10,
    rating: 4.6,
    consultationFee: 550,
    hospital: "Sankara Nethralaya",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&fit=crop",
    available: true,
    languages: ["English", "Tamil", "Malayalam"],
    education: "MBBS, MS - Ophthalmology, Aravind Eye Hospital"
  },
  {
    id: "8",
    name: "Dr. Vikram Singh",
    specialization: "Psychiatrist",
    experience: 22,
    rating: 4.9,
    consultationFee: 1200,
    hospital: "Medanta Hospital",
    location: "Gurugram",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop",
    available: true,
    languages: ["English", "Hindi", "Punjabi"],
    education: "MBBS, MD - Psychiatry, PGI Chandigarh"
  }
];

export const specializations = [
  { name: "Cardiologist", icon: "Heart", count: 245 },
  { name: "Dermatologist", icon: "Sparkles", count: 189 },
  { name: "Pediatrician", icon: "Baby", count: 312 },
  { name: "Orthopedic", icon: "Bone", count: 156 },
  { name: "Gynecologist", icon: "Users", count: 278 },
  { name: "Neurologist", icon: "Brain", count: 98 },
  { name: "Ophthalmologist", icon: "Eye", count: 134 },
  { name: "Psychiatrist", icon: "Brain", count: 87 },
  { name: "ENT Specialist", icon: "Ear", count: 112 },
  { name: "Dentist", icon: "Smile", count: 423 },
];

export const hospitals = [
  { id: "1", name: "Apollo Hospitals", location: "Bangalore", rating: 4.7, beds: 500, image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=200&fit=crop" },
  { id: "2", name: "Fortis Healthcare", location: "Mumbai", rating: 4.5, beds: 350, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=200&fit=crop" },
  { id: "3", name: "Max Super Speciality", location: "Delhi", rating: 4.6, beds: 400, image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=400&h=200&fit=crop" },
  { id: "4", name: "Manipal Hospitals", location: "Chennai", rating: 4.8, beds: 600, image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=200&fit=crop" },
];
