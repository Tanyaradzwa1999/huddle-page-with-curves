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
        LightPink: "hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100%, 63%)",
        VeryPaleBlue: "hsl(207, 100%, 98%)",
        VeryDarkCyan: "hsl(192, 100%, 9%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        opensans: ["opensans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
