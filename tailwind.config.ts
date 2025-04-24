import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        space: "var(--font-spacemono)",
        titillium: "var(--font-titillium)",
      },
      colors: {
        black: "#000000",
        purple: "#7B5AFF",
        lgray: "#302F31",
        gray: "#6C727C",
        dgray: "#0F0F0F",
        mgray: "#1F1F1F",
        green: "#78FF48",
        red: "#FF4874",
        lpurple: "#DA48FF",
        yellow: "#FFE248"
      },
      screens: {
        'xsm': {'max': '512px'},
        'lg2': {'min': '1440px'},
        '3xl': {'min': '1740px'},
      },
      variants: {
        fill: ["hover", "focus"],
      },
      animation: {
        "text-slide": "text-slide-1 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-2": "text-slide-2 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "val-slide-h1": "val-slide-1 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "val-slide-h2": "val-slide-1-2 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "val-slide-h3": "val-slide-1-3 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "val-slide-v1": "val-slide-2 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "val-slide-v2": "val-slide-2-2 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "val-slide-v3": "val-slide-2-3 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "team-slide": "team-slide 20s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "team-slide": {
          "0%, 16%": {
            transform: "translateX(-0%)"
          },
          "20%, 36%": {
            transform: "translateX(-16.6%)"
          },
          "40%, 56%": {
            transform: "translateX(-33.2%)"
          },
          "60%, 76%": {
            transform: "translateX(-49.8%)"
          },
          "80%, 96%": {
            transform: "translateX(-66.4%)"
          },
          "100%": {
            transform: "translateX(-83%)"
          },
        },

        "val-slide-1": {
          "0% 11.1%": {
            transform: "translateX(-0%)"
          },
          "33.1%, 44.2%": {
            transform: "translateX(-27%)"
          },
          "66.2%, 77.3%": {
            transform: "translateX(-53.9%)"
          },
          "100%" : {
            transform: "translateX(-80.8%)"
          },
        },

        "val-slide-1-2": {
          "1.5% 13%": {
            transform: "translateX(-0%)"
          },
          "33.1%, 47%": {
            transform: "translateX(-27%)"
          },
          "66.2%, 80%": {
            transform: "translateX(-53.9%)"
          },
          "100%" : {
            transform: "translateX(-80.8%)"
          },
        },

        "val-slide-1-3": {
          "3% 15%": {
            transform: "translateX(-0%)"
          },
          "33.1%, 49%": {
            transform: "translateX(-27%)"
          },
          "66.2%, 82%": {
            transform: "translateX(-53.9%)"
          },
          "100%" : {
            transform: "translateX(-80.8%)"
          },
        },

        "val-slide-2": {
          "1% 11.1%": {
            transform: "translateY(-0%)"
          },
          "33.1%, 44.2%": {
            transform: "translateY(-27%)"
          },
          "66.2%, 77.3%": {
            transform: "translateY(-53.9%)"
          },
          "100%" : {
            transform: "translateY(-80.8%)"
          },
        },

        "val-slide-2-2": {
          "0% 12%": {
            transform: "translateY(-0%)"
          },
          "33.1%, 46%": {
            transform: "translateY(-27%)"
          },
          "66.2%, 79%": {
            transform: "translateY(-53.9%)"
          },
          "100%" : {
            transform: "translateY(-80.8%)"
          },
        },

        "val-slide-2-3": {
          "3% 14%": {
            transform: "translateY(-0%)"
          },
          "33.1%, 48%": {
            transform: "translateY(-27%)"
          },
          "66.2%, 82%": {
            transform: "translateY(-53.9%)"
          },
          "100%" : {
            transform: "translateY(-80.8%)"
          },
        },

        "text-slide-1": {
          "0%, 12.5%": {
            transform: "translateY(-0%)"
          },
          "25%, 37.5%": {
            transform: "translateY(-20%)"
          },
          "50%, 62.5%": {
            transform: "translateY(-40%)"
          },
          "75%, 87.5%": {
            transform: "translateY(-60%)"
          },
          "100%": {
            transform: "translateY(-80%)"
          },
        },

        "text-slide-2": {
          "0%, 14%": {
            transform: "translateY(-0%)"
          },
          "25%, 39%": {
            transform: "translateY(-20%)"
          },
          "50%, 64%": {
            transform: "translateY(-40%)"
          },
          "75%, 89%": {
            transform: "translateY(-60%)"
          },
          "100%": {
            transform: "translateY(-80%)"
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
export default config;
