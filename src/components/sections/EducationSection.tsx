import { teachers, courses, onlineClasses } from "@/data/education";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users, BookOpen, Video, Bookmark, GraduationCap, Play } from "lucide-react";

interface EducationSectionProps {
  activeTab: string;
}

export function EducationSection({ activeTab }: EducationSectionProps) {
  if (activeTab === "Courses") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="section-gradient-education rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-education/15 rounded-xl">
              <BookOpen className="h-7 w-7 text-education" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Popular Courses</h2>
              <p className="text-muted-foreground">Learn from industry experts</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="card-interactive overflow-hidden group"
            >
              <div className="h-36 bg-gradient-to-br from-education/20 to-education/5 flex items-center justify-center relative">
                <BookOpen className="h-12 w-12 text-education/50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-education/10">
                  <div className="p-3 bg-education rounded-full">
                    <Play className="h-5 w-5 text-education-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-2 rounded-lg">{course.category}</Badge>
                <h3 className="font-semibold text-lg text-foreground line-clamp-2 group-hover:text-education transition-colors">{course.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">By {course.instructor}</p>
                <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> {course.students.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
                  <span className="text-lg font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                  <Button size="sm" className="bg-education hover:bg-education/90 text-education-foreground rounded-lg">Enroll</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "Online Classes") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="section-gradient-education rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-education/15 rounded-xl">
              <Video className="h-7 w-7 text-education" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Live Classes</h2>
              <p className="text-muted-foreground">Join interactive sessions</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {onlineClasses.map((cls) => (
            <Card 
              key={cls.id} 
              className="card-interactive group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-education/20 to-education/5 flex items-center justify-center shrink-0">
                    <Video className="h-7 w-7 text-education" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Badge className={cls.date === "Today" ? "bg-destructive mb-2" : "bg-education mb-2"}>
                          {cls.date === "Today" ? "🔴 Today" : cls.date}
                        </Badge>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-education transition-colors">{cls.title}</h3>
                        <p className="text-education font-medium">{cls.teacher}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> {cls.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4" /> {cls.students} students
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
                      <span className="text-lg font-bold text-foreground">Free</span>
                      <Button className={`rounded-lg ${cls.date === "Today" ? "bg-destructive hover:bg-destructive/90" : "bg-education hover:bg-education/90"}`}>
                        {cls.date === "Today" ? "Join Now" : "Register"}
                      </Button>
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="section-gradient-education rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-education/15 rounded-xl">
            <GraduationCap className="h-7 w-7 text-education" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground">Expert Teachers</h2>
            <p className="text-muted-foreground">Learn from the best educators</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Card 
            key={teacher.id} 
            className="card-interactive overflow-hidden group"
          >
            <CardContent className="p-0">
              <div className="flex p-5 gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-education/20 to-education/5 flex items-center justify-center text-xl font-display font-bold text-education shrink-0">
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground truncate group-hover:text-education transition-colors">{teacher.name}</h3>
                    <button className="text-muted-foreground hover:text-education transition-colors p-1">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-education font-medium">{teacher.subject}</p>
                  <p className="text-xs text-muted-foreground">{teacher.qualification}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {teacher.rating}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{teacher.experience} yrs exp</span>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {teacher.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" /> {teacher.students} students
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {teacher.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs rounded-lg">{lang}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div>
                    <span className="text-lg font-bold text-foreground">₹{teacher.pricePerHour}</span>
                    <span className="text-sm text-muted-foreground"> / hour</span>
                  </div>
                  <Button className="bg-education hover:bg-education/90 text-education-foreground rounded-lg">Book Class</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}