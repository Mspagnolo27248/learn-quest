/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A3A5C',
          dark: '#122844',
          light: '#2a5580',
        },
        sky: {
          DEFAULT: '#2E6DA4',
          light: '#4a89c0',
          dark: '#1d5080',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
