/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ], // Combine content arrays from both configurations
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // xs: { min: "280px", max: "359px" }, // Add the custom screen size from the second configuration
      },
    },
  },
  plugins: [require("flowbite/plugin")], // Keep the plugins from the first configuration
};
