/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: '10rem',
    },
    extend: {
      colors: {
       mainbgcolor: "#0F172A",
       blueColor: "#16bceb"
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        xll: { max: "1200px" },
        // => @media (max-width: 1200px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
  
        smm: { max: "415px" },
        // => @media (max-width: 415px) { ... }
      },
    },
  },
  plugins: [],
}
