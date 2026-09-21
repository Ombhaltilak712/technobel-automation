/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052CC',
          'blue-dark': '#003D99',
          'blue-light': '#3385FF',
          dark: '#1E293B',
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          silver: '#F4F6F9',
          slate: '#475569',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 82, 204, 0.08)',
        'glass-hover': '0 20px 40px 0 rgba(0, 82, 204, 0.15)',
        'industrial': '0 10px 25px -5px rgba(30, 41, 59, 0.08), 0 8px 10px -6px rgba(30, 41, 59, 0.04)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(0, 82, 204, 0.07) 1px, transparent 1px)",
        'hero-gradient': "linear-gradient(135deg, #FFFFFF 0%, #F4F6F9 50%, #E0E7FF 100%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        }
      }
    },
  },
  plugins: [],
}
