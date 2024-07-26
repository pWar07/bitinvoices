/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "custom-gray": "rgba(203, 213, 224, 0.3)",
      },
      transitionTimingFunction: {
        "custom-cubic-bezier": "cubic-bezier(0,1,0,1)",
      },
      transitionDuration: {
        500: "500ms",
      },
    },
  },
  plugins: [],
};
