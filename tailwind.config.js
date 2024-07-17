/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-gray': 'rgba(203, 213, 224, 0.3)',
      },
    },
  },
  plugins: [],
}

