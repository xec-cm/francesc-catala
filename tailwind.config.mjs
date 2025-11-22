import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary brand color - Plant green from logo (#617056)
        primary: {
          DEFAULT: '#617056',
          light: '#7a8a6d',
          dark: '#3d4435',
          hover: '#4f5c47',
        },
        secondary: {
          DEFAULT: '#F0EFEB', // Light warm beige
          dark: '#D6D4CE',
        },
        accent: {
          DEFAULT: '#C89F78', // Muted earth tone
          hover: '#B08968',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            h2: {
              marginTop: '3rem',
              marginBottom: '1.25rem',
            },
            h3: {
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            ul: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
