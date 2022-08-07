/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Rubik, sans-serif',
        georgia: 'Georgia, sans-serif',
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #67f714, #0bcae3)'
      },
      colors: {
        blue: {
          200: "rgb(11, 202, 227)",
          500: '#04a0c3'
        },
        green: {
          500: '#99fb8c'
        },
        gray: {
          50: '#e0e0e0',
          100: '#999999',
          500: '#666666',
          700: '#333333'
        }
      }
    }
  },
  plugins: [],
}
