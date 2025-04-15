"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import ActionColumns from "./action-colomn";

export type Books = {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  imageUrl: string;
  publisher: string;
  numberOfPages: number;
  category: string;
};

export const columns: ColumnDef<Books>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer font-normal"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer font-normal"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "publicationDate",
    header: "Publication Date",
    cell: ({ cell }) => {
      const date = new Date(cell.getValue() as string);
      return (
        <div className="">
          {date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "publisher",
    header: "Publisher",
  },
  {
    accessorKey: "numberOfPages",
    header: "Number of Pages",
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer font-normal"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    meta: {
      variant: "select",
      label: "Category",
      options: [
        { label: "Fiction", value: "Fiction" },
        { label: "Non-fiction", value: "Non-fiction" },
        { label: "Science", value: "Science" },
        { label: "Biography", value: "Biography" },
        { label: "History", value: "History" },
        { label: "Children", value: "Children" },
        { label: "Fantasy", value: "Fantasy" },
        { label: "Mystery", value: "Mystery" },
      ],
    },
  },
  {
    accessorKey: "actions",
    id: "actions",
    cell: ActionColumns,
  },
];
