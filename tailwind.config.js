const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: [
    './page/views/*.html',
    './page/views/**/*.html',
    './page/views/**/**/*.html',
    './page/views/**/**/**/*.html',
    './page/assets/module/**/js/*.js',
    './page/assets/module/base.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Roboto' : ['Roboto', 'sans-serif']
      },
      fontSize: {
        'xs-sm': '0.813rem',
        'sm-base': '0.938rem',
        'base-lg': '1.063rem',
        '2xxl': '1.75rem'
      },
      colors: {
        'disable': '#E6E6E6',
        'primary': {
          DEFAULT: '#FF3C3C',
        }
      },
      width: {
        '7.5': '1.875rem',
        '15': '3.75rem',
        '25': '6.25rem'
      },
      height: {
        '5.5': '1.375rem',
        '780': '780px',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '15': '3.75rem'
      },
      maxWidth: {
        '300': '300px',
        '40': '10rem',
        '70': '17.5rem'
      },
      minWidth: {
        '300': '300px',
        '40': '10rem',
        '44': '11rem',
        '65': '16.25rem'
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '1200': '1200'
      },
      padding: {
        '2.25': '0.563rem',
        '6.5' : '1.625rem',
        '12.5': '3.125rem',
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '9/16': '56.25%',
        'full': '100%',
      },
      margin: {
        '6.5': '1.625rem',
        '15': '3.75rem'
      },
      space: {
        '6.5': '1.625rem',
        '12.5': '3.125rem',
      },
      inset: {
        '5.5': '1.375rem', 
        '10.5': '2.625rem',
       }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
