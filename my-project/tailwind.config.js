/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter_r :["Inter_r"],
      },
      colors:{
        'shoa':"#sss"
      },
    },
  },
  plugins: [],
}

