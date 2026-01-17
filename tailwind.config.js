/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors - Only dark tones
        primary: {
          900: '#7b133c',
          950: '#47061e',
        },
        // Dark scale - Full range from logo background
        dark: {
          50: '#f5f3f4',
          100: '#e9e5e7',
          200: '#d6cdd0',
          300: '#b8a9af',
          400: '#957e87',
          500: '#7a616b',
          600: '#654f58',
          700: '#55424a',
          800: '#49393f',
          900: '#3f3337',
          950: '#1a0a0f',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(229, 54, 106, 0.3)',
        'glow-lg': '0 0 40px rgba(229, 54, 106, 0.4)',
      },
    },
  },
  plugins: [],
}
