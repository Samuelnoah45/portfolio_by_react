/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#001730",
        "primary-2": "#001730a3",
        "secondary": "#4ad7d1",
        "third": "#fe4a49",

      },
      fontFamily: {
        "primary": ["Poppins", "sans-serif"],
        "l": ["Abril Fatface", 'cursive'],
        "Bangers": ["Poppins", 'sans-serif'],

      }

    },
  },
  plugins: [],
}

