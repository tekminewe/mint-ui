import type { Preview } from "@storybook/react";
import { Theme } from "../src/components/theme";
import "../src/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Theme accentColor="ruby">
          <Story />
        </Theme>
      );
    },
  ],
};

export default preview;
