/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'red-hat-text': ['"Red Hat Text"', 'sans-serif'],
      },
      backgroundImage: {
        "bg-stars": "url('images/bg-stars.svg')",
        "pattern-hills": "url('images/pattern-hills.svg')"
      },
      colors: {
        "grayish-blue": "#8486A9",
        "soft-red": "#FB6087",
        "dark-desaturated-blue": "#343650",
        "very-dark-blue": "#1E1F29",
        "mostly-black-blue": "#191A24"
      },
    },
  },
  plugins: [],
};
