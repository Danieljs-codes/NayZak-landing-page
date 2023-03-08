/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        primary: '#5D37A2',
        secondary: '#0D0D0F',
        gray: '#C4C4C4',
        accent: '#18181E',
      },
    },
  },
  plugins: [],
};
