/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#7b1818",  // Deep Maroon (Same as bg-red-900)
        secondary: "#a32222", // Slightly Lighter Maroon (Same as bg-red-700)
        silver: "#c0c0c0", // Elegant Silver (Same as text-silver)
        gold: "#DAA520",
      },
    },
  },
  plugins: [],
};
