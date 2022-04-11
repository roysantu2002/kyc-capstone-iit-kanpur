module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
   variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  theme: {
    
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      body: ["Poppins"],
      headline: ['Oswald']
    },
    extend: {
      // 👇 this makes Tailwind merge the configuration w/o overriding it.

      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
    
      
      colors: {
         primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        secondary: {
          500: '#F44E03',
          100: '#FEEEE6'

        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        secondary: "#2ccbaf",
        success: "#3e8d63",
        info: "#3b6da8",
        warning: "#fcc15b",
        danger: "#d62518",
        light: "#e1dbdb",
        dark: "#5d4b80",
      },
    },

    screens: {
      sm: "376px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  // plugins: [require("tailwind-scrollbar-hide")],
  // plugins: ["tailwindcss", "postcss-preset-env"],
};
