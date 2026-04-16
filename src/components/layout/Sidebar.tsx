import { Home, Stethoscope, Briefcase, GraduationCap, Building, ShoppingCart, User, Bookmark, Car } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "home", label: "Home", icon: Home, color: "text-home" },
  { id: "medical", label: "Medical", icon: Stethoscope, color: "text-medical" },
  { id: "jobs", label: "Jobs", icon: Briefcase, color: "text-jobs" },
  { id: "education", label: "Education", icon: GraduationCap, color: "text-education" },
  { id: "rent", label: "Rent", icon: Building, color: "text-rent" },
  { id: "sales", label: "Online Sales", icon: ShoppingCart, color: "text-sales" },
  { id: "transport", label: "Transport", icon: Car, color: "text-transport" },
  { id: "profile", label: "Profile", icon: User, color: "text-profile" },
  { id: "saved", label: "Saved", icon: Bookmark, color: "text-saved" },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-16 lg:w-60 bg-card border-r border-border/60 h-screen sticky top-0 transition-all duration-200">
      <div className="p-4 lg:p-5 border-b border-border/60">
        <h1 className="text-xl font-display font-bold text-home hidden lg:block">fiindin</h1>
        <span className="text-xl font-display font-bold text-home lg:hidden">f</span>
      </div>
      <nav className="flex-1 py-2">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted/50 transition-all duration-150 relative",
                isActive && "bg-muted"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r-full" 
                     style={{ backgroundColor: `hsl(var(--${section.id}))` }} />
              )}
              <Icon className={cn("h-5 w-5", isActive ? section.color : "text-muted-foreground")} />
              <span className={cn("hidden lg:block text-sm font-medium", isActive && "text-foreground")}>
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}