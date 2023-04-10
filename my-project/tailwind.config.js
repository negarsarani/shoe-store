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
        Inter_r : ["Inter"],
        Inter_semibold :["Inter-semibold"],
        Inter_Bold :["Inter-Bold"],
      },
      colors:{
        'shoea':"#152536",
        'btn-black':"#212529",
        'white-gray':"#FAFAFA",
        'bg-gary':"#ECECEC",
        'bg-dark':"#343A40",
        'bg-card':"#F3F3F3"

      },
    },
  },
  plugins: [],
}

