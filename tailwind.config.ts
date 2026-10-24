import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0a0a0f",
        panel: "#12121c",
        ink: "#f4f6fb",
        muted: "#a0a3b6",
        cyan: "#65e8ef",
        mint: "#6ee7b7",
        violet: "#b4a0ff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
