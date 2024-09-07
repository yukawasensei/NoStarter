/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xs: '12px',
        sm: '15px',
        base: '18px'
      },
      colors: {
        'neon-purple': '#b026ff',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        'retro': ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}
