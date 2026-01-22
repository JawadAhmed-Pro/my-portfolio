/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06f9f9",      // Bright Cyan
        secondary: "#214a4a",    // Secondary Dark (Teal-ish)
        accent: "#06f9f9",       // Using Primary as accent
        dark: "#0B1120",         // Deep Navy Background
        light: "#f5f8f8",        // Light Background
        "card-dark": "#131C2E",  // Card Dark
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'], // Added from theme
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(6, 249, 249, 0.15) 0%, rgba(11, 17, 32, 0) 70%)',
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
