/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  screens: {
    /*
        'xs': '360px',
        '5xl': '412px',
        '4xl': '540px',
        'sm': '640px',
        */
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 992px) { ... }
    '6xl': '1100px',
    '7xl': '1150px',
    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
    '2xl': '1500px',
    // => @media (min-width: 1400px) { ... }
  },
  plugins: [],
}
