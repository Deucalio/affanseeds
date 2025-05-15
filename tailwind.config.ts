import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ["var(--font-jakarta)"],
        serif: ["var(--font-playfair)"],
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
        // New color palette
        green: {
          50: "#f0f9f1",
          100: "#dcf1e0",
          200: "#bbe3c2",
          300: "#8ecf9a",
          400: "#5bb56c",
          500: "#429c52",
          600: "#2f7e3e",
          700: "#276534",
          800: "#21512c",
          900: "#1c4325",
        },
        earth: {
          50: "#f9f7f1",
          100: "#f1ece0",
          200: "#e2d8c3",
          300: "#d0bd9e",
          400: "#b99e76",
          500: "#a68a5e",
          600: "#8c714c",
          700: "#725a3f",
          800: "#5e4a36",
          900: "#4e3e2f",
        },
        sky: {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#bae0fd",
          300: "#7cc9fc",
          400: "#38aff8",
          500: "#0e96e9",
          600: "#0078c7",
          700: "#0060a1",
          800: "#055185",
          900: "#07436d",
        },
        sunset: {
          50: "#fff8f0",
          100: "#feefde",
          200: "#fddcbc",
          300: "#fbc28e",
          400: "#f9a05c",
          500: "#f7802f",
          600: "#e65f1c",
          700: "#bf4618",
          800: "#9a391a",
          900: "#7e3118",
        },
      },
      borderRadius: {
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
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
