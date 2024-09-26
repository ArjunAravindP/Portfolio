/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#562ac4",
        subColor: "#c5215b",
        tadBlue: "#475c9b"
      }
    }
  },
  plugins: []
}
