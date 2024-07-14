import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";
import { Container } from "../container";
import { Box } from "../box";

const meta = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <Container>
        <Box
          asChild
          ml={{
            initial: "2",
            xl: "0",
          }}
        >
          <img
            src="../assets/logo.webp"
            alt="tekminewe.com"
            width={150}
            height={150}
          />
        </Box>
      </Container>
    ),
  },
};
