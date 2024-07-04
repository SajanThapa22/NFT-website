/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
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
        "bg-dd": "var( --bg-dd)",
      },
      fontSize: {
        "f-16px": "var( --px-16)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
