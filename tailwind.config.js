/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#30336b',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#30336b',
              '&:hover': {
                color: '#6366f1', // Changed to a bright indigo color for more noticeable hover effect
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: '#93c5fd', // Bright blue for dark mode
              '&:hover': {
                color: '#60a5fa', // Slightly darker on hover
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};