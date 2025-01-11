/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        "light-gray": '#b3b2b6',
        "dark-black": "#01000B",
        'gray': "#3B3B3B",
        'dark-gray': "#4d4d4d",
        'dusk-black': "#353535",

      },
      fontFamily: {
        'sunflower': "'Sunflower', sans-serif",
       
      },
      fontSize: {
        "custom-3xl": '32px',
        "custom-4xl": '34px',
        "custom-5xl": '56px',
        "custom-6xl": '64px',
      },
      lineHeight: {
        'custom-sm': '108%',
        'custom-xl': '150%',
        'custom-2xl': '180%',
      },

      backgroundImage: {
        'hero-layer': "url('/public/assets/images/png/hero-bg.png')",
        'white-img': "url('/public/assets/images/png/project-bg.png')",
      },
    },
  },
  plugins: [],
}