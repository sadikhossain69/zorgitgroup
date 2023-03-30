const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          // light: colors.red['300'],
          // DEFAULT: colors.red['500'],
          // dark: colors.red['700'],
          light: '#C74949',
          DEFAULT: '#D30000',
          dark: '#B91C1C',
        },
        secondary: {
          light: colors.blue['300'],
          DEFAULT: colors.blue['500'],
          dark: colors.blue['700'],
        },
        // Header Text Color
        title: '#1A1A1A',
        'sub-title': '#333',
        paragraph: '#666',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
