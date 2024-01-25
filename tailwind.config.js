/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      scale: {
        98: '0.98',
        102: '1.02',
        115: '1.15',
        120: '1.20',
      },
      blur: {
        xxxs: '1px',
        xxs: '2px',
        xs: '3px',
      },
      brightness: {
        25: '.25',
        85: '.85',
        65: '.65',
        115: '1.15',
        135: '1.35',
      },
      fontSize: {
        sm: '1rem',
        base: '1.1rem',
        md: '1.23rem',
        lg: '1.33rem',
        xl: '1.45rem',
        '2xl': '1.6rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.2rem',
        '6xl': '4rem',
        '7xl': '4.6rem',
      },
      borderRadius: {
        '4xl': '40px',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '5/4': '5/4',
      },
      screens: {
        '3xl': '1800px',
      },
      maxWidth: {
        '8xl': '1700px',
      },
      strokeWidth: {
        3: '3px',
      },
      borderRadius: {
        '4xl': '50px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        black: {
          ...require('daisyui/src/theming/themes')['black'],
          primary: '#131614',
          'base-200': '#101010',
          'base-100': '#060605',
          'base-300': '#171716',
          secondary: '#424138',
          accent: '#34413d',
          'secondary-content': '#818177',
          'base-content': '#1F1919',
          error: '#602b1f',
        },
        // garden: {
        //   ...require('daisyui/src/theming/themes')['garden'],
        //   'base-200': '#f0eef0',
        //   'base-100': '#D4D2D2',
        //   'base-300': '#f8f8f8',
        //   'neutral-content': '#0d0d0d',
        //   'base-content': '#1F1919',
        // },
      },
    ],
  },
};
