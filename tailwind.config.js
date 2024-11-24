module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Asegúrate de que esta parte incluye todos los archivos
  theme: {
    extend: {
      keyframes: {
        spinIn: {
          "0%": { transform: "rotate(0deg)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "rotate(360deg)", opacity: "1" },
        },
      },
      animation: {
        spinIn: "spinIn 2s ease-in-out forwards",
      },
      colors: {
        layoutcolor: "#bb9a3b", // Verde militar claro personalizado
      },
    },
  },
  plugins: [],
};
