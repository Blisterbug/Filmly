/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: "#FFD700",
        purple:"#8A2BE2",
        darkpurple:"#6A1CB8",
        netblue:"#232F3E",
      },
    },
  },
  plugins: [],
};
