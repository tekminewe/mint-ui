import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '../button';
import { Flex } from '../flex';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function Pagination<TData>({ table }: DataTablePaginationProps<TData>) {
  const currentPageIndex = table.getState().pagination.pageIndex;
  return (
    <Flex align="center" gap="1" mt="4">
      <Button
        variant="outline"
        size="2"
        disabled={!table.getCanPreviousPage()}
        style={{
          boxShadow: 'none',
          width: '2rem',
          height: '2rem',
          padding: 0,
          cursor: table.getCanPreviousPage() ? 'pointer' : 'not-allowed',
        }}
        onClick={() => table.setPageIndex(currentPageIndex - 1)}
      >
        <ChevronLeftIcon width={16} height={20} />
      </Button>
      {table.getPageOptions().map((pageIndex) => {
        return (
          <Button
            key={pageIndex}
            size="2"
            variant={currentPageIndex === pageIndex ? 'solid' : 'outline'}
            style={{
              boxShadow: 'none',
              cursor: 'pointer',
            }}
            onClick={() => table.setPageIndex(pageIndex)}
          >
            {pageIndex + 1}
          </Button>
        );
      })}
      <Button
        size="2"
        variant="outline"
        style={{
          boxShadow: 'none',
          width: '2rem',
          height: '2rem',
          padding: 0,
          cursor: table.getCanNextPage() ? 'pointer' : 'not-allowed',
        }}
        disabled={!table.getCanNextPage()}
        onClick={() => table.setPageIndex(currentPageIndex + 1)}
      >
        <ChevronRightIcon width={16} height={16} />
      </Button>
    </Flex>
  );
}
