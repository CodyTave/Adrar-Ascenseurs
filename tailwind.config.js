/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#BD1820", "#E3252E", "#9E1219"],
        secondary: [""],
        dark: ["#212121"],
        light: ["#2961A6"],
      },
      backgroundColor: {
        primary: ["#BD1820", "#E3252E", "#9E1219"],
        secondary: [""],
        dark: ["#212121"],
        light: ["#2961A6"],
      },
      fontFamily: {
        Segment: "Seven Segment",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
