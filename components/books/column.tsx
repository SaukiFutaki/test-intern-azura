"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import ActionColumns from "./action-colomn";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type Books = {
  id: string;
  title: string;
  author: string;
  publicationDate: Date;
  imageUrl: string;
  publisher: string;
  numberOfPages: number;
  categoryId: string;
  category: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
  };
};

export const columns: ColumnDef<Books>[] = [
  {
    accessorKey: "id",
    header: "No",
    cell: ({ cell }) => {
      const index = cell.row.index + 1;
      return <div className="">{index}</div>;
    },
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
    cell: ({ cell }) => {
      const title = cell.getValue() as string;
      const imageUrl = cell.row.original.imageUrl as string;
      return (
        <div className="flex items-center ">
          <Avatar>
            <AvatarImage
              src={imageUrl || "https://github.com/shadcn.png"}
              alt={title}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="ml-2">{title}</span>
        </div>
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
    filterFn: (row, id, filterValue) => {
      if (!filterValue || filterValue === "all") return true;

      const date = new Date(row.getValue(id) as string);
      const year = date.getFullYear().toString();

      return year === filterValue;
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
    cell: ({ cell }) => {
      const category = cell.getValue() as Books["category"];

      return <div className="">{category.name}</div>;
    },
    meta: {
      variant: "select",
      label: "Category",
    },
    filterFn: (row, id, filterValue) => {
    
      if (!filterValue || filterValue.length === 0) return true;

      const category = row.getValue(id) as Books["category"];
     
      return (filterValue as string[]).includes(category.id);
    },
  },
  {
    accessorKey: "actions",
    id: "actions",
    cell: ActionColumns,
  },
];
