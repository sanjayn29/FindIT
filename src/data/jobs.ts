export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: { min: number; max: number };
  experience: { min: number; max: number };
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  skills: string[];
  postedDate: string;
  description: string;
  openings: number;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  employees: string;
  rating: number;
  reviews: number;
  openPositions: number;
  location: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Infosys",
    companyLogo: "https://logo.clearbit.com/infosys.com",
    location: "Bangalore",
    salary: { min: 1800000, max: 2500000 },
    experience: { min: 5, max: 8 },
    type: "Full-time",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    postedDate: "2 days ago",
    description: "We are looking for a Senior Software Engineer to join our digital transformation team.",
    openings: 5
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Flipkart",
    companyLogo: "https://logo.clearbit.com/flipkart.com",
    location: "Bangalore",
    salary: { min: 2500000, max: 4000000 },
    experience: { min: 4, max: 7 },
    type: "Full-time",
    skills: ["Product Strategy", "Agile", "Data Analytics", "User Research"],
    postedDate: "1 week ago",
    description: "Lead product initiatives for our e-commerce platform.",
    openings: 2
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "TCS",
    companyLogo: "https://logo.clearbit.com/tcs.com",
    location: "Mumbai",
    salary: { min: 1200000, max: 2000000 },
    experience: { min: 2, max: 5 },
    type: "Full-time",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    postedDate: "3 days ago",
    description: "Join our AI/ML team to build intelligent solutions for clients.",
    openings: 8
  },
  {
    id: "4",
    title: "UI/UX Designer",
    company: "Zomato",
    companyLogo: "https://logo.clearbit.com/zomato.com",
    location: "Gurugram",
    salary: { min: 1000000, max: 1600000 },
    experience: { min: 3, max: 6 },
    type: "Full-time",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    postedDate: "5 days ago",
    description: "Design delightful experiences for millions of food lovers.",
    openings: 3
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "Wipro",
    companyLogo: "https://logo.clearbit.com/wipro.com",
    location: "Hyderabad",
    salary: { min: 1400000, max: 2200000 },
    experience: { min: 4, max: 7 },
    type: "Full-time",
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    postedDate: "1 day ago",
    description: "Build and maintain cloud infrastructure for enterprise clients.",
    openings: 4
  },
  {
    id: "6",
    title: "Frontend Developer",
    company: "Swiggy",
    companyLogo: "https://logo.clearbit.com/swiggy.com",
    location: "Bangalore",
    salary: { min: 1000000, max: 1800000 },
    experience: { min: 2, max: 4 },
    type: "Full-time",
    skills: ["React", "JavaScript", "CSS", "Redux"],
    postedDate: "4 days ago",
    description: "Build fast, responsive web applications for food delivery.",
    openings: 6
  },
  {
    id: "7",
    title: "Marketing Manager",
    company: "Paytm",
    companyLogo: "https://logo.clearbit.com/paytm.com",
    location: "Noida",
    salary: { min: 1500000, max: 2500000 },
    experience: { min: 5, max: 8 },
    type: "Full-time",
    skills: ["Digital Marketing", "SEO", "Campaign Management", "Analytics"],
    postedDate: "1 week ago",
    description: "Drive marketing initiatives for India's leading fintech company.",
    openings: 2
  },
  {
    id: "8",
    title: "Backend Developer",
    company: "Razorpay",
    companyLogo: "https://logo.clearbit.com/razorpay.com",
    location: "Bangalore",
    salary: { min: 1600000, max: 2800000 },
    experience: { min: 3, max: 6 },
    type: "Full-time",
    skills: ["Go", "Python", "PostgreSQL", "Microservices"],
    postedDate: "2 days ago",
    description: "Build scalable payment infrastructure for businesses.",
    openings: 5
  }
];

export const companies: Company[] = [
  {
    id: "1",
    name: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
    industry: "IT Services",
    employees: "250,000+",
    rating: 3.8,
    reviews: 45000,
    openPositions: 1200,
    location: "Bangalore",
    description: "Global leader in next-generation digital services and consulting."
  },
  {
    id: "2",
    name: "Flipkart",
    logo: "https://logo.clearbit.com/flipkart.com",
    industry: "E-commerce",
    employees: "30,000+",
    rating: 4.1,
    reviews: 12000,
    openPositions: 350,
    location: "Bangalore",
    description: "India's leading e-commerce marketplace."
  },
  {
    id: "3",
    name: "TCS",
    logo: "https://logo.clearbit.com/tcs.com",
    industry: "IT Services",
    employees: "600,000+",
    rating: 3.9,
    reviews: 89000,
    openPositions: 2500,
    location: "Mumbai",
    description: "Global IT services, consulting and business solutions leader."
  },
  {
    id: "4",
    name: "Zomato",
    logo: "https://logo.clearbit.com/zomato.com",
    industry: "Food Tech",
    employees: "5,000+",
    rating: 3.7,
    reviews: 3500,
    openPositions: 180,
    location: "Gurugram",
    description: "India's largest food delivery and restaurant discovery platform."
  },
  {
    id: "5",
    name: "Razorpay",
    logo: "https://logo.clearbit.com/razorpay.com",
    industry: "Fintech",
    employees: "3,000+",
    rating: 4.3,
    reviews: 1800,
    openPositions: 120,
    location: "Bangalore",
    description: "Full-stack financial solutions company for businesses."
  }
];
