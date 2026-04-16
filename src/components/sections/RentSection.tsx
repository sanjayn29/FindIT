import { properties, pgs, rentalItems } from "@/data/rentals";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Square, Bookmark, Users, Utensils, Star, Building2, Package } from "lucide-react";

interface RentSectionProps {
  activeTab: string;
}

export function RentSection({ activeTab }: RentSectionProps) {
  if (activeTab === "PG/Hostel") {
    return (
      <div className="space-y-8">
        <div className="section-gradient-rent rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rent/15 rounded-xl">
              <Building2 className="h-7 w-7 text-rent" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">PG & Hostels</h2>
              <p className="text-muted-foreground">Find comfortable accommodation</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgs.map((pg) => (
            <Card key={pg.id} className="card-interactive overflow-hidden group">
              <div className="h-36 bg-gradient-to-br from-rent/20 to-rent/5 flex items-center justify-center relative">
                <Home className="h-12 w-12 text-rent/50" />
                <Badge className="absolute top-3 right-3 bg-rent">{pg.type}</Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-rent transition-colors">{pg.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3 w-3" /> {pg.location}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="flex items-center gap-1 text-xs"><Star className="h-3 w-3 fill-amber-400 text-amber-400" />{pg.rating}</Badge>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
                  <div><span className="text-lg font-bold text-foreground">₹{pg.rent.toLocaleString()}</span><span className="text-sm text-muted-foreground"> / month</span></div>
                  <Button size="sm" className="bg-rent hover:bg-rent/90 rounded-lg">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "Rent Things") {
    return (
      <div className="space-y-8">
        <div className="section-gradient-rent rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rent/15 rounded-xl"><Package className="h-7 w-7 text-rent" /></div>
            <div><h2 className="text-2xl font-display font-bold text-foreground">Rent Items</h2><p className="text-muted-foreground">Rent anything you need</p></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rentalItems.map((item) => (
            <Card key={item.id} className="card-interactive overflow-hidden group">
              <div className="h-32 bg-gradient-to-br from-rent/20 to-rent/5 flex items-center justify-center"><span className="text-4xl">📦</span></div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 rounded-lg">{item.category}</Badge>
                <h3 className="font-semibold text-foreground group-hover:text-rent transition-colors">{item.name}</h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
                  <div><span className="text-lg font-bold text-foreground">₹{item.pricePerDay}</span><span className="text-sm text-muted-foreground"> / day</span></div>
                  <Button size="sm" className="bg-rent hover:bg-rent/90 rounded-lg">Rent Now</Button>
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
      <div className="section-gradient-rent rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-rent/15 rounded-xl"><Home className="h-7 w-7 text-rent" /></div>
          <div><h2 className="text-2xl font-display font-bold text-foreground">Properties for Rent</h2><p className="text-muted-foreground">Find your perfect home</p></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="card-interactive overflow-hidden group">
            <div className="h-40 bg-gradient-to-br from-rent/20 to-rent/5 flex items-center justify-center relative">
              <Home className="h-14 w-14 text-rent/50" />
              <button className="absolute top-3 right-3 p-2 bg-card/80 rounded-full text-muted-foreground hover:text-rent transition-colors"><Bookmark className="h-4 w-4" /></button>
              {property.available && <Badge className="absolute top-3 left-3 bg-green-500">Available</Badge>}
            </div>
            <CardContent className="p-5">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-rent transition-colors">{property.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3 w-3" /> {property.location}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Home className="h-4 w-4" /> {property.bhk} BHK</span>
                <span className="flex items-center gap-1"><Square className="h-4 w-4" /> {property.area} sqft</span>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
                <div><span className="text-xl font-bold text-foreground">₹{property.rent.toLocaleString()}</span><span className="text-sm text-muted-foreground"> / month</span></div>
                <Button className="bg-rent hover:bg-rent/90 rounded-lg">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}