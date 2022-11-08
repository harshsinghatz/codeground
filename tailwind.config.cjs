/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
  extend: {},
  // get colors subsequently.
  colors: {
  "primary": "#000",
  "primary-a10": "#111",
  "primary-a24": "#333",
  "primary-a75": "#444",
  "primary-a99": "#666",
  "secondary": "#888",
  "secondary-a10": "#999",
  "white": "#FFF",
  "success": "#0761D1",
  "success-a10": "#D3E5FF",
  "danger": "#E60000",
  "danger-a10": "#F7D4D6",
  "warning": "#F5A623",
  "warning-a10": "#FFEFCF",
  "warning-a24": "#AB570A",
  "black": "#1E1E24",
  "black-a50": "#1E1E2470",
  "grey": "#C4CECF",
  }
  },
  variants: {
  extend: {},
  },
  plugins: [],
  };