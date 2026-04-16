import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TopNavProps {
  activeSection: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sectionTabs: Record<string, { tabs: string[]; color: string }> = {
  home: { tabs: [], color: "border-home" },
  medical: { tabs: ["Find Doctors", "Specializations", "Hospitals"], color: "border-medical" },
  jobs: { tabs: ["Find Jobs", "Companies"], color: "border-jobs" },
  education: { tabs: ["Find Teachers", "Courses", "Online Classes"], color: "border-education" },
  rent: { tabs: ["Rent Houses", "PG/Hostel", "Rent Things"], color: "border-rent" },
  sales: { tabs: ["Products"], color: "border-sales" },
  transport: { tabs: ["Book Ride", "My Rides"], color: "border-transport" },
  profile: { tabs: ["Basic Info", "Phone Number", "History"], color: "border-profile" },
  saved: { tabs: ["Doctors", "Jobs", "Courses", "Houses", "Products"], color: "border-saved" },
};

export function TopNav({ activeSection, activeTab, onTabChange }: TopNavProps) {
  const config = sectionTabs[activeSection] || { tabs: [], color: "border-primary" };
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-lg font-semibold capitalize md:hidden gradient-text">fiindin</h2>
          <div className="hidden sm:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 bg-muted/50 border-0 transition-all focus:bg-muted" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
          </Button>
          {user ? (
            <Avatar className="h-8 w-8 cursor-pointer transition-transform hover:scale-110">
              <AvatarFallback className="bg-gradient-to-br from-home to-medical text-white text-sm">
                {user.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ) : (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/auth")}
              className="text-muted-foreground hover:text-foreground"
            >
              <User className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      {config.tabs.length > 0 && (
        <div className="flex overflow-x-auto scrollbar-hide border-t border-border">
          {config.tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={cn(
                "px-4 py-2 text-sm font-medium whitespace-nowrap transition-all animate-fade-in",
                activeTab === tab
                  ? `text-foreground border-b-2 ${config.color}`
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ 
                borderColor: activeTab === tab ? `hsl(var(--${activeSection}))` : undefined,
                animationDelay: `${index * 0.05}s`
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
