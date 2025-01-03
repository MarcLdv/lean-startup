import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          default: "#2D8BBA",
        },
        yellow: {
          default: "#FEFFB0",
        },
        star :{
          default: "#F6BB06",
        },
        pink :{
          default: "#FCD8EE",
        },
        green :{
          default: "#BDF0DF",
        }
      },
      fontFamily: {
        impact: ["Impact"],
      },
    },
  },
  plugins: [],
} satisfies Config;
