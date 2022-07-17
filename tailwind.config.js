module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        93: ".93",
        99: ".99",
      },
      height: {
        "fixed-screen": "calc(100vh - 172px)",
      },
      colors: {
        accent: {
          // make this instagram gradient
          DEFAULT: "#EF2787",
        },
        "accent-2": {
          DEFAULT: " #0E6CFF",
        },
        light: {
          DEFAULT: "#ffffff",
        },
        dark: {
          DEFAULT: "#000000",
          blue: "#042B68",
          "deep-blue": "#040D21",
        },
        link: {
          DEFAULT: "#38BDF8",
        },
        gray: {
          DEFAULT: "#EFEFEF",
        },
        "linear-gradient": {
          DEFAULT:
            "linear-gradient(135deg, rgba(14,108,255,1) 0%, rgba(239,39,135,1) 100%)",
        },
      },
    },
  },
  plugins: [],
};
