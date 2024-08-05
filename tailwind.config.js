import plugin from "./src/components/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [plugin()],
};
