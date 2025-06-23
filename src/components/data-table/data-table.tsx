'use client';

import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { MouseEventHandler, ReactNode, useMemo } from 'react';
import { Pagination } from './pagination';
import { Filter, IDataTableFilterState, IDataTableFilterProps } from './filter';
import { Title, Text } from '../typography';
import { Card } from '../card';
import { Button } from '../button';
import { utils, writeFile } from 'xlsx';
import { LuDownload } from 'react-icons/lu';
import { cn } from '../utils';

export type IDataTableColumn<T> =
  | IDataTableColumnWithDataKey<T>
  | IDataTableColumnWithoutDataKey<T>;

export interface IDataTableColumnWithDataKey<T> {
  dataKey: keyof T;
  label: string;
  formatValueForExport?: (options: { value: T[keyof T] }) => string | number;
  renderCell?: (options: { value: T[keyof T]; rowIndex: number }) => ReactNode;
}

export interface IDataTableColumnWithoutDataKey<T> {
  dataKey: undefined;
  formatValueForExport?: (options: { value: T }) => string | number;
  label: string;
  renderCell?: (options: { value: T; rowIndex: number }) => ReactNode;
}

export interface IDataTableProps<T, F> {
  columns: IDataTableColumn<T>[];
  data: T[];
  variant?: 'ghost' | 'surface';
  page?: number;
  totalCount?: number;
  pageSize?: number;
  filters?: IDataTableFilterProps<F>;
  onPaginationChange?: (pagination: { page: number }) => void;
  onFilterSubmit?: (data: F) => void;
  emptyText?: string;
  emptyTitle?: string;
  allowExport?: boolean;
  exportDataRequest?: () => Promise<T[]> | T[];
  exportFileName?: string;
  isLoading?: boolean;
  showAddButton?: boolean;
  addButtonLabel?: string;
  onAddButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

export const DataTable = <T extends object, F extends IDataTableFilterState>({
  columns,
  data,
  variant = 'ghost',
  page = 1,
  pageSize = 25,
  onPaginationChange = () => {
    // Do nothinng
  },
  totalCount = 0,
  filters,
  onFilterSubmit,
  emptyText = 'There are no data found at the moment',
  emptyTitle = 'No data',
  allowExport = false,
  exportDataRequest,
  exportFileName = 'Data',
  isLoading,
  showAddButton = false,
  addButtonLabel = 'Add',
  onAddButtonClick,
}: IDataTableProps<T, F>) => {
  const colummDefs = useMemo(() => {
    const columnHelper = createColumnHelper<T>();

    return columns.map((c) => {
      return columnHelper.accessor(
        (row: T) => (c.dataKey ? row[c.dataKey] : row),
        {
          id: String(c.dataKey ?? c.label),
          header: () => <span>{c.label}</span>,

          cell: (info) => {
            return c.renderCell
              ? c.renderCell({
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  value: info.getValue(),
                  rowIndex: info.row.index,
                })
              : info.renderValue();
          },
        },
      );
    });
  }, [columns]);

  const table = useReactTable<T>({
    data,
    columns: colummDefs,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    state: {
      pagination: {
        pageSize,
        pageIndex: page - 1,
      },
    },
    onPaginationChange: (updater) => {
      const oldState = {
        pageSize,
        pageIndex: page - 1,
      };
      if (typeof updater === 'function') {
        const newState = updater(oldState);
        onPaginationChange({
          page: newState.pageIndex + 1,
        });
      } else {
        onPaginationChange({
          page: oldState.pageIndex + 1,
        });
      }
    },
    rowCount: totalCount,
  });

  const handleExportClick = async () => {
    const data = await exportDataRequest?.();
    if (!data) {
      return;
    }
    const exportData = data.map((d) => {
      return columns.reduce((data, column) => {
        if (column.dataKey) {
          const value = d[column.dataKey];
          data[column.label] = column.formatValueForExport
            ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              column.formatValueForExport({ value })
            : `${value}`;
        } else {
          data[column.label] = column.formatValueForExport
            ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              column.formatValueForExport({ value: d })
            : '';
        }
        return data;
      }, {} as Record<string, string | number>);
    });

    const worksheet = utils.json_to_sheet(exportData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Data');
    writeFile(workbook, `${exportFileName}.xlsx`, { compression: true });
  };

  const hasData = table.getRowModel().rows.length > 0;
  const showActions = filters || allowExport || showAddButton;

  return (
    <div>
      {showActions && (
        <div className="flex items-center justify-end gap-6 mr-4 mb-4">
          {filters && <Filter<F> onSubmit={onFilterSubmit} {...filters} />}
          {allowExport && (
            <Button variant="ghost" onClick={handleExportClick}>
              <LuDownload />
              Export
            </Button>
          )}
          {showAddButton && (
            <Button onClick={onAddButtonClick}>{addButtonLabel}</Button>
          )}
        </div>
      )}
      <Card>
        <div className="overflow-x-auto">
          <table
            className={cn(
              'w-full border-collapse',
              variant === 'ghost' ? 'bg-transparent' : 'bg-white',
            )}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <tr
                    key={headerGroup.id}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          key={header.id}
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            {isLoading && (
              <tbody>
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-6 text-center"
                  >
                    <div className="space-y-4">
                      <div className="animate-pulse w-full h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="animate-pulse w-full h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="animate-pulse w-full h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
            {!isLoading && hasData && (
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {table.getRowModel().rows.map((row) => {
                  return (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      {row.getVisibleCells().map((cell, i) => {
                        const isFirstCell = i === 0;
                        return (
                          <td
                            key={cell.id}
                            className={cn(
                              'px-4 py-4 whitespace-nowrap text-sm',
                              isFirstCell
                                ? 'font-medium text-gray-900 dark:text-gray-100'
                                : 'text-gray-500 dark:text-gray-400',
                            )}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
        {!isLoading && hasData && <Pagination table={table} />}
        {!isLoading && !hasData && (
          <div className="flex flex-col items-center py-8">
            <img
              alt="No data"
              src="/assets/ui/404.png"
              width="300"
              height="300"
            />
            <Title className="mt-4 mb-2">{emptyTitle}</Title>
            <Text>{emptyText}</Text>
          </div>
        )}
      </Card>
    </div>
  );
};
