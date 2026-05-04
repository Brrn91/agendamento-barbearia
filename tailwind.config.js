/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./scripts/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        destaque: "#bd0e02",
        escuro: "#282625",
        claro: "#bfb29b",
        azul: "#007bff",
        sucesso: "#28a745",
        erro: "#dc3545",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
