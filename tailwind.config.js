/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        bgBody: '#1A202C',
        whitecontainer:'rgb(226, 232, 240)',
        bgDarkAdd:'rgb(26, 40, 75)'
      }
    },
  },
  plugins: [],
}

