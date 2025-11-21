import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7fbff",
          100: "#e6f3ff",
          200: "#c1e3ff",
          300: "#8ac9ff",
          400: "#51a9ff",
          500: "#2c8aff",
          600: "#1668e6",
          700: "#0f4eb4",
          800: "#0f428f",
          900: "#122f63"
        }
      },
      fontFamily: {
        heading: ["'Tajawal'", "ui-sans-serif", "system-ui"],
        body: ["'Cairo'", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
