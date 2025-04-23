/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important: Scan .ts and .tsx files
  ],
  theme: {
    extend: {
       fontFamily: {
         sans: ['Inter', 'sans-serif'],
       },
       animation: {
         'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
         'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
       },
       keyframes: {
         fadeInDown: {
           '0%': { opacity: '0', transform: 'translateY(-20px)' },
           '100%': { opacity: '1', transform: 'translateY(0)' },
         },
         fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
         }
       }
    },
  },
  plugins: [],
}
