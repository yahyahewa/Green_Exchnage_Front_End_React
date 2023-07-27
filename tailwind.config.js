export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        english: "english",
        kurdish: "kurdish",
      },
      colors: {
        jade: {
          50: "#ebfef6",
          100: "#d0fbe6",
          200: "#a4f6d2",
          300: "#6aebbc",
          400: "#2fd89f",
          500: "#0abf88",
          600: "#00aa7a",
          700: "#007c5c",
          800: "#03624a",
          900: "#04503e",
          950: "#012d24",
        },
      },
    },
  },
  plugins: [],
};
