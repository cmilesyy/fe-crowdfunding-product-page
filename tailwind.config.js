/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary-cyan': '#3cb4ac', 
        'dark-cyan': '#147b74',
        'dark-gray': '#7a7a7a'
      }, 
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/image-hero-mobile.jpg')",
      }
    },
  },
  plugins: [],
}

