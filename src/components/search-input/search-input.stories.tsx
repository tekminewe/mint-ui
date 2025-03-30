import { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./search-input";
import { SearchDialog } from "./search-dialog";
import { SearchRoot } from "./search-input-root";
import { SearchResultList } from "./search-result-list";
import { SearchResultListItem } from "./search-result-list-item";
import { useCallback, useState } from "react";

const meta = {
  title: "Common / Search Input",
  component: SearchRoot,
  subcomponents: { SearchDialog, SearchInput },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: () => {
    return (
      <SearchRoot open>
        <SearchInput />
      </SearchRoot>
    );
  },
};

export const SearchList: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);
    return (
      <div ref={callbackRef}>
        <SearchRoot open>
          <SearchDialog container={ref}>
            <SearchResultList>
              <SearchResultListItem
                title="Search result 1"
                subtitle="Description of the item"
                imageUrl="/assets/placeholder.png"
              />
              <SearchResultListItem
                title="Search result 2"
                subtitle={
                  <div>
                    This is a <strong>good</strong> description
                  </div>
                }
              />
              <SearchResultListItem title="Search result 3" />
            </SearchResultList>
          </SearchDialog>
        </SearchRoot>
      </div>
    );
  },
};
