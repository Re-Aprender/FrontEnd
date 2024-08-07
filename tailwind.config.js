/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      colors: {
        accent : {
          pink: "#ff5595",
          pink_dark: "#d93271",
          orange: "#ff7155",
          orange_dark: "#e3593d"
        }
      }
    },
  },
  plugins: [],
}

