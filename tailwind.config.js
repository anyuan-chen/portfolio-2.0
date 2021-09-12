module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        page: "32vw",
      },
      colors: {
        accent: "#c1deda",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
