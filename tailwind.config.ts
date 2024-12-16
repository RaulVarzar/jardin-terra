import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      scale: {
        98: "0.98",
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
        25: ".25",
        85: ".85",
        65: ".65",
        115: "1.15",
        135: "1.35",
      },
      fontSize: {
        xs: "0.85rem",
        sm: "1rem",
        base: "1.1rem",
        md: "1.23rem",
        lg: "1.33rem",
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
        "5/4": "5/4",
      },
      screens: {
        "3xl": "1800px",
      },
      maxWidth: {
        "8xl": "1700px",
      },
      strokeWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          ...require("daisyui/src/theming/themes")["black"],
          accent: "#29332e",
          primary: "#151917",
          secondary: "#1a1f1c",
          "secondary-content": "#1E2421",
          "accent-content": "#262C29",
          "base-200": "#101010",
          "base-100": "#060605",
          "base-300": "#171717",
          "base-content": "#b3b3b3",
          "neutral-content": "#f6fdf9",
          error: "#84261f",
        },
      },
    ],
  },
};
export default config;
