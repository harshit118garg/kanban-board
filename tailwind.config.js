/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: "var(--fontSize)",
    },
    colors: {
      transparent: 'transparent',
      light: {
        background: "#f0f0f0",
        foreground: "#333333",
        primary: "#4a4a4a",
        secondary: "#737373",
        accent: "#a1a1a1",
        bgCol:"#f4f4f4"
      },
      dark: {
        background: "#1e293b",
        foreground: "#e2e8f0",
        primary: "#3b82f6",
        secondary: "#60a5fa",
        accent: "#93c5fd",
        bgCol:"#36454f"
      },
      white: "#fff",
      cardCol: "#000435",
      textColLight: "#f1f1f1",
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  plugins: [],
};
