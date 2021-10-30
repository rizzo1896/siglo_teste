module.exports = {
  purge: [
    "./src/pages/**/*.js",
    "./src/pages/**/*.ts",
    "./src/pages/**/*.jsx",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.js",
    "./src/components/**/*.ts",
    "./src/components/**/*.jsx",
    "./src/components/**/*.tsx",
    "./src/public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1366px",
      // => @media (min-width: 1366px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: { margin: ["first", "last"] },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
