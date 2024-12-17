/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html", // Scans the root index file for Tailwind classes
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all JS, TS, JSX, and TSX files in src directory
  ],
  theme: {
    extend: {
      // Customize or add new utilities here
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here, like @tailwindcss/forms
  ],
};

export default config;
