/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif'],
        heading_1: ['Libre Baskerville', 'sans-serif']
      },
      screens: {
        'md-max': {'max': '1441px'},
        'md-max-2': {'max': '1200px'},
        'md-max-3': {'max': '900px'},
        'md-max-4': {'max': '680px'},
        'md-max-5': {'max': '450px'},
      },
    },
  },
  plugins: [],
}

