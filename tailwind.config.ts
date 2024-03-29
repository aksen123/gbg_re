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
        mainText: "#333333",
        desc: "#666",
        bgGray: "#f1f2f5",
        "main-color": "#ffc011",
        "sub-color": "#364f99",
      },
      fontSize: {
        "sub-title": "4rem",
        "sub-desc": "2rem",
        "main-text": "1.6rem",
        "small-text": "1.4rem",
        "mo-sub-title": "3.5rem",
        "mo-sub-desc": "1.8rem",
      },
      gap: {
        normal: "3rem",
      },
      boxShadow: {
        nav: "0 2px 2px rgba(0, 0, 0, 0.05);",
        "event-card": "0 0 10px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        sun: "url('/images/sun.png')",
        moon: "url('/images/moon.png')",
        day: "url('/images/02_gbgEvent_bg_1.png')",
        night: "url('/images/02_gbgEvent_bg_2.png')",
      },
    },
  },
  plugins: [],
};
export default config;
