import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { TopNav } from "./TopNav";
import { HomeSection } from "@/components/sections/HomeSection";
import { MedicalSection } from "@/components/sections/MedicalSection";
import { JobsSection } from "@/components/sections/JobsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { RentSection } from "@/components/sections/RentSection";
import { SalesSection } from "@/components/sections/SalesSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { SavedSection } from "@/components/sections/SavedSection";
import { TransportSection } from "@/components/sections/TransportSection";

const defaultTabs: Record<string, string> = {
  home: "",
  medical: "Find Doctors",
  jobs: "Find Jobs",
  education: "Find Teachers",
  rent: "Rent Houses",
  sales: "Products",
  transport: "Book Ride",
  profile: "Basic Info",
  saved: "Doctors",
};

export function MainLayout() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] = useState(defaultTabs[activeSection]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setActiveTab(defaultTabs[section]);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <HomeSection />;
      case "medical": return <MedicalSection activeTab={activeTab} />;
      case "jobs": return <JobsSection activeTab={activeTab} />;
      case "education": return <EducationSection activeTab={activeTab} />;
      case "rent": return <RentSection activeTab={activeTab} />;
      case "sales": return <SalesSection activeTab={activeTab} />;
      case "transport": return <TransportSection activeTab={activeTab} />;
      case "profile": return <ProfileSection activeTab={activeTab} />;
      case "saved": return <SavedSection activeTab={activeTab} />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div className="flex-1 flex flex-col pb-16 md:pb-0">
        <TopNav activeSection={activeSection} activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-4 md:p-6 overflow-auto animate-fade-in">
          {renderSection()}
        </main>
      </div>
      <BottomNav activeSection={activeSection} onSectionChange={handleSectionChange} />
    </div>
  );
}
