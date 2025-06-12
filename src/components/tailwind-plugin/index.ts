import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

/** @type {import('./src/components/types').PluginCreator} */
export default () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { handler, config } = typography();

  return plugin(
    (args) => {
      const { addComponents, addBase, theme } = args;
      addBase({
        ":root": {
          "--mt-w-drawer": "350px",

          // === COLOR PALETTE ===

          // PRIMARY: Main brand color (blue-based)
          // Use for: Buttons, links, focus states, selections, and primary actions
          "--color-primary-50":
            "248 250 255" /* Lightest - backgrounds, hover states */,
          "--color-primary-100":
            "239 246 255" /* Very light - backgrounds, borders */,
          "--color-primary-200":
            "191 219 254" /* Light - hover states, subtle UI */,
          "--color-primary-300":
            "147 197 253" /* Medium light - borders, focus rings */,
          "--color-primary-400":
            "96 165 250" /* Medium - secondary buttons, icons */,
          "--color-primary-500":
            "59 130 246" /* Base - main brand color, primary buttons */,
          "--color-primary-600":
            "37 99 235" /* Medium dark - hover states, active states */,
          "--color-primary-700": "29 78 216" /* Dark - active states, text */,
          "--color-primary-800":
            "30 64 175" /* Very dark - text, concentrated UI */,
          "--color-primary-900":
            "30 58 138" /* Darkest - text against light backgrounds */,

          // NEUTRAL: Gray scale for UI framework
          // Use for: Text, backgrounds, dividers, cards, secondary UI elements
          "--color-neutral-50":
            "250 250 250" /* White/Off-white - page backgrounds, cards */,
          "--color-neutral-100":
            "245 245 245" /* Very light gray - subtle backgrounds, dividers */,
          "--color-neutral-200":
            "229 229 229" /* Light gray - borders, dividers, disabled states */,
          "--color-neutral-300":
            "212 212 212" /* Medium light gray - disabled elements, borders */,
          "--color-neutral-400":
            "163 163 163" /* Medium gray - disabled text, placeholders */,
          "--color-neutral-500":
            "115 115 115" /* Base gray - secondary text, icons */,
          "--color-neutral-600":
            "82 82 82" /* Medium dark gray - primary text, headings */,
          "--color-neutral-700":
            "64 64 64" /* Dark gray - heavy text, headings */,
          "--color-neutral-800":
            "38 38 38" /* Very dark gray - high contrast text */,
          "--color-neutral-900":
            "23 23 23" /* Nearly black - highest contrast text/backgrounds */,

          // SUCCESS: Indicates successful actions or validation
          // Use for: Confirmation messages, completed states, positive feedback
          "--color-success-50":
            "250 253 251" /* Very subtle success - barely visible tint */,
          "--color-success-100":
            "240 253 244" /* Light success - success backgrounds */,
          "--color-success-200":
            "187 247 208" /* Medium light success - hover states */,
          "--color-success-400":
            "74 222 128" /* Medium success - icons, secondary elements */,
          "--color-success-500":
            "34 197 94" /* Base success - success buttons, text, icons */,
          "--color-success-600":
            "22 163 74" /* Medium dark success - borders, outlines */,
          "--color-success-700":
            "21 128 61" /* Deep success - text on light backgrounds */,
          "--color-success-800":
            "22 101 52" /* Very dark success - dark mode backgrounds */,
          "--color-success-900":
            "14 63 28" /* Darkest success - highest contrast */,

          // ERROR: Indicates errors or destructive actions
          // Use for: Error messages, destructive actions, validation errors
          "--color-error-50":
            "254 252 252" /* Very subtle error - barely visible tint */,
          "--color-error-100":
            "254 242 242" /* Light error - error backgrounds, alerts */,
          "--color-error-200":
            "254 202 202" /* Medium light error - hover states */,
          "--color-error-400":
            "248 113 113" /* Medium error - icons, secondary elements */,
          "--color-error-500":
            "239 68 68" /* Base error - error messages, destructive buttons */,
          "--color-error-600":
            "220 38 38" /* Medium dark error - borders, outlines */,
          "--color-error-700":
            "185 28 28" /* Deep error - text on light backgrounds */,
          "--color-error-800":
            "153 27 27" /* Very dark error - dark mode backgrounds */,
          "--color-error-900":
            "127 29 29" /* Darkest error - highest contrast */,

          // WARNING: Indicates caution or attention needed
          // Use for: Warning messages, pending states, attention-requiring elements
          "--color-warning-50":
            "255 254 248" /* Very subtle warning - barely visible tint */,
          "--color-warning-100":
            "255 251 235" /* Light warning - warning backgrounds, alerts */,
          "--color-warning-200":
            "254 240 138" /* Medium light warning - hover states */,
          "--color-warning-400":
            "254 228 102" /* Medium warning - icons, secondary elements */,
          "--color-warning-500":
            "255 193 7" /* Base warning - warning indicators, icons (target color) */,
          "--color-warning-600":
            "212 159 6" /* Medium dark warning - borders, outlines */,
          "--color-warning-700":
            "163 123 5" /* Deep warning - text on light backgrounds */,
          "--color-warning-800":
            "130 98 4" /* Very dark warning - dark mode backgrounds */,
          "--color-warning-900":
            "97 74 3" /* Darkest warning - highest contrast */,

          // INFO: Indicates information or help
          // Use for: Informational messages, help text, neutral status indicators
          "--color-info-50":
            "250 252 254" /* Very subtle info - barely visible tint */,
          "--color-info-100":
            "240 249 255" /* Light info - informational backgrounds, alerts */,
          "--color-info-200":
            "186 230 253" /* Medium light info - hover states */,
          "--color-info-400":
            "34 211 238" /* Medium info - icons, secondary elements */,
          "--color-info-500":
            "6 182 212" /* Base info - informational messages, icons */,
          "--color-info-600":
            "8 145 178" /* Medium dark info - borders, outlines */,
          "--color-info-700":
            "14 116 144" /* Deep info - text on light backgrounds */,
          "--color-info-800":
            "22 78 99" /* Very dark info - dark mode backgrounds */,
          "--color-info-900": "12 74 110" /* Darkest info - highest contrast */,
        },

        // Dark mode color adjustments for better contrast and visibility
        ".dark": {
          // PRIMARY: Brighter in dark mode for better visibility
          "--color-primary-50":
            "30 58 138" /* Reversed from 900 for dark mode */,
          "--color-primary-100":
            "30 64 175" /* Reversed from 800 for dark mode */,
          "--color-primary-200":
            "29 78 216" /* Reversed from 700 for dark mode */,
          "--color-primary-300":
            "37 99 235" /* Reversed from 600 for dark mode */,
          "--color-primary-400":
            "59 130 246" /* Reversed from 500 for dark mode */,
          "--color-primary-500": "96 165 250" /* Brighter in dark mode */,
          "--color-primary-600":
            "147 197 253" /* Reversed from 300 for dark mode */,
          "--color-primary-700":
            "191 219 254" /* Reversed from 200 for dark mode */,
          "--color-primary-800":
            "219 234 254" /* Reversed from 100 for dark mode */,
          "--color-primary-900":
            "239 246 255" /* Reversed from 50 for dark mode */,

          // NEUTRAL: Inverted for dark mode
          "--color-neutral-50": "23 23 23" /* Dark background in dark mode */,
          "--color-neutral-100": "38 38 38" /* Dark surfaces in dark mode */,
          "--color-neutral-200": "64 64 64" /* Subtle borders in dark mode */,
          "--color-neutral-300": "82 82 82" /* Strong borders in dark mode */,
          "--color-neutral-400": "115 115 115" /* Disabled text in dark mode */,
          "--color-neutral-500":
            "163 163 163" /* Secondary text in dark mode */,
          "--color-neutral-600": "212 212 212" /* Primary text in dark mode */,
          "--color-neutral-700":
            "229 229 229" /* High contrast text in dark mode */,
          "--color-neutral-800":
            "245 245 245" /* Very high contrast text in dark mode */,
          "--color-neutral-900":
            "250 250 250" /* Maximum contrast text in dark mode */,

          // STATUS COLORS: Brighter in dark mode for better visibility
          "--color-success-50": "14 63 28" /* Dark mode success darkest */,
          "--color-success-100": "21 128 61" /* Dark mode success background */,
          "--color-success-200": "22 101 52" /* Dark mode success hover */,
          "--color-success-400": "187 247 208" /* Dark mode success medium */,
          "--color-success-500":
            "74 222 128" /* Brighter success for dark mode */,
          "--color-success-600": "134 239 172" /* Dark mode success borders */,
          "--color-success-700":
            "220 252 231" /* Success text for dark backgrounds */,
          "--color-success-800":
            "187 247 208" /* Light success for dark mode text */,
          "--color-success-900":
            "248 250 248" /* Very subtle success for dark mode */,

          "--color-error-50": "127 29 29" /* Dark mode error darkest */,
          "--color-error-100": "185 28 28" /* Dark mode error background */,
          "--color-error-200": "153 27 27" /* Dark mode error hover */,
          "--color-error-400": "254 202 202" /* Dark mode error medium */,
          "--color-error-500": "248 113 113" /* Brighter error for dark mode */,
          "--color-error-600": "252 165 165" /* Dark mode error borders */,
          "--color-error-700":
            "254 226 226" /* Error text for dark backgrounds */,
          "--color-error-800":
            "254 202 202" /* Light error for dark mode text */,
          "--color-error-900":
            "253 248 248" /* Very subtle error for dark mode */,

          "--color-warning-50": "97 74 3" /* Dark mode warning darkest */,
          "--color-warning-100": "163 123 5" /* Dark mode warning background */,
          "--color-warning-200": "130 98 4" /* Dark mode warning hover */,
          "--color-warning-400": "254 240 138" /* Dark mode warning medium */,
          "--color-warning-500":
            "254 228 102" /* Brighter warning for dark mode */,
          "--color-warning-600": "255 225 102" /* Dark mode warning borders */,
          "--color-warning-700":
            "254 249 195" /* Warning text for dark backgrounds */,
          "--color-warning-800":
            "254 240 138" /* Light warning for dark mode text */,
          "--color-warning-900":
            "255 254 240" /* Very subtle warning for dark mode */,

          "--color-info-50": "12 74 110" /* Dark mode info darkest */,
          "--color-info-100": "14 116 144" /* Dark mode info background */,
          "--color-info-200": "22 78 99" /* Dark mode info hover */,
          "--color-info-400": "186 230 253" /* Dark mode info medium */,
          "--color-info-500": "34 211 238" /* Brighter info for dark mode */,
          "--color-info-600": "103 232 249" /* Dark mode info borders */,
          "--color-info-700":
            "224 242 254" /* Info text for dark backgrounds */,
          "--color-info-800": "186 230 253" /* Light info for dark mode text */,
          "--color-info-900":
            "248 251 253" /* Very subtle info for dark mode */,
        },
        body: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("leading.5"),
        },
      });
      addComponents({
        ".radix-themes": {
          borderColor: "var(--accent-a6)",
        },
        ".shadow-0": {
          boxShadow: "none",
        },
        ".shadow-1": {
          boxShadow: "var(--shadow-1)",
        },
        ".shadow-2": {
          boxShadow: "var(--shadow-2)",
        },
        ".shadow-3": {
          boxShadow: "var(--shadow-3)",
        },
        ".shadow-4": {
          boxShadow: "var(--shadow-4)",
        },
        ".shadow-5": {
          boxShadow: "var(--shadow-5)",
        },
        ".shadow-6": {
          boxShadow: "var(--shadow-6)",
        },
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      handler(args);
    },
    {
      ...config,
      theme: {
        ...config.theme,
        colors: {
          ...config.colors,
          "panel-solid": "var(--color-panel-solid)",

          // Main color palettes with semantic naming
          primary: {
            50: "rgb(var(--color-primary-50) / <alpha-value>)", // Use for: Subtle backgrounds, hover states
            100: "rgb(var(--color-primary-100) / <alpha-value>)", // Use for: Light backgrounds, subtle UI
            200: "rgb(var(--color-primary-200) / <alpha-value>)", // Use for: Hover states, selected items
            300: "rgb(var(--color-primary-300) / <alpha-value>)", // Use for: Focus rings, borders
            400: "rgb(var(--color-primary-400) / <alpha-value>)", // Use for: Secondary buttons, icons
            500: "rgb(var(--color-primary-500) / <alpha-value>)", // Use for: Primary buttons, key UI elements
            600: "rgb(var(--color-primary-600) / <alpha-value>)", // Use for: Hover states, active elements
            700: "rgb(var(--color-primary-700) / <alpha-value>)", // Use for: Text, active states
            800: "rgb(var(--color-primary-800) / <alpha-value>)", // Use for: Text on light backgrounds
            900: "rgb(var(--color-primary-900) / <alpha-value>)", // Use for: High contrast text
            DEFAULT: "rgb(var(--color-primary-500) / <alpha-value>)",
          },

          neutral: {
            50: "rgb(var(--color-neutral-50) / <alpha-value>)", // Use for: Page backgrounds, cards
            100: "rgb(var(--color-neutral-100) / <alpha-value>)", // Use for: Card backgrounds, subtle UI
            200: "rgb(var(--color-neutral-200) / <alpha-value>)", // Use for: Borders, dividers, disabled elements
            300: "rgb(var(--color-neutral-300) / <alpha-value>)", // Use for: Strong borders, disabled elements
            400: "rgb(var(--color-neutral-400) / <alpha-value>)", // Use for: Placeholder text, disabled text
            500: "rgb(var(--color-neutral-500) / <alpha-value>)", // Use for: Secondary text, icons
            600: "rgb(var(--color-neutral-600) / <alpha-value>)", // Use for: Primary text, headings
            700: "rgb(var(--color-neutral-700) / <alpha-value>)", // Use for: Strong text, primary headings
            800: "rgb(var(--color-neutral-800) / <alpha-value>)", // Use for: High contrast text
            900: "rgb(var(--color-neutral-900) / <alpha-value>)", // Use for: Highest contrast text, dark backgrounds
            DEFAULT: "rgb(var(--color-neutral-600) / <alpha-value>)",
          },

          // Status colors for feedback and notifications
          success: {
            50: "rgb(var(--color-success-50) / <alpha-value>)", // Use for: Very light success backgrounds
            100: "rgb(var(--color-success-100) / <alpha-value>)", // Use for: Success backgrounds, subtle indicators
            200: "rgb(var(--color-success-200) / <alpha-value>)", // Use for: Success hover states
            400: "rgb(var(--color-success-400) / <alpha-value>)", // Use for: Success icons, secondary elements
            500: "rgb(var(--color-success-500) / <alpha-value>)", // Use for: Success messages, icons, buttons
            600: "rgb(var(--color-success-600) / <alpha-value>)", // Use for: Success borders, outlines
            700: "rgb(var(--color-success-700) / <alpha-value>)", // Use for: Text on light backgrounds
            800: "rgb(var(--color-success-800) / <alpha-value>)", // Use for: Dark mode backgrounds and text
            900: "rgb(var(--color-success-900) / <alpha-value>)", // Use for: Darkest success for high contrast
            DEFAULT: "rgb(var(--color-success-500) / <alpha-value>)",
          },

          error: {
            50: "rgb(var(--color-error-50) / <alpha-value>)", // Use for: Very light error backgrounds
            100: "rgb(var(--color-error-100) / <alpha-value>)", // Use for: Error backgrounds, subtle indicators
            200: "rgb(var(--color-error-200) / <alpha-value>)", // Use for: Error hover states
            400: "rgb(var(--color-error-400) / <alpha-value>)", // Use for: Error icons, secondary elements
            500: "rgb(var(--color-error-500) / <alpha-value>)", // Use for: Error messages, destructive buttons
            600: "rgb(var(--color-error-600) / <alpha-value>)", // Use for: Error borders, outlines
            700: "rgb(var(--color-error-700) / <alpha-value>)", // Use for: Text on light backgrounds
            800: "rgb(var(--color-error-800) / <alpha-value>)", // Use for: Dark mode backgrounds and text
            900: "rgb(var(--color-error-900) / <alpha-value>)", // Use for: Darkest error for high contrast
            DEFAULT: "rgb(var(--color-error-500) / <alpha-value>)",
          },

          warning: {
            50: "rgb(var(--color-warning-50) / <alpha-value>)", // Use for: Very light warning backgrounds
            100: "rgb(var(--color-warning-100) / <alpha-value>)", // Use for: Warning backgrounds, notices
            200: "rgb(var(--color-warning-200) / <alpha-value>)", // Use for: Warning hover states
            400: "rgb(var(--color-warning-400) / <alpha-value>)", // Use for: Warning icons, secondary elements
            500: "rgb(var(--color-warning-500) / <alpha-value>)", // Use for: Warning indicators, icons
            600: "rgb(var(--color-warning-600) / <alpha-value>)", // Use for: Warning borders, outlines
            700: "rgb(var(--color-warning-700) / <alpha-value>)", // Use for: Text on light backgrounds
            800: "rgb(var(--color-warning-800) / <alpha-value>)", // Use for: Dark mode backgrounds and text
            900: "rgb(var(--color-warning-900) / <alpha-value>)", // Use for: Darkest warning for high contrast
            DEFAULT: "rgb(var(--color-warning-500) / <alpha-value>)",
          },

          info: {
            50: "rgb(var(--color-info-50) / <alpha-value>)", // Use for: Very light info backgrounds
            100: "rgb(var(--color-info-100) / <alpha-value>)", // Use for: Info backgrounds, help notices
            200: "rgb(var(--color-info-200) / <alpha-value>)", // Use for: Info hover states
            400: "rgb(var(--color-info-400) / <alpha-value>)", // Use for: Info icons, secondary elements
            500: "rgb(var(--color-info-500) / <alpha-value>)", // Use for: Info messages, icons
            600: "rgb(var(--color-info-600) / <alpha-value>)", // Use for: Info borders, outlines
            700: "rgb(var(--color-info-700) / <alpha-value>)", // Use for: Text on light backgrounds
            800: "rgb(var(--color-info-800) / <alpha-value>)", // Use for: Dark mode backgrounds and text
            900: "rgb(var(--color-info-900) / <alpha-value>)", // Use for: Darkest info for high contrast
            DEFAULT: "rgb(var(--color-info-500) / <alpha-value>)",
          },

          /** Deprecated colors for backward compatibility */
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
          background: "var(--color-background)",
          overlay: "var(--color-overlay)",
        },
        /** End of deprecated */
        spacing: {
          ...config.spacing,
          0: "0",
          1: "calc(0.25rem * var(--scaling))",
          2: "calc(0.5rem * var(--scaling))",
          3: "calc(0.75rem * var(--scaling))",
          4: "calc(1rem * var(--scaling))",
          5: "calc(1.5rem * var(--scaling))",
          6: "calc(2rem * var(--scaling))",
          7: "calc(2.5rem * var(--scaling))",
          8: "calc(3rem * var(--scaling))",
          9: "calc(4rem * var(--scaling))",
          drawer: "var(--mt-w-drawer)",
        },
        screens: {
          xs: "520px",
          sm: "768px",
          md: "1024px",
          lg: "1280px",
          xl: "1640px",
        },
        boxShadow: {},
        borderRadius: {
          "1": "var(--radius-1)",
          "2": "var(--radius-2)",
          "3": "var(--radius-3)",
          "4": "var(--radius-4)",
          "5": "var(--radius-5)",
          "6": "var(--radius-6)",
          full: "var(--radius-full)",
          none: "0",
        },
      },
    }
  );
};
