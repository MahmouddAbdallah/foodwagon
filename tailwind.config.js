/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB30E',
        secondary: "#F17228",
        btn_red: "#F17228",
        gradient_yellow: {
          from: "#FFB800",
          to: "#FF8A00",
        },
        g_red: {
          f: "#FF7A7A",
          v: '#FFCA0F',
          t: "#F65900",
        },
        redColor: '#F17228'
      }
    },
  },
  plugins: [],
}