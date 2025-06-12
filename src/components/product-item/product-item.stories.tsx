import { Meta, StoryObj } from "@storybook/react-vite";
import { ProductItem } from "./product-item";

const meta = {
  title: "ECommerce / Product Item",
  component: ProductItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Product Title",
    caption: "Product Caption",
    imageUrl: "https://via.placeholder.com/375x140",
    price: "£100.00",
  },
};
