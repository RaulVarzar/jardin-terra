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
        "5xl": "2.8rem",
        "6xl": "3.8rem",
        "7xl": "4.4rem",
        "8xl": "4.8rem",
        "9xl": "5.6rem",
        "10xl": "6.4rem",
        xxl: "7.8rem",
      },
      borderRadius: {
        "4xl": "40px",
        "5xl": "48px",
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

          "base-100": "#0e100f",
          "base-200": "#111312",
          "base-300": "#131514",

          accent: "#151816",
          primary: "#171c19",
          secondary: "#191f1b",

          "accent-content": "#191f1a",
          "primary-content": "#1b221d",
          "secondary-content": "#1d261f",

          "base-content": "#4f564e",
          neutral: "#1d201e",
          "neutral-content": "#f6fdf9",
          error: "#84261f",
        },
      },
    ],
  },
};
export default config;
