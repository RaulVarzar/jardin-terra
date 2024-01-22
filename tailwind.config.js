/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      scale: {
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
        85: '.85',
        65: '.65',
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
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        black: {
          ...require('daisyui/src/theming/themes')['black'],
          primary: '#131614',
          secondary: '#36352C',
          'base-content': '#1F1919',
        },
        // garden: {
        //   ...require('daisyui/src/theming/themes')['garden'],
        //   'neutral-content': '#222',
        //   'base-content': '#1F1919',
        // },
      },
    ],
  },
};
