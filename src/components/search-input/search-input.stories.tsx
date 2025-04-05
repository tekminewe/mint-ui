import { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./search-input";
import { SearchDialog } from "./search-dialog";
import { SearchRoot } from "./search-root";
import { SearchResultList } from "./search-result-list";
import { SearchResultListItem } from "./search-result-list-item";
import { useCallback, useEffect, useState } from "react";

const meta = {
  title: "Common / Search Input",
  component: SearchRoot,
  subcomponents: {
    SearchDialog: SearchDialog as React.ComponentType<unknown>,
    SearchInput: SearchInput as React.ComponentType<unknown>,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [result, setResult] = useState<string[]>([]);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    useEffect(() => {
      if (query) {
        setLoading(true);
        setTimeout(() => {
          setResult([...Array(50).keys()].map((i) => `${query} ${i}`));
          setLoading(false);
        }, 2000);
      }
    }, [query]);

    return (
      <div ref={callbackRef}>
        <SearchRoot>
          <SearchInput />
          <SearchDialog
            container={ref}
            searchInputPlaceholder="Search my items..."
            onQueryChange={(query) => {
              setQuery(query);
            }}
          >
            <SearchResultList isLoading={loading}>
              {result.map((item, index) => (
                <SearchResultListItem
                  key={item}
                  imageUrl={
                    index % 2 === 0
                      ? "/assets/placeholder.png"
                      : index % 3 === 0
                      ? "/assets/placeholder-portrait.png"
                      : "/assets/placeholder-landscape.png"
                  }
                  title={item}
                />
              ))}
            </SearchResultList>
          </SearchDialog>
        </SearchRoot>
      </div>
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

export const SearchListLoading: Story = {
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
            <SearchResultList isLoading>
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
