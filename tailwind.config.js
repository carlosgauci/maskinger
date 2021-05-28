module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hero: "#F1F6FF",
        primary: "#309C8E",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "2rem",
      },
      center: true,

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },

    fontFamily: {
      body: ["Poppins"],
      heading: ["Josefin Slab"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
