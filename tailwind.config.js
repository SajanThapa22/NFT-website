/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "txt-clr": "var(--txt-clr)",
        "bg-clr": "var(--bg-clr)",
      },
    },
  },
  plugins: [],
};
