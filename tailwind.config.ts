import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      colors: {
        primary: '#FF6D4D',
        lime: '#E2F99E',
        purple: '#7B61FF',
        background: '#FAFAFA'
      },
      animation: {
        'reveal-up': 'reveal-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'pop-in': 'pop-in 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'float': 'float 3.5s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'scroll-line': 'scroll-line 2s ease-in-out infinite'
      },
      keyframes: {
        'reveal-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'pop-in': {
          'from': { opacity: '0', transform: 'scale(0.8) rotate(10deg)' },
          'to': { opacity: '1', transform: 'scale(1) rotate(3deg)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    }
  },
  plugins: []
}