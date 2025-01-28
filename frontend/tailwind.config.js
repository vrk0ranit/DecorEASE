/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: '#ffffff',
        lightText: '#333333',
      },
    },
  },
  plugins: [],
}

