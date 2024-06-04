/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      boxShadow: {
        '3xl': '0px 15px 30px 0px rgba(191, 181, 255, 0.15)'
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
        lemon: "hsl(var(--lemon))",
        bgcgray: "hsl(var(--cgray))",
        gradient:
          "linear-gradient(260deg, rgba(255,255,255,1) 0%, rgba(82,90,160,1) 50%, rgba(255,255,255,1) 100%)",
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
      },
      fontSize: {
        sm: "0.8rem",
        md: "0.875rem",
        base: "1rem",
        heading: 'clamp(2.1875rem, 1.5278rem + 2.1111vw, 3.375rem)',
        xl: "1.375rem",
        "2xl": "1.563rem",
        "3xl": "2.125rem",
        "4xl": "2.441rem",
        "5xl": "3.375rem",
      },
      borderRadius: {
        '2xl': "calc(var(--radius) + 5px)",
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "image-right": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(12px)" },
        },
        "image-left": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-12px)" },
        },
        "button-expand": {
          "0%": { width: "10%", transform: "translateX(90%)" },
          "20%": { width: "20%", transform: "translateX(80%)" },
          "40%": { width: "40%", transform: "translateX(60%)" },
          "60%": { width: "60%", transform: "translateX(40%)" },
          "80%": { width: "80%", transform: "translateX(20%)" },
          "100%": { width: "fit-content", transform: "translateX(0)" },
        },
        "button-shrink": {
          "0%": { left: "90%" },
          "20%": { left: "80%" },
          "40%": { left: "60%" },
          "60%": { left: "40%" },
          "80%": { left: "20%" },
          "100%": { left: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "image-left": "image-left 2s ease-in-out infinite",
        "image-right": "image-right 2s ease-in-out infinite",
        "button-expand": "button-expand 0.7s linear forwards",
        "button-shrink": "button-shrink 0.5s linear forwards",
      },
    },
    dropShadow: {
      "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
    },
    screens: {
      sm: "640px",
      md: "768px",
      sl: "980px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
  },
  plugins: [import("tailwindcss-animate")],
};
