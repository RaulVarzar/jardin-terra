/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      scale: {
        102: "1.02",
        115: "1.15",
        120: "1.20",
      },
      blur: {
        xxxs: "1px",
        xxs: "2px",
        xs: "3px",
      },
      brightness: {
        85: ".85",
      },
      fontSize: {
        sm: "1rem",
        base: "1.1rem",
        md: "1.25rem",
        lg: "1.3rem",
        xl: "1.45rem",
        "2xl": "1.6rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.2rem",
        "6xl": "4rem",
        "7xl": "4.6rem",
      },
      borderRadius: {
        "4xl": "40px",
      },
      aspectRatio: {
        "4/5": "4 / 5",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#047857",
          "base-content": "#221C1C",
          ".btn-twitter": {
            "background-color": "#1EA1F1",
            "border-color": "#1EA1F1",
            "border-radius": "8px",
          },
        },
      },
    ],
  },
};
