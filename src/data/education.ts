export interface Teacher {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: number;
  rating: number;
  pricePerHour: number;
  location: string;
  image: string;
  languages: string[];
  mode: ("Online" | "Offline")[];
  students: number;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  price: number;
  rating: number;
  students: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  description: string;
}

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Prof. Arun Sharma",
    subject: "Mathematics (JEE/NEET)",
    qualification: "M.Sc Mathematics, IIT Delhi",
    experience: 18,
    rating: 4.9,
    pricePerHour: 1500,
    location: "Kota",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop",
    languages: ["English", "Hindi"],
    mode: ["Online", "Offline"],
    students: 5000
  },
  {
    id: "2",
    name: "Dr. Meera Iyer",
    subject: "Physics (JEE Advanced)",
    qualification: "Ph.D Physics, IISc Bangalore",
    experience: 15,
    rating: 4.8,
    pricePerHour: 2000,
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    languages: ["English", "Hindi", "Kannada"],
    mode: ["Online"],
    students: 3200
  },
  {
    id: "3",
    name: "Rakesh Yadav",
    subject: "UPSC General Studies",
    qualification: "IAS (Retd.), Delhi University",
    experience: 25,
    rating: 4.9,
    pricePerHour: 2500,
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    languages: ["English", "Hindi"],
    mode: ["Online", "Offline"],
    students: 8500
  },
  {
    id: "4",
    name: "Neha Gupta",
    subject: "English (IELTS/TOEFL)",
    qualification: "M.A English Literature, JNU",
    experience: 10,
    rating: 4.7,
    pricePerHour: 800,
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    languages: ["English", "Hindi"],
    mode: ["Online"],
    students: 2100
  },
  {
    id: "5",
    name: "Dr. Sunil Verma",
    subject: "Chemistry (NEET)",
    qualification: "Ph.D Chemistry, BHU",
    experience: 20,
    rating: 4.8,
    pricePerHour: 1800,
    location: "Varanasi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    languages: ["English", "Hindi"],
    mode: ["Online", "Offline"],
    students: 4500
  },
  {
    id: "6",
    name: "Priya Krishnan",
    subject: "Carnatic Music",
    qualification: "Sangeet Visharad, Chennai Music Academy",
    experience: 12,
    rating: 4.9,
    pricePerHour: 1000,
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    languages: ["English", "Tamil", "Telugu"],
    mode: ["Online", "Offline"],
    students: 850
  }
];

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete JEE Main & Advanced 2024",
    instructor: "Allen Career Institute",
    category: "Engineering Entrance",
    duration: "12 months",
    price: 75000,
    rating: 4.7,
    students: 125000,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop",
    description: "Comprehensive preparation for JEE Main and Advanced with expert faculty."
  },
  {
    id: "2",
    title: "NEET UG Complete Course",
    instructor: "Aakash Institute",
    category: "Medical Entrance",
    duration: "12 months",
    price: 85000,
    rating: 4.6,
    students: 98000,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=200&fit=crop",
    description: "Complete NEET preparation with biology, physics and chemistry modules."
  },
  {
    id: "3",
    title: "UPSC CSE Foundation Course",
    instructor: "Unacademy",
    category: "Civil Services",
    duration: "18 months",
    price: 45000,
    rating: 4.5,
    students: 67000,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=200&fit=crop",
    description: "Foundation course for UPSC Civil Services Examination."
  },
  {
    id: "4",
    title: "Full Stack Web Development",
    instructor: "Coding Ninjas",
    category: "Programming",
    duration: "6 months",
    price: 35000,
    rating: 4.8,
    students: 45000,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    description: "Learn MERN stack development from scratch to advanced."
  },
  {
    id: "5",
    title: "Data Science & Machine Learning",
    instructor: "UpGrad",
    category: "Data Science",
    duration: "11 months",
    price: 150000,
    rating: 4.4,
    students: 28000,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    description: "Comprehensive data science program with industry projects."
  },
  {
    id: "6",
    title: "CAT 2024 Complete Preparation",
    instructor: "IMS Learning",
    category: "MBA Entrance",
    duration: "8 months",
    price: 28000,
    rating: 4.6,
    students: 35000,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    description: "Complete CAT preparation with mock tests and mentorship."
  }
];

export const onlineClasses = [
  { id: "1", title: "Live JEE Physics Session", teacher: "Dr. HC Verma", time: "10:00 AM", date: "Today", students: 1200 },
  { id: "2", title: "NEET Biology Doubt Session", teacher: "Dr. Meera Iyer", time: "2:00 PM", date: "Today", students: 850 },
  { id: "3", title: "UPSC Current Affairs", teacher: "Rakesh Yadav", time: "6:00 PM", date: "Today", students: 2500 },
  { id: "4", title: "CAT Quant Shortcuts", teacher: "Arun Sharma", time: "8:00 PM", date: "Tomorrow", students: 600 },
];
