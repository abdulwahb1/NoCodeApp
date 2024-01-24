/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    backgroundColor: {
      purple: "#482BE7",
      bolack: "#1E1E1E",
      spurple: "#2F1893",
      pink: "#E93A7D",
      dpurple: "#2F1893",
      white: "#FFFFFF",
      black: "#000000",
      vdpurple: "#1E0E62",
      blue: "#25DAC5",
      violet: "#1E0E62",
      blue: "#25DAC5",
    },
    textColor: {
      violet: "#1E0E62",
      white: "#FFFFFF",
      violet: "#1E0E62",
    },
  },
  plugins: [],
};
