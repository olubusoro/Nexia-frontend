const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#753374",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px and max-width: 480px) { ... }
  
        md: "480px",
        // => @media (min-width: 481px and max-width: 768px) { ... }
  
        lg: "768px",
        // => @media (min-width: 769px and max-width: 1024px) { ... }
  
        xl: "1024px",
        // => @media (min-width: 1025px and max-width: 1200px) { ... }
  
        "2xl": "1200px",
        // 
      }
    },
  },
  plugins: [ require("flowbite/plugin")],
};



