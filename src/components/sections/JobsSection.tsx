import { jobs, companies } from "@/data/jobs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, Users, Star, Bookmark, Building, TrendingUp } from "lucide-react";

interface JobsSectionProps {
  activeTab: string;
}

const formatSalary = (salary: { min: number; max: number }) => {
  const formatLPA = (amount: number) => `₹${(amount / 100000).toFixed(0)}L`;
  return `${formatLPA(salary.min)} - ${formatLPA(salary.max)}`;
};

const formatExperience = (exp: { min: number; max: number }) => {
  return `${exp.min}-${exp.max} years`;
};

export function JobsSection({ activeTab }: JobsSectionProps) {
  if (activeTab === "Companies") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="section-gradient-jobs rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-jobs/15 rounded-xl">
              <Building className="h-7 w-7 text-jobs" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Top Companies</h2>
              <p className="text-muted-foreground">Explore opportunities at leading organizations</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card 
              key={company.id} 
              className="card-interactive overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-jobs/20 to-jobs/5 flex items-center justify-center text-lg font-display font-bold text-jobs shrink-0">
                    {company.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-jobs transition-colors truncate">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.industry}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {company.rating}
                      </Badge>
                      <span className="text-xs text-muted-foreground">({company.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{company.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" /> {company.employees}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" /> {company.location}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="text-sm font-medium text-jobs">{company.openPositions} open positions</span>
                  <Button size="sm" className="bg-jobs hover:bg-jobs/90 text-jobs-foreground rounded-lg">View Jobs</Button>
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
      <div className="section-gradient-jobs rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-jobs/15 rounded-xl">
              <Briefcase className="h-7 w-7 text-jobs" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Latest Jobs</h2>
              <p className="text-muted-foreground">Find your dream career opportunity</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-jobs bg-jobs/10 px-4 py-2 rounded-xl">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">{jobs.length}+ active listings</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card 
            key={job.id} 
            className="card-interactive group"
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-jobs/20 to-jobs/5 flex items-center justify-center text-lg font-display font-bold text-jobs shrink-0">
                  {job.company.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-jobs transition-colors">{job.title}</h3>
                      <p className="text-jobs font-medium">{job.company}</p>
                    </div>
                    <button className="text-muted-foreground hover:text-jobs transition-colors p-1">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" /> {formatExperience(job.experience)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs rounded-lg">{skill}</Badge>
                    ))}
                    {job.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs rounded-lg">+{job.skills.length - 4}</Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border/60 gap-4">
                    <div>
                      <span className="text-lg font-bold text-foreground">{formatSalary(job.salary)}</span>
                      <span className="text-sm text-muted-foreground ml-2">• Posted {job.postedDate}</span>
                    </div>
                    <Button className="bg-jobs hover:bg-jobs/90 text-jobs-foreground rounded-lg">Apply Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}