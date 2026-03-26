/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050505',
          blue: '#00d4ff',
          green: '#39ff14',
          dark: '#0a0a0a',
          card: 'rgba(255,255,255,0.04)',
          border: 'rgba(0,212,255,0.25)',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        neon: '0 0 16px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.2)',
        'neon-green': '0 0 16px rgba(57,255,20,0.6), 0 0 40px rgba(57,255,20,0.2)',
        card: '0 8px 32px rgba(0,0,0,0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          from: { textShadow: '0 0 10px rgba(0,212,255,0.5), 0 0 20px rgba(0,212,255,0.3)' },
          to:   { textShadow: '0 0 20px rgba(0,212,255,0.9), 0 0 40px rgba(0,212,255,0.5)' },
        },
      },
    },
  },
  plugins: [],
}

