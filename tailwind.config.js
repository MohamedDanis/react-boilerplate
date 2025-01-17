/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#007AFF',
        'secondary': '#00C08B',
        'accent': '#00C08B',
        'error': '#FF0000',
        'warning': '#FFA500',
        'success': '#00C08B',
      }
    },
  },
  plugins: [],
}

