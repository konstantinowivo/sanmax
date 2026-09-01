/** @type {import('tailwindcss').Config} */
// Paleta de colores SANMAX - Frío (azul)
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wa-green': '#25D366',        // Solo para botones WhatsApp
        'wa-green-hover': '#1DA851',  // Solo para botones WhatsApp
        'wa-green-light': '#64D89A',
        'wa-teal-dark': '#0A1929',    // Azul muy oscuro
        'wa-teal': '#1565C0',         // Azul medio
        'wa-blue': '#2196F3',         // Azul principal
        'wa-blue-light': '#64B5F6',   // Azul claro
        'wa-blue-dark': '#0D47A1',    // Azul oscuro
      },
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'fade-in-right': 'fade-in-right 1.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}
