import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)"],
        soria: ["var(--font-soria)"],
      },
      colors: {
        'dark': '#1E2632',
        'grey': '#62666F',
        'light-grey': '#D6D8E2',
        'mustard': '#BA9759',
        'blue': '#8091ef',
        'beige': '#EEE4E0',
        'light-beige': '#EEEAE8',
        'light': '#F9F7F7',
      },
    },
  },
  plugins: [],
};
export default config;
