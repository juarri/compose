/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bg-pan-slow": "bg-pan 360s linear infinite",
        "bg-pan": "bg-pan 180s linear infinite",
        "bg-pan-fast": "bg-pan 90s linear infinite",
      },
      keyframes: {
        "bg-pan": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
      },
    },
  },
  plugins: [],
};
