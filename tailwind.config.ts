import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A05336",
        "primary-dark": "#8a452b",
        secondary: "#F9F5F0",
        cream: "#FAF9F6",
        "surface-light": "#ffffff",
        "surface-dark": "#1C1917",
        "bg-dark": "#0F0E0C",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-cormorant)", "serif"],
        brand: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollDot: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.3" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(2%, -2%)" },
          "50%": { transform: "translate(-3%, 1%)" },
          "60%": { transform: "translate(1%, 3%)" },
          "70%": { transform: "translate(-2%, -1%)" },
          "80%": { transform: "translate(3%, -3%)" },
          "90%": { transform: "translate(-1%, 2%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "scale-in": "scaleIn 1s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 28s linear infinite",
        "scroll-dot": "scrollDot 2.4s ease-in-out infinite",
        grain: "grain 0.8s steps(1) infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
