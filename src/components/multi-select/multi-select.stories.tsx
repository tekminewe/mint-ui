import { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./multi-select";
import { Select } from "../select";
import { useState } from "react";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "SvelteKit", value: "sveltest" },

  { label: "Node.js", value: "nodejs" },
  { label: "Express", value: "express" },
  { label: "Koa", value: "koa" },
  { label: "Deno", value: "deno" },

  { label: "MongoDB", value: "mongodb" },
  { label: "PostgreSQL", value: "postgresql" },
  { label: "MySQL", value: "mysql" },
  { label: "SQLite", value: "sqlite" },

  { label: "Docker", value: "docker" },
  { label: "Kubernetes", value: "kubernetes" },
  { label: "AWS", value: "aws" },
  { label: "GCP", value: "gcp" },

  { label: "Linux", value: "linux" },
  { label: "Windows", value: "windows" },
  { label: "MacOS", value: "macos" },
  { label: "Ubuntu", value: "ubuntu" },
];

const meta = {
  title: "Form / MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  render: () => {
    const [value, setValue] = useState<string[]>([
      "react",
      "vue",
      "angular",
      "svelte",
      "ember",
      "nextjs",
      "nuxtjs",
      "remix",
      "sveltest",
    ]);

    return (
      <div className="space-y-4">
        <MultiSelect label="Empty Select" />
        <MultiSelect
          options={options}
          value={value}
          onChange={setValue}
          label="Show All Selection"
        />
        <MultiSelect
          options={options}
          value={value}
          maxDisplay={3}
          onChange={setValue}
          label="Tags"
        />
        <Select label="Status" />
      </div>
    );
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
