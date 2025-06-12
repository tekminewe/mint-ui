import { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./select";
import { useState } from "react";

const defaultOptions = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "Svelte",
    value: "svelte",
  },
  {
    label: "Ember",
    value: "ember",
  },
  {
    label: "Nextjs",
    value: "nextjs",
  },
  {
    label: "Nuxtjs",
    value: "nuxtjs",
  },
  {
    label: "Remix",
    value: "remix",
  },
  {
    label: "Sveltest",
    value: "sveltest",
  },
];

const meta = {
  title: "Form / Select",
  component: Select,
  tags: ["autodocs"],
  render: () => {
    const [options] = useState(defaultOptions);

    return (
      <div className="space-y-4">
        <Select options={options} />
        <Select label="Optional Select" options={options} />
        <Select
          label="Required Select"
          required
          value="react"
          options={options}
        />
        <Select
          label="Required Select (Not Clearable)"
          required
          value="react"
          clearable={false}
          options={options}
        />
        <Select
          label="Select"
          placeholder="This is a custom placeholder"
          error="This select has error"
          description="This is a description"
          options={options}
        />
      </div>
    );
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
