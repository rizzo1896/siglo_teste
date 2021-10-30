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
    extend: {},
  },
  variants: {
    extend: { margin: ["first", "last"] },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
