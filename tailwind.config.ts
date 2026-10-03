import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cave: {
          bg: "#0A0A0F",
          card: "#0F0F1A",
          gold: "#C9A84C",
        },
      },
      fontFamily: {
        mono: ["Courier New", "Courier", "Lucida Console", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
