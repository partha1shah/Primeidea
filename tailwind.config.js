/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '480px',   
        'sm': '640px',   
        'md': '768px',   
        'lg': '1024px',  
        'xl': '1200px',
        '2xl': '1340px',  
        '3xl': '1536px', 
        // '4xl': '1920px', 
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.35s ease-out",
      },
    },
  },
  plugins: [],
};
