import { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable, IDataTableColumn } from "./data-table";
import { Button } from "../button";

type BlogData = {
  id: number;
  title: string;
  view: number;
  createdAt: string;
};

const meta = {
  title: "Common / DataTable",
  component: DataTable,
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns: IDataTableColumn<BlogData>[] = [
  {
    label: "#",
    dataKey: undefined,
    renderCell: ({ rowIndex }) => {
      return rowIndex + 1;
    },
  },
  {
    label: "Title",
    dataKey: "title",
  },
  {
    label: "Views",
    dataKey: "view",
  },
  {
    label: "Created At",
    dataKey: "createdAt",
    formatValueForExport: ({ value }) => {
      return new Date(value).toLocaleString();
    },
    renderCell: ({ value }) => {
      return new Date(value).toLocaleString();
    },
  },
  {
    label: "Actions",
    dataKey: undefined,
    renderCell: () => {
      return <Button>Edit</Button>;
    },
  },
];

export const Default: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    columns,
    data: [
      {
        id: 1,
        title: "Hello World",
        view: 100,
        createdAt: "2021-10-01T12:00:00",
      },
      {
        id: 2,
        title: "Hello World 2",
        view: 200,
        createdAt: "2021-10-02T12:00:00",
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    data: [],
    isLoading: true,
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    data: [],
    showAddButton: true,
    addButtonLabel: "Add Blog",
    allowExport: true,
    filters: {
      columns: [
        {
          label: "Title",
          key: "title",
          type: "select",
          options: [
            { label: "Hello World", value: "Hello World" },
            { label: "Hello World 2", value: "Hello World 2" },
          ],
        },
        {
          label: "Created At",
          key: "createdAt",
          type: "date",
        },
      ],
    },
  },
};
