export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
  seller: string;
  highlights: string[];
  deliveryDays: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max (256GB) - Natural Titanium",
    brand: "Apple",
    category: "Mobiles",
    price: 156900,
    originalPrice: 179900,
    discount: 13,
    rating: 4.6,
    reviews: 12453,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    inStock: true,
    seller: "RetailNet",
    highlights: ["A17 Pro Chip", "48MP Camera", "Titanium Design", "USB-C"],
    deliveryDays: 2
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB)",
    brand: "Samsung",
    category: "Mobiles",
    price: 129999,
    originalPrice: 144999,
    discount: 10,
    rating: 4.5,
    reviews: 8765,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    inStock: true,
    seller: "Samsung India",
    highlights: ["200MP Camera", "S Pen", "Galaxy AI", "5000mAh Battery"],
    deliveryDays: 3
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 26990,
    originalPrice: 34990,
    discount: 23,
    rating: 4.7,
    reviews: 5678,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    inStock: true,
    seller: "SuperComNet",
    highlights: ["Industry-leading ANC", "30hr Battery", "Multipoint Connection"],
    deliveryDays: 2
  },
  {
    id: "4",
    name: "LG 65-inch OLED C3 4K Smart TV",
    brand: "LG",
    category: "TVs",
    price: 169990,
    originalPrice: 249990,
    discount: 32,
    rating: 4.8,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    inStock: true,
    seller: "Electronics Bazaar",
    highlights: ["OLED evo", "α9 Gen6 AI Processor", "Dolby Vision IQ"],
    deliveryDays: 5
  },
  {
    id: "5",
    name: "Nike Air Jordan 1 Retro High OG",
    brand: "Nike",
    category: "Fashion",
    price: 14995,
    originalPrice: 16995,
    discount: 12,
    rating: 4.4,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    inStock: true,
    seller: "Nike Official",
    highlights: ["Genuine Leather", "Air-Sole Unit", "Iconic Design"],
    deliveryDays: 4
  },
  {
    id: "6",
    name: "HP Pavilion Gaming Laptop 15",
    brand: "HP",
    category: "Laptops",
    price: 64990,
    originalPrice: 79990,
    discount: 19,
    rating: 4.3,
    reviews: 6543,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    inStock: true,
    seller: "HP World",
    highlights: ["Intel i5 12th Gen", "RTX 3050", "16GB RAM", "512GB SSD"],
    deliveryDays: 3
  },
  {
    id: "7",
    name: "Dyson V15 Detect Cordless Vacuum",
    brand: "Dyson",
    category: "Home",
    price: 62900,
    originalPrice: 69900,
    discount: 10,
    rating: 4.6,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    inStock: true,
    seller: "Dyson India",
    highlights: ["Laser Dust Detection", "60min Runtime", "LCD Screen"],
    deliveryDays: 4
  },
  {
    id: "8",
    name: "boAt Airdopes 441 TWS Earbuds",
    brand: "boAt",
    category: "Electronics",
    price: 1299,
    originalPrice: 3990,
    discount: 67,
    rating: 4.1,
    reviews: 98765,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    inStock: true,
    seller: "boAt Lifestyle",
    highlights: ["IPX7 Water Resistant", "30hr Playback", "Touch Controls"],
    deliveryDays: 2
  },
  {
    id: "9",
    name: "Prestige Induction Cooktop PIC 20",
    brand: "Prestige",
    category: "Home",
    price: 2199,
    originalPrice: 3495,
    discount: 37,
    rating: 4.2,
    reviews: 45678,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    inStock: true,
    seller: "Prestige Store",
    highlights: ["1600W Power", "Indian Menu", "Auto Voltage Regulator"],
    deliveryDays: 3
  },
  {
    id: "10",
    name: "Levi's 511 Slim Fit Jeans",
    brand: "Levi's",
    category: "Fashion",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.3,
    reviews: 23456,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    inStock: true,
    seller: "Levi's Official",
    highlights: ["Stretch Denim", "Slim Fit", "Classic 5-Pocket"],
    deliveryDays: 2
  }
];

export const productCategories = [
  { name: "Mobiles", icon: "Smartphone", count: 15000 },
  { name: "Electronics", icon: "Headphones", count: 25000 },
  { name: "Fashion", icon: "Shirt", count: 50000 },
  { name: "Home", icon: "Home", count: 18000 },
  { name: "Laptops", icon: "Laptop", count: 8000 },
  { name: "TVs", icon: "Tv", count: 5000 },
  { name: "Beauty", icon: "Sparkles", count: 30000 },
  { name: "Sports", icon: "Dumbbell", count: 12000 },
];

export const flashDeals = [
  { id: "1", name: "Realme Buds Q2", price: 999, originalPrice: 2499, discount: 60, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop", endsIn: "2h 30m" },
  { id: "2", name: "Fire-Boltt Phoenix", price: 1299, originalPrice: 7999, discount: 84, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop", endsIn: "4h 15m" },
  { id: "3", name: "Amazon Echo Dot 5th Gen", price: 2999, originalPrice: 5499, discount: 45, image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=200&h=200&fit=crop", endsIn: "1h 45m" },
];
