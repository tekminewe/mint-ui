import { Meta, StoryObj } from "@storybook/react-vite";
import { AdminNavbar } from "./admin-navbar";
import { Avatar } from "../avatar";
import { NavigationMenu } from "../navigation-menu";

const meta = {
  title: "Admin / Navbar",
  component: AdminNavbar,
  tags: ["autodocs"],
  render: () => {
    return (
      <AdminNavbar>
        <NavigationMenu>
          <Avatar
            src="../assets/avatar.webp"
            fallback="../assets/avatar.webp"
            alt="John Doe"
          />
        </NavigationMenu>
      </AdminNavbar>
    );
  },
} satisfies Meta<typeof AdminNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
