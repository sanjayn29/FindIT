import { doctors } from "@/data/doctors";
import { jobs } from "@/data/jobs";
import { properties } from "@/data/rentals";
import { courses } from "@/data/education";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Trash2, ExternalLink } from "lucide-react";

interface SavedSectionProps {
  activeTab: string;
}

const formatSalary = (salary: { min: number; max: number }) => {
  const formatLPA = (amount: number) => `₹${(amount / 100000).toFixed(0)}L`;
  return `${formatLPA(salary.min)} - ${formatLPA(salary.max)}`;
};

export function SavedSection({ activeTab }: SavedSectionProps) {
  const savedDoctors = doctors.slice(0, 3);
  const savedJobs = jobs.slice(0, 2);
  const savedHouses = properties.slice(0, 2);
  const savedCourses = courses.slice(0, 2);
  const savedProducts = products.slice(0, 3);

  const renderEmptyState = (type: string) => (
    <div className="text-center py-12">
      <p className="text-muted-foreground">No saved {type} yet</p>
      <Button variant="outline" className="mt-4">Browse {type}</Button>
    </div>
  );

  if (activeTab === "Jobs") {
    if (savedJobs.length === 0) return renderEmptyState("jobs");
    return (
      <div className="space-y-4">
        {savedJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-jobs/10 flex items-center justify-center text-jobs font-bold">
                    {job.company.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-sm text-jobs">{job.company}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" /> {job.location} • {formatSalary(job.salary)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-jobs hover:bg-jobs/90">Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (activeTab === "Houses") {
    if (savedHouses.length === 0) return renderEmptyState("properties");
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {savedHouses.map((property) => (
          <Card key={property.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-rent/10 flex items-center justify-center text-rent text-2xl">
                  🏠
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{property.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {property.location}
                  </p>
                  <p className="text-lg font-bold text-rent mt-1">₹{property.rent.toLocaleString()}/mo</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-rent">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (activeTab === "Courses") {
    if (savedCourses.length === 0) return renderEmptyState("courses");
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {savedCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-education/10 flex items-center justify-center text-education text-2xl">
                  📚
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="text-xs mb-1">{course.category}</Badge>
                  <h3 className="font-semibold text-foreground line-clamp-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.instructor}</p>
                  <p className="text-lg font-bold text-education mt-1">₹{course.price.toLocaleString()}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-education hover:bg-education/90">Enroll</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (activeTab === "Products") {
    if (savedProducts.length === 0) return renderEmptyState("products");
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {savedProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="h-24 bg-sales/10 rounded-lg flex items-center justify-center text-4xl mb-3">
                📦
              </div>
              <h3 className="font-medium text-sm text-foreground line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs">{product.rating}</span>
              </div>
              <p className="text-lg font-bold text-foreground mt-1">₹{product.price.toLocaleString()}</p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="ghost" className="flex-1 text-destructive hover:text-destructive">
                  <Trash2 className="h-3 w-3" />
                </Button>
                <Button size="sm" className="flex-1 bg-sales hover:bg-sales/90 text-xs">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Default: Doctors
  if (savedDoctors.length === 0) return renderEmptyState("doctors");
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {savedDoctors.map((doctor) => (
        <Card key={doctor.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-xl bg-medical/10 flex items-center justify-center text-xl font-bold text-medical">
                {doctor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                <p className="text-sm text-medical">{doctor.specialization}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{doctor.rating}</span>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" className="flex-1">View Profile</Button>
              <Button size="sm" className="flex-1 bg-medical hover:bg-medical/90">Book Now</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
