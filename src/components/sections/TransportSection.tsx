import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, MapPin, Navigation, Car, Clock } from "lucide-react";
import { rideOptions, drivers } from "@/data/transport";

interface TransportSectionProps {
  activeTab: string;
}

export function TransportSection({ activeTab }: TransportSectionProps) {
  if (activeTab === "My Rides") {
    return (
      <div className="space-y-8">
        <div className="section-gradient-transport rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-transport/15 rounded-xl"><Clock className="h-7 w-7 text-transport" /></div>
            <div><h2 className="text-2xl font-display font-bold text-foreground">Ride History</h2><p className="text-muted-foreground">View your past rides</p></div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { from: "Koramangala", to: "Whitefield", date: "Dec 24, 2024", fare: 245, driver: "Raju Kumar", type: "Bike" },
            { from: "Indiranagar", to: "MG Road", date: "Dec 22, 2024", fare: 89, driver: "Mohammed Salim", type: "Auto" },
            { from: "HSR Layout", to: "Electronic City", date: "Dec 20, 2024", fare: 320, driver: "Venkatesh Rao", type: "Cab" },
          ].map((ride, index) => (
            <Card key={index} className="card-interactive group">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Badge variant="outline" className="text-transport border-transport/30">{ride.type}</Badge><span>{ride.date}</span></div>
                    <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-green-500" /><span className="text-sm">{ride.from}</span></div>
                    <div className="flex items-center gap-2"><Navigation className="h-4 w-4 text-transport" /><span className="text-sm">{ride.to}</span></div>
                    <p className="text-xs text-muted-foreground">Driver: {ride.driver}</p>
                  </div>
                  <div className="text-right"><p className="text-lg font-bold text-transport">₹{ride.fare}</p><Button variant="outline" size="sm" className="mt-2 text-xs rounded-lg">Rebook</Button></div>
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
      <div className="section-gradient-transport rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-transport/15 rounded-xl"><Car className="h-7 w-7 text-transport" /></div>
          <div><h2 className="text-2xl font-display font-bold text-foreground">Book a Ride</h2><p className="text-muted-foreground">Fast & affordable transport</p></div>
        </div>
      </div>
      <Card className="card-elevated"><CardContent className="p-5 space-y-4"><h2 className="text-lg font-semibold text-foreground">Where to?</h2><div className="space-y-3"><div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-green-500" /><Input placeholder="Enter pickup location" className="flex-1 rounded-lg" /></div><div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-transport" /><Input placeholder="Enter drop location" className="flex-1 rounded-lg" /></div></div></CardContent></Card>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Choose Your Ride</h3>
        <div className="grid gap-3">
          {rideOptions.map((option) => (
            <Card key={option.id} className="card-interactive group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4"><span className="text-3xl">{option.image}</span><div><h4 className="font-medium text-foreground group-hover:text-transport transition-colors">{option.name}</h4><p className="text-xs text-muted-foreground">{option.description}</p><div className="flex items-center gap-2 mt-1"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /><span className="text-xs text-muted-foreground">{option.rating} • {option.eta}</span></div></div></div>
                  <div className="text-right"><p className="text-lg font-bold text-transport">₹{option.baseFare}</p><p className="text-xs text-muted-foreground">+ ₹{option.pricePerKm}/km</p></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Top Rated Drivers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drivers.slice(0, 6).map((driver) => (
            <Card key={driver.id} className="card-interactive group">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <img src={driver.photo} alt={driver.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1"><h4 className="font-medium text-foreground group-hover:text-transport transition-colors">{driver.name}</h4><p className="text-xs text-muted-foreground">{driver.vehicleName}</p><div className="flex items-center gap-2 mt-1"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /><span className="text-xs">{driver.rating} • {driver.totalRides} rides</span></div></div>
                  <Badge variant="outline" className="capitalize text-transport border-transport/30">{driver.vehicleType}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}