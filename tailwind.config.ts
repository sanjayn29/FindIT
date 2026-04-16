import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        home: {
          DEFAULT: "hsl(var(--home))",
          foreground: "hsl(var(--home-foreground))",
        },
        medical: {
          DEFAULT: "hsl(var(--medical))",
          foreground: "hsl(var(--medical-foreground))",
        },
        jobs: {
          DEFAULT: "hsl(var(--jobs))",
          foreground: "hsl(var(--jobs-foreground))",
        },
        education: {
          DEFAULT: "hsl(var(--education))",
          foreground: "hsl(var(--education-foreground))",
        },
        rent: {
          DEFAULT: "hsl(var(--rent))",
          foreground: "hsl(var(--rent-foreground))",
        },
        sales: {
          DEFAULT: "hsl(var(--sales))",
          foreground: "hsl(var(--sales-foreground))",
        },
        profile: {
          DEFAULT: "hsl(var(--profile))",
          foreground: "hsl(var(--profile-foreground))",
        },
        saved: {
          DEFAULT: "hsl(var(--saved))",
          foreground: "hsl(var(--saved-foreground))",
        },
        transport: {
          DEFAULT: "hsl(var(--transport))",
          foreground: "hsl(var(--transport-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px hsl(var(--foreground) / 0.08), 0 4px 16px -4px hsl(var(--foreground) / 0.05)",
        premium: "0 4px 12px -2px hsl(var(--foreground) / 0.08), 0 8px 24px -8px hsl(var(--foreground) / 0.1)",
        glow: "0 0 20px -5px hsl(var(--primary) / 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;