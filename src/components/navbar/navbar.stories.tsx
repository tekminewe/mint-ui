import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";
import { Container } from "../container";
import { Box } from "../box";
import { Flex } from "../flex";

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
        <Flex align="center">
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
          <Flex className="flex-1" justify="end" gap="4">
            <Navbar.Item href="/about">Home</Navbar.Item>
            <Navbar.Item href="/about">Blog</Navbar.Item>
            <Navbar.Item href="/about">About</Navbar.Item>
          </Flex>
        </Flex>
      </Container>
    ),
  },
};
