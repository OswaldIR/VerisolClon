/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'Comic Sans MS'],
      },
      colors: {
        'blue-veri' : '#4EB9DB',
        'green-veri' : '#BAD758',
      },
    },
  },
  plugins: [],
}

