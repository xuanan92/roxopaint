/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'smobile': '280px',
      // => @media (min-width: 280px) {...}
      'mmobile': '320px',
      // => @media (min-width: 320px) {...}
      'lmobile': '480px',
      // => @media (min-width: 480px) {...}
      'stablet': '720px',
      // => @media (min-width: 720px) {...}
      'mtablet': '1024px',
      // => @media (min-width: 1024px) {...}
      'ltablet': '1280px',
      // => @media (min-width: 1280px) {...}
      'slaptop': '1368px',
      // => @media (min-width: 1368px) {...}
      'mlaptop': '1920px',
      // => @media (min-width: 1920px) {...}
      'llaptop': '2700px',
      // => @media (min-width: 2700px) {...}
    },
    extend: {},
  },
  plugins: [
  require('@tailwindcss/forms'),
  ],
}
