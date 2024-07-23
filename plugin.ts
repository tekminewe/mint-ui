import plugin from "tailwindcss/plugin";

/** @type {import('./src/components/types').PluginCreator} */
export default () => {
  return plugin(
    ({ addComponents }) => {
      addComponents({
        ".radix-themes": {
          borderColor: "var(--accent-a6)",
        },
      });
    },
    {
      theme: {
        colors: {
          accent: {
            1: "var(--accent-1)",
            2: "var(--accent-2)",
            3: "var(--accent-3)",
            4: "var(--accent-4)",
            5: "var(--accent-5)",
            6: "var(--accent-6)",
            7: "var(--accent-7)",
            8: "var(--accent-8)",
            9: "var(--accent-9)",
            10: "var(--accent-10)",
            11: "var(--accent-11)",
            12: "var(--accent-12)",
            a1: "var(--accent-a1)",
            a2: "var(--accent-a2)",
            a3: "var(--accent-a3)",
            a4: "var(--accent-a4)",
            a5: "var(--accent-a5)",
            a6: "var(--accent-a6)",
            a7: "var(--accent-a7)",
            a8: "var(--accent-a8)",
            a9: "var(--accent-a9)",
            a10: "var(--accent-a10)",
            a11: "var(--accent-a11)",
            a12: "var(--accent-a12)",
            surface: "var(--accent-surface)",
            indicator: "var(--accent-indicator)",
            track: "var(--accent-track)",
            contrast: "var(--accent-contrast)",
          },
          gray: {
            1: "var(--gray-1)",
            2: "var(--gray-2)",
            3: "var(--gray-3)",
            4: "var(--gray-4)",
            5: "var(--gray-5)",
            6: "var(--gray-6)",
            7: "var(--gray-7)",
            8: "var(--gray-8)",
            9: "var(--gray-9)",
            10: "var(--gray-10)",
            11: "var(--gray-11)",
            12: "var(--gray-12)",
            a1: "var(--gray-a1)",
            a2: "var(--gray-a2)",
            a3: "var(--gray-a3)",
            a4: "var(--gray-a4)",
            a5: "var(--gray-a5)",
            a6: "var(--gray-a6)",
            a7: "var(--gray-a7)",
            a8: "var(--gray-a8)",
            a9: "var(--gray-a9)",
            a10: "var(--gray-a10)",
            a11: "var(--gray-a11)",
            a12: "var(--gray-a12)",
            surface: "var(--gray-surface)",
            indicator: "var(--gray-indicator)",
            track: "var(--gray-track)",
            contrast: "var(--gray-contrast)",
          },
        },
      },
    }
  );
};