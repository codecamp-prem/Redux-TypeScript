/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        text: "0 0 4px rgba(35, 34, 34, 0.4)",
        product: "0 0 10px rgba(0, 0, 0, 0.2)",
        cartModal: "0 0 10px rgba(0, 0, 0, 0.5)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        products: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
      animation: {
        cartmodal: "fade-slide-in-from-top 0.3s ease-in-out",
        checkout: "fade-slide-in-from-right 0.3s ease-in-out",
      },
      keyframes: {
        cartmodal: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        checkout: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
