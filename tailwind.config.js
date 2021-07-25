module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        ruchit:{
  50: '#ddfcff',
  100: '#b8eef5',
  200: '#91e2ed',
  300: '#67d6e4',
  400: '#41cadb',
  500: '#2ab0c2',
  600: '#1b8998',
  700: '#0c626d',
  800: '#003c43',
  900: '#00161a',
        },
        
        signin:{
  50: '#ffe3eb',
  100: '#ffb3c2',
  200: '#fb8399',
  300: '#f95370',
  400: '#f62448',
  500: '#dc0d2f',
  600: '#ac0624',
  700: '#7c031a',
  800: '#2b3147',
  900: '#1f0003',
},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};