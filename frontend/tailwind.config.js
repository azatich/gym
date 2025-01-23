/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      backgroundImage: {
        main: "url('../src/assets/images/bg_main.png')",
        subscription: "url('../src/assets/images/bg_subscription.png')",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        normal: "0px 0px 20px 5px rgba(255, 65, 0, 0.5)",
        xl: "0px 0px 100px 50px rgba(255, 65, 0, 0.5)",
        hover: "0px 0px 20px 7px rgba(255, 65, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
