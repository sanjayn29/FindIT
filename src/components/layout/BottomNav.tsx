import { Home, Stethoscope, Briefcase, GraduationCap, MoreHorizontal, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Building, ShoppingCart, User, Bookmark } from "lucide-react";

interface BottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const mainSections = [
  { id: "home", label: "Home", icon: Home, color: "text-home" },
  { id: "medical", label: "Medical", icon: Stethoscope, color: "text-medical" },
  { id: "jobs", label: "Jobs", icon: Briefcase, color: "text-jobs" },
  { id: "transport", label: "Transport", icon: Car, color: "text-transport" },
];

const moreSections = [
  { id: "education", label: "Education", icon: GraduationCap, color: "text-education" },
  { id: "rent", label: "Rent", icon: Building, color: "text-rent" },
  { id: "sales", label: "Online Sales", icon: ShoppingCart, color: "text-sales" },
  { id: "profile", label: "Profile", icon: User, color: "text-profile" },
  { id: "saved", label: "Saved", icon: Bookmark, color: "text-saved" },
];

export function BottomNav({ activeSection, onSectionChange }: BottomNavProps) {
  const isMoreActive = moreSections.some(s => s.id === activeSection);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {mainSections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className="flex flex-col items-center gap-1 p-2"
            >
              <Icon className={cn("h-5 w-5", isActive ? section.color : "text-muted-foreground")} />
              <span className={cn("text-xs", isActive ? "text-foreground font-medium" : "text-muted-foreground")}>
                {section.label}
              </span>
            </button>
          );
        })}
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center gap-1 p-2">
              <MoreHorizontal className={cn("h-5 w-5", isMoreActive ? "text-foreground" : "text-muted-foreground")} />
              <span className={cn("text-xs", isMoreActive ? "text-foreground font-medium" : "text-muted-foreground")}>More</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto">
            <div className="grid grid-cols-4 gap-4 py-4">
              {moreSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => onSectionChange(section.id)}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted"
                  >
                    <Icon className={cn("h-6 w-6", isActive ? section.color : "text-muted-foreground")} />
                    <span className={cn("text-xs", isActive ? "text-foreground font-medium" : "text-muted-foreground")}>
                      {section.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
