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
        myColor: {
          "50": "#eaebeb",
          "100": "#d4d7d8",
          "200": "#aaafb1",
          "300": "#7f8689",
          "400": "#555e62",
          "500": "#2a363b",
          "600": "#222b2f",
          "700": "#192023",
          "800": "#111618",
          "900": "#080b0c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
