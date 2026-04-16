import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Phone, Mail, MapPin, Calendar, Clock, Stethoscope, Briefcase, GraduationCap, Home, ShoppingBag, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface ProfileSectionProps {
  activeTab: string;
}

const activityHistory = [
  { type: "medical", icon: Stethoscope, title: "Booked Dr. Priya Sharma", time: "2 hours ago", color: "text-medical" },
  { type: "jobs", icon: Briefcase, title: "Applied for Software Engineer at Infosys", time: "1 day ago", color: "text-jobs" },
  { type: "education", icon: GraduationCap, title: "Enrolled in JEE Crash Course", time: "3 days ago", color: "text-education" },
  { type: "rent", icon: Home, title: "Inquired about 2BHK in Koramangala", time: "5 days ago", color: "text-rent" },
  { type: "sales", icon: ShoppingBag, title: "Ordered iPhone 15 Pro", time: "1 week ago", color: "text-sales" },
];

export function ProfileSection({ activeTab }: ProfileSectionProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/auth");
  };

  if (activeTab === "Phone Number") {
    return (
      <div className="max-w-md mx-auto animate-fade-in">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-profile" />
              Phone Number
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Current Phone Number</Label>
              <div className="flex items-center gap-2 mt-1">
                <Input value="+91 98765 43210" readOnly className="bg-muted" />
                <Badge className="bg-green-500">Verified</Badge>
              </div>
            </div>
            <div>
              <Label>Update Phone Number</Label>
              <Input placeholder="Enter new phone number" className="mt-1" />
            </div>
            <Button className="w-full bg-profile hover:bg-profile/90">Send OTP</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === "History") {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-profile" />
              Activity History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityHistory.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-2 rounded-full bg-background ${activity.color}`}>
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{activity.title}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" /> {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Auth Card */}
      <Card className="card-hover overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-profile via-home to-medical" />
        <CardContent className="p-6">
          {user ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-profile to-home flex items-center justify-center text-lg font-bold text-white">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{user.user_metadata?.full_name || "User"}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="gap-2 border-destructive/50 text-destructive hover:bg-destructive/10"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">Welcome to fiindin</p>
                <p className="text-sm text-muted-foreground">Sign in to access all features</p>
              </div>
              <Button 
                onClick={() => navigate("/auth")}
                className="gap-2 bg-profile hover:bg-profile/90"
              >
                <LogIn className="h-4 w-4" />
                Login / Sign Up
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Profile Info Card */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-profile" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-profile/20 to-profile/5 flex items-center justify-center text-3xl font-bold text-profile mb-4 animate-float">
              {user ? user.email?.charAt(0).toUpperCase() : "RS"}
            </div>
            <Button variant="outline" size="sm" className="transition-all hover:scale-105">Change Photo</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue={user?.user_metadata?.full_name?.split(" ")[0] || "Rahul"} className="mt-1" />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue={user?.user_metadata?.full_name?.split(" ")[1] || "Sharma"} className="mt-1" />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center gap-2 mt-1">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Input id="email" defaultValue={user?.email || "rahul.sharma@email.com"} />
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Label htmlFor="phone">Phone</Label>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
            </div>
            <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Label htmlFor="location">Location</Label>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Input id="location" defaultValue="Bangalore, Karnataka" />
              </div>
            </div>
          </div>
          <Button className="w-full mt-6 bg-profile hover:bg-profile/90 transition-all hover:shadow-lg hover:shadow-profile/25">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
