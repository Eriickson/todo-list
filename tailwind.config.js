module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        default: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
