'use client';

import { Column } from '@tanstack/react-table';
import { DataTableFacetedFilter } from './data-table-faceted';

interface CategoryFilteringProps<TData> {
  column: Column<TData, unknown>;
}

export function CategoryFiltering<TData>({ column }: CategoryFilteringProps<TData>) {
  const categoryOptions = [
    { label: 'Fiction', value: 'Fiction' },
    { label: 'Non-fiction', value: 'Non-fiction' },
    { label: 'Science', value: 'Science' },
    { label: 'Biography', value: 'Biography' },
    { label: 'History', value: 'History' },
    { label: 'Children', value: 'Children' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Mystery', value: 'Mystery' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'Self-help', value: 'Self-help' },
    { label: 'Cookbook', value: 'Cookbook' },
    { label: 'Graphic Novel', value: 'Graphic Novel' },
    { label: 'Poetry', value: 'Poetry' },
    { label: 'Travel', value: 'Travel' },
    { label: 'Health & Wellness', value: 'Health & Wellness' },
    { label: 'Business', value: 'Business' },
  ];

  return (
    <DataTableFacetedFilter
      column={column}
      title="Category"
      options={categoryOptions}
      multiple={false}
    />
  );
}
