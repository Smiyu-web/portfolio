module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: ".5em",
        smC: ["0.875rem", "2rem"],
        baseC: ["1rem", "2rem"],
        lgC: ["1.25rem", "2rem"],
      },
      height: {
        88: "22rem",
        300: "30%",
        400: "40%",
      },
      width: {
        100: "10%",
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
      },
      inset: {
        88: "22rem",
        lg: "36rem",
        xl: "48rem",
        5: "5%",
        100: "10%",
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
      },
      borderWidth: {
        30: "30%",
      },
      padding: {
        100: "10%",
        150: "15%",
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
      },
      margin: {
        100: "10%",
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
    screens: {
      all: "0px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      bg: "#222222",
      bl: "#000000",
      wh: "#FFFFFF",
      gy: "#858585",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
