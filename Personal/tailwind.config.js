/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ClashDisplay', 'sans-serif'],
        sans: ['Fira Sans', 'sans-serif'],
        body: ['Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
};