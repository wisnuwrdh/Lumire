/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDF8F3",
        foreground: "#2C1810",
        "accent-gold": "#C9A96E",
        "accent-blush": "#F5E0D5",
        "text-secondary": "#6B4F3E",
        "card-bg": "#FFF5EC",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
