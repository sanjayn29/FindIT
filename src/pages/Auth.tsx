import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");
const nameSchema = z.string().min(2, "Name must be at least 2 characters");

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string }>({});
  const navigate = useNavigate();
  const { toast } = useToast();



  const validateForm = () => {
    const newErrors: { email?: string; password?: string; name?: string } = {};

    try {
      emailSchema.parse(email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.email = e.errors[0].message;
      }
    }

    try {
      passwordSchema.parse(password);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.password = e.errors[0].message;
      }
    }

    if (!isLogin) {
      try {
        nameSchema.parse(fullName);
      } catch (e) {
        if (e instanceof z.ZodError) {
          newErrors.name = e.errors[0].message;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: isLogin ? "Welcome back! (Demo)" : "Account created! (Demo)",
        description: isLogin
          ? "This is a demo. No real authentication is performed."
          : "This is a demo. No real account was created.",
      });
      if (isLogin) {
        navigate("/");
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-home via-medical to-jobs relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          <div className="mb-8 flex items-center gap-3 animate-fade-in">
            <Sparkles className="w-12 h-12" />
            <h1 className="text-5xl font-bold tracking-tight">fiindin</h1>
          </div>
          
          <p className="text-xl text-center max-w-md opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your all-in-one platform for discovery
          </p>
          
          <div className="mt-12 grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { label: "Doctors", color: "bg-medical" },
              { label: "Jobs", color: "bg-jobs" },
              { label: "Education", color: "bg-education" },
              { label: "Rentals", color: "bg-rent" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`${item.color} px-6 py-3 rounded-xl text-center font-medium shadow-lg transform hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-8 h-8 text-home" />
              <h1 className="text-3xl font-bold text-foreground">fiindin</h1>
            </div>
            <p className="text-muted-foreground">Your all-in-one discovery platform</p>
          </div>

          {/* Form Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Sign up to start discovering"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`pl-10 h-12 bg-secondary/50 border-border focus:border-home transition-colors ${errors.name ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 h-12 bg-secondary/50 border-border focus:border-home transition-colors ${errors.email ? "border-destructive" : ""}`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-10 pr-10 h-12 bg-secondary/50 border-border focus:border-home transition-colors ${errors.password ? "border-destructive" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-home hover:bg-home/90 text-home-foreground font-semibold rounded-xl shadow-lg shadow-home/25 transition-all duration-300 hover:shadow-xl hover:shadow-home/30 group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Toggle */}
          <div className="text-center">
            <p className="text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                }}
                className="text-home font-semibold hover:underline transition-all"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
