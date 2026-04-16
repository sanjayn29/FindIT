import { Search, Stethoscope, Briefcase, GraduationCap, Home, ShoppingBag, Car, ArrowRight, TrendingUp, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const quickLinks = [
  { icon: Stethoscope, label: "Find Doctors", description: "Book appointments", color: "text-medical", bg: "bg-medical/10", borderColor: "hover:border-medical/50" },
  { icon: Briefcase, label: "Browse Jobs", description: "Career opportunities", color: "text-jobs", bg: "bg-jobs/10", borderColor: "hover:border-jobs/50" },
  { icon: GraduationCap, label: "Find Teachers", description: "Expert tutors", color: "text-education", bg: "bg-education/10", borderColor: "hover:border-education/50" },
  { icon: Home, label: "Rent Houses", description: "Properties & PGs", color: "text-rent", bg: "bg-rent/10", borderColor: "hover:border-rent/50" },
  { icon: ShoppingBag, label: "Shop Products", description: "Best deals", color: "text-sales", bg: "bg-sales/10", borderColor: "hover:border-sales/50" },
  { icon: Car, label: "Book Rides", description: "Fast transport", color: "text-transport", bg: "bg-transport/10", borderColor: "hover:border-transport/50" },
];

const trendingItems = [
  { category: "Medical", title: "Dr. Priya Sharma", subtitle: "Cardiologist • 4.9★", color: "bg-medical", icon: Stethoscope },
  { category: "Jobs", title: "Software Engineer at Infosys", subtitle: "Bangalore • ₹12-18 LPA", color: "bg-jobs", icon: Briefcase },
  { category: "Education", title: "JEE Advanced Crash Course", subtitle: "By Prof. Amit Kumar • 4.8★", color: "bg-education", icon: GraduationCap },
  { category: "Rent", title: "2BHK in Koramangala", subtitle: "Bangalore • ₹25,000/mo", color: "bg-rent", icon: Home },
  { category: "Sales", title: "iPhone 15 Pro", subtitle: "₹1,34,900 • 15% off", color: "bg-sales", icon: ShoppingBag },
  { category: "Transport", title: "Bike Taxi Available", subtitle: "Starting ₹15 • 5 mins away", color: "bg-transport", icon: Car },
];

export function HomeSection() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-home via-home/90 to-medical/80 p-8 md:p-12">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-white/90">All-in-one Discovery Platform</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Welcome{user ? `, ${user.user_metadata?.full_name?.split(" ")[0] || "User"}` : " to fiindin"}
          </h1>
          
          <p className="text-lg text-white/85 mb-8 max-w-lg leading-relaxed">
            Discover doctors, jobs, education, rentals & more — all in one place
          </p>
          
          {!user && (
            <Button 
              onClick={() => navigate("/auth")}
              className="bg-white text-home hover:bg-white/95 font-semibold px-8 py-6 rounded-xl shadow-lg group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search for doctors, jobs, courses, rentals, products..." 
          className="pl-12 h-14 text-base rounded-2xl border-2 border-border/80 focus:border-home bg-card shadow-soft transition-all"
        />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {quickLinks.map((link) => (
          <Card 
            key={link.label} 
            className={`card-interactive ${link.borderColor}`}
          >
            <CardContent className="p-5 flex flex-col items-center text-center">
              <div className={`p-4 rounded-2xl ${link.bg} mb-4`}>
                <link.icon className={`h-7 w-7 ${link.color}`} />
              </div>
              <span className="font-semibold text-foreground mb-1">{link.label}</span>
              <span className="text-xs text-muted-foreground">{link.description}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trending Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-home/10 rounded-xl">
            <TrendingUp className="w-5 h-5 text-home" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground">Trending Now</h2>
            <p className="text-sm text-muted-foreground">Popular on fiindin</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingItems.map((item, index) => (
            <Card 
              key={index} 
              className="card-interactive overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-5">
                  <div className={`p-3 rounded-xl ${item.color}/10`}>
                    <item.icon className={`h-5 w-5 ${item.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${item.color} text-white mb-2`}>
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
        {[
          { label: "Verified Doctors", value: "10,000+", icon: Stethoscope, color: "text-medical", bg: "bg-medical/10" },
          { label: "Active Jobs", value: "50,000+", icon: Briefcase, color: "text-jobs", bg: "bg-jobs/10" },
          { label: "Expert Teachers", value: "5,000+", icon: GraduationCap, color: "text-education", bg: "bg-education/10" },
          { label: "Happy Users", value: "1M+", icon: Users, color: "text-home", bg: "bg-home/10" },
        ].map((stat) => (
          <Card key={stat.label} className="stat-card">
            <div className={`p-3 rounded-xl ${stat.bg} w-fit mx-auto mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}