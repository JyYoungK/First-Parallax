/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        91: "91",
        1000: "1000",
        5000: "5000",
      },
      colors: {
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainblue":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-starblue":
          "linear-gradient(90deg,#e8f2f5 14.53%,#e267e4 39.36%,#48ddd6 117.73%)",
      }),
    },
  },
};
