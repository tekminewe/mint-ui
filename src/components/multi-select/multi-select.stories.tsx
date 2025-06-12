import { Meta, StoryObj } from "@storybook/react-vite";
import { MultiSelect } from "./multi-select";
import { useState } from "react";

const defaultOptions = [
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
    const [options, setOptions] = useState(defaultOptions);
    const [searchValue, setSearchValue] = useState<string>("");
    const handleChange = (value: string[]) => {
      const hasNewValue = options.some(
        (option) => !value.includes(option.value)
      );
      if (hasNewValue) {
        setOptions([...options, { label: searchValue, value: searchValue }]);
      }

      setValue(value);
    };

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
          allowCreate
          onSearchValueChange={setSearchValue}
          onChange={handleChange}
          label="Tags"
        />
        <MultiSelect
          options={options}
          value={value}
          isSearching
          open
          onChange={setValue}
          label="Loading Multi Select"
        />
      </div>
    );
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
