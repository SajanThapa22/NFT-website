/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "txt-clr": "var(--txt-clr)",
        "bg-clr": "var(--bg-clr)",
        "bg-comp": "var(--bg-comp)",
        purp: "var(--purp)",
        "txt-gray": "var(--txt-gray)",
        laal: "var(--laal)",
        light: "var(--light)",
      },
      fontSize: {
        "f-16px": "var( --px-16)",
      },
    },
  },
  plugins: [],
};
