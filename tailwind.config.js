/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#063854",
          "200": "rgba(10, 74, 109, 0.8)",
        },
        white: "#fff",
        darkturquoise: "#40e8ff",
        black: "#000",
        darkgray: "#b6adad",
        darkslateblue: "#582456",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        marmelad: "Marmelad",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
