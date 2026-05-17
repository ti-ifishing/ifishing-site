/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#18A348',
          dark: '#0F7A35',
          light: '#E8F7EE',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          border: '#E2E8F0',
        },
        danger: '#DC2626',
        warning: '#F59E0B',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
