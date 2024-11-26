// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9533',
          50: '#FFF4EB',
          100: '#FFE9D6',
          200: '#FFD4AD',
          300: '#FFBF85',
          400: '#FFAA5C',
          500: '#FF9533',
          600: '#FA7B00',
          700: '#C26100',
          800: '#8A4500',
          900: '#522900'
        },
        secondary: {
          DEFAULT: '#00B2D6',
          50: '#E6F9FF',
          100: '#CCF3FF',
          200: '#99E7FF',
          300: '#66DBFF',
          400: '#33CFFF',
          500: '#00B2D6',
          600: '#008CA8',
          700: '#00667A',
          800: '#00404C',
          900: '#001A1F'
        },
        neutral: {
          50: '#F7F9FA',
          100: '#EEF2F4',
          200: '#DEE4E8',
          300: '#CDD6DC',
          400: '#BCC8D0',
          500: '#ABBAC4',
          600: '#8A9CA8',
          700: '#697E8C',
          800: '#486070',
          900: '#274254'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(255, 149, 51, 0.1), 0 2px 4px -1px rgba(255, 149, 51, 0.06)',
        'hover': '0 10px 15px -3px rgba(255, 149, 51, 0.1), 0 4px 6px -2px rgba(255, 149, 51, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}