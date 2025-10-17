/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003057', // Dark navy blue - primary brand color
        'primary-light': '#133863', // Medium navy blue - hover states
        secondary: '#666666', // Medium gray - subtle accents
        dark: '#003057', // Dark navy blue
        light: '#f3f4f6', // Light gray background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'brand': '0 4px 6px rgba(0, 0, 0, 0.25)',
        'brand-lg': '0 10px 15px rgba(0, 0, 0, 0.25)',
        'brand-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.25)',
        'button': '0 5px 0 #666666',
      },
    },
  },
  plugins: [],
}
