module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        ripple: "ripple 1s ease-out forwards",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(8)", opacity: "0" },
        },
      },
    },
  },
  plugins: [], // ここが null や undefined になっていないか確認
};
