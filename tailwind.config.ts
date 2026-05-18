import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'canvas-white': '#ffffff',
        'off-white': '#faf9f6',
        'surface-cream': '#f1eee9',
        'border-sand': '#dedbd6',
        'subtle-gray': '#e7e3db',
        'canvas-beige': '#d3cec6',
        'headline-black': '#0d0d0d',
        'body-black': '#0f0f0f',
        'subtle-graphite': '#242424',
        'mid-gray': '#383838',
        'footer-gray': '#444444',
        'icon-gray': '#4d4d4d',
        'button-text-gray': '#555555',
        'placeholder-gray': '#686868',
        'inactive-gray': '#8a8a8a',
        'accent-violet': '#0007cb',
        'accent-orange': '#111111',
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['var(--font-geist)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
      },
      borderRadius: {
        'none': '0',
        'DEFAULT': '12px',
        'sm': '12px',
        'md': '12px',
        'lg': '12px',
        'xl': '12px',
        '2xl': '12px',
        '3xl': '12px',
        'full': '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      zIndex: {
        'decorator': '10',
        'overlay': '20',
        'header': '30',
        'modal-backdrop': '40',
        'modal': '50',
        'modal-content': '60',
      },
      maxWidth: {
        'enterprise': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
