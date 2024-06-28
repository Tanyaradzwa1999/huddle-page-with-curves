module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",

        //added colors
        Pink: "hsl(322, 100%, 66%)",
        VeryPaleCyan: "hsl(193, 100%, 96%)",
        VeryDarkCyan: "hsl(192, 100%, 9%)",
        GrayishBlue: "hsl(208, 11%, 55%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        opensans: ["opensans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
