/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00daff",
          secondary: "#E5E5E5",
          accent: "#E5E5E5",
          neutral: "#2F2A3C",
          "base-100": "#FFFFFF",
          info: "#9AB6EA",
          success: "#53DFA9",
          warning: "#B88714",
          error: "#E56161",
        },
      },
    ],
  },
};
