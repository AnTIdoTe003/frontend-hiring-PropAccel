/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg':"url('src/assets/group-1.png')",
        'components-bg':"url('src/assets/Group 79.png')",
        'footer-bg':"url('src/assets/Polygon2.png')",
        "linear-grad":"linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)"
        
    },
    fontFamily:{
      Poppins:['Poppins']
    }
  },
  plugins: [],
}}