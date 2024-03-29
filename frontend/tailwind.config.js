/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#161616",
          100: "#050505",
          200: "#090909",
          300: "#0e0e0e",
          400: "#121212",
          500: "#161616",
          600: "#454545",
          700: "#747474",
          800: "#a2a2a2",
          900: "#d1d1d1",
        },
        white_smoke: {
          DEFAULT: "#f5f5f5",
          100: "#313131",
          200: "#626262",
          300: "#939393",
          400: "#c4c4c4",
          500: "#f5f5f5",
          600: "#f7f7f7",
          700: "#f9f9f9",
          800: "#fbfbfb",
          900: "#fdfdfd",
        },
        maize: {
          DEFAULT: "#f2e441",
          100: "#393504",
          200: "#726a08",
          300: "#ac9e0c",
          400: "#e5d310",
          500: "#f2e441",
          600: "#f4e966",
          700: "#f7ee8d",
          800: "#faf4b3",
          900: "#fcf9d9",
        },
        platinum: {
          DEFAULT: "#e9e9e9",
          100: "#2e2e2e",
          200: "#5d5d5d",
          300: "#8b8b8b",
          400: "#bababa",
          500: "#e9e9e9",
          600: "#ededed",
          700: "#f1f1f1",
          800: "#f6f6f6",
          900: "#fafafa",
        },
        ultra_violet: {
          DEFAULT: "#52489c",
          100: "#100e1f",
          200: "#211d3f",
          300: "#312b5e",
          400: "#423a7e",
          500: "#52489c",
          600: "#6f65b8",
          700: "#938cca",
          800: "#b7b2dc",
          900: "#dbd9ed",
        },
      },
    },
  },
  plugins: [],
};
