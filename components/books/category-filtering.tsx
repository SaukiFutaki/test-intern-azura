"use client";

import { Column } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "./data-table-faceted";
import { getAllCategoriesUser } from "@/lib/actions/category";
import { useEffect, useState } from "react";
interface CategoryFilteringProps<TData> {
  column: Column<TData, unknown>;
}

interface CategoryOption {
  label: string;
  value: string;
}

export function CategoryFiltering<TData>({
  column,
}: CategoryFilteringProps<TData>) {
  const [options, setOptions] = useState<CategoryOption[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getAllCategoriesUser();
        const mapped = categories.map((cat: { id: string; name: string }) => ({
          label: cat.name,
          value: cat.id,
        }));
        setOptions(mapped);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <DataTableFacetedFilter
      column={column}
      title="Category"
      options={options}
      multiple={true}
    />
  );
}
