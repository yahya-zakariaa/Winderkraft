/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        width: "90%"
      }
    },
  },
  plugins: [],
}