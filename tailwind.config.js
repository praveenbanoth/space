const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
      extend: {
          height: {
              "100": "25rem",
          },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      }
  
  },
  variants: {},
  plugins: [],
};
