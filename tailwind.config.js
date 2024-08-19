import plugin from "./src/components/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{ts,tsx}"],
  },
  theme: {
    extend: {},
  },
  plugins: [plugin()],
};
