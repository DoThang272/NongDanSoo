/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-100-t' : '#F3E8FF' ,
        'color-green-100' : '#DCFCE7',
        'orange-100' : '#FFF4DE',
        'red-100': '#FFE2E5',
        'colors-text-title': '#30266A',
        'color-text-bold': '#050505',
        'color-text-thin': '#0A0A1F',
        'color-status-metting1': '#0284C7',
        'color-status-metting2': '#16A34A',
        'color-status-metting3': '#313131',

      },
      fontFamily: {
        'popi': 'Poppins , sans-serif',
        'opensans': 'Open Sans',
        'lato':  'Lato, sans-serif',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
}