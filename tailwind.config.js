/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '767px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      colors: {
        primary: '#FDC001',
        secondary: '#504e4a',
        white: '#fff',
        black: '#000',
      },
    },
  },
  plugins: [],
};
