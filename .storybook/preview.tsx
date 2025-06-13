import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Theme } from "../src/components/theme";
import { allModes } from "./modes";
import "../src/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0c0a09" },
      ],
    },
    chromatic: {
      // Apply light and dark modes to all stories by default
      modes: {
        light: allModes.light,
        dark: allModes.dark,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story: any) => {
      return (
        <Theme accentColor="ruby">
          <Story />
        </Theme>
      );
    },
  ],
};

export default preview;
