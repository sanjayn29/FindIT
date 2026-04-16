import { doctors, specializations, hospitals } from "@/data/doctors";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Building2, Bookmark, Heart, Stethoscope, Activity } from "lucide-react";

interface MedicalSectionProps {
  activeTab: string;
}

export function MedicalSection({ activeTab }: MedicalSectionProps) {
  if (activeTab === "Specializations") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="section-gradient-medical rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical/15 rounded-xl">
              <Activity className="h-7 w-7 text-medical" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Find Specialists</h2>
              <p className="text-muted-foreground">Choose from {specializations.length} specializations</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {specializations.map((spec) => (
            <Card 
              key={spec.name} 
              className="card-interactive group"
            >
              <CardContent className="p-5 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-medical/10 flex items-center justify-center group-hover:bg-medical/20 transition-colors">
                  <span className="text-2xl">🩺</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-medical transition-colors">{spec.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{spec.count} doctors</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "Hospitals") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="section-gradient-medical rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical/15 rounded-xl">
              <Building2 className="h-7 w-7 text-medical" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Top Hospitals</h2>
              <p className="text-muted-foreground">Quality healthcare near you</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Card 
              key={hospital.id} 
              className="card-interactive overflow-hidden group"
            >
              <div className="h-36 bg-gradient-to-br from-medical/20 to-medical/5 flex items-center justify-center relative">
                <Building2 className="h-14 w-14 text-medical/60" />
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-medical transition-colors">{hospital.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3.5 w-3.5" /> {hospital.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 font-medium">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {hospital.rating}
                  </Badge>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="text-sm text-muted-foreground">{hospital.beds} beds</span>
                  <Button size="sm" className="bg-medical hover:bg-medical/90 text-medical-foreground rounded-lg">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="section-gradient-medical rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-medical/15 rounded-xl">
            <Heart className="h-7 w-7 text-medical" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground">Find Doctors</h2>
            <p className="text-muted-foreground">Book appointments with top specialists</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card 
            key={doctor.id} 
            className="card-interactive overflow-hidden group"
          >
            <CardContent className="p-0">
              <div className="flex p-5 gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-medical/20 to-medical/5 flex items-center justify-center text-2xl font-display font-bold text-medical shrink-0">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground truncate group-hover:text-medical transition-colors">{doctor.name}</h3>
                    <button className="text-muted-foreground hover:text-medical transition-colors p-1">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-medical font-medium">{doctor.specialization}</p>
                  <p className="text-sm text-muted-foreground">{doctor.experience} years exp.</p>
                  <Badge variant="secondary" className="flex items-center gap-1 text-xs mt-2 w-fit">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {doctor.rating}
                  </Badge>
                </div>
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {doctor.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {doctor.available ? "Available" : "Unavailable"}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div>
                    <span className="text-lg font-bold text-foreground">₹{doctor.consultationFee}</span>
                    <span className="text-sm text-muted-foreground"> / visit</span>
                  </div>
                  <Button className="bg-medical hover:bg-medical/90 text-medical-foreground rounded-lg">Book Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}