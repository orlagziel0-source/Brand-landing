import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2E8D8",
        ink: "#1A1816",
        stone: "#5B5346",
        "stone-light": "#A69C8A",
        accent: "#7A2333",
        "accent-dark": "#59182A",
        line: "rgba(26, 24, 22, 0.12)",
        "line-dark": "rgba(242, 232, 216, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        heebo: ["var(--font-heebo)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 7rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-hero": ["clamp(2rem, 4.2vw, 3.5rem)", { lineHeight: "1.16", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 3.6vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
